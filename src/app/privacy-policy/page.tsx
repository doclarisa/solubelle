import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Solubelle®',
  description: "Solubelle's privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: 'https://solubelle.com/privacy-policy' },
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '2.5rem',
};

const headingStyle: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  fontSize: '1.15rem',
  color: '#1a1a1a',
  marginBottom: '0.75rem',
};

const paraStyle: React.CSSProperties = {
  color: '#374151',
  lineHeight: 1.85,
  marginBottom: '1rem',
  fontSize: '0.975rem',
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      {/* Header */}
      <section style={{ background: '#f9fafb', padding: '4rem 0 3rem', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container-max">
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#1a1a1a', marginBottom: '0.75rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container-max">
          <div style={{ maxWidth: 760 }}>

            <p style={{ ...paraStyle, marginBottom: '2.5rem', fontSize: '1.05rem', color: '#4b5563' }}>
              This Privacy Policy describes how Solubelle ("we," "us," or "our") collects, uses, and protects information when you visit our website at solubelle.com or interact with our services. We are committed to protecting your privacy and being transparent about our data practices.
            </p>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>1. Information We Collect</h2>
              <p style={paraStyle}><strong>Information you provide directly:</strong> When you fill out a contact form, request samples, or submit a wholesale inquiry, we collect the information you provide — such as your name, email address, business name, phone number, and message content.</p>
              <p style={paraStyle}><strong>Automatically collected information:</strong> When you visit our website, we automatically collect certain technical information including your IP address, browser type, operating system, referring URL, pages visited, and time spent on pages. This information is collected via cookies and similar tracking technologies.</p>
              <p style={paraStyle}><strong>Email communications:</strong> If you sign up for our email list, we collect your email address and any preferences you indicate.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>2. How We Use Your Information</h2>
              <p style={paraStyle}>We use the information we collect to:</p>
              <ul style={{ color: '#374151', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem', fontSize: '0.975rem' }}>
                <li>Respond to your inquiries and fulfill sample or order requests</li>
                <li>Send you product updates, promotional offers, and company news (only if you have opted in)</li>
                <li>Process wholesale applications and maintain retailer accounts</li>
                <li>Improve our website content and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p style={paraStyle}>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>3. Cookies</h2>
              <p style={paraStyle}>We use cookies — small text files stored on your device — to improve your browsing experience and analyze site traffic. Cookies we use include:</p>
              <ul style={{ color: '#374151', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem', fontSize: '0.975rem' }}>
                <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics cookies:</strong> Used by Google Analytics to help us understand how visitors use our site</li>
                <li><strong>Preference cookies:</strong> Store your choices and settings</li>
              </ul>
              <p style={paraStyle}>You can control cookies through your browser settings. Disabling cookies may affect some website functionality. Most browsers allow you to refuse cookies or delete them at any time.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>4. Third-Party Services</h2>
              <p style={paraStyle}><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic and user behavior. Google Analytics collects data such as pages visited, session duration, and geographic location (at city level). This data is processed by Google in accordance with their Privacy Policy. You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#1A7DC4', textDecoration: 'none' }}>Google Analytics Opt-out Browser Add-on</a>.</p>
              <p style={paraStyle}><strong>Formspree:</strong> Our contact and inquiry forms use Formspree to process form submissions. Submitted data is transmitted to Formspree's servers and forwarded to our email. See Formspree's privacy policy for details on their data handling.</p>
              <p style={paraStyle}><strong>Email service providers:</strong> We may use third-party email platforms (such as Mailchimp or Klaviyo) to send marketing emails to subscribers. These platforms process your email address in accordance with their respective privacy policies.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>5. Data Retention</h2>
              <p style={paraStyle}>We retain your personal information only as long as necessary for the purposes described in this policy, or as required by law. Contact form submissions are retained for up to 2 years. Email subscriber data is retained until you unsubscribe. Analytics data is retained per Google Analytics' default retention periods.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>6. Your Rights</h2>
              <p style={paraStyle}>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul style={{ color: '#374151', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem', fontSize: '0.975rem' }}>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request that we delete your personal data</li>
                <li><strong>Objection:</strong> Object to our processing of your personal data</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing emails at any time via the unsubscribe link in any email</li>
              </ul>
              <p style={paraStyle}>To exercise any of these rights, contact us at <a href="mailto:hello@solubelle.com" style={{ color: '#1A7DC4', textDecoration: 'none' }}>hello@solubelle.com</a>.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>7. Children's Privacy</h2>
              <p style={paraStyle}>Our website is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>8. Security</h2>
              <p style={paraStyle}>We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses HTTPS encryption for data transmission. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of data transmitted to us.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>9. Changes to This Policy</h2>
              <p style={paraStyle}>We may update this Privacy Policy from time to time. When we do, we will revise the "last updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website following any changes constitutes your acceptance of the updated policy.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={headingStyle}>10. Contact</h2>
              <p style={paraStyle}>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div style={{ background: '#f9fafb', borderRadius: 10, padding: '1.5rem', border: '1px solid #e5e7eb' }}>
                <p style={{ ...paraStyle, margin: 0, lineHeight: 2 }}>
                  <strong>Solubelle</strong><br />
                  Email: <a href="mailto:hello@solubelle.com" style={{ color: '#1A7DC4', textDecoration: 'none' }}>hello@solubelle.com</a><br />
                  Website: <a href="https://solubelle.com" style={{ color: '#1A7DC4', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">solubelle.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
