import Link from "next/link";
import Image from "next/image";

type Props = {
  className?: string;
};

/** Reusable Axio Future logo — SVG symbol + wordmark */
export function AxonLogo({ className }: Props) {
  return (
    <Link className={`logo axio-logo ${className ?? ""}`} href="/">
      <Image
        src="/assets/img/logo.png"
        alt="Axio Future"
        width={148}
        height={40}
        priority
        className="axio-mark-img"
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
}
