import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow" data-anim>
              Software Technology Company · Systems &amp; Engineering
            </div>
            <h1 className="kin-h">Technology for what comes next.</h1>
          </div>
          <div>
            <p className="lead" data-anim data-delay="120">
              We engineer digital products, operational systems, and web infrastructure for companies that have outgrown off-the-shelf templates. Built to perform, scale cleanly, and endure.
            </p>
            <div className="hero-cta" data-anim data-delay="180">
              <Link className="btn btn-primary" href="/projects">
                <span>Explore our work</span>
                <span className="gt">&rsaquo;</span>
              </Link>
              <Link className="btn" href="/contact">
                <span>Start a conversation</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="rv ar-21">
            <Image
              className="ph"
              src="/assets/img/ph-hero.webp"
              alt="Engineering team reviewing software architecture"
              width={1600}
              height={1000}
              priority
              sizes="100vw"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
