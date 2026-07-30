export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow" data-anim>
              24 services · 8 markets · one team
            </div>
            <h1 className="kin-h">Every digital service your business needs.</h1>
          </div>
          <div>
            <p className="lead" data-anim data-delay="120">
              Websites, brand, marketing, content, operations, AI and emerging tech — delivered by
              specialists, priced transparently, and reported in revenue rather than impressions.
            </p>
            <div className="hero-cta" data-anim data-delay="180">
              <a className="btn btn-primary" href="/contact">
                <span>Get a free audit</span>
                <span className="gt">&rsaquo;</span>
              </a>
              <a className="btn" href="/projects">
                <span>See 10 live builds</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="rv ar-21">
            <img
              className="ph"
              src="/assets/img/ph-hero.webp"
              alt="Agency strategists reviewing a client growth plan together"
              width={1600}
              height={1000}
            />
          </div>
          <div className="hero-badge" data-anim data-delay="500">
            <b>
              <span data-count="24" data-suffix="">
                0
              </span>
            </b>
            <small>
              services under one roof, from $149 to $2,999 — every price published.
            </small>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat" data-anim data-delay="0">
            <b>
              <span data-count="640" data-suffix="" data-prefix="">
                0
              </span>
            </b>
            <small>Projects delivered</small>
          </div>
          <div className="stat" data-anim data-delay="70">
            <b>
              <span data-count="20" data-suffix="+" data-prefix="">
                0+
              </span>
            </b>
            <small>Countries served</small>
          </div>
          <div className="stat" data-anim data-delay="140">
            <b>
              <span data-count="94" data-suffix="%" data-prefix="">
                0%
              </span>
            </b>
            <small>Client retention</small>
          </div>
          <div className="stat" data-anim data-delay="210">
            <b>
              <span data-count="24" data-suffix="h" data-prefix="">
                0h
              </span>
            </b>
            <small>Response time</small>
          </div>
        </div>
      </div>
    </section>
  );
}
