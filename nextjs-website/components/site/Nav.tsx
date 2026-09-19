import Link from "next/link";
import { AxioLogo } from "@/components/brand/AxioLogo";
import { AxioIcon } from "@/components/icons";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link className="logo axio-logo" href="/" aria-label="Axio Future">
          <AxioLogo variant="full" size={36} decorative />
        </Link>
        <button className="burger" aria-label="Toggle menu" aria-expanded="false">
          <span />
          <span />
          <span />
        </button>
        <nav className="menu" aria-label="Main navigation">
          <div className="has-mega">
            <button className="mega-btn" aria-expanded="false">
              Services <AxioIcon name="chevron-down" size={14} aria-hidden="true" style={{ verticalAlign: "middle", marginLeft: "0.2em" }} />
            </button>
            <div className="mega">
              <div className="wrap mega-in">
                <div className="mm-col">
                  <div className="mm-head">
                    <AxioIcon name="connected-systems" size={16} aria-hidden="true" className="nav__icon" />Capabilities
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
                  <Link href="/services"><span className="icon-label"><AxioIcon name="platforms" size={13} aria-hidden="true" />All capabilities</span></Link>
                  <Link href="/engineering"><span className="icon-label"><AxioIcon name="software-engineering" size={13} aria-hidden="true" />Engineering</span></Link>
                  <Link href="/pricing"><span className="icon-label"><AxioIcon name="roi" size={13} aria-hidden="true" />Pricing</span></Link>
                  <Link href="/projects"><span className="icon-label"><AxioIcon name="case-studies" size={13} aria-hidden="true" />Selected work</span></Link>
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
