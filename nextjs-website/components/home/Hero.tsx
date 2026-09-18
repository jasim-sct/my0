export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow" data-anim>
              Software · SaaS · Enterprise · Architecture
            </div>
            <h1 className="kin-h">Engineering the software systems that move businesses forward.</h1>
          </div>
          <div>
            <p className="lead" data-anim data-delay="120">
              We design and build scalable software products, SaaS platforms, enterprise systems, 
              and digital experiences engineered for real-world business growth.
            </p>
            <div className="hero-cta" data-anim data-delay="180">
              <a className="btn btn-primary" href="/contact">
                <span>Start a Project</span>
                <span className="gt">&rsaquo;</span>
              </a>
              <a className="btn" href="/projects">
                <span>Explore Our Work</span>
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

        <div className="hero-stats">
          <div className="stat" data-anim data-delay="0">
            <b>
              <span data-count="150" data-suffix="+" data-prefix="">
                0+
              </span>
            </b>
            <small>Products Shipped</small>
          </div>
          <div className="stat" data-anim data-delay="70">
            <b>
              <span data-count="40" data-suffix="k" data-prefix="">
                0k
              </span>
            </b>
            <small>Engineering Hours</small>
          </div>
          <div className="stat" data-anim data-delay="140">
            <b>
              <span data-count="99.9" data-suffix="%" data-prefix="">
                0%
              </span>
            </b>
            <small>System Uptime</small>
          </div>
          <div className="stat" data-anim data-delay="210">
            <b>
              <span data-count="12" data-suffix="+" data-prefix="">
                0+
              </span>
            </b>
            <small>Core Technologies</small>
          </div>
        </div>
      </div>
    </section>
  );
}
