import{S as gs,i as ws,s as Ps,k as p,q as u,a as c,l as t,m as l,r,h as a,c as o,n as H,b as e,E as i,B as Z}from"./index-0726a72e.js";function Ss(ls){let k,F,I,g,G,L,f,cs=`<code class="language-css">&lt;script>
    let clicks = 0<span class="token punctuation">;</span>
    let multiplier = 1<span class="token punctuation">;</span>
    let workers = []<span class="token punctuation">;</span>
    let worker_multiplier = 1<span class="token punctuation">;</span></code>`,M,w,N,R,m,os='<code class="language-css">    <span class="token selector">&lt;span>Workers x</span> <span class="token punctuation">&#123;</span>workers.length<span class="token punctuation">&#125;</span>&lt;/span></code>',b,P,O,A,S,Q,K,d,us='<code class="language-css">    <span class="token selector">&lt;span></span><span class="token punctuation">&#123;</span>upgrade.cost * worker_multiplier<span class="token punctuation">&#125;</span>&lt;/span></code>',q,T,U,D,v,rs='<code class="language-css">    <span class="token selector">&lt;span></span><span class="token punctuation">&#123;</span>upgrade.cost<span class="token punctuation">&#125;</span>&lt;/span></code>',J,j,V,B,y,X,C,_,is=`<code class="language-css">    <span class="token punctuation">&#123;</span>#each upgrades as upgrade<span class="token punctuation">&#125;</span>
            <span class="token selector">&lt;button
            class="upgrade"
            on:click=</span><span class="token punctuation">&#123;</span><span class="token selector">() =></span> <span class="token punctuation">&#123;</span>
                <span class="token selector">if (clicks >= upgrade.cost)</span> <span class="token punctuation">&#123;</span>
                <span class="token selector">if (upgrade.multiplier)</span> <span class="token punctuation">&#123;</span>
                    multiplier = multiplier * upgrade.multiplier<span class="token punctuation">;</span>
                    clicks -= upgrade.cost<span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span>
                <span class="token selector">if (upgrade.worker &amp;&amp; clicks)</span> <span class="token punctuation">&#123;</span>
                    worker_multiplier = worker_multiplier * 2<span class="token punctuation">;</span>
                    workers = [upgrade.name<span class="token punctuation">,</span> ...workers]<span class="token punctuation">;</span>
                    <span class="token comment">/* start "clicking" every 1000 ms */</span>
                    <span class="token function">setInterval</span><span class="token punctuation">(</span>increment<span class="token punctuation">,</span> 1000<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    clicks -= upgrade.cost<span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span></code>`,W,x,Y,z,E,ks=`<code class="language-css">    <span class="token punctuation">&#123;</span>#each upgrades as upgrade<span class="token punctuation">,</span>i<span class="token punctuation">&#125;</span>
            <span class="token selector">&lt;button
            class="upgrade"
            on:click=</span><span class="token punctuation">&#123;</span><span class="token selector">() =></span> <span class="token punctuation">&#123;</span>
                <span class="token selector">if (clicks >= upgrade.cost)</span> <span class="token punctuation">&#123;</span>
                <span class="token selector">if (upgrade.multiplier)</span> <span class="token punctuation">&#123;</span>
                    multiplier = multiplier * upgrade.multiplier<span class="token punctuation">;</span>
                    clicks -= upgrade.cost<span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span>
                <span class="token selector">if (upgrade.worker &amp;&amp; clicks)</span> <span class="token punctuation">&#123;</span>
                    worker_multiplier = worker_multiplier * 2<span class="token punctuation">;</span>
                    workers = [upgrade.name<span class="token punctuation">,</span> ...workers]<span class="token punctuation">;</span>
                    <span class="token comment">/* start "clicking" every 1000 ms */</span>
                    <span class="token function">setInterval</span><span class="token punctuation">(</span>increment<span class="token punctuation">,</span> 1000<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    clicks -= upgrade.cost<span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span>
                upgrades[i].cost *= 1.5</code>`;return{c(){k=p("p"),F=u("Det jag ändrade idag i page.svelte:"),I=c(),g=p("p"),G=u("*Antalet “clicks” som ges vid start från 100 till 0. Se kod nedan."),L=c(),f=p("pre"),M=c(),w=p("p"),N=u("*Antalet “workers” visas på sidan. Se kod nedan."),R=c(),m=p("pre"),b=c(),P=p("p"),O=u("*Kostnaden på uppgraderingarna så att siffrorna som stod på knapparna stämmer överens med den faktiska Kostnaden. Se koden nedan."),A=c(),S=p("p"),Q=u("Innan:"),K=c(),d=p("pre"),q=c(),T=p("p"),U=u("Efter:"),D=c(),v=p("pre"),J=c(),j=p("p"),V=u("*Jag la till variabeln “i” som ökar med 1 för varje upgradering i “upgrades”, samt att kostnaden för uppgraderingen som gås igenom just då multipliceras med 1.5. Se kod nedan."),B=c(),y=p("p"),X=u("Innan:"),C=c(),_=p("pre"),W=c(),x=p("p"),Y=u("Efter:"),z=c(),E=p("pre"),this.h()},l(s){k=t(s,"P",{});var n=l(k);F=r(n,"Det jag ändrade idag i page.svelte:"),n.forEach(a),I=o(s),g=t(s,"P",{});var $=l(g);G=r($,"*Antalet “clicks” som ges vid start från 100 till 0. Se kod nedan."),$.forEach(a),L=o(s),f=t(s,"PRE",{class:!0});var fs=l(f);fs.forEach(a),M=o(s),w=t(s,"P",{});var h=l(w);N=r(h,"*Antalet “workers” visas på sidan. Se kod nedan."),h.forEach(a),R=o(s),m=t(s,"PRE",{class:!0});var ms=l(m);ms.forEach(a),b=o(s),P=t(s,"P",{});var ss=l(P);O=r(ss,"*Kostnaden på uppgraderingarna så att siffrorna som stod på knapparna stämmer överens med den faktiska Kostnaden. Se koden nedan."),ss.forEach(a),A=o(s),S=t(s,"P",{});var as=l(S);Q=r(as,"Innan:"),as.forEach(a),K=o(s),d=t(s,"PRE",{class:!0});var ds=l(d);ds.forEach(a),q=o(s),T=t(s,"P",{});var ns=l(T);U=r(ns,"Efter:"),ns.forEach(a),D=o(s),v=t(s,"PRE",{class:!0});var vs=l(v);vs.forEach(a),J=o(s),j=t(s,"P",{});var es=l(j);V=r(es,"*Jag la till variabeln “i” som ökar med 1 för varje upgradering i “upgrades”, samt att kostnaden för uppgraderingen som gås igenom just då multipliceras med 1.5. Se kod nedan."),es.forEach(a),B=o(s),y=t(s,"P",{});var ps=l(y);X=r(ps,"Innan:"),ps.forEach(a),C=o(s),_=t(s,"PRE",{class:!0});var _s=l(_);_s.forEach(a),W=o(s),x=t(s,"P",{});var ts=l(x);Y=r(ts,"Efter:"),ts.forEach(a),z=o(s),E=t(s,"PRE",{class:!0});var Es=l(E);Es.forEach(a),this.h()},h(){H(f,"class","language-css"),H(m,"class","language-css"),H(d,"class","language-css"),H(v,"class","language-css"),H(_,"class","language-css"),H(E,"class","language-css")},m(s,n){e(s,k,n),i(k,F),e(s,I,n),e(s,g,n),i(g,G),e(s,L,n),e(s,f,n),f.innerHTML=cs,e(s,M,n),e(s,w,n),i(w,N),e(s,R,n),e(s,m,n),m.innerHTML=os,e(s,b,n),e(s,P,n),i(P,O),e(s,A,n),e(s,S,n),i(S,Q),e(s,K,n),e(s,d,n),d.innerHTML=us,e(s,q,n),e(s,T,n),i(T,U),e(s,D,n),e(s,v,n),v.innerHTML=rs,e(s,J,n),e(s,j,n),i(j,V),e(s,B,n),e(s,y,n),i(y,X),e(s,C,n),e(s,_,n),_.innerHTML=is,e(s,W,n),e(s,x,n),i(x,Y),e(s,z,n),e(s,E,n),E.innerHTML=ks},p:Z,i:Z,o:Z,d(s){s&&a(k),s&&a(I),s&&a(g),s&&a(L),s&&a(f),s&&a(M),s&&a(w),s&&a(R),s&&a(m),s&&a(b),s&&a(P),s&&a(A),s&&a(S),s&&a(K),s&&a(d),s&&a(q),s&&a(T),s&&a(D),s&&a(v),s&&a(J),s&&a(j),s&&a(B),s&&a(y),s&&a(C),s&&a(_),s&&a(W),s&&a(x),s&&a(z),s&&a(E)}}}const js={title:"Thursday, january 12th",date:"2023-01-12"};class ys extends gs{constructor(k){super(),ws(this,k,null,Ss,Ps,{})}}export{ys as default,js as metadata};