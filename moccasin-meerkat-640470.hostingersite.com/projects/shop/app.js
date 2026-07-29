/* ============================================================
   LUMEN COMMERCE — front-end store engine
   Persistent cart (localStorage), catalogue, filtering, search,
   sort, promo codes, shipping tiers, tax, order creation.
   ============================================================ */
(function (w) {
  'use strict';

  /* ---------------- Catalogue ---------------- */
  var CATALOGUE = [
    { id:'aur-01', name:'Aura Wireless Headphones', cat:'audio', price:249, was:329,
      img:'p-headphones', rating:4.9, reviews:412, stock:14, badge:'Best Seller',
      blurb:'Adaptive noise cancelling with 40-hour battery life.',
      desc:'Aura delivers reference-grade sound in a body that disappears on your head. Hybrid adaptive ANC samples your environment 50,000 times a second, while 40mm beryllium-coated drivers keep detail intact at any volume.',
      specs:[['Driver','40mm beryllium-coated'],['Battery','40 hours (ANC on)'],['Charging','USB-C, 10min = 5hrs'],['Bluetooth','5.3 multipoint'],['Weight','254g'],['Warranty','2 years']],
      variants:['Midnight Black','Slate Grey','Ivory'] },
    { id:'aur-02', name:'Aura Studio Edition', cat:'audio', price:319, was:0,
      img:'p-headphones', rating:4.8, reviews:156, stock:6,
      blurb:'Reference tuning for mixing and mastering work.',
      desc:'A flat-response variant of Aura built for studio work. Detachable braided cable, replaceable memory-foam pads and a carrying case rated to airline crush standards.',
      specs:[['Driver','40mm planar'],['Response','5Hz–40kHz'],['Impedance','32 ohm'],['Cable','Detachable 3m'],['Weight','268g'],['Warranty','2 years']],
      variants:['Studio Black'] },
    { id:'pul-01', name:'Pulse Smartwatch Pro', cat:'wearables', price:199, was:0,
      img:'p-watch', rating:4.7, reviews:288, stock:22, badge:'New',
      blurb:'Health tracking, GPS and 7-day battery.',
      desc:'Continuous heart rate, blood oxygen and sleep staging on a 1.9" AMOLED panel readable in direct sunlight. Built-in dual-band GPS logs routes without your phone.',
      specs:[['Display','1.9" AMOLED 1000 nits'],['Battery','7 days typical'],['Water','5 ATM'],['GPS','Dual-band'],['Sensors','HR, SpO2, temp'],['Warranty','2 years']],
      variants:['Graphite','Silver','Rose'] },
    { id:'pul-02', name:'Pulse Band Lite', cat:'wearables', price:129, was:169,
      img:'p-watch', rating:4.5, reviews:521, stock:40,
      blurb:'Everyday tracking in a slimmer body.',
      desc:'The essentials of Pulse in a lighter frame — steps, heart rate, sleep and notifications, with a fortnight of battery between charges.',
      specs:[['Display','1.4" AMOLED'],['Battery','14 days'],['Water','5 ATM'],['Sensors','HR, sleep'],['Weight','28g'],['Warranty','1 year']],
      variants:['Black','Mint'] },
    { id:'glw-01', name:'Glow Renewal Serum', cat:'beauty', price:68, was:89,
      img:'p-serum', rating:4.8, reviews:733, stock:31, badge:'Award Winner',
      blurb:'Vitamin C and hyaluronic overnight repair.',
      desc:'A 15% stabilised vitamin C complex paired with three molecular weights of hyaluronic acid. Fragrance-free, dermatologist tested, suitable for sensitive skin.',
      specs:[['Volume','30ml'],['Key active','15% Vitamin C'],['Use','Nightly'],['Skin type','All, incl. sensitive'],['Free from','Fragrance, parabens'],['Shelf life','12 months open']],
      variants:['30ml','50ml'] },
    { id:'hyd-01', name:'Hydra Night Complex', cat:'beauty', price:54, was:0,
      img:'p-serum', rating:4.6, reviews:198, stock:18,
      blurb:'Ceramide barrier repair while you sleep.',
      desc:'A ceramide and squalane cream that rebuilds the skin barrier overnight. Non-comedogenic and light enough to layer under other treatments.',
      specs:[['Volume','50ml'],['Key active','Ceramide NP'],['Use','Nightly'],['Texture','Light cream'],['Free from','Fragrance'],['Shelf life','12 months open']],
      variants:['50ml'] },
    { id:'nom-01', name:'Nomad Leather Backpack', cat:'bags', price:159, was:0,
      img:'p-bag', rating:4.9, reviews:344, stock:9, badge:'Best Seller',
      blurb:'Full-grain leather, fits a 16" laptop.',
      desc:'Vegetable-tanned full-grain leather over a water-resistant canvas liner. Padded 16" laptop sleeve, hidden passport pocket and YKK hardware throughout.',
      specs:[['Capacity','22 litres'],['Laptop','Fits 16"'],['Material','Full-grain leather'],['Hardware','YKK brass'],['Weight','1.4kg'],['Warranty','Lifetime']],
      variants:['Charcoal','Tan','Black'] },
    { id:'nom-02', name:'Nomad Weekender', cat:'bags', price:219, was:0,
      img:'p-bag', rating:4.7, reviews:127, stock:5,
      blurb:'Cabin-sized duffel for two-night trips.',
      desc:'Sized precisely to major airline cabin limits, with a separate shoe compartment and a trolley sleeve that slides over a suitcase handle.',
      specs:[['Capacity','38 litres'],['Cabin legal','Yes (most carriers)'],['Material','Waxed canvas + leather'],['Compartments','4'],['Weight','1.9kg'],['Warranty','Lifetime']],
      variants:['Olive','Charcoal'] },
    { id:'ear-01', name:'Echo Wireless Earbuds', cat:'audio', price:139, was:179,
      img:'p-earbuds', rating:4.6, reviews:602, stock:27,
      blurb:'Compact ANC with a pocketable case.',
      desc:'Six microphones isolate your voice on calls while hybrid ANC handles the world around you. The case adds three full charges and supports wireless charging.',
      specs:[['Driver','11mm dynamic'],['Battery','8h + 24h case'],['Charging','USB-C + Qi'],['Bluetooth','5.3'],['Water','IPX4'],['Warranty','2 years']],
      variants:['White','Black'] },
    { id:'spk-01', name:'Resonance Portable Speaker', cat:'audio', price:179, was:0,
      img:'p-speaker', rating:4.7, reviews:213, stock:12, badge:'New',
      blurb:'360° sound with 20-hour playback.',
      desc:'A passive radiator pair gives Resonance bass that belies its size. IP67 rated, so it survives the beach, the shower and the occasional drop.',
      specs:[['Output','30W RMS'],['Battery','20 hours'],['Rating','IP67'],['Pairing','Stereo pair capable'],['Weight','680g'],['Warranty','2 years']],
      variants:['Charcoal','Sand'] },
    { id:'sun-01', name:'Meridian Sunglasses', cat:'accessories', price:145, was:0,
      img:'p-glasses', rating:4.8, reviews:96, stock:16,
      blurb:'Polarised lenses in an acetate frame.',
      desc:'Hand-polished Italian acetate with CR-39 polarised lenses that cut glare without shifting colour. Includes a hard case and microfibre cloth.',
      specs:[['Lens','CR-39 polarised'],['UV','100% UVA/UVB'],['Frame','Italian acetate'],['Fit','Medium-wide'],['Weight','31g'],['Warranty','1 year']],
      variants:['Tortoise','Black'] },
    { id:'cnd-01', name:'Ember Soy Candle', cat:'home', price:38, was:48,
      img:'p-candle', rating:4.9, reviews:481, stock:44,
      blurb:'Cedar and amber, 60-hour burn.',
      desc:'Hand-poured soy wax with a crackling wooden wick. Notes of cedarwood, amber and a trace of black pepper. The jar is reusable once finished.',
      specs:[['Burn time','60 hours'],['Wax','100% soy'],['Wick','Wooden'],['Volume','340g'],['Notes','Cedar, amber, pepper'],['Origin','Hand-poured']],
      variants:['340g'] }
  ];

  var PROMOS = { WELCOME10:{type:'pct',val:10,label:'10% off'},
                 SAVE25:{type:'fixed',val:25,label:'$25 off'},
                 FREESHIP:{type:'ship',val:0,label:'Free shipping'} };

  var KEY='lumen_cart_v1', PKEY='lumen_promo_v1';

  /* ---------------- Storage ---------------- */
  function read(){ try{ return JSON.parse(localStorage.getItem(KEY))||{} }catch(e){ return {} } }
  function write(c){ try{ localStorage.setItem(KEY,JSON.stringify(c)) }catch(e){}
    document.dispatchEvent(new CustomEvent('cart:change')); }
  function readPromo(){ try{ return localStorage.getItem(PKEY)||'' }catch(e){ return '' } }
  function writePromo(p){ try{ p?localStorage.setItem(PKEY,p):localStorage.removeItem(PKEY) }catch(e){}
    document.dispatchEvent(new CustomEvent('cart:change')); }

  /* ---------------- API ---------------- */
  var API = {
    all: function(){ return CATALOGUE.slice() },
    get: function(id){ return CATALOGUE.filter(function(p){return p.id===id})[0] },
    cats: function(){ var s={}; CATALOGUE.forEach(function(p){s[p.cat]=1}); return Object.keys(s).sort() },

    cart: read,
    count: function(){ var c=read(),n=0; for(var k in c) n+=c[k].qty; return n },

    add: function(id,qty,variant){
      var c=read(), key=id+(variant?'::'+variant:'');
      if(!c[key]) c[key]={id:id,qty:0,variant:variant||''};
      var p=API.get(id);
      c[key].qty=Math.min(c[key].qty+(qty||1), p?p.stock:99);
      write(c); return c[key].qty;
    },
    setQty: function(key,qty){
      var c=read(); if(!c[key])return;
      if(qty<1) delete c[key]; else {
        var p=API.get(c[key].id);
        c[key].qty=Math.min(qty, p?p.stock:99);
      }
      write(c);
    },
    remove: function(key){ var c=read(); delete c[key]; write(c) },
    clear: function(){ write({}); writePromo('') },

    lines: function(){
      var c=read(), out=[];
      for(var k in c){
        var p=API.get(c[k].id); if(!p) continue;
        out.push({key:k,product:p,qty:c[k].qty,variant:c[k].variant,line:p.price*c[k].qty});
      }
      return out;
    },

    promo: readPromo,
    applyPromo: function(code){
      code=(code||'').trim().toUpperCase();
      if(!PROMOS[code]) return false;
      writePromo(code); return true;
    },
    clearPromo: function(){ writePromo('') },

    totals: function(){
      var lines=API.lines(), sub=0;
      lines.forEach(function(l){ sub+=l.line });
      var code=readPromo(), pr=PROMOS[code], disc=0, freeShip=false;
      if(pr){
        if(pr.type==='pct') disc=sub*pr.val/100;
        else if(pr.type==='fixed') disc=Math.min(pr.val,sub);
        else if(pr.type==='ship') freeShip=true;
      }
      var after=sub-disc;
      var ship=(after>=100||after===0||freeShip)?0:9.95;
      var tax=Math.round(after*0.08*100)/100;
      return { sub:sub, disc:disc, ship:ship, tax:tax,
               total:Math.round((after+ship+tax)*100)/100,
               code:code, promoLabel:pr?pr.label:'', count:API.count() };
    },

    money: function(n){ return '$'+n.toFixed(2) },

    /* order creation */
    placeOrder: function(details){
      var t=API.totals(), lines=API.lines();
      var order={
        id:'LM-'+Date.now().toString(36).toUpperCase().slice(-6),
        date:new Date().toISOString(),
        items:lines.map(function(l){return {name:l.product.name,qty:l.qty,variant:l.variant,line:l.line}}),
        totals:t, customer:details
      };
      try{ localStorage.setItem('lumen_last_order',JSON.stringify(order)) }catch(e){}
      API.clear();
      return order;
    },
    lastOrder: function(){ try{ return JSON.parse(localStorage.getItem('lumen_last_order')) }catch(e){ return null } },

    /* filtering / sorting / search */
    query: function(o){
      o=o||{};
      var r=CATALOGUE.slice();
      if(o.cat&&o.cat!=='all') r=r.filter(function(p){return p.cat===o.cat});
      if(o.q){ var q=o.q.toLowerCase();
        r=r.filter(function(p){return (p.name+' '+p.blurb+' '+p.cat).toLowerCase().indexOf(q)>-1}) }
      if(o.max) r=r.filter(function(p){return p.price<=o.max});
      switch(o.sort){
        case 'price-asc': r.sort(function(a,b){return a.price-b.price}); break;
        case 'price-desc': r.sort(function(a,b){return b.price-a.price}); break;
        case 'rating': r.sort(function(a,b){return b.rating-a.rating}); break;
        case 'name': r.sort(function(a,b){return a.name.localeCompare(b.name)}); break;
      }
      return r;
    }
  };

  w.Lumen = API;

  /* ---------------- shared UI bits ---------------- */
  document.addEventListener('DOMContentLoaded', function(){
    function paint(){
      var n=API.count();
      document.querySelectorAll('[data-cart-count]').forEach(function(el){
        el.textContent=n; el.style.display=n?'grid':'none';
      });
    }
    document.addEventListener('cart:change',paint); paint();

    // reveal
    var els=document.querySelectorAll('[data-r]');
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(en){
        en.forEach(function(e){ if(!e.isIntersecting)return;
          var d=+(e.target.getAttribute('data-d')||0);
          setTimeout(function(){e.target.classList.add('in')},d); io.unobserve(e.target); });
      },{threshold:.08,rootMargin:'0px 0px -40px 0px'});
      els.forEach(function(e){io.observe(e)});
    } else els.forEach(function(e){e.classList.add('in')});

    // mobile menu
    var bg=document.querySelector('.s-burger'), mn=document.querySelector('.s-menu');
    if(bg&&mn) bg.addEventListener('click',function(){ mn.classList.toggle('open'); bg.classList.toggle('open') });

    document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
  });

  /* toast */
  w.toast=function(msg){
    var t=document.querySelector('.s-toast');
    if(!t){ t=document.createElement('div'); t.className='s-toast'; document.body.appendChild(t) }
    t.textContent=msg; t.classList.add('on');
    clearTimeout(w._tt); w._tt=setTimeout(function(){t.classList.remove('on')},1900);
  };
})(window);
