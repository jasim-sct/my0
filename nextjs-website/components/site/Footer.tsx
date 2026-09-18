import Link from "next/link";
import { TopButton } from "./TopButton";
import { brand } from "@/lib/brand";
import { AxonLogo } from "./AxonLogo";
import { AxioIcon } from "@/components/icons";

export function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="wrap">
          <div className="f-top">
            <div className="f-brand">
              <AxonLogo />
              <p className="lead" style={{ fontSize: ".9rem", marginTop: ".9rem" }}>
                {brand.legalName} builds digital products, business systems, websites, and software infrastructure for what comes next.
              </p>
              <p style={{ fontSize: ".88rem", color: "var(--txt-dim)", marginTop: "1rem" }}>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
            </div>
            <div className="f-cols">
              <div>
                <h4>Capabilities</h4>
                <ul>
                  <li><Link href="/services/websites"><span className="icon-label"><AxioIcon name="web-apps" size={13} aria-hidden="true" />Websites</span></Link></li>
                  <li><Link href="/services/digital-products"><span className="icon-label"><AxioIcon name="mobile-apps" size={13} aria-hidden="true" />Digital Products</span></Link></li>
                  <li><Link href="/services/business-systems"><span className="icon-label"><AxioIcon name="integration" size={13} aria-hidden="true" />Business Systems</span></Link></li>
                  <li><Link href="/services/platforms"><span className="icon-label"><AxioIcon name="platforms" size={13} aria-hidden="true" />Platforms</span></Link></li>
                  <li><Link href="/services/software-infrastructure"><span className="icon-label"><AxioIcon name="infrastructure" size={13} aria-hidden="true" />Software Infrastructure</span></Link></li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/engineering">Engineering</Link>
                  </li>
                  <li>
                    <Link href="/projects">Selected Work</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/contact">Discuss your project</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://github.com/axiofuture" target="_blank" rel="noopener"><span className="icon-label"><AxioIcon name="version-control" size={13} aria-hidden="true" />GitHub</span></a></li>
                  <li><a href="https://linkedin.com/company/axiofuture" target="_blank" rel="noopener"><span className="icon-label"><AxioIcon name="partnership" size={13} aria-hidden="true" />LinkedIn</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="f-bottom">
            <span>
              © <span data-year /> {brand.legalName}. All rights reserved.
            </span>
            <span>
              <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link> ·{" "}
              <Link href="/sitemap">Sitemap</Link>
            </span>
          </div>
        </div>
      </footer>
      <TopButton />
    </>
  );
}

