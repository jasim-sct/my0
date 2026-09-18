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
                {brand.legalName} designs and builds scalable digital products, SaaS platforms, 
                enterprise systems, and modern web applications for ambitious companies.
              </p>
              <p style={{ fontSize: ".88rem", color: "var(--txt-dim)", marginTop: "1rem" }}>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
            </div>
            <div className="f-cols">
              <div>
                <h4>Engineering</h4>
                <ul>
                  <li>
                    <Link href="/services/product-engineering">Product Engineering</Link>
                  </li>
                  <li>
                    <Link href="/services/saas-development">SaaS Development</Link>
                  </li>
                  <li>
                    <Link href="/services/enterprise-software">Enterprise Software</Link>
                  </li>
                  <li>
                    <Link href="/services/web-applications">Web Applications</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Infrastructure</h4>
                <ul>
                  <li>
                    <Link href="/services/api-backend">API & Backend</Link>
                  </li>
                  <li>
                    <Link href="/services/cloud-infrastructure">Cloud & Infrastructure</Link>
                  </li>
                  <li>
                    <Link href="/services/ui-engineering">UI Engineering</Link>
                  </li>
                  <li>
                    <Link href="/services/system-modernization">System Modernization</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/projects">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link href="/contact">Start a Project</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href="https://github.com/axonfuture" target="_blank" rel="noopener">GitHub</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/company/axonfuture" target="_blank" rel="noopener">LinkedIn</a>
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

