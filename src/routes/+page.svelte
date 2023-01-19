<script>
  let clicks = 0;
  let multiplier = 1;
  let workers = [];
  let intervalId = []
  let worker_multiplier = 1;

  let upgrades = [
    { cost: 15, name: "Multiplier", multiplier: 1.5, worker: 0 },
    { cost: 5, name: "Worker", multiplier: 0, worker: 1 },
  ];

  function increment() {
    clicks = clicks + multiplier;
    console.log("click" + clicks);
  }
</script>

<button class="reset"   on:click={()=> {
  clicks = 0;
  multiplier = 1;
  workers =[];
  worker_multiplier= 1;
  console.log("reset")
  intervalId.forEach(id => {
    clearInterval(id)

  });
  upgrades = [
    {cost: 15, name: "Multiplier", multiplier: 1.5, worker: 0},
    {cost: 5 , name: "Worker", multiplier: 0, worker: 1},
  ];
}}>
  Reset  
  </button>



<article>
  <header>
    <div class="grid">
      {#each upgrades as upgrade,i}
        <button
          class="upgrade"
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier = Math.round(multiplier * upgrade.multiplier);
                clicks -= upgrade.cost;
              }
              if (upgrade.worker && clicks) {
                worker_multiplier = worker_multiplier * 2;
                workers = [upgrade.name, ...workers];
                /* start "clicking" every 1000 ms */
                intervalId.push(setInterval(increment, 1000));
                clicks -= upgrade.cost;
              }
              upgrades[i].cost = Math.round(upgrades[i].cost*1.5)
              
            } else {
              alert("Click some more first!");
            }
          }}
        >
          <span>{upgrade.name}</span>
          <span>{upgrade.cost}</span>
        </button>
      {/each}
    </div>
  </header>
  <div class="game">
    <button on:click={increment} class="clicker">
      <span class="clicks">{clicks}</span>
      <span class="pointtext">PPC: {multiplier}</span>
    </button>
  </div>
  <footer>
    <div class="panelright">
      <div>
        <p>Workers x {workers.length}</p>
        <hr />
        <div class="shop">
          {#each workers as worker}
            <div class="worker">{worker}</div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>

<style>

  p {
    color: black;
		font-family: 'Times New Roman';
  }

  .reset{
    border: 4px solid rgb(4, 3, 67);
    background-color: rgb(4, 3, 67);
    background-size: cover;
    background-image: url("https://th.bing.com/th/id/OIP.jkKyrzJFUi853uZuy06uVwHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7");
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .reset:hover {
    border: 5px solid rgb(11, 8, 139);
    color: rgb(199, 198, 246);
  }

  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  .upgrade {
    width: 100%;
    height: 100%;
    border: 4px solid rgb(4, 3, 67);
    background-color: rgb(59, 183, 28);
    background-size: cover;
    background-image: url("https://th.bing.com/th/id/OIP.jkKyrzJFUi853uZuy06uVwHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7");
    place-items: center;
    place-content: center;
    display: flex;
    flex-direction: column;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .upgrade:hover {
    border: 6px solid rgb(11, 8, 139);
    color: rgb(199, 198, 246);
  }

  .worker {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: rgb(4, 3, 67);
    place-items: center;
    place-content: center;
    display: flex;
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .worker:hover {
    border: 2px solid rgb(9, 7, 119);
    color:  rgb(199, 198, 246);
  }
  
  .game {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }

  .clicker {
    clip-path: circle();
    display: flex;
    height: 100%;
    width: 100%;
    border: 11px solid rgb(4, 3, 67);
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-image: url("https://www.thereciperebel.com/wp-content/uploads/2015/09/chocolate-chip-cookies-TRR-1200-6-of-11.jpg");
    background-size: cover;
    background-position: 10px -400px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .clicker:hover {
    border: 14px solid rgb(11, 8, 139);
    color:  rgb(199, 198, 246);
  }

  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .clicks {
    font-size: 100px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .pointtext {
    color: rgb(4, 3, 67);
    font-size: 25px;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .pointtext:hover {
    color: rgb(19, 16, 155);
  }
</style>
