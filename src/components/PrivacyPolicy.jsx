import React, { useEffect, useRef } from 'react';

function PrivacyPolicy() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Smooth scroll to the bottom of the content
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div
      ref={contentRef}
      className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg h-auto overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>Welcome to A2Z Premium Deals (“we”, “our”, “us”). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website [a2zpremiumdeals.com] (the “Site”) and use our services. By using our Site, you consent to the practices described in this policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>

        <h3 className="text-lg font-semibold mb-1">2.1 Personal Information</h3>
        <ul className="list-disc list-inside pl-5">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>Payment information (if applicable)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-1">2.2 Non-Personal Information</h3>
        <ul className="list-disc list-inside pl-5">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Time and date of visit</li>
          <li>Referring site</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-1">2.3 Cookies and Tracking Technologies</h3>
        <p>We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small data files placed on your device that help us remember your preferences and analyze how you use our Site. You can manage your cookie preferences through your browser settings.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside pl-5">
          <li>To provide, maintain, and improve our services</li>
          <li>To process transactions and send related information</li>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To personalize your experience on our Site</li>
          <li>To analyze and understand how you use our Site</li>
          <li>To send you promotional materials, if you have opted in</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. How We Share Your Information</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our Site, processing transactions, or providing customer support.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law, in response to a legal request, or to protect our rights and the safety of others.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Choices</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can request corrections to any inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> You can request the deletion of your personal information, subject to certain legal exceptions.</li>
          <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional emails from us by following the unsubscribe instructions provided in those emails.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Third-Party Links</h2>
        <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Children's Privacy</h2>
        <p>Our Site is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the Site after any changes constitutes your acceptance of the revised policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>Email:</strong> customercare@a2zpremiumdeals.com</li>
          <li><strong>Phone:</strong> +91 9902 331 774</li>
        </ul>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
