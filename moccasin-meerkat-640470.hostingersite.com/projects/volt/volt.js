/* VOLT — shared engine: invoices, clients, plans, state */
(function(w){
'use strict';

var CLIENTS=['Northwind Co','Pixelforge','Baker & Sons','Lumen Retail','Atlas Freight',
 'Onyx Studio','Vertex Labs','Kite Digital','Harbour Group','Sable & Finch','Momentum PT','Rook Media'];
var STATUS=['paid','paid','paid','due','late','draft'];

function seed(){
 var out=[],today=new Date();
 for(var i=0;i<34;i++){
  var d=new Date(today); d.setDate(today.getDate()-((i*11)%180));
  var due=new Date(d); due.setDate(d.getDate()+30);
  var st=STATUS[i%STATUS.length];
  out.push({
   id:'INV-'+(2140-i),
   client:CLIENTS[i%CLIENTS.length],
   amount:Math.round((320+((i*373)%7400))/10)*10,
   status:st,
   issued:d.toISOString().slice(0,10),
   due:due.toISOString().slice(0,10),
   items:1+(i%4)
  });
 }
 return out;
}

var KEY='volt_inv_v1';
var INV=[];
try{INV=JSON.parse(localStorage.getItem(KEY))||seed()}catch(e){INV=seed()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(INV))}catch(e){}
 document.dispatchEvent(new CustomEvent('inv:change'))}

var V={
 all:function(){return INV.slice()},
 get:function(id){for(var i=0;i<INV.length;i++)if(INV[i].id===id)return INV[i];return null},
 add:function(o){o.id='INV-'+(2141+INV.length);
  o.issued=new Date().toISOString().slice(0,10);
  var d=new Date();d.setDate(d.getDate()+30);o.due=d.toISOString().slice(0,10);
  o.items=o.items||1; INV.unshift(o);save();return o},
 update:function(id,o){var x=V.get(id);if(x){for(var k in o)x[k]=o[k];save()}},
 remove:function(id){INV=INV.filter(function(x){return x.id!==id});save()},
 reset:function(){INV=seed();save()},
 money:function(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})},
 stats:function(){
  var paid=0,due=0,late=0,draft=0,cnt={paid:0,due:0,late:0,draft:0};
  INV.forEach(function(i){cnt[i.status]++;
   if(i.status==='paid')paid+=i.amount;
   else if(i.status==='due')due+=i.amount;
   else if(i.status==='late')late+=i.amount;
   else draft+=i.amount});
  return {paid:paid,due:due,late:late,draft:draft,count:cnt,total:INV.length,
   outstanding:due+late};
 },
 query:function(o){
  o=o||{};var r=INV.slice();
  if(o.status&&o.status!=='all')r=r.filter(function(i){return i.status===o.status});
  if(o.q){var q=o.q.toLowerCase();
   r=r.filter(function(i){return (i.id+' '+i.client).toLowerCase().indexOf(q)>-1})}
  var k=o.sort||'issued',dir=o.dir||-1;
  r.sort(function(a,b){var x=a[k],y=b[k];
   if(typeof x==='string')return x.localeCompare(y)*dir;
   return (x-y)*dir});
  return r;
 }
};
w.Volt=V;

w.tst=function(m){var t=document.querySelector('.toast');
 if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}
 t.textContent=m;t.classList.add('on');
 clearTimeout(w._t);w._t=setTimeout(function(){t.classList.remove('on')},1800)};

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
