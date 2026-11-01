"use client";

export default function ContactForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const division = (d.get("division") as string) || "";
    const subject = encodeURIComponent(
      "Website enquiry: " + (division || "General enquiry")
    );
    const body = encodeURIComponent(
      "Name: " +
        d.get("name") +
        "\nCompany: " +
        ((d.get("company") as string) || "Not provided") +
        "\nEmail: " +
        d.get("email") +
        "\nPhone: " +
        ((d.get("phone") as string) || "Not provided") +
        "\nDivision: " +
        (division || "Not specified") +
        "\n\nMessage:\n" +
        d.get("message")
    );
    window.location.href =
      "mailto:info@mascotmellowpowerproject.com?subject=" +
      subject +
      "&body=" +
      body;
  };

  return (
    <form data-contact-form onSubmit={onSubmit}>
      <div className="form-row">
        <div>
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
          />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <label htmlFor="division">Area of interest</label>
      <select id="division" name="division" defaultValue="Electrical Works">
        <option value="Electrical Works">Electrical Works</option>
        <option value="Civil Construction">Civil Construction</option>
        <option value="Automation & Automobile R&D">
          Automation & Automobile R&D
        </option>
        <option value="General enquiry">General enquiry</option>
      </select>
      <label htmlFor="message">Project details *</label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Tell us briefly about your requirements..."
      />
      <p className="form-note">
        This form uses your device’s email application; it does not store
        submissions on a server.
      </p>
      <button className="btn" type="submit">
        Prepare email enquiry →
      </button>
    </form>
  );
}
