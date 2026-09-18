import Link from "next/link";

export function FinalCta() {
  return (
    <section className="cta-final">
      <div className="wrap">
        <div className="cta-band" data-anim="zoom">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Next step
          </div>
          <h2 className="kin-h">
            Have something worth building?
            <br />
            Let&apos;s talk.
          </h2>
          <p className="lead center">
            Whether you need a reliable business website, a custom digital product, an internal business system, or software infrastructure engineered to scale.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/contact">
              <span>Discuss your project</span>
              <span className="gt">&rsaquo;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
