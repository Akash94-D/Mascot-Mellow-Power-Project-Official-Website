import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation & Automobile R&D",
  description: "Automation & Automobile R&D | Mascot Mellow Power Project",
};

export default function AutomationRdPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Projects & Division</div>
          <div className="eyebrow">Automation Automobile R&D Unit</div>
          <h1>Automation Automobile R&D Unit</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Explore SAM AI Technologies</h2>
              <div>Visit the Automation & Automobile R&D unit website.</div>
            </div>
            <a
              className="btn light"
              href="https://samai.mascotmellowpowerproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore SAM AI Technologies →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
