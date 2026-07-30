/* RELAY — shared engine */
(function(w){
'use strict';

var LEADS=[
 {co:'Northgate Logistics',ct:'Dana Whitfield',role:'Head of Ops',ind:'Logistics',sz:'120',
  loc:'Manchester, UK',score:92,st:'hot',em:'d.whitfield@northgate.demo'},
 {co:'Cobalt Labs',ct:'Priya Raman',role:'COO',ind:'SaaS',sz:'45',
  loc:'Austin, US',score:88,st:'hot',em:'praman@cobaltlabs.demo'},
 {co:'Harbour Group',ct:'Tomas Berg',role:'Founder',ind:'E-commerce',sz:'18',
  loc:'Copenhagen, DK',score:84,st:'hot',em:'tomas@harbour.demo'},
 {co:'Ridgeline Health',ct:'Amara Osei',role:'Practice Manager',ind:'Healthcare',sz:'60',
  loc:'Toronto, CA',score:76,st:'warm',em:'a.osei@ridgeline.demo'},
 {co:'Vertex Legal',ct:'James Whitcombe',role:'Partner',ind:'Legal',sz:'32',
  loc:'London, UK',score:73,st:'warm',em:'jw@vertexlegal.demo'},
 {co:'Sable & Finch',ct:'Nadia Karim',role:'Marketing Lead',ind:'Retail',sz:'85',
  loc:'Dubai, AE',score:71,st:'warm',em:'nadia@sablefinch.demo'},
 {co:'Kestrel Studio',ct:'Ben Alvarez',role:'Director',ind:'Creative',sz:'12',
  loc:'Barcelona, ES',score:64,st:'warm',em:'ben@kestrel.demo'},
 {co:'Momentum PT',ct:'Sarah Doyle',role:'Owner',ind:'Fitness',sz:'8',
  loc:'Dublin, IE',score:58,st:'cold',em:'sarah@momentumpt.demo'},
 {co:'Onyx Freight',ct:'Ravi Menon',role:'Ops Manager',ind:'Logistics',sz:'210',
  loc:'Singapore, SG',score:81,st:'hot',em:'r.menon@onyxfreight.demo'},
 {co:'Willow Interiors',ct:'Clara Fischer',role:'Founder',ind:'Interiors',sz:'6',
  loc:'Berlin, DE',score:52,st:'cold',em:'clara@willow.demo'},
 {co:'Atlas Consulting',ct:'Hugo Martin',role:'Principal',ind:'Consulting',sz:'40',
  loc:'Paris, FR',score:69,st:'warm',em:'hmartin@atlasco.demo'},
 {co:'Beacon Software',ct:'Lena Sorensen',role:'VP Support',ind:'SaaS',sz:'150',
  loc:'Stockholm, SE',score:86,st:'hot',em:'lena@beaconsw.demo'}
];

var TASKS={
 today:[
  ['Book Q3 board travel','Ayesha K.','hi','Scheduling'],
  ['Chase 3 unpaid invoices','Bilal R.','hi','Admin'],
  ['Compile competitor pricing','Sana M.','md','Research'],
  ['Inbox triage — 240 emails','Ayesha K.','md','Admin']
 ],
 progress:[
  ['Scrape 500 UK logistics firms','Data team','hi','Scraping'],
  ['Verify 1,200 email addresses','Data team','md','Data entry'],
  ['Draft supplier comparison','Sana M.','lo','Research']
 ],
 done:[
  ['CRM cleanup — 3,400 records','Data team','lo','Data entry'],
  ['Weekly expense reconciliation','Bilal R.','md','Admin'],
  ['Schedule 18 discovery calls','Ayesha K.','hi','Scheduling'],
  ['Answer 96 support tickets','Support pod','md','Support']
 ]
};

var TEAM=[
 {n:'Ayesha Khan',r:'Executive Assistant',i:'AK',c:'#0f6d6b',
  s:['Calendar','Inbox','Travel','Minutes'],hrs:'GMT+5 · overlaps UK & EU'},
 {n:'Bilal Raza',r:'Admin & Bookkeeping',i:'BR',c:'#e8674a',
  s:['Invoicing','Expenses','Xero','Reconciliation'],hrs:'GMT+5 · overlaps UK & EU'},
 {n:'Sana Mirza',r:'Research Analyst',i:'SM',c:'#7161ac',
  s:['Market research','Competitor','Reports','Sourcing'],hrs:'GMT+5 · overlaps UK & US-East'},
 {n:'Omar Farouk',r:'Support Lead',i:'OF',c:'#e0a23c',
  s:['Zendesk','Live chat','Phone','Escalations'],hrs:'Rotating · 24/5 coverage'}
];

var R={
 leads:function(){return LEADS.slice()},
 tasks:function(){return TASKS},
 team:function(){return TEAM.slice()},
 money:function(n){return '$'+Math.round(n).toLocaleString()},
 leadStats:function(rows){
  var t={n:rows.length,hot:0,warm:0,cold:0,avg:0};
  rows.forEach(function(l){t[l.st]++;t.avg+=l.score});
  t.avg=rows.length?Math.round(t.avg/rows.length):0;
  return t;
 }
};
w.Relay=R;

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
