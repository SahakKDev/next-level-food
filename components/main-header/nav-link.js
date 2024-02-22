"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  const classNames = [classes.link];
  if (path.startsWith(href)) {
    classNames.push(classes.active);
  }

  return (
    <Link href={href} className={classNames.join(" ")}>
      {children}
    </Link>
  );
}
