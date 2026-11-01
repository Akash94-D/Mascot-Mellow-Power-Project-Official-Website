
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mascot Mellow Power Project, its infrastructure experience, management and technical team.",
};

const leadership = [
  {
    img: "/assets/team/n-n-dubey.jpeg",
    alt: "N. N. Dubey",
    name: "N. N. Dubey",
  },
  {
    img: "/assets/team/s-p-dubey.jpeg",
    alt: "S. P. Dubey",
    name: "S. P. Dubey",
  },
  {
    img: "/assets/team/akash-dubey.jpeg",
    alt: "Akash Dubey",
    name: "Akash Dubey",
  },
];

const consultants = [
  {
    img: "/assets/team/accountant.jpeg",
    alt: "Finance",
    name: "Finance",
    role: "",
  },
  {
    img: "/assets/team/civil-project-manager.jpeg",
    alt: "Civil Project Manager",
    name: "Project Manager",
    role: "Civil Works",
  },
  {
    img: "/assets/team/electrical-project-manager.jpeg",
    alt: "Electrical Project Manager",
    name: "Project Manager",
    role: "Electrical Works",
  },
  {
    img: "/assets/team/s-k-rahmat.jpeg",
    alt: "Sk Rehmat",
    name: "Sk Rehmat",
    role: "Technical Consultant — Project Management, Automation & Automobile Division",
  },
  {
    img: "/assets/team/ardhendhu-ghosh.jpeg",
    alt: "Ardhendh Ghosh",
    name: "Ardhendh Ghosh",
    role: "Technical Consultant — Mechanical Design, Automation & Automobile Division",
  },
  {
    img: "/assets/team/afaq-ahmad.jpeg",
    alt: "Afaq Ahmad",
    name: "Afaq Ahmad",
    role: "Technical Consultant — Software Development, Automation & Automobile Division",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* About page banner */}
      <section
        className="page-hero"
        style={{ background: "none", padding: 0 }}
      >
        <img
          src="/assets/home-photos/about-collage.png.png"
          alt="Mascot Mellow Power Project industrial collage"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </section>

      {/* Company Introduction */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Our company</div>

            <h2>
              Infrastructure expertise with a growing technology focus.
            </h2>

            <p className="muted">
              Our company credentials identify three main sectors: electrical
              works, civil construction, and Automation & Automobile Research
              and Development. SAM AI Technologies is the Automation &
              Automobile R&D unit of Mascot Mellow Power Project. These areas
              bring together on-ground infrastructure execution and
              technology-led development.
            </p>

            <h3>Sectors in which we work</h3>

            <ul className="check-list">
              <li>
                Establishment of electrical power-stations and installation
                of electric poles in remote villages
              </li>
              <li>
                Building construction and installation of underground water
                pipelines
              </li>
              <li>Automation and automobile product development</li>
              <li>Skilling programmes for academic institutions</li>
            </ul>
          </div>

          <div
            className="photo-panel"
            role="img"
            aria-label="Engineering and industrial work collage"
            style={{
              backgroundImage:
                "url('/assets/home-photos/about-collage.png.png')",
            }}
          />
        </div>
      </section>

      {/* Leadership - Names and Photos Only */}
      <section className="section soft">
        <div className="container">
          <div className="section-heading">
            <h2>Leadership</h2>
            <p>
              Meet the leadership team behind our engineering, infrastructure
              and technology projects.
            </p>
          </div>

          <div className="team-grid">
            {leadership.map((person) => (
              <article
                key={person.name}
                className="person person--photo"
              >
                <div className="person-photo">
                  <img src={person.img} alt={person.alt} />
                </div>

                <div className="person-info">
                  <h3>{person.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Team */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Consulting Team</h2>
            <p>
              A multidisciplinary team supporting finance, site execution,
              project management, mechanical design and software development.
            </p>
          </div>

          <div className="team-grid">
            {consultants.map((person) => (
              <article
                key={person.alt}
                className="person person--consult"
              >
                <div className="consult-photo">
                  <img src={person.img} alt={person.alt} />
                </div>

                <div className="person-info">
                  <h3>{person.name}</h3>
                  {person.role ? <p>{person.role}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section soft">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Let’s discuss your project requirements.</h2>
              <div>
                Contact the team for infrastructure, automation or R&D
                enquiries.
              </div>
            </div>

            <Link className="btn light" href="/contact">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
