/* TERRA & CO — store engine + UI (no dependencies) */
(function(w){
'use strict';

var CAT=[
 {id:'box-s',name:'Seasonal Veg Box — Small',kind:'boxes',price:28,was:0,img:'p-box',
  rating:4.9,rev:412,tag:'Bestseller',
  blurb:'Eight to ten seasonal vegetables, picked the morning it ships.',
  desc:'Our small box feeds one to two people for a week. Contents change with what the fields are actually giving us — expect roots and brassicas in winter, tomatoes and courgettes through summer. Every item is certified organic and grown within 40 miles.',
  specs:[['Feeds','1–2 people'],['Items','8–10 varieties'],['Frequency','Weekly or fortnightly'],['Packaging','Compostable kraft'],['Harvested','Morning of dispatch']],
  opts:['One-off','Weekly subscription','Fortnightly']},
 {id:'box-l',name:'Seasonal Veg Box — Family',kind:'boxes',price:46,was:54,img:'p-box',
  rating:4.8,rev:288,tag:'Sale',
  blurb:'A generous mixed box for households of four or more.',
  desc:'Twice the volume of our small box with a wider spread of varieties, including a bunch of herbs and one seasonal fruit. Ideal for families who cook most nights.',
  specs:[['Feeds','4–6 people'],['Items','14–16 varieties'],['Frequency','Weekly or fortnightly'],['Extras','Herbs + seasonal fruit'],['Harvested','Morning of dispatch']],
  opts:['One-off','Weekly subscription','Fortnightly']},
 {id:'juice',name:'Cold-Pressed Green Juice',kind:'drinks',price:9,was:0,img:'p-juice',
  rating:4.7,rev:196,
  blurb:'Cucumber, kale, apple and mint. Nothing else.',
  desc:'Pressed slowly to keep the enzymes intact, bottled in glass and never heat-treated. Four ingredients and a five-day fridge life, because that is what real juice does.',
  specs:[['Volume','330ml'],['Ingredients','4'],['Shelf life','5 days chilled'],['Bottle','Returnable glass'],['Added sugar','None']],
  opts:['Single bottle','Pack of 6']},
 {id:'bread',name:'Wild Sourdough Loaf',kind:'bakery',price:7,was:0,img:'p-bread',
  rating:5.0,rev:534,tag:'Bestseller',
  blurb:'Three ingredients, thirty-six hours, one very old starter.',
  desc:'Stone-milled flour, water and salt, leavened with a starter we have kept alive since 2011. Fermented slowly for a deep crumb and a crust that actually crackles.',
  specs:[['Weight','900g'],['Ferment','36 hours'],['Flour','Stone-milled organic'],['Baked','Morning of delivery'],['Keeps','4–5 days']],
  opts:['Classic','Seeded','Rye blend']},
 {id:'honey',name:'Raw Wildflower Honey',kind:'pantry',price:14,was:0,img:'p-honey',
  rating:4.9,rev:301,
  blurb:'Unfiltered, unheated, from hives on the west meadow.',
  desc:'Taken from our own hives and jarred without heating or fine filtering, so the pollen and enzymes stay where they belong. The flavour shifts through the season with whatever is flowering.',
  specs:[['Weight','340g'],['Processing','Raw, unfiltered'],['Source','On-farm hives'],['Crystallises','Naturally, gently warm to soften'],['Jar','Returnable glass']],
  opts:['340g','680g']},
 {id:'eggs',name:'Pasture-Raised Eggs',kind:'pantry',price:6,was:8,img:'p-eggs',
  rating:4.8,rev:428,tag:'Sale',
  blurb:'Half a dozen, from hens that genuinely roam.',
  desc:'Our flock moves across the pasture in mobile coops, following the cattle. The yolks are deep orange because of what the birds eat, not because of anything we add.',
  specs:[['Count','6 eggs'],['Housing','Mobile pasture coops'],['Flock size','180 hens'],['Feed','Organic, soy-free'],['Collected','Daily']],
  opts:['Half dozen','Dozen']},
 {id:'oil',name:'First-Press Olive Oil',kind:'pantry',price:22,was:0,img:'p-oil',
  rating:4.9,rev:167,
  blurb:'Single grove, cold-pressed within six hours of picking.',
  desc:'From a small grove of Frantoio and Leccino trees. Pressed the same day the fruit comes off, which is why it tastes green and peppery rather than flat.',
  specs:[['Volume','500ml'],['Acidity','0.3%'],['Varieties','Frantoio, Leccino'],['Pressed','Within 6 hours'],['Harvest','November']],
  opts:['500ml','1 litre']},
 {id:'box-fruit',name:'Orchard Fruit Box',kind:'boxes',price:32,was:0,img:'p-box',
  rating:4.7,rev:143,
  blurb:'Whatever the orchard is ready to give this week.',
  desc:'Apples, pears, plums and stone fruit in season, plus berries through summer. Picked ripe rather than picked early, so it needs eating within the week.',
  specs:[['Feeds','2–4 people'],['Items','6–8 varieties'],['Frequency','Weekly or fortnightly'],['Season','Varies by month'],['Packaging','Compostable']],
  opts:['One-off','Weekly subscription']}
];

var PROMO={HARVEST10:{t:'pct',v:10,l:'10% off'},FIRSTBOX:{t:'fix',v:8,l:'$8 off'},FREEDROP:{t:'ship',v:0,l:'Free delivery'}};
var CK='terra_cart_v1',PK='terra_promo_v1',OK='terra_order_v1';

function rd(){try{return JSON.parse(localStorage.getItem(CK))||{}}catch(e){return{}}}
function wr(c){try{localStorage.setItem(CK,JSON.stringify(c))}catch(e){}
  document.dispatchEvent(new CustomEvent('cart:change'))}
function rp(){try{return localStorage.getItem(PK)||''}catch(e){return''}}
function wp(p){try{p?localStorage.setItem(PK,p):localStorage.removeItem(PK)}catch(e){}
  document.dispatchEvent(new CustomEvent('cart:change'))}

var T={
 all:function(){return CAT.slice()},
 get:function(id){for(var i=0;i<CAT.length;i++)if(CAT[i].id===id)return CAT[i];return null},
 kinds:function(){var s={};CAT.forEach(function(p){s[p.kind]=1});return Object.keys(s).sort()},
 cart:rd,
 count:function(){var c=rd(),n=0;for(var k in c)n+=c[k].q;return n},
 add:function(id,q,opt){var c=rd(),k=id+(opt?'::'+opt:'');
  if(!c[k])c[k]={id:id,q:0,opt:opt||''};
  c[k].q+=(q||1);wr(c);return c[k].q},
 setQty:function(k,q){var c=rd();if(!c[k])return;
  if(q<1)delete c[k];else c[k].q=q;wr(c)},
 remove:function(k){var c=rd();delete c[k];wr(c)},
 clear:function(){wr({});wp('')},
 lines:function(){var c=rd(),o=[];
  for(var k in c){var p=T.get(c[k].id);if(!p)continue;
   o.push({key:k,p:p,q:c[k].q,opt:c[k].opt,line:p.price*c[k].q})}
  return o},
 promo:rp,
 applyPromo:function(code){code=(code||'').trim().toUpperCase();
  if(!PROMO[code])return false;wp(code);return true},
 clearPromo:function(){wp('')},
 totals:function(){
  var ls=T.lines(),sub=0;ls.forEach(function(l){sub+=l.line});
  var c=rp(),pr=PROMO[c],disc=0,fs=false;
  if(pr){if(pr.t==='pct')disc=sub*pr.v/100;
   else if(pr.t==='fix')disc=Math.min(pr.v,sub);else fs=true}
  var after=sub-disc;
  var ship=(after>=50||after===0||fs)?0:5.5;
  return{sub:sub,disc:disc,ship:ship,total:Math.round((after+ship)*100)/100,
   code:c,label:pr?pr.l:'',count:T.count()}},
 money:function(n){return '$'+n.toFixed(2)},
 placeOrder:function(d){
  var t=T.totals(),ls=T.lines();
  var o={id:'TC-'+Date.now().toString(36).toUpperCase().slice(-6),
   date:new Date().toISOString(),
   items:ls.map(function(l){return{name:l.p.name,q:l.q,opt:l.opt,line:l.line}}),
   totals:t,customer:d};
  try{localStorage.setItem(OK,JSON.stringify(o))}catch(e){}
  T.clear();return o},
 lastOrder:function(){try{return JSON.parse(localStorage.getItem(OK))}catch(e){return null}},
 query:function(o){o=o||{};var r=CAT.slice();
  if(o.kind&&o.kind!=='all')r=r.filter(function(p){return p.kind===o.kind});
  if(o.q){var q=o.q.toLowerCase();
   r=r.filter(function(p){return (p.name+' '+p.blurb+' '+p.kind).toLowerCase().indexOf(q)>-1})}
  if(o.sort==='price-asc')r.sort(function(a,b){return a.price-b.price});
  if(o.sort==='price-desc')r.sort(function(a,b){return b.price-a.price});
  if(o.sort==='rating')r.sort(function(a,b){return b.rating-a.rating});
  return r}
};
w.Terra=T;

w.tst=function(m){var t=document.querySelector('.toast');
 if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}
 t.textContent=m;t.classList.add('on');
 clearTimeout(w._tt);w._tt=setTimeout(function(){t.classList.remove('on')},1900)};

w.stars=function(r){var f=Math.round(r),s='';for(var i=0;i<5;i++)s+=i<f?'★':'☆';return s};

document.addEventListener('DOMContentLoaded',function(){
 function paint(){var n=T.count();
  document.querySelectorAll('[data-cart-n]').forEach(function(e){
   e.textContent=n;e.style.display=n?'inline-grid':'none'})}
 document.addEventListener('cart:change',paint);paint();

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
