import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Mascot Mellow Power Project in Howrah, West Bengal for electrical, civil construction and automation enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Contact Us</div>
          <div className="eyebrow">Start a conversation</div>
          <h1>Contact our team</h1>
          <p>
            For electrical works, civil construction or Automation &
            Automobile R&D, contact the appropriate division or send an
            enquiry below.
          </p>
        </div>
      </section>
      <section className="section soft">
        <div className="container contact-grid">
          <div className="contact-card">
            <div className="eyebrow">Company details</div>
            <h2>Mascot Mellow Power Project</h2>
            <div className="contact-item">
              <strong>Address</strong>
              <span>
                15/4 Pk Roy Choudhary 2nd Bye Lane, B. Garden, Howrah, West
                Bengal 711103, India
              </span>
            </div>
            <div className="contact-item">
              <strong>Automation & Automobile Division</strong>
              <a href="tel:+919903932603">+91 99039 32603</a>
            </div>
            <div className="contact-item">
              <strong>Civil & Electrical Works</strong>
              <a href="tel:+919119616345">+91 91196 16345</a>
            </div>
            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:info@mascotmellowpowerproject.com">
                info@mascotmellowpowerproject.com
              </a>
            </div>
          </div>
          <div className="form-card">
            <div className="eyebrow">Project enquiry</div>
            <h2>How can we help?</h2>
            <p className="muted">
              Complete the fields below. Your email application will open with
              the enquiry prepared for sending.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
