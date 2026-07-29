/* Shared demo interactions */
(function(){
  var els=document.querySelectorAll('[data-r]');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){
      en.forEach(function(e){
        if(!e.isIntersecting)return;
        var d=+(e.target.getAttribute('data-d')||0);
        setTimeout(function(){e.target.classList.add('in')},d);
        io.unobserve(e.target);
      });
    },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(e){io.observe(e)});
  }else{els.forEach(function(e){e.classList.add('in')})}

  document.querySelectorAll('[data-year]').forEach(function(e){
    e.textContent=new Date().getFullYear();
  });
})();
