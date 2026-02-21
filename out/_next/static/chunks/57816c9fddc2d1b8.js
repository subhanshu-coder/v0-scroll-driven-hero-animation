(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38185,t=>{"use strict";var e=t.i(76806),r=t.i(30713);function s(){return(0,r.useEffect)(()=>{(async()=>{let e=(await t.A(41268)).default,r=(await t.A(91888)).default;e.registerPlugin(r);let s=document.getElementById("c-dot"),i=document.getElementById("c-ring"),a=.5*window.innerWidth,o=.5*window.innerHeight,l=a,n=o;document.addEventListener("mousemove",t=>{a=t.clientX,o=t.clientY,e.set(s,{x:a,y:o})}),e.ticker.add(()=>{l+=(a-l)*.1,n+=(o-n)*.1,e.set(i,{x:l,y:n})}),e.to(".hl-text",{y:"0%",duration:1.05,stagger:.22,ease:"power4.out",delay:.44}),e.to(".sub-line",{opacity:1,duration:.75,delay:1,ease:"power2.out"}),e.to(".year-tag",{opacity:1,duration:1,delay:1.4,ease:"power2.out"});let c=0,d=0;function p(t){e.set("#RF",{rotation:t,svgOrigin:"252 338"}),e.set("#RR",{rotation:t,svgOrigin:"856 338"})}e.fromTo("#car",{x:-260,opacity:0},{x:0,opacity:1,duration:1.35,delay:.45,ease:"power3.out",onUpdate:function(){let t=186.42*this.progress();p(t),c=t},onComplete:function(){x=e.to("#car",{y:"-=5",duration:2.4,ease:"sine.inOut",repeat:-1,yoyo:!0,delay:.8})}}),e.to(".beam",{opacity:1,duration:.5,delay:1.55,stagger:.1}),e.to(".scroll-hint",{opacity:1,duration:.6,delay:2}),e.to("#car",{y:-10,duration:.3,delay:1.75,ease:"power2.out",onComplete:()=>{e.to("#car",{y:0,duration:.5,ease:"bounce.out"})}});let x=null,h=0;document.addEventListener("mousemove",t=>{if(h<.15){let r=(t.clientX/window.innerWidth-.5)*32,s=(t.clientY/window.innerHeight-.5)*14;e.to("#car",{x:r,y:s,duration:1.1,ease:"power2.out",overwrite:"auto"})}}),document.getElementById("car");let f=document.querySelectorAll(".streak"),g=["s1","s2","s3","s4"].map(t=>document.getElementById(t)),j=.8*window.innerWidth,m=[.18,.36,.54,.72],u=[!1,!1,!1,!1];r.create({trigger:"#page",start:"top top",end:"bottom bottom",onUpdate(t){let r=t.progress;if(h=r,e.set("#prog",{scaleX:r}),r<.02)return void e.to(".scroll-hint",{opacity:1,duration:.4});e.to(".scroll-hint",{opacity:0,duration:.3}),x&&x.pause();let s=Math.max(0,Math.min(1,(r-.02)/.94)),i=s*j,a=0;a=s<.06?-(8*s):s<.14?-.48+(s-.06)*6:0;let o=Math.min(1,4*s);e.set(f,{opacity:o<.06||s>.9?0:.8*o}),e.to("#car",{x:i,y:0,rotation:a,duration:.22,ease:"power2.out",overwrite:"auto"});let l=i-d;d=i,Math.abs(l)>.01&&p(c+=.717*l),m.forEach((t,s)=>{r>=t&&!u[s]&&(u[s]=!0,e.to(g[s],{opacity:1,x:0,duration:.65,ease:"power3.out"})),r<t-.05&&u[s]&&(u[s]=!1,e.to(g[s],{opacity:0,x:36,duration:.35,ease:"power2.in"}))})}}),r.create({trigger:"#page",start:"top top",end:"4% top",onLeaveBack:()=>{h=0,x&&x.resume()}}),window.addEventListener("resize",()=>{r.refresh()})})()},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:`
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

        :root {
          --bg:    #05050a;
          --gold:  #d4a843;
          --red:   #e03820;
          --cream: #ede8dc;
          --dim:   rgba(237,232,220,0.38);
          --line:  rgba(212,168,67,0.15);
        }

        html, body { width:100%; }

        body {
          background: var(--bg);
          color: var(--cream);
          font-family: 'Rajdhani', sans-serif;
          overflow-x: hidden;
          cursor: none;
        }

        /* ══ CURSOR ══ */
        #c-dot {
          position:fixed; width:7px; height:7px;
          background:var(--gold); border-radius:50%;
          pointer-events:none; z-index:99999;
          transform:translate(-50%,-50%);
        }
        #c-ring {
          position:fixed; width:30px; height:30px;
          border:1px solid rgba(212,168,67,.4); border-radius:50%;
          pointer-events:none; z-index:99998;
          transform:translate(-50%,-50%);
        }

        /* ══ SCROLL PROGRESS ══ */
        #prog {
          position:fixed; top:0; left:0;
          width:100%; height:2px;
          background:linear-gradient(to right, var(--red), var(--gold));
          transform-origin:left; transform:scaleX(0);
          z-index:9000;
        }

        /* ══ PAGE SCROLL CONTAINER ══ */
        #page { height:500vh; position:relative; }

        /* Sticky viewport — always shows hero */
        #scene {
          position:sticky; top:0;
          height:100vh; width:100%;
          overflow:hidden;
        }

        /* ══ BACKGROUND ══ */
        .bg {
          position:absolute; inset:0; z-index:0;
          background:
            radial-gradient(ellipse 120% 55% at 50% 108%, rgba(212,168,67,.06) 0%, transparent 65%),
            radial-gradient(ellipse 50% 35% at 5%  65%,  rgba(26,120,200,.03)  0%, transparent 55%),
            linear-gradient(170deg, #05050a 0%, #08080f 100%);
        }

        /* Perspective grid floor */
        .grid {
          position:absolute; bottom:0; left:0; right:0;
          height:46%; z-index:1; overflow:hidden;
        }
        .grid::before {
          content:'';
          position:absolute; inset:0;
          background-image:
            linear-gradient(to right, rgba(212,168,67,.075) 1px, transparent 1px),
            linear-gradient(to bottom,rgba(212,168,67,.075) 1px, transparent 1px);
          background-size: 56px 56px;
          transform: perspective(460px) rotateX(68deg) translateY(-13%) scaleX(2.1);
          transform-origin: bottom center;
        }
        .grid::after {
          content:'';
          position:absolute; inset:0;
          background: linear-gradient(to bottom, var(--bg) 0%, transparent 50%);
        }

        /* Horizon glow line */
        .horizon {
          position:absolute; bottom:45%; left:0; right:0;
          height:1px; z-index:2;
          background: linear-gradient(to right,
            transparent 0%,
            rgba(212,168,67,.32) 22%,
            rgba(224,56,32,.22)  50%,
            rgba(212,168,67,.32) 78%,
            transparent 100%);
          filter: blur(1px);
        }

        /* Film grain */
        .grain {
          position:absolute; inset:0; z-index:3;
          pointer-events:none; opacity:.22;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
        }

        /* ══ TOP BAR ══ */
        .topbar {
          position:absolute; top:0; left:0; right:0;
          z-index:50;
          padding:28px 52px;
          display:flex; align-items:center; justify-content:space-between;
        }
        .logo {
          font-family:'Bebas Neue', sans-serif;
          font-size:19px; letter-spacing:.32em;
          color:var(--gold); line-height:1;
        }
        .logo em { color:var(--red); font-style:normal; }

        .edition {
          font-size:9px; font-weight:700;
          letter-spacing:.4em; text-transform:uppercase;
          color:rgba(237,232,220,.24);
        }

        /* ══ HEADLINE ══ */
        .headline-wrap {
          position:absolute;
          top:88px; left:52px;
          z-index:20;
        }

        .pre-label {
          display:flex; align-items:center; gap:10px;
          margin-bottom:14px; opacity:0;
        }
        .pre-dash { width:26px; height:1px; background:var(--gold); }
        .pre-text {
          font-size:9px; font-weight:700;
          letter-spacing:.45em; text-transform:uppercase;
          color:var(--gold);
        }

        .hl-row { overflow:hidden; }
        .hl-text {
          display:block;
          font-family:'Barlow Condensed', sans-serif;
          font-weight:900;
          font-size: clamp(46px, 7.8vw, 118px);
          line-height:.95;
          text-transform:uppercase;
          letter-spacing:.22em;
          color:var(--cream);
          transform:translateY(105%);
        }
        .hl-text.accent {
          color:var(--gold);
          letter-spacing:.26em;
        }

        .sub-line {
          margin-top:14px;
          font-size:12px; font-weight:300;
          font-style:italic; letter-spacing:.12em;
          color:var(--dim);
          opacity:0;
        }

        /* ══ SCROLL HINT ══ */
        .scroll-hint {
          position:absolute;
          left:52px; bottom:38px;
          z-index:20;
          display:flex; align-items:center; gap:12px;
          opacity:0;
        }
        .sh-label {
          font-size:8px; font-weight:700;
          letter-spacing:.42em; text-transform:uppercase;
          color:rgba(237,232,220,.25);
        }
        .sh-bar {
          width:38px; height:1px;
          background:linear-gradient(to right, var(--gold), transparent);
          animation: barPulse 1.7s ease-in-out infinite;
        }
        @keyframes barPulse {
          0%,100% { transform:scaleX(1);   opacity:1; }
          50%      { transform:scaleX(.45); opacity:.35; }
        }

        /* ══ CAR ZONE ══ */
        .car-zone {
          position:absolute;
          bottom:0; left:0; right:0;
          height:68%;
          z-index:10;
          overflow:hidden;
        }

        #car {
          position:absolute;
          bottom:12vh;
          left:-6vw;
          width:60vw; max-width:750px;
          transform-origin:center bottom;
          will-change:transform;
        }

        .c-shadow {
          position:absolute; bottom:-12px;
          left:8%; right:8%; height:22px;
          background:radial-gradient(ellipse at center, rgba(0,0,0,.9) 0%, transparent 70%);
          filter:blur(8px); z-index:-1;
        }
        .c-glow {
          position:absolute; bottom:0;
          left:20%; right:20%; height:10px;
          background:radial-gradient(ellipse at center, rgba(212,168,67,.4) 0%, transparent 70%);
          filter:blur(9px);
        }

        .beam { position:absolute; top:28%; pointer-events:none; z-index:-1; opacity:0; }
        .beam-l {
          right:100%; width:340px; height:180px;
          background:conic-gradient(from 174deg at 100% 50%, rgba(155,205,255,.13) 0deg, transparent 22deg);
          filter:blur(10px); transform-origin:right center;
        }
        .beam-r {
          left:100%; width:340px; height:180px;
          background:conic-gradient(from 0deg at 0% 50%, rgba(155,205,255,.13) 0deg, transparent 22deg);
          filter:blur(10px); transform-origin:left center;
        }
        .tail {
          position:absolute; top:26%; right:-4px;
          width:64px; height:55px;
          background:radial-gradient(ellipse at left, rgba(224,56,32,.55) 0%, transparent 70%);
          filter:blur(7px);
        }

        .streak {
          position:absolute; top:50%;
          height:1px; pointer-events:none; opacity:0; z-index:5;
        }
        .sk1 { right:0; width:480px; transform:translateY(-50%);
               background:linear-gradient(to left,transparent,rgba(212,168,67,.55),transparent); }
        .sk2 { right:0; width:290px; top:42%; transform:translateY(-50%);
               background:linear-gradient(to left,transparent,rgba(212,168,67,.30),transparent); }
        .sk3 { right:0; width:185px; top:59%; transform:translateY(-50%);
               background:linear-gradient(to left,transparent,rgba(212,168,67,.20),transparent); }
        .sk4 { right:0; width:390px; transform:translateY(-50%);
               background:linear-gradient(to left,transparent,rgba(212,168,67,.40),transparent); }

        /* ══ STATS ══ */
        .stats {
          position:absolute;
          right:52px; top:50%;
          transform:translateY(-50%);
          z-index:30;
          display:flex; flex-direction:column; gap:30px;
        }

        .stat {
          text-align:right;
          opacity:0; transform:translateX(36px);
        }

        .stat-inner {
          display:inline-block;
          text-align:right;
          padding-right:18px;
          border-right:2px solid var(--line);
        }

        .stat-num {
          font-family:'Bebas Neue', sans-serif;
          font-size:clamp(40px,5vw,64px);
          line-height:1; color:var(--gold);
        }
        .stat-num sup { font-size:24px; color:var(--red); vertical-align:super; }

        .stat-label {
          font-size:11px; font-weight:400;
          letter-spacing:.06em;
          color:var(--dim);
          margin-top:2px; line-height:1.5;
          max-width:190px;
        }

        /* ══ YEAR TAG ══ */
        .year-tag {
          position:absolute; bottom:28px; left:50%;
          transform:translateX(-50%);
          z-index:20;
          font-size:9px; font-weight:700;
          letter-spacing:.5em; text-transform:uppercase;
          color:rgba(237,232,220,.16);
          opacity:0;
        }
      `}),(0,e.jsx)("div",{id:"c-dot"}),(0,e.jsx)("div",{id:"c-ring"}),(0,e.jsx)("div",{id:"prog"}),(0,e.jsx)("div",{id:"page",children:(0,e.jsxs)("div",{id:"scene",children:[(0,e.jsx)("div",{className:"bg"}),(0,e.jsx)("div",{className:"grid"}),(0,e.jsx)("div",{className:"horizon"}),(0,e.jsx)("div",{className:"grain"}),(0,e.jsxs)("div",{className:"topbar",children:[(0,e.jsxs)("div",{className:"logo",children:["ITZ",(0,e.jsx)("em",{children:"FIZZ"})]}),(0,e.jsx)("span",{className:"edition",children:"Performance · 2026"})]}),(0,e.jsxs)("div",{className:"headline-wrap",children:[(0,e.jsx)("div",{className:"hl-row",children:(0,e.jsx)("span",{className:"hl-text",children:"W E L C O M E"})}),(0,e.jsx)("div",{className:"hl-row",children:(0,e.jsx)("span",{className:"hl-text accent",children:"I T Z F I Z Z"})}),(0,e.jsx)("p",{className:"sub-line",children:"Where engineering becomes obsession."})]}),(0,e.jsxs)("div",{className:"scroll-hint",children:[(0,e.jsx)("span",{className:"sh-label",children:"Scroll"}),(0,e.jsx)("div",{className:"sh-bar"})]}),(0,e.jsx)("div",{className:"year-tag",children:"Est. 2026 · Pure Performance"}),(0,e.jsxs)("div",{className:"car-zone",children:[(0,e.jsxs)("div",{id:"car",children:[(0,e.jsx)("div",{className:"streak sk1"}),(0,e.jsx)("div",{className:"streak sk2"}),(0,e.jsx)("div",{className:"streak sk3"}),(0,e.jsx)("div",{className:"streak sk4"}),(0,e.jsx)("div",{className:"beam beam-l"}),(0,e.jsx)("div",{className:"beam beam-r"}),(0,e.jsx)("div",{className:"tail"}),(0,e.jsx)("div",{className:"c-shadow"}),(0,e.jsx)("div",{className:"c-glow"}),(0,e.jsxs)("svg",{viewBox:"0 0 1100 430",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",display:"block"},children:[(0,e.jsxs)("defs",{children:[(0,e.jsxs)("linearGradient",{id:"bG",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,e.jsx)("stop",{offset:"0%",stopColor:"#181814"}),(0,e.jsx)("stop",{offset:"25%",stopColor:"#222018"}),(0,e.jsx)("stop",{offset:"50%",stopColor:"#c9a450"}),(0,e.jsx)("stop",{offset:"70%",stopColor:"#2c2418"}),(0,e.jsx)("stop",{offset:"100%",stopColor:"#0c0b08"})]}),(0,e.jsxs)("linearGradient",{id:"rG",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,e.jsx)("stop",{offset:"0%",stopColor:"#0e0e0c"}),(0,e.jsx)("stop",{offset:"36%",stopColor:"#222018"}),(0,e.jsx)("stop",{offset:"70%",stopColor:"#181612"}),(0,e.jsx)("stop",{offset:"100%",stopColor:"#070706"})]}),(0,e.jsxs)("linearGradient",{id:"gG",x1:"0",y1:"0",x2:"1",y2:"1",children:[(0,e.jsx)("stop",{offset:"0%",stopColor:"#1a3d55",stopOpacity:"0.94"}),(0,e.jsx)("stop",{offset:"55%",stopColor:"#0a2030",stopOpacity:"0.87"}),(0,e.jsx)("stop",{offset:"100%",stopColor:"#041018",stopOpacity:"0.96"})]}),(0,e.jsxs)("linearGradient",{id:"rL",x1:"0",y1:"0",x2:"1",y2:"1",children:[(0,e.jsx)("stop",{offset:"0%",stopColor:"#999"}),(0,e.jsx)("stop",{offset:"42%",stopColor:"#eee"}),(0,e.jsx)("stop",{offset:"100%",stopColor:"#555"})]}),(0,e.jsxs)("radialGradient",{id:"wG",cx:"50%",cy:"50%",r:"50%",children:[(0,e.jsx)("stop",{offset:"0%",stopColor:"#252218"}),(0,e.jsx)("stop",{offset:"52%",stopColor:"#101010"}),(0,e.jsx)("stop",{offset:"100%",stopColor:"#060606"})]}),(0,e.jsxs)("radialGradient",{id:"hG",cx:"50%",cy:"50%",r:"50%",children:[(0,e.jsx)("stop",{offset:"0%",stopColor:"#d0e8ff"}),(0,e.jsx)("stop",{offset:"62%",stopColor:"#90c0ff",stopOpacity:"0.7"}),(0,e.jsx)("stop",{offset:"100%",stopColor:"#5080b0",stopOpacity:"0.1"})]}),(0,e.jsxs)("filter",{id:"gf",children:[(0,e.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.4",result:"b"}),(0,e.jsx)("feComposite",{in:"SourceGraphic",in2:"b",operator:"over"})]}),(0,e.jsx)("filter",{id:"sf",children:(0,e.jsx)("feDropShadow",{dx:"0",dy:"14",stdDeviation:"22",floodColor:"rgba(0,0,0,.95)"})}),(0,e.jsx)("clipPath",{id:"cf",children:(0,e.jsx)("circle",{cx:"252",cy:"338",r:"80"})}),(0,e.jsx)("clipPath",{id:"cr",children:(0,e.jsx)("circle",{cx:"856",cy:"338",r:"80"})})]}),(0,e.jsx)("path",{d:"M144,346 L952,346 L962,366 L132,366 Z",fill:"#080806"}),(0,e.jsx)("path",{d:"M860,314 Q904,307 956,322 L956,346 L852,346 Z",fill:"#090908"}),(0,e.jsx)("line",{x1:"876",y1:"320",x2:"876",y2:"346",stroke:"rgba(212,168,67,.2)",strokeWidth:"1"}),(0,e.jsx)("line",{x1:"906",y1:"317",x2:"906",y2:"346",stroke:"rgba(212,168,67,.2)",strokeWidth:"1"}),(0,e.jsx)("line",{x1:"934",y1:"319",x2:"934",y2:"346",stroke:"rgba(212,168,67,.2)",strokeWidth:"1"}),(0,e.jsx)("path",{d:"M128,318 Q98,310 80,326 L78,346 L148,346 Z",fill:"#090908"}),(0,e.jsx)("path",{d:"M190,320 L862,320 L862,346 L190,346 Z",fill:"rgba(14,13,10,.75)"}),(0,e.jsx)("path",{d:"M190,320 L862,320 L862,324 L190,324 Z",fill:"#d4a843",opacity:".75"}),(0,e.jsx)("path",{d:"M 100,320 Q 88,308 84,292 Q 78,274 90,251 Q 96,235 120,224 L 160,210 Q 198,192 230,160 Q 258,130 308,114 Q 358,98 420,95 L 560,94 Q 630,94 680,108 Q 730,123 770,146 Q 800,160 822,177 L 868,199 Q 918,215 948,239 Q 968,257 966,285 Q 964,308 954,320 L 100,320 Z",fill:"url(#bG)",filter:"url(#sf)"}),(0,e.jsx)("path",{d:"M 218,170 Q 348,126 498,116 Q 648,108 778,150 Q 748,135 598,114 Q 448,106 298,138 Q 248,154 218,170 Z",fill:"rgba(255,255,255,.065)"}),(0,e.jsx)("path",{d:"M 158,280 Q 396,268 596,268 Q 778,268 918,280",fill:"none",stroke:"rgba(255,255,255,.05)",strokeWidth:"1.5"}),(0,e.jsx)("path",{d:"M 298,161 Q 338,108 398,97 L 598,97 Q 648,97 690,116 Q 718,130 738,156 L 758,182 Q 698,172 598,168 L 418,168 Q 358,168 298,161 Z",fill:"url(#rG)"}),(0,e.jsx)("path",{d:"M 308,159 Q 348,116 398,100 L 448,97 L 448,166 Q 390,170 308,159 Z",fill:"url(#gG)",opacity:".93"}),(0,e.jsx)("path",{d:"M 328,142 Q 358,118 398,106 Q 378,115 338,145 Z",fill:"rgba(190,225,255,.1)"}),(0,e.jsx)("line",{x1:"356",y1:"115",x2:"334",y2:"157",stroke:"rgba(180,220,255,.07)",strokeWidth:"9",strokeLinecap:"round"}),(0,e.jsx)("path",{d:"M 448,97 L 448,166 L 454,166 L 454,97 Z",fill:"rgba(0,0,0,.55)"}),(0,e.jsx)("path",{d:"M 458,97 L 588,97 Q 640,97 682,113 L 710,138 L 758,181 L 718,178 L 678,163 Q 640,156 588,152 L 458,152 Z",fill:"url(#gG)",opacity:".88"}),(0,e.jsx)("path",{d:"M 478,105 Q 558,101 620,109 Q 570,105 478,112 Z",fill:"rgba(190,225,255,.09)"}),(0,e.jsx)("path",{d:"M 588,97 L 588,152 L 594,152 L 598,97 Z",fill:"rgba(0,0,0,.72)"}),(0,e.jsx)("ellipse",{cx:"526",cy:"101",rx:"32",ry:"6",fill:"#060606"}),(0,e.jsx)("ellipse",{cx:"526",cy:"101",rx:"24",ry:"4",fill:"#030303"}),(0,e.jsx)("path",{d:"M 318,222 L 318,320",fill:"none",stroke:"rgba(0,0,0,.4)",strokeWidth:"1.5"}),(0,e.jsx)("path",{d:"M 638,220 L 638,320",fill:"none",stroke:"rgba(0,0,0,.4)",strokeWidth:"1.5"}),(0,e.jsx)("rect",{x:"378",y:"262",width:"48",height:"8",rx:"4",fill:"#181612"}),(0,e.jsx)("rect",{x:"380",y:"263",width:"44",height:"5",rx:"3",fill:"#242018"}),(0,e.jsx)("rect",{x:"698",y:"262",width:"48",height:"8",rx:"4",fill:"#181612"}),(0,e.jsx)("rect",{x:"700",y:"263",width:"44",height:"5",rx:"3",fill:"#242018"}),(0,e.jsx)("rect",{x:"918",y:"181",width:"50",height:"6",rx:"2",fill:"#0c0c0a"}),(0,e.jsx)("rect",{x:"914",y:"176",width:"58",height:"9",rx:"3",fill:"#141412"}),(0,e.jsx)("rect",{x:"912",y:"185",width:"4",height:"28",fill:"#101010"}),(0,e.jsx)("rect",{x:"966",y:"185",width:"4",height:"28",fill:"#101010"}),(0,e.jsx)("rect",{x:"914",y:"179",width:"58",height:"2",rx:"1",fill:"#e03820",opacity:".72"}),(0,e.jsx)("path",{d:"M 154,276 Q 396,268 596,268 Q 778,268 908,276",fill:"none",stroke:"#e03820",strokeWidth:"1.8",opacity:".72"}),(0,e.jsx)("path",{d:"M 196,192 Q 296,182 376,180",fill:"none",stroke:"rgba(212,168,67,.18)",strokeWidth:"2"}),(0,e.jsx)("path",{d:"M 200,198 Q 300,188 378,185",fill:"none",stroke:"rgba(212,168,67,.12)",strokeWidth:"1.5"}),(0,e.jsx)("path",{d:"M 88,240 Q 92,224 100,216 L 126,212 Q 116,226 113,241 Q 110,256 114,268 L 98,272 Q 86,258 88,240 Z",fill:"#0c0c0a"}),(0,e.jsx)("path",{d:"M 94,236 Q 96,222 104,216 L 116,213",fill:"none",stroke:"#1a8fff",strokeWidth:"3.5",strokeLinecap:"round",opacity:".92",filter:"url(#gf)"}),(0,e.jsx)("ellipse",{cx:"108",cy:"247",rx:"11",ry:"15",fill:"url(#hG)",filter:"url(#gf)",opacity:".92"}),(0,e.jsx)("ellipse",{cx:"108",cy:"247",rx:"6",ry:"9",fill:"#cce4ff",opacity:".65"}),(0,e.jsx)("path",{d:"M 958,237 Q 964,252 966,268 Q 968,284 962,298 L 948,308 Q 954,292 954,274 Q 954,256 946,244 Z",fill:"#0c0c0a"}),(0,e.jsx)("path",{d:"M 950,246 Q 956,258 958,272 Q 960,286 956,298",fill:"none",stroke:"#e03820",strokeWidth:"4.5",strokeLinecap:"round",opacity:".92",filter:"url(#gf)"}),(0,e.jsx)("path",{d:"M 944,250 Q 948,262 950,276 Q 952,288 948,298",fill:"none",stroke:"#c02010",strokeWidth:"2",strokeLinecap:"round",opacity:".58"}),(0,e.jsx)("path",{d:"M 148,346 Q 146,290 174,262 Q 208,236 252,234 Q 298,234 328,262 Q 354,290 352,346",fill:"#0a0908"}),(0,e.jsxs)("g",{clipPath:"url(#cf)",children:[(0,e.jsx)("circle",{cx:"252",cy:"338",r:"80",fill:"#0e0c0a"}),(0,e.jsx)("circle",{cx:"252",cy:"338",r:"77",fill:"none",stroke:"#181412",strokeWidth:"3"}),(0,e.jsx)("circle",{cx:"252",cy:"338",r:"73",fill:"none",stroke:"#100e0c",strokeWidth:"3"}),(0,e.jsx)("ellipse",{cx:"252",cy:"412",rx:"64",ry:"14",fill:"rgba(0,0,0,.45)"}),(0,e.jsx)("ellipse",{cx:"222",cy:"306",rx:"26",ry:"16",fill:"rgba(255,255,255,.04)",transform:"rotate(-18,222,306)"})]}),(0,e.jsx)("circle",{cx:"252",cy:"338",r:"58",fill:"url(#wG)"}),(0,e.jsx)("circle",{cx:"252",cy:"338",r:"55",fill:"none",stroke:"#1c1a16",strokeWidth:"2"}),(0,e.jsxs)("g",{id:"RF",transform:"translate(252,338)",children:[(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("g",{transform:"rotate(72)",children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("g",{transform:"rotate(144)",children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("g",{transform:"rotate(216)",children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("g",{transform:"rotate(288)",children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("circle",{r:"21",fill:"#111",stroke:"#282420",strokeWidth:"2"}),(0,e.jsx)("circle",{r:"27",fill:"none",stroke:"rgba(110,88,66,.34)",strokeWidth:"4"}),(0,e.jsx)("rect",{x:"25",y:"-9",width:"10",height:"18",rx:"3",fill:"#e03820",opacity:".88"}),(0,e.jsx)("circle",{r:"10",fill:"#1a1814"}),(0,e.jsx)("circle",{r:"7",fill:"#d4a843"}),(0,e.jsx)("circle",{r:"4",fill:"#141210"})]}),(0,e.jsx)("path",{d:"M 202,318 Q 214,302 230,296",fill:"none",stroke:"rgba(255,255,255,.11)",strokeWidth:"9",strokeLinecap:"round"}),(0,e.jsx)("path",{d:"M 756,346 Q 754,290 782,262 Q 816,236 856,234 Q 900,234 930,262 Q 956,290 956,346",fill:"#0a0908"}),(0,e.jsxs)("g",{clipPath:"url(#cr)",children:[(0,e.jsx)("circle",{cx:"856",cy:"338",r:"80",fill:"#0e0c0a"}),(0,e.jsx)("circle",{cx:"856",cy:"338",r:"77",fill:"none",stroke:"#181412",strokeWidth:"3"}),(0,e.jsx)("circle",{cx:"856",cy:"338",r:"73",fill:"none",stroke:"#100e0c",strokeWidth:"3"}),(0,e.jsx)("ellipse",{cx:"856",cy:"412",rx:"64",ry:"14",fill:"rgba(0,0,0,.45)"}),(0,e.jsx)("ellipse",{cx:"826",cy:"306",rx:"26",ry:"16",fill:"rgba(255,255,255,.04)",transform:"rotate(-18,826,306)"})]}),(0,e.jsx)("circle",{cx:"856",cy:"338",r:"58",fill:"url(#wG)"}),(0,e.jsx)("circle",{cx:"856",cy:"338",r:"55",fill:"none",stroke:"#1c1a16",strokeWidth:"2"}),(0,e.jsxs)("g",{id:"RR",transform:"translate(856,338)",children:[(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("g",{transform:"rotate(72)",children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("g",{transform:"rotate(144)",children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("g",{transform:"rotate(216)",children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("g",{transform:"rotate(288)",children:(0,e.jsx)("path",{d:"M -5,-20 L -3.5,-52 Q 0,-59 3.5,-52 L 5,-20 Q 0,-25 -5,-20 Z",fill:"url(#rL)"})}),(0,e.jsx)("circle",{r:"21",fill:"#111",stroke:"#282420",strokeWidth:"2"}),(0,e.jsx)("circle",{r:"27",fill:"none",stroke:"rgba(110,88,66,.34)",strokeWidth:"4"}),(0,e.jsx)("rect",{x:"25",y:"-9",width:"10",height:"18",rx:"3",fill:"#e03820",opacity:".88"}),(0,e.jsx)("circle",{r:"10",fill:"#1a1814"}),(0,e.jsx)("circle",{r:"7",fill:"#d4a843"}),(0,e.jsx)("circle",{r:"4",fill:"#141210"})]}),(0,e.jsx)("path",{d:"M 806,318 Q 818,302 834,296",fill:"none",stroke:"rgba(255,255,255,.11)",strokeWidth:"9",strokeLinecap:"round"})]})]}),(0,e.jsxs)("div",{className:"stats",id:"stats",children:[(0,e.jsx)("div",{className:"stat",id:"s1",children:(0,e.jsxs)("div",{className:"stat-inner",children:[(0,e.jsxs)("div",{className:"stat-num",children:["58",(0,e.jsx)("sup",{children:"%"})]}),(0,e.jsx)("div",{className:"stat-label",children:"Increase in pick up point use"})]})}),(0,e.jsx)("div",{className:"stat",id:"s2",children:(0,e.jsxs)("div",{className:"stat-inner",children:[(0,e.jsxs)("div",{className:"stat-num",children:["23",(0,e.jsx)("sup",{children:"%"})]}),(0,e.jsx)("div",{className:"stat-label",children:"Decreased in customer phone calls"})]})}),(0,e.jsx)("div",{className:"stat",id:"s3",children:(0,e.jsxs)("div",{className:"stat-inner",children:[(0,e.jsxs)("div",{className:"stat-num",children:["27",(0,e.jsx)("sup",{children:"%"})]}),(0,e.jsx)("div",{className:"stat-label",children:"Increase in pick up point use"})]})}),(0,e.jsx)("div",{className:"stat",id:"s4",children:(0,e.jsxs)("div",{className:"stat-inner",children:[(0,e.jsxs)("div",{className:"stat-num",children:["40",(0,e.jsx)("sup",{children:"%"})]}),(0,e.jsx)("div",{className:"stat-label",children:"Decreased in customer phone calls"})]})})]})]})]})})]})}t.s(["default",()=>s])},41268,t=>{t.v(e=>Promise.all(["static/chunks/53c932cbbfd871bf.js"].map(e=>t.l(e))).then(()=>e(26268)))},91888,t=>{t.v(e=>Promise.all(["static/chunks/9467cbb7a4f6688a.js"].map(e=>t.l(e))).then(()=>e(86096)))}]);