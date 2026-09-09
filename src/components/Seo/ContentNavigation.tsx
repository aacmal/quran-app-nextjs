import Link from "next/link";

type NavigationLink = {
  href: string;
  label: string;
};

type ContentNavigationProps = {
  previous?: NavigationLink;
  next?: NavigationLink;
};

export default function ContentNavigation({
  previous,
  next,
}: ContentNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Navigasi konten terkait"
      className="mt-8 flex justify-between gap-4 border-t border-emerald-500/30 pt-5"
    >
      {previous ? (
        <Link
          href={previous.href}
          className="text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
        >
          {previous.label}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={next.href}
          className="text-right text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
        >
          {next.label}
        </Link>
      )}
    </nav>
  );
}
