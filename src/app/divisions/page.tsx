
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Division | Mascot Mellow Power Project",
  description:
    "Explore the Electrical Works, Civil Construction and Automation & Automobile R&D divisions of Mascot Mellow Power Project.",
};

const divisions = [
  {
    href: "/electrical-works",
    label: "Electrical Works",
  },
  {
    href: "/civil-works",
    label: "Civil Works",
  },
  {
    href: "https://samai.mascotmellowpowerproject.com/",
    label: "Automation Automobile R&D Unit",
    external: true,
  },
];

export default function DivisionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Projects & Division</div>
          <div className="eyebrow">Our divisions</div>
          <h1>Projects & Divisions</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="division-links">
            {divisions.map((division) => (
              <Link
                key={division.href}
                className="division-card"
                href={division.href}
                target={division.external ? "_blank" : undefined}
                rel={division.external ? "noopener noreferrer" : undefined}
              >
                <h3>{division.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
