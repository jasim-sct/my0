import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FinalCta } from "./FinalCta";
import { SiteEffects } from "./SiteEffects";
import { brand } from "@/lib/brand";

type Props = {
  children: React.ReactNode;
  showCta?: boolean;
};

export function SiteShell({ children, showCta = true }: Props) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to main content
      </a>
      <a className="skip" href="#footer">
        Skip to footer
      </a>
      <div className="curtain">
        <div className="load-mark">
          <b>{brand.shortName}</b>
          <div className="load-bar">
            <i />
          </div>
        </div>
      </div>
      <div className="progress" />
      <div className="bg-fx" />
      <div className="grid-fx" />
      <Nav />
      {children}
      {showCta ? <FinalCta /> : null}
      <Footer />
      <SiteEffects />
    </>
  );
}
