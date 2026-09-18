import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Locations | Software Engineering Serving Global Markets | Axio Future",
  description: "We engineer digital products, modern websites, and software systems for clients in India, the US, UK, Canada, Australia, UAE, Saudi Arabia, Germany, and Singapore.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Locations</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Global Delivery</div>
   <h1 className="kin-h">Where we build</h1></div>
  <div><p className="lead" data-anim data-delay="120">Dedicated engineering collaboration across your time zone, transparent project scoping, and modern cloud deployment standards for growing businesses worldwide.</p></div>
 </div>
 <div className="phero-img"><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-city.webp" alt="Global software engineering collaboration" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(assets/img/ph-city-tiny.webp)"}} /></div></div>
</div></section>
<section><div className="wrap"><div className="grid g4"><Link className="glass card svc-card" href="/locations/united-states" data-anim data-delay="0">
   <div className="sc-top"><span className="dt-cat">EST / PST</span></div>
   <h3>United States</h3><p>US businesses and founders from Seattle to Miami</p><span className="dt-cta">View region <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/locations/united-kingdom" data-anim data-delay="70">
   <div className="sc-top"><span className="dt-cat">GMT / BST</span></div>
   <h3>United Kingdom</h3><p>UK enterprises and startups from London to Manchester</p><span className="dt-cta">View region <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/locations/canada" data-anim data-delay="140">
   <div className="sc-top"><span className="dt-cat">EST / PST</span></div>
   <h3>Canada</h3><p>Canadian businesses in Toronto, Vancouver and Montreal</p><span className="dt-cta">View region <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/locations/australia" data-anim data-delay="210">
   <div className="sc-top"><span className="dt-cat">AEST</span></div>
   <h3>Australia</h3><p>Australian businesses in Sydney, Melbourne and Brisbane</p><span className="dt-cta">View region <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/locations/united-arab-emirates" data-anim data-delay="0">
   <div className="sc-top"><span className="dt-cat">GST</span></div>
   <h3>United Arab Emirates</h3><p>UAE enterprises in Dubai and Abu Dhabi</p><span className="dt-cta">View region <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/locations/saudi-arabia" data-anim data-delay="70">
   <div className="sc-top"><span className="dt-cat">AST</span></div>
   <h3>Saudi Arabia</h3><p>Saudi businesses in Riyadh and Jeddah</p><span className="dt-cta">View region <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/locations/germany" data-anim data-delay="140">
   <div className="sc-top"><span className="dt-cat">CET</span></div>
   <h3>Germany</h3><p>European companies in Berlin, Munich and Frankfurt</p><span className="dt-cta">View region <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/locations/singapore" data-anim data-delay="210">
   <div className="sc-top"><span className="dt-cat">SGT</span></div>
   <h3>Singapore</h3><p>Singapore and APAC technology businesses</p><span className="dt-cta">View region <span className="gt">&rsaquo;</span></span></Link></div></div></section>
      </main>
    </SiteShell>
  );
}
