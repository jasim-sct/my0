import Link from "next/link";
import { TopButton } from "./TopButton";
import { brand } from "@/lib/brand";
import { AxonLogo } from "./AxonLogo";

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
                  <li>
                    <Link href="/services/websites">Websites</Link>
                  </li>
                  <li>
                    <Link href="/services/digital-products">Digital Products</Link>
                  </li>
                  <li>
                    <Link href="/services/business-systems">Business Systems</Link>
                  </li>
                  <li>
                    <Link href="/services/platforms">Platforms</Link>
                  </li>
                  <li>
                    <Link href="/services/software-infrastructure">Software Infrastructure</Link>
                  </li>
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
                  <li>
                    <a href="https://github.com/axiofuture" target="_blank" rel="noopener">GitHub</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/company/axiofuture" target="_blank" rel="noopener">LinkedIn</a>
                  </li>
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

