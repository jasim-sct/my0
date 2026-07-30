import Link from "next/link";
import { TopButton } from "./TopButton";

export function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="wrap">
          <div className="f-top">
            <div className="f-brand">
              <Link className="logo" href="/">
                <span className="dot" />
                Premium Agency
              </Link>
              <p className="lead" style={{ fontSize: ".9rem", marginTop: ".9rem" }}>
                Twenty-four services under one roof, delivered by specialists and reported in
                revenue. Serving brands across the USA, UK, Canada, Australia, UAE, Saudi Arabia,
                Germany and Singapore.
              </p>
              <p style={{ fontSize: ".88rem", color: "var(--txt-dim)" }}>
                <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
                <br />
                <a href="https://wa.me/923000000000">+92 300 0000000</a>
                <br />
                Rahim Yar Khan, Punjab, Pakistan
              </p>
            </div>
            <div className="f-cols">
              <div>
                <h4>Build</h4>
                <ul>
                  <li>
                    <Link href="/website-development">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-development">E-Commerce Development</Link>
                  </li>
                  <li>
                    <Link href="/web-app-development">Web App Development</Link>
                  </li>
                  <li>
                    <Link href="/ui-ux-design">UI/UX Design</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Brand</h4>
                <ul>
                  <li>
                    <Link href="/graphic-design">Graphic Design</Link>
                  </li>
                  <li>
                    <Link href="/brand-identity">Brand Identity</Link>
                  </li>
                  <li>
                    <Link href="/video-editing">Video Editing</Link>
                  </li>
                  <li>
                    <Link href="/motion-graphics">Motion Graphics & Animation</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Grow</h4>
                <ul>
                  <li>
                    <Link href="/seo-services">SEO Services</Link>
                  </li>
                  <li>
                    <Link href="/social-media-management">Social Media Management</Link>
                  </li>
                  <li>
                    <Link href="/paid-ads-management">Paid Ads Management</Link>
                  </li>
                  <li>
                    <Link href="/email-marketing">Email Marketing</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Words</h4>
                <ul>
                  <li>
                    <Link href="/blog-writing">Blog Writing</Link>
                  </li>
                  <li>
                    <Link href="/copywriting">Copywriting</Link>
                  </li>
                  <li>
                    <Link href="/script-writing">Script Writing</Link>
                  </li>
                  <li>
                    <Link href="/translation-services">Translation & Localisation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="f-row2">
            <div className="f-cols">
              <div>
                <h4>Operate</h4>
                <ul>
                  <li>
                    <Link href="/virtual-assistant">Virtual Assistant</Link>
                  </li>
                  <li>
                    <Link href="/data-entry-scraping">Data Entry & Web Scraping</Link>
                  </li>
                  <li>
                    <Link href="/lead-generation">Lead Generation</Link>
                  </li>
                  <li>
                    <Link href="/customer-support">Customer Support</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Automate</h4>
                <ul>
                  <li>
                    <Link href="/ai-chatbots">AI Chatbots</Link>
                  </li>
                  <li>
                    <Link href="/business-automation">Business Automation</Link>
                  </li>
                  <li>
                    <Link href="/ai-content-systems">AI Content Systems</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Frontier</h4>
                <ul>
                  <li>
                    <Link href="/no-code-development">No-Code Development</Link>
                  </li>
                  <li>
                    <Link href="/blockchain-web3">Blockchain & Web3</Link>
                  </li>
                  <li>
                    <Link href="/cybersecurity-basics">Cybersecurity Basics</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Marketplace</h4>
                <ul>
                  <li>
                    <Link href="/amazon-account-management">Amazon Account Management</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="f-cols f-cols2">
              <div>
                <h4>Locations</h4>
                <ul>
                  <li>
                    <Link href="/locations/united-states">United States</Link>
                  </li>
                  <li>
                    <Link href="/locations/united-kingdom">United Kingdom</Link>
                  </li>
                  <li>
                    <Link href="/locations/canada">Canada</Link>
                  </li>
                  <li>
                    <Link href="/locations/australia">Australia</Link>
                  </li>
                  <li>
                    <Link href="/locations/united-arab-emirates">United Arab Emirates</Link>
                  </li>
                  <li>
                    <Link href="/locations/saudi-arabia">Saudi Arabia</Link>
                  </li>
                  <li>
                    <Link href="/locations/germany">Germany</Link>
                  </li>
                  <li>
                    <Link href="/locations/singapore">Singapore</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Latest writing</h4>
                <ul>
                  <li>
                    <Link href="/blog/how-much-does-a-website-cost">
                      How much does a website cost in 2026? Real n…
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/seo-vs-paid-ads-which-first">
                      SEO or paid ads first? The honest answer dep…
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/why-your-content-is-invisible-to-google">
                      Why your best content is invisible to Google…
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/shopify-vs-woocommerce-2026">
                      Shopify vs WooCommerce in 2026: the honest c…
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/amazon-acos-reduction-guide">
                      How to cut Amazon ACoS by half in 90 days…
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ai-automation-what-actually-works">
                      AI automation: what actually works in a smal…
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="f-bottom">
            <span>
              © <span data-year /> Premium Freelancing Agency. All rights reserved.
            </span>
            <span>
              <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link> ·{" "}
              <Link href="/sitemap">Sitemap</Link>
            </span>
          </div>
        </div>
      </footer>
      <a
        className="wa"
        href="https://wa.me/923000000000"
        aria-label="WhatsApp us"
        rel="noopener"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
        </svg>
      </a>
      <TopButton />
    </>
  );
}
