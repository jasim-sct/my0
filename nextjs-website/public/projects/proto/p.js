/* PROTO — shared engine */
(function(w){
'use strict';

/* security audit checklist */
var AUDIT=[
 {id:'A-01',t:'HTTPS enforced sitewide',sev:'hi',pts:12,d:'HSTS header present, all HTTP redirects to HTTPS'},
 {id:'A-02',t:'Security headers set',sev:'hi',pts:10,d:'CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy'},
 {id:'A-03',t:'No secrets in client bundle',sev:'hi',pts:14,d:'API keys, tokens and connection strings absent from shipped JS'},
 {id:'A-04',t:'Dependencies patched',sev:'hi',pts:11,d:'No known CVEs above medium in the lockfile'},
 {id:'A-05',t:'Form inputs validated server-side',sev:'hi',pts:10,d:'Client validation is not the only gate'},
 {id:'A-06',t:'Rate limiting on public endpoints',sev:'md',pts:8,d:'Login, signup, contact and search throttled'},
 {id:'A-07',t:'Admin routes behind auth + 2FA',sev:'hi',pts:12,d:'No unauthenticated admin surface'},
 {id:'A-08',t:'Backups tested, not just scheduled',sev:'md',pts:7,d:'A restore has actually been performed this quarter'},
 {id:'A-09',t:'File uploads type + size checked',sev:'md',pts:6,d:'Magic-byte check, not just extension'},
 {id:'A-10',t:'Error pages leak nothing',sev:'lo',pts:4,d:'No stack traces, framework versions or paths in production'},
 {id:'A-11',t:'DNS records locked down',sev:'md',pts:3,d:'SPF, DKIM, DMARC set; no dangling CNAMEs'},
 {id:'A-12',t:'Access reviewed in last 90 days',sev:'lo',pts:3,d:'Ex-staff and old integrations removed'}
];

/* no-code platform matrix */
var PLATFORMS=['Webflow','Bubble','Framer'];
var MATRIX=[
 ['Best for','Marketing sites, CMS','Web apps, marketplaces','Landing pages, prototypes'],
 ['Visual fidelity','y|Excellent','p|Adequate','y|Excellent'],
 ['Custom logic','p|Limited','y|Full workflows','n|Minimal'],
 ['Database','p|CMS collections','y|Native DB','n|CMS only'],
 ['User accounts','n|Add-on required','y|Built in','n|Add-on required'],
 ['Payments','p|Ecommerce plan','y|Native + API','p|Via integration'],
 ['Export code','y|HTML/CSS/JS','n|Locked in','n|Locked in'],
 ['Learning curve','p|Moderate','n|Steep','y|Gentle'],
 ['Typical build','2–4 weeks','4–10 weeks','1–2 weeks'],
 ['From','$1,800','$4,500','$1,200']
];

/* gas estimator */
var CHAINS=[
 {k:'eth',n:'Ethereum',gwei:18,usd:3400,unit:'ETH'},
 {k:'poly',n:'Polygon',gwei:42,usd:0.72,unit:'MATIC'},
 {k:'base',n:'Base',gwei:0.05,usd:3400,unit:'ETH'},
 {k:'arb',n:'Arbitrum',gwei:0.12,usd:3400,unit:'ETH'}
];
var OPS=[
 {k:'deploy',n:'Deploy ERC-721 contract',gas:2450000},
 {k:'mint',n:'Mint single NFT',gas:85000},
 {k:'batch',n:'Batch mint (10)',gas:420000},
 {k:'transfer',n:'Transfer token',gas:52000},
 {k:'approve',n:'Set approval',gas:46000}
];

var P={
 audit:function(){return AUDIT.slice()},
 platforms:function(){return PLATFORMS.slice()},
 matrix:function(){return MATRIX.map(function(r){return r.slice()})},
 chains:function(){return CHAINS.slice()},
 ops:function(){return OPS.slice()},
 maxScore:function(){return AUDIT.reduce(function(a,x){return a+x.pts},0)}
};
w.Proto=P;

w.tst=function(m){var t=document.querySelector('.toast');
 if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}
 t.textContent=m;t.classList.add('on');
 clearTimeout(w._t);w._t=setTimeout(function(){t.classList.remove('on')},1800)};

w.countUp=function(el,target,pre,suf,dec){
 var t0=null;
 requestAnimationFrame(function s(ts){
  if(!t0)t0=ts;
  var p=Math.min((ts-t0)/1000,1),v=target*(1-Math.pow(1-p,3));
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
   {threshold:.08,rootMargin:'0px 0px -30px 0px'});
  els.forEach(function(e){io.observe(e)});
 }else els.forEach(function(e){e.classList.add('in')});

 document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});

 /* live section tracking in the doc index */
 var secs=document.querySelectorAll('section[id]');
 var links=document.querySelectorAll('.docindex .secs a[data-s]');
 if(secs.length&&links.length&&'IntersectionObserver' in window){
  var so=new IntersectionObserver(function(en){
   en.forEach(function(e){
    if(!e.isIntersecting)return;
    links.forEach(function(l){l.classList.toggle('on',l.dataset.s===e.target.id)});
   });
  },{rootMargin:'-40% 0px -55% 0px'});
  secs.forEach(function(s){so.observe(s)});
 }
});
})(window);
