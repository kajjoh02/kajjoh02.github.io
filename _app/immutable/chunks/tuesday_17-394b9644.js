import{S as En,i as bn,s as yn,k as t,q as u,a as o,l as e,m as l,r,h as n,c,n as k,b as p,E as i,B as Is}from"./index-0726a72e.js";function Pn(As){let f,ds,O,x,ms,U,T,vs,V,d,Gs='<code class="language-css">upgrades[i].cost*=1.5</code>',W,H,_s,Z,m,Ns='<code class="language-css">upgrades[i].cost = Math.<span class="token function">round</span><span class="token punctuation">(</span>upgrades[i].cost*1.5<span class="token punctuation">)</span></code>',A,R,Es,G,v,Qs=`<code class="language-css"><span class="token selector">.clicker:hover</span> <span class="token punctuation">&#123;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 12px solid <span class="token function">rgb</span><span class="token punctuation">(</span>11<span class="token punctuation">,</span> 8<span class="token punctuation">,</span> 139<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token function">rgb</span><span class="token punctuation">(</span>199<span class="token punctuation">,</span> 198<span class="token punctuation">,</span> 246<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span></code>`,N,I,bs,Q,_,Xs=`<code class="language-css"><span class="token selector">.worker:hover</span> <span class="token punctuation">&#123;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid <span class="token function">rgb</span><span class="token punctuation">(</span>9<span class="token punctuation">,</span> 7<span class="token punctuation">,</span> 119<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token function">rgb</span><span class="token punctuation">(</span>199<span class="token punctuation">,</span> 198<span class="token punctuation">,</span> 246<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span></code>`,X,J,ys,Y,E,Ys=`<code class="language-css"><span class="token selector">.upgrade:hover</span> <span class="token punctuation">&#123;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 5px solid <span class="token function">rgb</span><span class="token punctuation">(</span>11<span class="token punctuation">,</span> 8<span class="token punctuation">,</span> 139<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>199<span class="token punctuation">,</span> 198<span class="token punctuation">,</span> 246<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span></code>`,$,j,Ps,h,D,ws,ss,b,$s='<code class="language-css"><span class="token punctuation">&#123;</span> <span class="token property">cost</span><span class="token punctuation">:</span> 15<span class="token punctuation">,</span> <span class="token property">name</span><span class="token punctuation">:</span> <span class="token string">"Multiplier"</span><span class="token punctuation">,</span> <span class="token property">multiplier</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">,</span> <span class="token property">worker</span><span class="token punctuation">:</span> 0 <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>',ns,S,Ms,as,y,hs='<code class="language-css"><span class="token punctuation">&#123;</span> <span class="token property">cost</span><span class="token punctuation">:</span> 15<span class="token punctuation">,</span> <span class="token property">name</span><span class="token punctuation">:</span> <span class="token string">"Multiplier"</span><span class="token punctuation">,</span> <span class="token property">multiplier</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">,</span> <span class="token property">worker</span><span class="token punctuation">:</span> 0 <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>',ps,q,Ls,ts,z,gs,es,P,sn='<code class="language-css">multiplier = multiplier * upgrade.multiplier<span class="token punctuation">;</span></code>',ls,K,xs,os,w,nn='<code class="language-css">multiplier = Math.<span class="token function">round</span><span class="token punctuation">(</span>multiplier * upgrade.multiplier<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',cs,B,Ts,us,M,an=`<code class="language-css"><span class="token selector">.reset</span><span class="token punctuation">&#123;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 4px solid <span class="token function">rgb</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 3<span class="token punctuation">,</span> 67<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 3<span class="token punctuation">,</span> 67<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"https://th.bing.com/th/id/OIP.jkKyrzJFUi853uZuy06uVwHaEK?w=333&amp;h=187&amp;c=7&amp;r=0&amp;o=5&amp;dpr=1.3&amp;pid=1.7"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span></code>`,rs,C,Hs,is,L,pn='<code class="language-css">let intervalId = []</code>',ks,F,Rs,fs,g,tn=`<code class="language-css"><span class="token selector">&lt;button class="reset"   on:click=</span><span class="token punctuation">&#123;</span><span class="token selector">()=></span> <span class="token punctuation">&#123;</span>
  clicks = 0<span class="token punctuation">;</span>
  multiplier = 1<span class="token punctuation">;</span>
  workers =[]<span class="token punctuation">;</span>
  worker_multiplier= 1<span class="token punctuation">;</span>
  <span class="token selector">console.log("reset")
  intervalId.forEach(id =></span> <span class="token punctuation">&#123;</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>

  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token selector">upgrades = [</span>
    <span class="token punctuation">&#123;</span><span class="token property">cost</span><span class="token punctuation">:</span> 15<span class="token punctuation">,</span> <span class="token property">name</span><span class="token punctuation">:</span> <span class="token string">"Multiplier"</span><span class="token punctuation">,</span> <span class="token property">multiplier</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">,</span> <span class="token property">worker</span><span class="token punctuation">:</span> 0<span class="token punctuation">&#125;</span><span class="token selector">,</span>
    <span class="token punctuation">&#123;</span><span class="token property">cost</span><span class="token punctuation">:</span> 5 <span class="token punctuation">,</span> <span class="token property">name</span><span class="token punctuation">:</span> <span class="token string">"Worker"</span><span class="token punctuation">,</span> <span class="token property">multiplier</span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property">worker</span><span class="token punctuation">:</span> 1<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  ]<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span>>
  Reset  
  &lt;/button></code>`;return{c(){f=t("p"),ds=u("Det här ändrade jag idag i page.svelte:"),O=o(),x=t("p"),ms=u("*Så att när kostnaden för en “upgrade” ökar rundas talet upp så att det blir ett heltal istället för ett tal med massor med decimaler, se kod nedan."),U=o(),T=t("p"),vs=u("Innan:"),V=o(),d=t("pre"),W=o(),H=t("p"),_s=u("Efter:"),Z=o(),m=t("pre"),A=o(),R=t("p"),Es=u("*La till en händelse när musen ligger över “clicker” ändrar dess “border” färg och storlek samt att textfärgen ändras, se kod nedan."),G=o(),v=t("pre"),N=o(),I=t("p"),bs=u("*La till en händelse när musen ligger över en “worker” då ändrar dess “border” storlek och färg och textfärgen ändras, se kod nedan."),Q=o(),_=t("pre"),X=o(),J=t("p"),ys=u("*La till en händelse när musen ligger över en “upgrade” då ändrar dess “border” storlek och färg samt att textfärgen ändras, se kod nedan."),Y=o(),E=t("pre"),$=o(),j=t("p"),Ps=u("*Ändrade namnet på “Doubler” till “Muliplier” och dess “multiplier” från 2 till 1.5, se kod nedan."),h=o(),D=t("p"),ws=u("Innan:"),ss=o(),b=t("pre"),ns=o(),S=t("p"),Ms=u("Efter:"),as=o(),y=t("pre"),ps=o(),q=t("p"),Ls=u("*Ändrade så att då multipliern bestämms rundas tallet upp, se kod nedan."),ts=o(),z=t("p"),gs=u("Innan:"),es=o(),P=t("pre"),ls=o(),K=t("p"),xs=u("Efter:"),os=o(),w=t("pre"),cs=o(),B=t("p"),Ts=u("*Jag skapade en ny klass som heter “reset” och gav den samma bakgrundsbild och border som “upgrades”, se kod nedan."),us=o(),M=t("pre"),rs=o(),C=t("p"),Hs=u("*Jag skapade en tom lista vid namn intervalid, se kod nedan."),is=o(),L=t("pre"),ks=o(),F=t("p"),Rs=u("*Jag la till en “button” som heter “reset” och när den klickas på nollställs alla variabler till deras ursprungsvärden, se kod nedan."),fs=o(),g=t("pre"),this.h()},l(s){f=e(s,"P",{});var a=l(f);ds=r(a,"Det här ändrade jag idag i page.svelte:"),a.forEach(n),O=c(s),x=e(s,"P",{});var Js=l(x);ms=r(Js,"*Så att när kostnaden för en “upgrade” ökar rundas talet upp så att det blir ett heltal istället för ett tal med massor med decimaler, se kod nedan."),Js.forEach(n),U=c(s),T=e(s,"P",{});var js=l(T);vs=r(js,"Innan:"),js.forEach(n),V=c(s),d=e(s,"PRE",{class:!0});var en=l(d);en.forEach(n),W=c(s),H=e(s,"P",{});var Ds=l(H);_s=r(Ds,"Efter:"),Ds.forEach(n),Z=c(s),m=e(s,"PRE",{class:!0});var ln=l(m);ln.forEach(n),A=c(s),R=e(s,"P",{});var Ss=l(R);Es=r(Ss,"*La till en händelse när musen ligger över “clicker” ändrar dess “border” färg och storlek samt att textfärgen ändras, se kod nedan."),Ss.forEach(n),G=c(s),v=e(s,"PRE",{class:!0});var on=l(v);on.forEach(n),N=c(s),I=e(s,"P",{});var qs=l(I);bs=r(qs,"*La till en händelse när musen ligger över en “worker” då ändrar dess “border” storlek och färg och textfärgen ändras, se kod nedan."),qs.forEach(n),Q=c(s),_=e(s,"PRE",{class:!0});var cn=l(_);cn.forEach(n),X=c(s),J=e(s,"P",{});var zs=l(J);ys=r(zs,"*La till en händelse när musen ligger över en “upgrade” då ändrar dess “border” storlek och färg samt att textfärgen ändras, se kod nedan."),zs.forEach(n),Y=c(s),E=e(s,"PRE",{class:!0});var un=l(E);un.forEach(n),$=c(s),j=e(s,"P",{});var Ks=l(j);Ps=r(Ks,"*Ändrade namnet på “Doubler” till “Muliplier” och dess “multiplier” från 2 till 1.5, se kod nedan."),Ks.forEach(n),h=c(s),D=e(s,"P",{});var Bs=l(D);ws=r(Bs,"Innan:"),Bs.forEach(n),ss=c(s),b=e(s,"PRE",{class:!0});var rn=l(b);rn.forEach(n),ns=c(s),S=e(s,"P",{});var Cs=l(S);Ms=r(Cs,"Efter:"),Cs.forEach(n),as=c(s),y=e(s,"PRE",{class:!0});var kn=l(y);kn.forEach(n),ps=c(s),q=e(s,"P",{});var Fs=l(q);Ls=r(Fs,"*Ändrade så att då multipliern bestämms rundas tallet upp, se kod nedan."),Fs.forEach(n),ts=c(s),z=e(s,"P",{});var Os=l(z);gs=r(Os,"Innan:"),Os.forEach(n),es=c(s),P=e(s,"PRE",{class:!0});var fn=l(P);fn.forEach(n),ls=c(s),K=e(s,"P",{});var Us=l(K);xs=r(Us,"Efter:"),Us.forEach(n),os=c(s),w=e(s,"PRE",{class:!0});var dn=l(w);dn.forEach(n),cs=c(s),B=e(s,"P",{});var Vs=l(B);Ts=r(Vs,"*Jag skapade en ny klass som heter “reset” och gav den samma bakgrundsbild och border som “upgrades”, se kod nedan."),Vs.forEach(n),us=c(s),M=e(s,"PRE",{class:!0});var mn=l(M);mn.forEach(n),rs=c(s),C=e(s,"P",{});var Ws=l(C);Hs=r(Ws,"*Jag skapade en tom lista vid namn intervalid, se kod nedan."),Ws.forEach(n),is=c(s),L=e(s,"PRE",{class:!0});var vn=l(L);vn.forEach(n),ks=c(s),F=e(s,"P",{});var Zs=l(F);Rs=r(Zs,"*Jag la till en “button” som heter “reset” och när den klickas på nollställs alla variabler till deras ursprungsvärden, se kod nedan."),Zs.forEach(n),fs=c(s),g=e(s,"PRE",{class:!0});var _n=l(g);_n.forEach(n),this.h()},h(){k(d,"class","language-css"),k(m,"class","language-css"),k(v,"class","language-css"),k(_,"class","language-css"),k(E,"class","language-css"),k(b,"class","language-css"),k(y,"class","language-css"),k(P,"class","language-css"),k(w,"class","language-css"),k(M,"class","language-css"),k(L,"class","language-css"),k(g,"class","language-css")},m(s,a){p(s,f,a),i(f,ds),p(s,O,a),p(s,x,a),i(x,ms),p(s,U,a),p(s,T,a),i(T,vs),p(s,V,a),p(s,d,a),d.innerHTML=Gs,p(s,W,a),p(s,H,a),i(H,_s),p(s,Z,a),p(s,m,a),m.innerHTML=Ns,p(s,A,a),p(s,R,a),i(R,Es),p(s,G,a),p(s,v,a),v.innerHTML=Qs,p(s,N,a),p(s,I,a),i(I,bs),p(s,Q,a),p(s,_,a),_.innerHTML=Xs,p(s,X,a),p(s,J,a),i(J,ys),p(s,Y,a),p(s,E,a),E.innerHTML=Ys,p(s,$,a),p(s,j,a),i(j,Ps),p(s,h,a),p(s,D,a),i(D,ws),p(s,ss,a),p(s,b,a),b.innerHTML=$s,p(s,ns,a),p(s,S,a),i(S,Ms),p(s,as,a),p(s,y,a),y.innerHTML=hs,p(s,ps,a),p(s,q,a),i(q,Ls),p(s,ts,a),p(s,z,a),i(z,gs),p(s,es,a),p(s,P,a),P.innerHTML=sn,p(s,ls,a),p(s,K,a),i(K,xs),p(s,os,a),p(s,w,a),w.innerHTML=nn,p(s,cs,a),p(s,B,a),i(B,Ts),p(s,us,a),p(s,M,a),M.innerHTML=an,p(s,rs,a),p(s,C,a),i(C,Hs),p(s,is,a),p(s,L,a),L.innerHTML=pn,p(s,ks,a),p(s,F,a),i(F,Rs),p(s,fs,a),p(s,g,a),g.innerHTML=tn},p:Is,i:Is,o:Is,d(s){s&&n(f),s&&n(O),s&&n(x),s&&n(U),s&&n(T),s&&n(V),s&&n(d),s&&n(W),s&&n(H),s&&n(Z),s&&n(m),s&&n(A),s&&n(R),s&&n(G),s&&n(v),s&&n(N),s&&n(I),s&&n(Q),s&&n(_),s&&n(X),s&&n(J),s&&n(Y),s&&n(E),s&&n($),s&&n(j),s&&n(h),s&&n(D),s&&n(ss),s&&n(b),s&&n(ns),s&&n(S),s&&n(as),s&&n(y),s&&n(ps),s&&n(q),s&&n(ts),s&&n(z),s&&n(es),s&&n(P),s&&n(ls),s&&n(K),s&&n(os),s&&n(w),s&&n(cs),s&&n(B),s&&n(us),s&&n(M),s&&n(rs),s&&n(C),s&&n(is),s&&n(L),s&&n(ks),s&&n(F),s&&n(fs),s&&n(g)}}}const Mn={title:"Tuesday, january 17th",date:"2023-01-17"};class Ln extends En{constructor(f){super(),bn(this,f,null,Pn,yn,{})}}export{Ln as default,Mn as metadata};
