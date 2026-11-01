import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              <span className="brand-mark">MMPP</span>
              <span className="brand-name">Mascot Mellow Power Project</span>
            </Link>
            <p>
              Engineering, infrastructure and technology solutions spanning
              electrical works, civil construction, and Industry 4.0 innovation.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <Link href="/about">About Us</Link>
              <Link href="/divisions">Projects & Division</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="mailto:info@mascotmellowpowerproject.com">
                info@mascotmellowpowerproject.com
              </a>
              <a href="tel:+919903932603">
                Automation & Automobile: +91 99039 32603
              </a>
              <a href="tel:+919119616345">
                Civil & Electrical: +91 91196 16345
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>
            © <span id="year">{new Date().getFullYear()}</span> Mascot Mellow
            Power Project. All rights reserved.
          </span>
          <span>Built for engineering and industry.</span>
        </div>
      </div>
    </footer>
  );
}
