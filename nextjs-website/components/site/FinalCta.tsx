import Link from "next/link";

export function FinalCta() {
  return (
    <section className="cta-final">
      <div className="wrap">
        <div className="cta-band" data-anim="zoom">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Start here
          </div>
          <h2 className="kin-h">
            Free audit.
            <br />
            24-hour turnaround.
          </h2>
          <p className="lead center">
            We look at your site, your ads, your listings or your content and tell you honestly what
            is leaking. No card, no call required — the findings are yours either way.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/contact">
              <span>Get my free audit</span>
              <span className="gt">&rsaquo;</span>
            </Link>
            <a className="btn" href="https://wa.me/923000000000" rel="noopener">
              <span>WhatsApp us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
