import Link from "next/link";

export function FinalCta() {
  return (
    <section className="cta-final">
      <div className="wrap">
        <div className="cta-band" data-anim="zoom">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Start a Conversation
          </div>
          <h2 className="kin-h">
            Have a system worth building?
            <br />
            Let&apos;s engineer it.
          </h2>
          <p className="lead center">
            Whether you are solving an operational bottleneck, launching a new digital product, or scaling existing software infrastructure—we are ready to build.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/contact">
              <span>Discuss your project</span>
              <span className="gt">&rsaquo;</span>
            </Link>
            <Link className="btn" href="/projects">
              <span>Explore all builds</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
