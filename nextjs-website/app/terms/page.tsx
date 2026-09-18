import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Terms of Service | Axio Future",
  description: "The terms governing our engagements, payments, revisions, ownership and cancellation.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Terms of Service</span></nav>
 <h1 className="kin-h">Terms of Service</h1></div></section>
<section style={{"paddingTop":"1rem"}}><div className="wrap narrow">
 <div className="prose" data-anim><h3>Scope</h3><p>Each engagement is defined by a written proposal listing deliverables, timeline and fee. Work outside that scope is quoted separately before it begins.</p><h3>Payments</h3><p>One-off projects require 50% upfront and 50% on delivery. Monthly retainers are billed in advance. Accepted methods: bank transfer, UPI, card, and wire transfer.</p><h3>Revisions</h3><p>Revision rounds are stated per service. Additional rounds beyond the agreed scope are billed at the standard rate with an estimate provided first.</p><h3>Intellectual property</h3><p>On full payment, all deliverables, source files, code and repository access transfer to the client unconditionally. We may display non-confidential work in our portfolio unless an NDA states otherwise.</p><h3>Cancellation</h3><p>Retainers cancel with 30 days written notice. Work completed up to the cancellation date remains payable. No exit fee.</p><h3>Results disclaimer</h3><p>We commit to professional software execution, adherence to modern web standards, and honest reporting. We cannot guarantee third-party platform algorithm decisions outside our control.</p><h3>Liability</h3><p>Our liability is limited to the fees paid for the specific engagement. We are not liable for indirect or consequential loss.</p><h3>Governing law</h3><p>These terms are governed by the laws of India, without prejudice to mandatory consumer protections in the client's jurisdiction.</p></div></div></section>
      </main>
    </SiteShell>
  );
}
