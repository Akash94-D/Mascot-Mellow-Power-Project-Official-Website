import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Works",
  description: "Electrical Works | Mascot Mellow Power Project",
};

export default function ElectricalWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Projects & Division</div>
          <div className="eyebrow">Electrical Works</div>
          <h1>Electrical Works</h1>
        </div>
      </section>
      <section className="section">
        <div className="container" />
      </section>
    </>
  );
}
