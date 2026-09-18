import Link from "next/link";
import { AxonLogo } from "./AxonLogo";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <AxonLogo />
        <button className="burger" aria-label="Toggle menu" aria-expanded="false">
          <span />
          <span />
          <span />
        </button>
        <nav className="menu" aria-label="Main navigation">
          <div className="has-mega">
            <button className="mega-btn" aria-expanded="false">
              Services <i>▾</i>
            </button>
            <div className="mega">
              <div className="wrap mega-in">
                <div className="mm-col">
                  <div className="mm-head">
                    <i>⬡</i>Capabilities
                  </div>
                  <p className="mm-blurb">Digital products and platforms engineered to scale.</p>
                  <Link href="/services/websites">
                    <b>Websites</b>
                    <span>Professional business websites</span>
                  </Link>
                  <Link href="/services/digital-products">
                    <b>Digital Products</b>
                    <span>Customer-facing and internal tools</span>
                  </Link>
                  <Link href="/services/business-systems">
                    <b>Business Systems</b>
                    <span>Software connecting your operations</span>
                  </Link>
                  <Link href="/services/platforms">
                    <b>Platforms</b>
                    <span>Scalable systems for multiple users</span>
                  </Link>
                  <Link href="/services/software-infrastructure">
                    <b>Software Infrastructure</b>
                    <span>APIs, backends, and cloud deployment</span>
                  </Link>
                </div>
              </div>
              <div className="mega-foot">
                <div className="wrap">
                  <Link href="/services">All capabilities →</Link>
                  <Link href="/engineering">Engineering →</Link>
                  <Link href="/pricing">Pricing →</Link>
                  <Link href="/projects">Selected work →</Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/engineering">Engineering</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link className="btn btn-primary" href="/contact">
            <span>Discuss your project</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
