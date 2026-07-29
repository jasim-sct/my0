/* SIGNAL — shared engine */
(function(w){
'use strict';

var KEYWORDS=[
 {k:'project management software',v:22400,pos:3,was:18,url:'/features'},
 {k:'best crm for small business',v:14800,pos:1,was:9,url:'/crm'},
 {k:'team collaboration tools',v:9900,pos:5,was:24,url:'/teams'},
 {k:'task tracking app',v:8100,pos:2,was:11,url:'/tasks'},
 {k:'agile sprint planning',v:6600,pos:7,was:31,url:'/agile'},
 {k:'remote team software',v:5400,pos:4,was:16,url:'/remote'},
 {k:'gantt chart online',v:4400,pos:9,was:42,url:'/gantt'},
 {k:'workflow automation tool',v:3600,pos:6,was:22,url:'/automation'},
 {k:'client portal software',v:2900,pos:12,was:58,url:'/portal'},
 {k:'time tracking for teams',v:2400,pos:8,was:29,url:'/time'},
 {k:'kanban board app',v:1900,pos:14,was:67,url:'/kanban'},
 {k:'project templates free',v:1600,pos:11,was:35,url:'/templates'}
];

var AUDITS=[
 {c:'Core Web Vitals',s:94,n:'LCP 1.2s · CLS 0.02 · INP 140ms',ok:1},
 {c:'Indexation',s:100,n:'248 of 248 pages indexed',ok:1},
 {c:'Internal linking',s:78,n:'12 orphan pages found',ok:0},
 {c:'Schema markup',s:96,n:'Product, FAQ, Breadcrumb valid',ok:1},
 {c:'Mobile usability',s:100,n:'No issues detected',ok:1},
 {c:'Broken links',s:88,n:'6 redirect chains to flatten',ok:0}
];

var BACKLINKS=[
 {d:'techcrunch.com',dr:93,t:'Editorial mention',dt:'2026-07-12'},
 {d:'smashingmagazine.com',dr:90,t:'Guest article',dt:'2026-07-04'},
 {d:'producthunt.com',dr:91,t:'Launch feature',dt:'2026-06-28'},
 {d:'zapier.com/blog',dr:92,t:'Integration listing',dt:'2026-06-19'},
 {d:'indiehackers.com',dr:78,t:'Case study',dt:'2026-06-11'},
 {d:'sitepoint.com',dr:83,t:'Resource roundup',dt:'2026-05-30'}
];

var POSTS=[
 {d:3,p:'ig',t:'Behind the build — sprint 14 recap',time:'09:00'},
 {d:3,p:'li',t:'Why we killed our roadmap page',time:'14:30'},
 {d:5,p:'fb',t:'Customer spotlight — Harbour Group',time:'11:00'},
 {d:8,p:'ig',t:'Carousel — 5 workflows worth stealing',time:'09:00'},
 {d:8,p:'li',t:'Hiring: senior product designer',time:'10:00'},
 {d:10,p:'ig',t:'Reel — 30 seconds inside the app',time:'17:00'},
 {d:12,p:'li',t:'Q3 product update thread',time:'08:30'},
 {d:12,p:'fb',t:'Webinar signup — automation 101',time:'12:00'},
 {d:15,p:'ig',t:'Team takeover — design review',time:'16:00'},
 {d:17,p:'li',t:'Benchmark report launch',time:'09:00'},
 {d:19,p:'ig',t:'Reel — customer unboxing',time:'18:00'},
 {d:22,p:'fb',t:'Community AMA announcement',time:'13:00'},
 {d:22,p:'li',t:'Founder essay — pricing honestly',time:'07:45'},
 {d:24,p:'ig',t:'Carousel — before and after',time:'09:30'},
 {d:26,p:'li',t:'Partner integration news',time:'11:15'},
 {d:29,p:'ig',t:'Month in review',time:'17:30'}
];

var CAMPAIGNS=[
 {n:'Brand — Search',ch:'Google',spend:4200,imp:186000,clicks:9400,conv:412,rev:38600},
 {n:'Competitor — Search',ch:'Google',spend:6800,imp:142000,clicks:6100,conv:243,rev:26900},
 {n:'Retargeting — Display',ch:'Google',spend:2100,imp:840000,clicks:5200,conv:186,rev:16400},
 {n:'Prospecting — Feed',ch:'Meta',spend:5400,imp:920000,clicks:11800,conv:298,rev:29200},
 {n:'Lookalike 1% — Feed',ch:'Meta',spend:3900,imp:610000,clicks:8300,conv:221,rev:23800},
 {n:'Retargeting — Stories',ch:'Meta',spend:1800,imp:445000,clicks:6900,conv:174,rev:15600}
];

var S={
 keywords:function(){return KEYWORDS.slice()},
 audits:function(){return AUDITS.slice()},
 backlinks:function(){return BACKLINKS.slice()},
 posts:function(){return POSTS.slice()},
 campaigns:function(){return CAMPAIGNS.slice()},
 money:function(n){return '$'+Math.round(n).toLocaleString()},
 pct:function(n){return (n*100).toFixed(1)+'%'},
 adTotals:function(){
  var t={spend:0,imp:0,clicks:0,conv:0,rev:0};
  CAMPAIGNS.forEach(function(c){t.spend+=c.spend;t.imp+=c.imp;t.clicks+=c.clicks;
   t.conv+=c.conv;t.rev+=c.rev});
  t.ctr=t.clicks/t.imp; t.cpc=t.spend/t.clicks; t.cpa=t.spend/t.conv;
  t.roas=t.rev/t.spend;
  return t;
 }
};
w.Signal=S;

w.tst=function(m){var t=document.querySelector('.toast');
 if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}
 t.textContent=m;t.classList.add('on');
 clearTimeout(w._t);w._t=setTimeout(function(){t.classList.remove('on')},1800)};

w.countUp=function(el,target,pre,suf,dec){
 var t0=null;
 requestAnimationFrame(function s(ts){
  if(!t0)t0=ts;
  var p=Math.min((ts-t0)/1200,1),v=target*(1-Math.pow(1-p,3));
  el.textContent=(pre||'')+(dec?v.toFixed(dec):Math.round(v).toLocaleString())+(suf||'');
  if(p<1)requestAnimationFrame(s);
 });
};

document.addEventListener('DOMContentLoaded',function(){
 var els=document.querySelectorAll('[data-r]');
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(en){en.forEach(function(e){
   if(!e.isIntersecting)return;
   var d=+(e.target.getAttribute('data-d')||0);
   setTimeout(function(){e.target.classList.add('in')},d);io.unobserve(e.target)})},
   {threshold:.08,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e)});
 }else els.forEach(function(e){e.classList.add('in')});

 var bg=document.querySelector('.burger'),nv=document.querySelector('.nav');
 if(bg&&nv)bg.addEventListener('click',function(){nv.classList.toggle('open');bg.classList.toggle('open')});

 document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
});
})(window);
