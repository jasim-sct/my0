export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow" data-anim>
              Websites · Digital Products · Business Systems · Platforms
            </div>
            <h1 className="kin-h">Technology for what comes next.</h1>
          </div>
          <div>
            <p className="lead" data-anim data-delay="120">
              Axon Future builds digital products, business systems, websites, and software infrastructure.
            </p>
            <div className="hero-cta" data-anim data-delay="180">
              <a className="btn btn-primary" href="/projects">
                <span>Explore what we're building</span>
                <span className="gt">&rsaquo;</span>
              </a>
              <a className="btn" href="/contact">
                <span>Start a conversation</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="rv ar-21">
            <img
              className="ph"
              src="/assets/img/ph-hero.webp"
              alt="Engineering team reviewing software architecture"
              width={1600}
              height={1000}
            />
          </div>
        </div>


      </div>
    </section>
  );
}
