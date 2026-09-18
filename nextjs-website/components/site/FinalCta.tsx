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
            Let's build something
            <br />
            meaningful.
          </h2>
          <p className="lead center">
            Whether you need a new software product, a robust enterprise system, or a technical partner 
            to scale your engineering capabilities. Let's discuss your requirements.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/contact">
              <span>Start a Project</span>
              <span className="gt">&rsaquo;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
