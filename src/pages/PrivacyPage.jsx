export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#09090b', color: '#fafafa', fontFamily: 'Inter, sans-serif' }}>

      {/* NAVBAR */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: '#09090b', borderBottom: '1px solid #27272a',
        padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <a href="/" style={{ fontWeight: 700, fontSize: '18px', color: '#fafafa', textDecoration: 'none' }}>
          Zen Miraculous
        </a>
        <a href="/" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
          ← Back to Home
        </a>
      </nav>

      {/* CONTENT */}
      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 24px 100px' }}>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, marginBottom: '8px' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '48px' }}>
          Last updated: July 25, 2026
        </p>

        {[
          {
            title: '1. Introduction',
            content: `Zen Miraculous ("we," "us," or "our") operates the website at zenmiraculous.com and related landing pages (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with this policy.`,
          },
          {
            title: '2. Information We Collect',
            content: `We collect information you provide directly to us when you complete our lead capture form, including:

• Full name
• Business email address
• Phone number
• Business type / industry
• Biggest lead challenge (optional)
• Marketing consent and timestamp

We also automatically collect technical data such as UTM parameters (utm_source, utm_medium, utm_campaign, utm_term, utm_content), Google Click ID (gclid), Facebook Click ID (fbclid), and the URL of the page you visited. This data helps us understand which advertising campaigns are generating leads.`,
          },
          {
            title: '3. How We Use Your Information',
            content: `We use the information we collect to:

• Respond to your inquiry and deliver the free AI system audit you requested
• Contact you by phone, SMS, or email regarding your inquiry
• Send automated follow-up messages via AI voice assistant, SMS, or email (where you have provided express written consent)
• Improve our advertising campaigns and measure conversion performance
• Comply with legal obligations`,
          },
          {
            title: '4. Communications & Automated Technology',
            content: `By checking the consent checkbox on our form, you expressly agree to receive calls, texts, and emails from Zen Miraculous regarding your inquiry, including via automated dialling technology and AI voice assistant. Consent is not a condition of purchase.

You may opt out of SMS communications at any time by replying STOP. You may opt out of email communications by clicking the unsubscribe link in any email we send.

Message and data rates may apply.`,
          },
          {
            title: '5. Sharing Your Information',
            content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except:

• Service providers who assist us in operating our website and delivering our services (e.g., Formspree for form processing, Calendly for appointment booking, CRM platforms such as GoHighLevel or HubSpot)
• When required by law, regulation, or legal process
• To protect the rights, property, or safety of Zen Miraculous, our clients, or others

All third-party service providers are contractually required to keep your information confidential and use it only for the purposes we specify.`,
          },
          {
            title: '6. Data Retention',
            content: `We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Consent records are stored indefinitely for legal compliance purposes. You may request deletion of your data at any time by contacting us.`,
          },
          {
            title: '7. Data Security',
            content: `We implement industry-standard security measures including 256-bit SSL encryption, access controls, and regular security audits to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.`,
          },
          {
            title: '8. Your Rights (GDPR / CCPA)',
            content: `Depending on your location, you may have the following rights regarding your personal data:

• Right to access — request a copy of the personal data we hold about you
• Right to rectification — request correction of inaccurate data
• Right to erasure ("right to be forgotten") — request deletion of your data
• Right to restrict processing — request that we limit how we use your data
• Right to data portability — receive your data in a structured, machine-readable format
• Right to object — object to our processing of your personal data
• Right to opt out of sale — California residents may opt out of the sale of personal information (we do not sell personal data)

To exercise any of these rights, please contact us at the details below.`,
          },
          {
            title: '9. Cookies & Tracking Technologies',
            content: `We use cookies and similar tracking technologies (including Meta Pixel and Google Analytics) to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, you may not be able to use some portions of our Service.`,
          },
          {
            title: '10. TCPA Compliance',
            content: `Zen Miraculous complies with the Telephone Consumer Protection Act (TCPA). We only contact leads by automated dialling or AI voice assistant where express written consent has been obtained via our web form. Consent records include the consent text shown, the IP address, and the exact timestamp of consent.`,
          },
          {
            title: '11. Changes to This Privacy Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.`,
          },
          {
            title: '12. Contact Us',
            content: `If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:

Zen Miraculous AI
Email: hello@zenmiraculous.com
Calendly: calendly.com/harshvyas242424/business-automation-audit`,
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#fafafa', marginBottom: '12px' }}>
              {section.title}
            </h2>
            {section.content.split('\n').map((line, i) => (
              line.trim() === '' ? null :
              <p key={i} style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.8, marginBottom: '8px' }}>
                {line}
              </p>
            ))}
          </div>
        ))}

        <div style={{ borderTop: '1px solid #27272a', paddingTop: '32px', marginTop: '48px' }}>
          <a
            href="/"
            style={{
              display: 'inline-block',
              background: '#f59e0b',
              color: '#1c1917',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            ← Back to Home
          </a>
        </div>

      </main>

      <footer style={{
        borderTop: '1px solid #27272a', padding: '24px',
        textAlign: 'center', color: '#52525b', fontSize: '13px',
      }}>
        © 2026 Zen Miraculous. All rights reserved.
      </footer>
    </div>
  );
}
