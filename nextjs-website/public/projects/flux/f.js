/* FLUX — shell engine: command palette, rail, reveal */
(function(w){
'use strict';

var PAGES=[
 {t:'Overview',u:'index.html',ic:'◈',k:'home'},
 {t:'AI Chatbots',u:'chatbots.html',ic:'◐',k:'bot conversational assistant'},
 {t:'Business Automation',u:'automation.html',ic:'⇄',k:'zapier make workflow'},
 {t:'AI Content Systems',u:'content-systems.html',ic:'✦',k:'prompt engineering tools'},
 {t:'Pricing',u:'pricing.html',ic:'◫',k:'cost plans'},
 {t:'Start a build',u:'contact.html',ic:'▶',k:'contact quote brief'}
];
var ACTIONS=[
 {t:'Run the chatbot demo',u:'chatbots.html#demo',ic:'▶',s:'demo'},
 {t:'Run a workflow',u:'automation.html#builder',ic:'▶',s:'demo'},
 {t:'Open the prompt lab',u:'content-systems.html#lab',ic:'▶',s:'demo'},
 {t:'Compare pricing tiers',u:'pricing.html',ic:'◫',s:'page'},
 {t:'Back to Premium Agency',u:'../../index.html',ic:'←',s:'external'}
];

var F={
 pages:function(){return PAGES.slice()},
 actions:function(){return ACTIONS.slice()},
 all:function(){
  return PAGES.map(function(p){return {t:p.t,u:p.u,ic:p.ic,s:'page',k:p.k}})
   .concat(ACTIONS.map(function(a){return {t:a.t,u:a.u,ic:a.ic,s:a.s,k:a.t.toLowerCase()}}));
 }
};
w.Flux=F;

w.tst=function(m){var t=document.querySelector('.toast');
 if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}
 t.textContent=m;t.classList.add('on');
 clearTimeout(w._t);w._t=setTimeout(function(){t.classList.remove('on')},1900)};

w.countUp=function(el,target,pre,suf,dec){
 var t0=null;
 requestAnimationFrame(function s(ts){
  if(!t0)t0=ts;
  var p=Math.min((ts-t0)/1100,1),v=target*(1-Math.pow(1-p,3));
  el.textContent=(pre||'')+(dec?v.toFixed(dec):Math.round(v).toLocaleString())+(suf||'');
  if(p<1)requestAnimationFrame(s);
 });
};

/* ---- command palette ---- */
var sel=0,items=[];
function palRender(q){
 var list=F.all();
 q=(q||'').toLowerCase().trim();
 if(q)list=list.filter(function(x){return (x.t+' '+(x.k||'')).toLowerCase().indexOf(q)>-1});
 items=list; sel=0;
 var el=document.getElementById('palList');
 if(!el)return;
 el.innerHTML=list.length?list.map(function(x,i){
  return '<div class="pal-item'+(i===0?' sel':'')+'" data-u="'+x.u+'" onclick="palGo(\''+x.u+'\')">'+
   '<span class="ic">'+x.ic+'</span><span>'+x.t+'</span><span class="sub">'+x.s+'</span></div>'
 }).join('') : '<div class="pal-item" style="color:var(--dim)">No matches</div>';
}
w.palGo=function(u){location.href=u};
w.palOpen=function(){
 var o=document.getElementById('palOvl'),p=document.getElementById('pal');
 if(!o)return;
 o.classList.add('on');p.classList.add('on');
 var inp=document.getElementById('palInput');
 inp.value='';palRender('');
 setTimeout(function(){inp.focus()},60);
};
w.palClose=function(){
 var o=document.getElementById('palOvl'),p=document.getElementById('pal');
 if(!o)return;o.classList.remove('on');p.classList.remove('on');
};
function palMove(d){
 if(!items.length)return;
 sel=(sel+d+items.length)%items.length;
 var els=document.querySelectorAll('.pal-item');
 els.forEach(function(e,i){e.classList.toggle('sel',i===sel)});
 if(els[sel])els[sel].scrollIntoView({block:'nearest'});
}

document.addEventListener('DOMContentLoaded',function(){
 var inp=document.getElementById('palInput');
 if(inp){
  inp.addEventListener('input',function(){palRender(this.value)});
  inp.addEventListener('keydown',function(e){
   if(e.key==='ArrowDown'){e.preventDefault();palMove(1)}
   else if(e.key==='ArrowUp'){e.preventDefault();palMove(-1)}
   else if(e.key==='Enter'){e.preventDefault();if(items[sel])location.href=items[sel].u}
   else if(e.key==='Escape'){palClose()}
  });
 }
 document.addEventListener('keydown',function(e){
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();palOpen()}
  else if(e.key==='Escape')palClose();
 });

 var els=document.querySelectorAll('[data-r]');
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(en){en.forEach(function(e){
   if(!e.isIntersecting)return;
   var d=+(e.target.getAttribute('data-d')||0);
   setTimeout(function(){e.target.classList.add('in')},d);io.unobserve(e.target)})},
   {threshold:.08,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e)});
 }else els.forEach(function(e){e.classList.add('in')});

 document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});

 var clock=document.getElementById('clk');
 if(clock){
  setInterval(function(){
   var d=new Date();
   clock.textContent=('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+':'+('0'+d.getSeconds()).slice(-2);
  },1000);
 }
});
})(window);
