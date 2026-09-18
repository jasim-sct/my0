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
                    <i>⬡</i>Engineering
                  </div>
                  <p className="mm-blurb">End-to-end product and platform development.</p>
                  <Link href="/services/product-engineering">
                    <b>Product Engineering</b>
                    <span>From concept to production-ready software</span>
                  </Link>
                  <Link href="/services/saas-development">
                    <b>SaaS Development</b>
                    <span>Multi-tenant, scalable SaaS platforms</span>
                  </Link>
                  <Link href="/services/enterprise-software">
                    <b>Enterprise Software</b>
                    <span>Business systems built around real operations</span>
                  </Link>
                  <Link href="/services/web-applications">
                    <b>Web Applications</b>
                    <span>Modern, performant web experiences</span>
                  </Link>
                </div>
                <div className="mm-col">
                  <div className="mm-head">
                    <i>◈</i>Infrastructure
                  </div>
                  <p className="mm-blurb">Scalable architecture and production-grade systems.</p>
                  <Link href="/services/api-backend">
                    <b>API & Backend Engineering</b>
                    <span>Secure, scalable APIs and backend systems</span>
                  </Link>
                  <Link href="/services/cloud-infrastructure">
                    <b>Cloud & Infrastructure</b>
                    <span>Deployment, monitoring, and scalability</span>
                  </Link>
                  <Link href="/services/ui-engineering">
                    <b>UI Engineering</b>
                    <span>Reusable design systems and interfaces</span>
                  </Link>
                  <Link href="/services/system-modernization">
                    <b>System Modernization</b>
                    <span>Modernizing legacy systems and applications</span>
                  </Link>
                </div>
              </div>
              <div className="mega-foot">
                <div className="wrap">
                  <Link href="/services">All services →</Link>
                  <Link href="/solutions">Solutions →</Link>
                  <Link href="/projects">Case studies →</Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/solutions">Solutions</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link className="btn btn-primary" href="/contact">
            <span>Start a Project</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
