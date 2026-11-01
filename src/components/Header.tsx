
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const dropdownItems = [
  { href: "/electrical-works", label: "Electrical Works" },
  { href: "/civil-works", label: "Civil Works" },
  {
    href: "https://samai.mascotmellowpowerproject.com/",
    label: "Automation Automobile R&D Unit",
    external: true,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!dropdownOpen) return;

    const onDocClick = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        dropdownRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [dropdownOpen]);

  useLayoutEffect(() => {
    if (!dropdownOpen || !triggerRef.current || !dropdownRef.current) return;

    const r = triggerRef.current.getBoundingClientRect();
    const dw = dropdownRef.current.offsetWidth;
    const space =
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0) -
      r.left;

    setAlignRight(dw > space);
  }, [dropdownOpen]);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setDropdownOpen((open) => !open);
  };

  const toggleMobile = () => {
    setMobileOpen((open) => {
      const next = !open;
      if (next && dropdownOpen) {
        setDropdownOpen(false);
      }
      return next;
    });
  };

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          <span className="brand-mark">MMPP</span>
          <span className="brand-name">Mascot Mellow Power Project</span>
        </Link>

        <nav
          className={`navlinks${mobileOpen ? " open" : ""}`}
          aria-label="Main navigation"
        >
          <Link className={isActive("/") ? "active" : ""} href="/">
            Home
          </Link>

          <Link className={isActive("/about") ? "active" : ""} href="/about">
            About Us
          </Link>

          <button
            ref={triggerRef}
            className="nav-dropdown-trigger"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            Projects & Division
          </button>

          <div
            ref={dropdownRef}
            id="nav-dropdown"
            className="nav-dropdown"
            role="menu"
            hidden={!dropdownOpen}
            style={
              alignRight
                ? { left: "auto", right: "0px" }
                : { left: "0px", right: "auto" }
            }
          >
            {dropdownItems.map((item) => (
              <Link
                key={item.href}
                className="nav-dropdown-item"
                role="menuitem"
                href={item.href}
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            className={isActive("/contact") ? "active" : ""}
            href="/contact"
          >
            Contact Us
          </Link>
        </nav>

        <Link className="nav-cta" href="/contact">
          Discuss a project ↗
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={toggleMobile}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
