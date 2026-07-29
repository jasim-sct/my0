/* KINETIK — shared engine */
(function(w){
'use strict';

var WORK=[
 {id:'aperture',t:'Aperture',cat:'brand',kind:'Brand Identity',yr:'2026',img:'identity',
  size:'c7 r-wide',
  client:'Aperture Optics',services:'Identity · Packaging · Guidelines',
  brief:'A twenty-year-old lens manufacturer that had drifted into looking like every other camera brand.',
  sol:'We built the identity around the aperture blade itself — a mark that opens and closes across applications, so the logo animates natively rather than having motion bolted on afterwards.',
  metrics:[['+38%','Recall in blind test'],['4 wks','From brief to handover'],['62','Assets delivered']]},
 {id:'meridian',t:'Meridian',cat:'motion',kind:'Motion Graphics',yr:'2026',img:'frame4',
  size:'c5 r-wide',
  client:'Meridian Travel',services:'Titles · Motion System · Sound',
  brief:'A launch film for a travel platform, needed in eleven languages without re-animating each cut.',
  sol:'A modular title system where every text layer is data-driven. Swap the language file and the whole sequence re-times itself around the new string lengths.',
  metrics:[['11','Languages shipped'],['1','Master timeline'],['-70%','Localisation cost']]},
 {id:'halide',t:'Halide',cat:'graphic',kind:'Graphic Design',yr:'2025',img:'poster',
  size:'c4 r-tall',
  client:'Halide Gallery',services:'Poster Series · Exhibition Print',
  brief:'Twelve posters for a photography retrospective, printed two-colour on newsprint.',
  sol:'Halftone separations pushed to the point of breaking, so the dot structure becomes the image rather than reproducing it. Each poster reads differently at two metres than at twenty centimetres.',
  metrics:[['12','Posters in series'],['2','Spot colours'],['Sold out','Print run of 400']]},
 {id:'nocturne',t:'Nocturne',cat:'video',kind:'Video Editing',yr:'2025',img:'frame2',
  size:'c4 r-tall',
  client:'Nocturne Records',services:'Edit · Grade · Finishing',
  brief:'Four hours of live multicam from a single night, cut into a six-minute piece.',
  sol:'Cut entirely to the low end rather than the vocal, so the edit sits with the room instead of the performance. Graded warm in the crowd, cold on stage.',
  metrics:[['4 hrs','Source footage'],['6 min','Final cut'],['3 days','Turnaround']]},
 {id:'foundry',t:'Foundry',cat:'graphic',kind:'Graphic Design',yr:'2025',img:'poster2',
  size:'c4 r-tall',
  client:'Foundry Type',services:'Specimen · Editorial · Web',
  brief:'A specimen book for a new grotesque, plus the launch microsite.',
  sol:'The specimen is set entirely in the typeface at sizes from 6pt to 400pt, printed on four paper stocks so buyers can see how it holds at each weight.',
  metrics:[['96','Pages'],['4','Paper stocks'],['9','Weights shown']]},
 {id:'salt',t:'Salt & Iron',cat:'brand',kind:'Brand Identity',yr:'2024',img:'packaging',
  size:'c6 r-sq',
  client:'Salt & Iron',services:'Identity · Packaging · Art Direction',
  brief:'A cookware brand launching into a category dominated by two incumbents.',
  sol:'We treated the packaging as the advertising. Matte board, one signal colour, no product photography — the box has to work on a shelf under supermarket lighting.',
  metrics:[['+51%','Shelf pickup rate'],['18','SKUs designed'],['1','Colour used']]},
 {id:'drift',t:'Drift',cat:'motion',kind:'Motion Graphics',yr:'2024',img:'frame3',
  size:'c6 r-sq',
  client:'Drift Studio',services:'Animation · Simulation · Compositing',
  brief:'A thirty-second product film with no product available to shoot.',
  sol:'Everything is simulated. Fluid, glass and caustics rendered in-house, then degraded with real lens artefacts so it reads as photography rather than CG.',
  metrics:[['30 sec','Runtime'],['100%','CG'],['840','Frames rendered']]},
 {id:'atlas',t:'Atlas',cat:'video',kind:'Video Editing',yr:'2024',img:'frame1',
  size:'c12 r-wide',
  client:'Atlas Documentary',services:'Story Edit · Grade · Sound Mix',
  brief:'A feature-length documentary that had been cut three times and still did not work.',
  sol:'We threw out the chronology and rebuilt around a single returning image. The film lost twenty-two minutes and found its spine.',
  metrics:[['-22 min','Runtime cut'],['3','Prior edits'],['2','Festival selections']]}
];

var K={
 work:function(){return WORK.slice()},
 get:function(id){for(var i=0;i<WORK.length;i++)if(WORK[i].id===id)return WORK[i];return null},
 cats:function(){return ['all','brand','graphic','motion','video']},
 catName:function(c){return {all:'All work',brand:'Brand Identity',graphic:'Graphic Design',
   motion:'Motion Graphics',video:'Video Editing'}[c]||c}
};
w.Kinetik=K;

w.tst=function(m){var t=document.querySelector('.toast');
 if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}
 t.textContent=m;t.classList.add('on');
 clearTimeout(w._t);w._t=setTimeout(function(){t.classList.remove('on')},1900)};

/* split a heading into animated lines */
w.kinetic=function(el,delay){
 var lines=el.getAttribute('data-lines').split('|');
 el.innerHTML=lines.map(function(l,i){
  return '<span class="kline"><span style="animation-delay:'+((delay||0)+i*0.09)+'s">'+l+'</span></span>';
 }).join('');
};

document.addEventListener('DOMContentLoaded',function(){
 document.querySelectorAll('[data-lines]').forEach(function(el){
  w.kinetic(el,parseFloat(el.getAttribute('data-delay-base')||0));
 });

 var els=document.querySelectorAll('[data-r]');
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(en){en.forEach(function(e){
   if(!e.isIntersecting)return;
   var d=+(e.target.getAttribute('data-d')||0);
   setTimeout(function(){e.target.classList.add('in')},d);io.unobserve(e.target)})},
   {threshold:.08,rootMargin:'0px 0px -50px 0px'});
  els.forEach(function(e){io.observe(e)});
 }else els.forEach(function(e){e.classList.add('in')});

 var bg=document.querySelector('.burger'),nv=document.querySelector('.nav');
 if(bg&&nv)bg.addEventListener('click',function(){nv.classList.toggle('open');bg.classList.toggle('open')});

 document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
});
})(window);
