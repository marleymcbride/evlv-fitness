export default function HomePage() {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px", color: "#111", lineHeight: "1.6" }}>
      {/* Header */}
      <header>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "4px" }}>
          EVLV FITNESS LLC
        </h1>
        <p style={{ margin: "0 0 10px 0" }}>Official Business Information &amp; Corporate Portal</p>
        <p style={{ margin: 0, fontSize: "14px" }}>
          Entity: EVLV FITNESS LLC (Operating as: EVLV Fitness)
        </p>
      </header>

      <hr style={{ margin: "20px 0", borderTop: "1px solid #999" }} />

      {/* 1. Company Information */}
      <section>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: "16px 0 8px 0" }}>
          1. Company Information
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "10px 0" }}>
          <tbody>
            <tr>
              <td style={{ padding: "6px 0", width: "220px", verticalAlign: "top" }}>Registered Entity Name:</td>
              <td style={{ padding: "6px 0" }}>EVLV FITNESS LLC</td>
            </tr>
            <tr>
              <td style={{ padding: "6px 0", verticalAlign: "top" }}>Operating / Trading As:</td>
              <td style={{ padding: "6px 0" }}>EVLV Fitness</td>
            </tr>
            <tr>
              <td style={{ padding: "6px 0", verticalAlign: "top" }}>Primary Contact Email:</td>
              <td style={{ padding: "6px 0" }}>
                <a href="mailto:support@evlv.fitness">support@evlv.fitness</a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "6px 0", verticalAlign: "top" }}>Contact between:</td>
              <td style={{ padding: "6px 0" }}>Monday – Friday, 09:00 – 17:00 UTC</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

      {/* 2. Products, Services & Pricing */}
      <section>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: "16px 0 8px 0" }}>
          2. Products, Services &amp; Pricing
        </h2>
        <p>
          EVLV FITNESS LLC provides fitness coaching, athletic conditioning, and wellness consultation products and services, ranging from £100 – £5,000 depending on client requirements, duration, and program scope.
        </p>
        <p>
          Custom service scopes, session frequency, and finalized fees are formally agreed upon prior to invoicing and payment processing.
        </p>
      </section>

      <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

      {/* 3. Product & Service Inquiries */}
      <section>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: "16px 0 8px 0" }}>
          3. Product &amp; Service Inquiries
        </h2>
        <p>
          Delivering online programs and lifestyle health coaching offerings, as seen at:{" "}
          <a href="https://limitless-life.co" target="_blank" rel="noopener noreferrer">
            https://limitless-life.co
          </a>
        </p>
        <p>
          For bespoke client onboarding, private consultation, or corporate inquiries, please email us directly at{" "}
          <a href="mailto:support@evlv.fitness">support@evlv.fitness</a>.
        </p>
      </section>

      <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

      {/* 4. Cancellation & Refund Policy */}
      <section>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: "16px 0 8px 0" }}>
          4. Cancellation &amp; Refund Policy
        </h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>
            No Refund Policy: All purchases, program fees, and coaching payments are strictly non-refundable. Due to the bespoke nature of coaching, scheduling allocations, and digital materials, EVLV FITNESS LLC operates a strict no-refund policy once payment is received.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Recurring Agreement Cancellations: Clients may cancel recurring coaching agreements at any time by emailing <a href="mailto:support@evlv.fitness">support@evlv.fitness</a> prior to their next scheduled renewal date to prevent future charges. Previous payments and active billing periods remain non-refundable.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Appointment Rescheduling: Confirmed consultation sessions may be rescheduled with at least 24 hours advance notice. Cancellations made with less than 24 hours notice or missed sessions are non-refundable and forfeited.
          </li>
        </ul>
      </section>

      <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

      {/* 5. Terms, Delivery & Payment Security */}
      <section>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: "16px 0 8px 0" }}>
          5. Terms, Delivery &amp; Security
        </h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>
            Nature of Services: EVLV FITNESS LLC provides physical fitness instruction, coaching, and health consultation. Services do not replace licensed medical advice, diagnosis, or clinical therapy.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Delivery Policy: All coaching programs, training schedules, and consultations are delivered electronically (via scheduled virtual calls, electronic documentation, and direct email communication). Initial onboarding commences within 1–2 business days of agreement.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Payment Security &amp; Data Protection: Card transactions are processed securely through certified, PCI-DSS compliant payment gateways with SSL encryption. EVLV FITNESS LLC does not capture or store full card numbers on its servers. Client data is handled strictly in accordance with consumer privacy standards.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Export Restrictions: Services consist of digital and professional consulting. No physical merchandise is exported.
          </li>
        </ul>
      </section>

      <hr style={{ margin: "20px 0", borderTop: "1px solid #999" }} />

      {/* Footer */}
      <footer style={{ fontSize: "13px", color: "#666", paddingBottom: "40px" }}>
        <p style={{ margin: "4px 0" }}>
          © {new Date().getFullYear()} EVLV FITNESS LLC (operating as EVLV Fitness). All rights reserved.
        </p>
        <p style={{ margin: "4px 0" }}>
          Physical Address: 10 The Grn, Dover, Delaware 19901, United States | Contact: <a href="mailto:support@evlv.fitness">support@evlv.fitness</a>
        </p>
      </footer>
    </div>
  );
}
