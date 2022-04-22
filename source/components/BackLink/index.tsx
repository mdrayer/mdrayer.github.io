import Link from 'next/link';

interface BackLinkProps {
  href: string;
}

function BackLink({ href }: BackLinkProps): JSX.Element {
  return <Link href={href}>&larr; Back</Link>;
}

export default BackLink;
