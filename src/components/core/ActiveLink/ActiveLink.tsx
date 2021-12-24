import Link from "next/link";
import React, { ReactNode } from "react";
interface IActiveLink {
  href?: string;
  children?: ReactNode | ReactNode[];
}

function ActiveLink({ href, children }: IActiveLink): JSX.Element {
  return href ? (
    <Link href={href} passHref={true}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
}

export default ActiveLink;
