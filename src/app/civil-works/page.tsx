import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Civil Works",
  description: "Civil Works | Mascot Mellow Power Project",
};

export default function CivilWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Projects & Division</div>
          <div className="eyebrow">Civil Works</div>
          <h1>Civil Works</h1>
        </div>
      </section>
      <section className="section">
        <div className="container" />
      </section>
    </>
  );
}
