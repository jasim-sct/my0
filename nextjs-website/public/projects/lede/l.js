/* LEDE & CO — shared engine */
(function(w){
'use strict';

/* Real translations — Urdu, Arabic, Spanish, French */
var TRANS=[
 {
  k:'headline',
  label:'Landing page headline',
  en:{h:'Stop losing customers at the last step.',
      p:'Your checkout is where good marketing quietly goes to die. We rewrite it so people finish what they started.'},
  ur:{h:'آخری مرحلے پر گاہک کھونا بند کریں۔',
      p:'آپ کا چیک آؤٹ وہ جگہ ہے جہاں اچھی مارکیٹنگ خاموشی سے ختم ہو جاتی ہے۔ ہم اسے دوبارہ لکھتے ہیں تاکہ لوگ جو شروع کریں وہ مکمل کریں۔'},
  ar:{h:'توقّف عن خسارة العملاء في الخطوة الأخيرة.',
      p:'صفحة الدفع هي المكان الذي يموت فيه التسويق الجيّد بهدوء. نعيد كتابتها حتى يُكمل الناس ما بدأوه.'},
  es:{h:'Deja de perder clientes en el último paso.',
      p:'Tu checkout es donde el buen marketing muere en silencio. Lo reescribimos para que la gente termine lo que empezó.'},
  fr:{h:'Arrêtez de perdre vos clients à la dernière étape.',
      p:'Votre page de paiement est là où le bon marketing meurt en silence. Nous la réécrivons pour que les gens terminent ce qu\u2019ils ont commencé.'}
 },
 {
  k:'product',
  label:'Product description',
  en:{h:'The Everyday Carry Wallet',
      p:'Six cards, a few notes, nothing else. Full-grain leather that softens with use and a stitch line we guarantee for life.'},
  ur:{h:'روزمرہ استعمال کا بٹوہ',
      p:'چھ کارڈ، چند نوٹ، اور کچھ نہیں۔ خالص چمڑا جو استعمال کے ساتھ نرم ہوتا جاتا ہے، اور سلائی جس کی ہم تاحیات ضمانت دیتے ہیں۔'},
  ar:{h:'محفظة الاستعمال اليومي',
      p:'ستّ بطاقات وبعض الأوراق النقدية، لا أكثر. جلد طبيعي يلين مع الاستعمال، وخياطة نضمنها مدى الحياة.'},
  es:{h:'La cartera de uso diario',
      p:'Seis tarjetas, algunos billetes, nada más. Cuero de grano completo que se ablanda con el uso y una costura garantizada de por vida.'},
  fr:{h:'Le portefeuille du quotidien',
      p:'Six cartes, quelques billets, rien de plus. Cuir pleine fleur qui s\u2019assouplit avec l\u2019usage et une couture garantie à vie.'}
 },
 {
  k:'email',
  label:'Email subject &amp; opener',
  en:{h:'You left something behind',
      p:'Your basket is saved for another 48 hours. No pressure — but the size you picked is running low, and we would rather tell you now than apologise later.'},
  ur:{h:'آپ کچھ چھوڑ گئے ہیں',
      p:'آپ کی ٹوکری مزید ۴۸ گھنٹے محفوظ ہے۔ کوئی دباؤ نہیں — لیکن جو سائز آپ نے منتخب کیا وہ کم ہو رہا ہے، اور ہم بعد میں معذرت کرنے کے بجائے ابھی بتانا بہتر سمجھتے ہیں۔'},
  ar:{h:'لقد تركت شيئًا خلفك',
      p:'سلّتك محفوظة لمدة ٤٨ ساعة أخرى. لا ضغط عليك — لكنّ المقاس الذي اخترته يوشك على النفاد، ونفضّل إخبارك الآن بدل الاعتذار لاحقًا.'},
  es:{h:'Dejaste algo atrás',
      p:'Tu cesta está guardada durante 48 horas más. Sin presión — pero la talla que elegiste se está agotando, y preferimos avisarte ahora que disculparnos después.'},
  fr:{h:'Vous avez oublié quelque chose',
      p:'Votre panier est conservé encore 48 heures. Sans pression — mais la taille choisie s\u2019épuise, et nous préférons vous prévenir maintenant que nous excuser plus tard.'}
 }
];

var LANGS=[
 {k:'ur',n:'Urdu',code:'اردو',rtl:1},
 {k:'ar',n:'Arabic',code:'العربية',rtl:1},
 {k:'es',n:'Spanish',code:'Español',rtl:0},
 {k:'fr',n:'French',code:'Français',rtl:0}
];

var SAMPLES={
 blog:{
  kicker:'Blog · SEO article',
  title:'Why your best content is invisible to Google',
  meta:'1,840 words · 8 min read · Target: “content not ranking”',
  body:[
   'Most companies do not have a content problem. They have a structure problem wearing a content costume.',
   'You publish a genuinely useful article. It gets read by the eleven people who already follow you, then disappears. Six months later a thinner piece from a competitor outranks it. The instinct is to blame the algorithm, or to write more. Both are usually wrong.',
   'The article is invisible because nothing on your site tells Google it matters. No internal links point to it. It sits three clicks from the homepage. It targets a phrase you already cover on four other pages, so those five pages quietly compete with each other and none of them wins.'
  ],
  h2:'Fix the structure before you write another word',
  body2:[
   'Start by mapping every page you have against the query it should own. One page, one primary intent. Where two pages overlap, merge them and redirect the weaker one — you will usually see movement within three weeks.',
   'Then link deliberately. Every new article should earn at least three contextual links from existing pages within a fortnight of publishing. Not a related-posts widget. Real sentences in the body copy, written by someone who read both pieces.'
  ]
 },
 copy:{
  kicker:'Copywriting · Sales page',
  title:'Before and after — a SaaS pricing page',
  meta:'Rewrite · Conversion up 34% in six weeks',
  before:'Our platform offers a comprehensive suite of enterprise-grade features designed to streamline your workflow and maximise operational efficiency across your entire organisation.',
  after:'Your team wastes four hours a week copying data between tools. This stops that.',
  notes:[
   ['Cut the throat-clearing','Fourteen words before the reader learns anything. Lead with their problem, not your category.'],
   ['One idea per sentence','“Comprehensive suite of enterprise-grade features” is three abstractions stacked. Name the actual thing.'],
   ['Use their number','“Four hours a week” came from customer interviews. Specificity is the cheapest credibility you can buy.']
  ]
 }
};

var L={
 trans:function(){return TRANS.slice()},
 transGet:function(k){for(var i=0;i<TRANS.length;i++)if(TRANS[i].k===k)return TRANS[i];return TRANS[0]},
 langs:function(){return LANGS.slice()},
 langGet:function(k){for(var i=0;i<LANGS.length;i++)if(LANGS[i].k===k)return LANGS[i];return LANGS[0]},
 samples:SAMPLES,

 /* readability analysis */
 analyse:function(t){
  t=(t||'').trim();
  if(!t)return {words:0,chars:0,sentences:0,readMin:0,grade:0,avgLen:0,longPct:0,passive:0};
  var words=t.split(/\s+/).filter(Boolean);
  var sentences=t.split(/[.!?]+(?:\s|$)/).filter(function(s){return s.trim().length});
  var syll=0,longWords=0;
  words.forEach(function(x){
   var c=x.toLowerCase().replace(/[^a-z]/g,'');
   if(!c)return;
   var m=c.match(/[aeiouy]+/g);
   var s=m?m.length:1;
   if(c.length>3&&/e$/.test(c)&&s>1)s--;
   syll+=s;
   if(s>=3)longWords++;
  });
  var W=words.length,S=Math.max(1,sentences.length);
  var asl=W/S, asw=syll/Math.max(1,W);
  var grade=0.39*asl+11.8*asw-15.59;
  var ease=206.835-1.015*asl-84.6*asw;
  var passive=(t.match(/\b(was|were|been|being|is|are)\s+\w+(ed|en)\b/gi)||[]).length;
  return {
   words:W, chars:t.length, sentences:S,
   readMin:Math.max(1,Math.round(W/225)),
   grade:Math.max(1,Math.round(grade*10)/10),
   ease:Math.max(0,Math.min(100,Math.round(ease))),
   avgLen:Math.round(asl*10)/10,
   longPct:Math.round(longWords/Math.max(1,W)*100),
   passive:passive
  };
 }
};
w.Lede=L;

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
