type Props = {
  html: string;
  className?: string;
};

/** Exact source HTML body fragment (links already rewritten to clean routes). */
export function HtmlContent({ html, className }: Props) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
