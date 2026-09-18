export const title = 'Contact Axio Future | Discuss Your Project';
export const description = 'Have something worth building? Let\'s talk. Reach out to Axio Future for websites, digital products, business systems, and software infrastructure.';

export const mainHtml = `<section class="phero"><div class="wrap">
 <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span aria-current="page">Contact</span></nav>
 <div class="hero-grid">
  <div><div class="eyebrow" data-anim>Start Here</div>
   <h1 class="kin-h">Have something worth building? Let's talk.</h1></div>
  <div><p class="lead" data-anim data-delay="120">Tell us what you are trying to build. We review your requirements, architectural complexity, and timeline, then provide straightforward recommendations and transparent pricing.</p></div>
 </div>
</div></section>

<section style="padding-top:1rem"><div class="wrap">
 <div class="grid g2" style="background:none;gap:clamp(24px,4vw,48px);align-items:start">
  <form class="form" id="quoteForm" data-email="hello@axiofuture.com" data-anim="left" novalidate>
   <h3>Project Enquiry</h3>
   <div class="row">
    <div class="field"><label for="name">Name *</label><input id="name" name="name" required placeholder="Your name"><span class="msg">Required</span></div>
    <div class="field"><label for="email">Work Email *</label><input id="email" name="email" type="email" required placeholder="you@company.com"><span class="msg">Valid email required</span></div>
   </div>
   <div class="row">
    <div class="field"><label for="company">Company</label><input id="company" name="company" placeholder="Company or organization"></div>
    <div class="field"><label for="projectType">Project Type *</label>
     <select id="projectType" name="projectType" required>
      <option value="">Select project type</option>
      <option value="Websites">Websites (Starter / Business / Growth)</option>
      <option value="Digital Products">Digital Products &amp; Web Apps</option>
      <option value="Business Systems">Business Systems &amp; Workflows</option>
      <option value="Platforms">Platforms &amp; E-Commerce</option>
      <option value="Software Infrastructure">Software Infrastructure &amp; APIs</option>
      <option value="Custom Software">Custom Architecture / Other</option>
     </select>
     <span class="msg">Please select a project type</span>
    </div>
   </div>
   <div class="field"><label for="budget">Approximate Budget</label>
    <select id="budget" name="budget">
     <option value="Under ₹15,000">Under ₹15,000 (Starter / Business Website)</option>
     <option value="₹15,000 – ₹50,000">₹15,000 – ₹50,000 (Growth Website / Initial System)</option>
     <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000 (Custom Software / Web App)</option>
     <option value="₹1,50,000+">₹1,50,000+ (Full Platform / Infrastructure)</option>
     <option value="Flexible">Flexible / Needs Assessment</option>
    </select>
   </div>
   <div class="field"><label for="message">Project Details *</label>
    <textarea id="message" name="message" required placeholder="What are you looking to build or improve? What problems does it solve?" oninput="wc(this)"></textarea>
    <span class="msg">Please share details about your requirements</span>
    <p class="note" id="wcount" style="margin-top:.35rem">0 words</p>
   </div>
   <button class="btn btn-primary btn-full" type="submit"><span>Discuss your project</span><span class="gt">&rsaquo;</span></button>
   <p class="form-note" id="formMsg" style="display:none;color:var(--ok)">Opening your email app with your project enquiry prepared. If nothing opens, please email hello@axiofuture.com directly.</p>
   <p class="form-note center">We respect your privacy. By submitting, you agree to our <a href="/privacy-policy">privacy policy</a>.</p>
  </form>

  <div data-anim="right">
   <div class="rv zoom ar-16"><img class="ph" src="/assets/img/ph-meeting.webp" alt="Axio Future technical consultation" width="1600" height="1000" loading="lazy" decoding="async"></div>
   <div class="box" style="margin:1.2rem 0 1rem">
    <h3>What to expect</h3>
    <ul class="tick" style="margin-top:.6rem">
     <li>Direct response from an engineer who understands systems</li>
     <li>Honest evaluation of technical feasibility and scope</li>
     <li>Transparent pricing with zero hidden charges</li>
     <li>Full source code and architecture ownership on completion</li>
    </ul>
   </div>
   <div class="box" style="margin-bottom:1rem">
    <h3>Direct Contact</h3>
    <ul class="ct-list">
     <li>
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 7 9-7"/></svg>
      <a href="mailto:hello@axiofuture.com">hello@axiofuture.com</a>
     </li>
    </ul>
    <p class="note">Remote-first software company serving businesses in India and worldwide.</p>
   </div>
   <div class="box">
    <h3>Engineering Focus</h3>
    <div class="cap-row"><span>Websites (Starter, Business, Growth)</span><span class="chip ok">Available</span></div>
    <div class="cap-row"><span>Digital Products &amp; Web Apps</span><span class="chip ok">Available</span></div>
    <div class="cap-row"><span>Business Systems &amp; Automation</span><span class="chip ok">Available</span></div>
    <div class="cap-row"><span>Platforms &amp; Multi-Tenant SaaS</span><span class="chip ok">Available</span></div>
    <div class="cap-row"><span>Software Infrastructure &amp; APIs</span><span class="chip ok">Available</span></div>
   </div>
  </div>
 </div>
</div></section>
<script>
function wc(t){var n=t.value.trim().split(/\\s+/).filter(Boolean).length;
document.getElementById('wcount').textContent=n+' words'+(n>0&&n<15?' — a little more detail helps':'');}
</script>`;

export const showCta = false;
