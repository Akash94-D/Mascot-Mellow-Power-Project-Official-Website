
import type { Metadata } from "next";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

export const metadata: Metadata = {
  title: "MMPP",
  description:
    "Engineering, infrastructure and technology solutions spanning electrical works, civil construction, and Industry 4.0 innovation.",
};

const customers = [
  "ABB",
  "L&T",
  "Kalpataru India",
  "Gammon India",
  "Oscar Equipments",
  "Amiya Constructions",
];

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />

      <section className="trust-strip">
        <div className="container trust-inner">
          <strong>Our Customers</strong>
          <div className="customer-names">
            <div className="customer-track">
              {customers.map((name) => (
                <span key={name}>{name}</span>
              ))}
              {customers.map((name) => (
                <span key={`dup-${name}`} aria-hidden="true">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section divisions-section">
        <div className="container">
          <h2 className="divisions-title">Projects & Divisions</h2>

          <div className="cards">
            {/* Electrical Works */}
            <article className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage:
                    "url('/assets/home-photos/electrical-works.jpg.jpg')",
                }}
              />
              <div className="card-body">
                <h3>Electrical Works</h3>
                <p>
                  Electrical infrastructure, power-station establishment and
                  installation of electric poles, including work in remote
                  locations.
                </p>
                <Link className="text-link" href="/electrical-works">
                  Explore electrical works →
                </Link>
              </div>
            </article>

            {/* Civil Construction */}
            <article className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage:
                    "url('/assets/home-photos/civil-jcb.jpg.jpg')",
                }}
              />
              <div className="card-body">
                <h3>Civil Construction</h3>
                <p>
                  Building construction and infrastructure works, including
                  installation of underground water pipelines.
                </p>
                <Link className="text-link" href="/civil-works">
                  Explore civil works →
                </Link>
              </div>
            </article>

            {/* SAM AI Technologies - Direct External Website */}
            <article className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage:
                    "url('/assets/home-photos/industry-banner.jpeg.jpeg')",
                }}
              />
              <div className="card-body">
                <h3>SAM AI Technologies — Automation & Automobile R&D</h3>
                <p>
                  Industrial automation, robotics, and applied R&D for
                  intelligent manufacturing.
                </p>

                <a
                  className="text-link"
                  href="https://samai.mascotmellowpowerproject.com/"
                >
                  Explore R&D →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft about-section">
        <div className="container split">
          <div>
            <div className="eyebrow">
              About Mascot Mellow Power Project
            </div>

            <h2>Engineering Experience. Intelligent Innovation.</h2>

            <p className="muted">
              With two decades of experience in civil construction and
              electrical works, Mascot Mellow Power Project delivers practical
              engineering solutions, including on-site execution in remote
              locations across India.
            </p>

            <p className="muted">
              Building on this foundation, we are expanding into smart
              automation and manufacturing technologies, developing products
              and solutions across Industrial Automation, Industrial Internet
              of Things (IIoT), Artificial Intelligence (AI), Robotics and
              Digital Twins. We also support academic skilling to help bridge
              the gap between engineering education and industry requirements.
            </p>

            <ul className="check-list">
              <li>Electrical infrastructure and field engineering</li>
              <li>Civil construction and water pipeline projects</li>
              <li>
                Smart manufacturing, Industrial Automation, IIoT, AI, Robotics
                and Digital Twins
              </li>
              <li>
                Product development, applied R&D and academic skilling
              </li>
            </ul>

            <Link className="btn" href="/about">
              Know our company
            </Link>
          </div>

          <div
            className="photo-panel"
            role="img"
            aria-label="Engineering and industrial work"
            style={{
              backgroundImage:
                "url('/assets/home-photos/transformers.jpg.jpg')",
            }}
          />
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Our technology direction</div>

            <h2>
              Connecting Infrastructure with Intelligent Systems.
            </h2>

            <p>
              Our Automation & Automobile R&D division works across industrial
              automation, smart manufacturing and emerging mobility concepts,
              combining practical engineering with the development of
              intelligent systems.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>Industrial Automation</strong>
              <span>
                Controls, integration and industrial systems.
              </span>
            </div>

            <div className="stat">
              <strong>IIoT, Robotics & AI/ML</strong>
              <span>
                Connected equipment, intelligent applications and
                data-driven systems.
              </span>
            </div>

            <div className="stat">
              <strong>Automobile R&D</strong>
              <span>
                ATVs, low-speed electric vehicles and autonomous vehicle
                concepts.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Have an Infrastructure or Technology Project?</h2>
              <div>
                Talk with the relevant division about your project
                requirements. Our team can help you identify the appropriate
                area of expertise.
              </div>
            </div>

            <Link className="btn light" href="/contact">
              Contact our team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
