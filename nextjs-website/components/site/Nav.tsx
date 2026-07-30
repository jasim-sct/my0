import Link from "next/link";
import { brand } from "@/lib/brand";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link className="logo" href="/">
          <span className="dot" />
          {brand.shortName}
        </Link>
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
                    <i>◧</i>Build
                  </div>
                  <p className="mm-blurb">Websites, stores, apps and interfaces that ship and scale.</p>
                  <Link href="/website-development">
                    <b>Website Development</b>
                    <span>From $299 · 7–25 days</span>
                  </Link>
                  <Link href="/ecommerce-development">
                    <b>E-Commerce Development</b>
                    <span>From $499 · 10–30 days</span>
                  </Link>
                  <Link href="/web-app-development">
                    <b>Web App Development</b>
                    <span>From $2,400 · 4–12 weeks</span>
                  </Link>
                  <Link href="/ui-ux-design">
                    <b>UI/UX Design</b>
                    <span>From $899 · 2–5 weeks</span>
                  </Link>
                </div>
                <div className="mm-col">
                  <div className="mm-head">
                    <i>◈</i>Brand
                  </div>
                  <p className="mm-blurb">Identity, print, film and motion that make people stop.</p>
                  <Link href="/graphic-design">
                    <b>Graphic Design</b>
                    <span>From $149 · 4–12 days</span>
                  </Link>
                  <Link href="/brand-identity">
                    <b>Brand Identity</b>
                    <span>From $899 · 3–6 weeks</span>
                  </Link>
                  <Link href="/video-editing">
                    <b>Video Editing</b>
                    <span>From $199 · 5–18 days</span>
                  </Link>
                  <Link href="/motion-graphics">
                    <b>Motion Graphics & Animation</b>
                    <span>From $499 · 2–6 weeks</span>
                  </Link>
                </div>
                <div className="mm-col">
                  <div className="mm-head">
                    <i>◍</i>Grow
                  </div>
                  <p className="mm-blurb">SEO, social, ads and email measured in revenue, not reach.</p>
                  <Link href="/seo-services">
                    <b>SEO Services</b>
                    <span>From $299/mo · results in 4–8 weeks</span>
                  </Link>
                  <Link href="/social-media-management">
                    <b>Social Media Management</b>
                    <span>From $249/mo · 12–60 posts</span>
                  </Link>
                  <Link href="/paid-ads-management">
                    <b>Paid Ads Management</b>
                    <span>From $399/mo · ROAS reported weekly</span>
                  </Link>
                  <Link href="/email-marketing">
                    <b>Email Marketing</b>
                    <span>From $420 · 28% of revenue typical</span>
                  </Link>
                </div>
                <div className="mm-col">
                  <div className="mm-head">
                    <i>✎</i>Words
                  </div>
                  <p className="mm-blurb">Articles, copy, scripts and translation into five languages.</p>
                  <Link href="/blog-writing">
                    <b>Blog Writing</b>
                    <span>From $180 · 4–6 days</span>
                  </Link>
                  <Link href="/copywriting">
                    <b>Copywriting</b>
                    <span>From $140 · 3–7 days</span>
                  </Link>
                  <Link href="/script-writing">
                    <b>Script Writing</b>
                    <span>From $180/min · 3–8 days</span>
                  </Link>
                  <Link href="/translation-services">
                    <b>Translation & Localisation</b>
                    <span>From $0.09/word · 2–5 days</span>
                  </Link>
                </div>
                <div className="mm-col">
                  <div className="mm-head">
                    <i>◎</i>Operate
                  </div>
                  <p className="mm-blurb">Assistants, data, leads and support so you stop doing admin.</p>
                  <Link href="/virtual-assistant">
                    <b>Virtual Assistant</b>
                    <span>From $9/hour · live in 2 weeks</span>
                  </Link>
                  <Link href="/data-entry-scraping">
                    <b>Data Entry & Web Scraping</b>
                    <span>From $8/hour · 99.4% accuracy target</span>
                  </Link>
                  <Link href="/lead-generation">
                    <b>Lead Generation</b>
                    <span>From $11/hour · SMTP verified</span>
                  </Link>
                  <Link href="/customer-support">
                    <b>Customer Support</b>
                    <span>From $10/hour · 24/5 coverage</span>
                  </Link>
                </div>
                <div className="mm-col">
                  <div className="mm-head">
                    <i>⇄</i>Automate
                  </div>
                  <p className="mm-blurb">Chatbots, workflows and AI systems that run without you.</p>
                  <Link href="/ai-chatbots">
                    <b>AI Chatbots</b>
                    <span>From $2,400 · 2–8 weeks</span>
                  </Link>
                  <Link href="/business-automation">
                    <b>Business Automation</b>
                    <span>From $399 · 1–4 weeks</span>
                  </Link>
                  <Link href="/ai-content-systems">
                    <b>AI Content Systems</b>
                    <span>From $799 · 2–4 weeks</span>
                  </Link>
                </div>
                <div className="mm-col">
                  <div className="mm-head">
                    <i>◫</i>Frontier
                  </div>
                  <p className="mm-blurb">No-code, Web3 and security — the skills nobody else offers.</p>
                  <Link href="/no-code-development">
                    <b>No-Code Development</b>
                    <span>From $1,200 · 1–10 weeks</span>
                  </Link>
                  <Link href="/blockchain-web3">
                    <b>Blockchain & Web3</b>
                    <span>From $1,900 · 1–8 weeks</span>
                  </Link>
                  <Link href="/cybersecurity-basics">
                    <b>Cybersecurity Basics</b>
                    <span>From $1,400 · 5 working days</span>
                  </Link>
                </div>
                <div className="mm-col">
                  <div className="mm-head">
                    <i>▦</i>Marketplace
                  </div>
                  <p className="mm-blurb">Amazon Seller Central, PPC, listings and account health.</p>
                  <Link href="/amazon-account-management">
                    <b>Amazon Account Management</b>
                    <span>From $499/mo · ACoS down 30–55%</span>
                  </Link>
                </div>
              </div>
              <div className="mega-foot">
                <div className="wrap">
                  <Link href="/services">All 24 services →</Link>
                  <Link href="/industries">By industry →</Link>
                  <Link href="/locations">By location →</Link>
                  <Link href="/packages">Bundled packages →</Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link className="btn btn-primary" href="/contact">
            <span>Free Audit</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
