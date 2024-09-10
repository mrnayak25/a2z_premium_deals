import React, { useEffect, useRef } from 'react';

function TermsAndConditions() {
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
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <ul className="list-disc list-inside pl-5">
          <li>Welcome to a2zpremiumdeals.com (the "Website"). By accessing or using our Website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our Website.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Definitions</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>"Website":</strong> refers to ‘A2Z Premium Deals’ and all its associated content and services.</li>
          <li><strong>"User":</strong> refers to any individual or entity accessing or using the Website, including buyers, sellers, agents, builders, and brokers.</li>
          <li><strong>"Content":</strong> includes all information, text, graphics, images, and other materials available on the Website.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Use of the Website</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>Permitted Use:</strong> You may use the Website for lawful purposes only and in accordance with these Terms and Conditions. You agree not to use the Website for any illegal or unauthorized activities.</li>
          <li><strong>Prohibited Activities:</strong> You may not:
            <ul className="list-disc list-inside pl-5">
              <li>Post false or misleading information.</li>
              <li>Engage in any form of harassment or abuse.</li>
              <li>Attempt to gain unauthorized access to any part of the Website or its systems.</li>
              <li>Use automated systems or software to scrape or harvest data from the Website.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Property Listings</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>Accuracy of Information:</strong> We strive to provide accurate and up-to-date property listings. However, we do not guarantee the accuracy, completeness, or reliability of any property information. Users are encouraged to verify information independently.</li>
          <li><strong>User-Generated Content:</strong> Users may submit property listings and related content. By submitting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute such content.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>Ownership:</strong> All content and materials on the Website are the property of A2Z Premium Deals or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.</li>
          <li><strong>User Content:</strong> You retain ownership of the content you submit but grant us the right to use it as described in these Terms and Conditions.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>External Sites:</strong> The Website may contain links to third-party websites. We are not responsible for the content or practices of these third-party sites. Accessing third-party sites is at your own risk, and you should review their privacy policies and terms of service.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>No Warranty:</strong> The Website is provided "as is" and "as available" without any warranties, express or implied. We do not warrant that the Website will be error-free or uninterrupted.</li>
          <li><strong>Limitation of Liability:</strong> We are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Website or inability to use it, including but not limited to loss of profits, data, or other intangible losses.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Indemnification</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>Indemnification:</strong> You agree to indemnify and hold A2Z Premium Deals, its affiliates, and their respective officers, directors, employees, and agents harmless from any claims, liabilities, damages, losses, or expenses arising out of or related to your use of the Website, your violation of these Terms and Conditions, or your infringement of any intellectual property or other rights of any person or entity.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Termination</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>Termination Rights:</strong> We reserve the right to terminate or suspend your access to the Website at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users or the Website.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
        <ul className="list-disc list-inside pl-5">
          <li><strong>Governing Law:</strong> These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction where A2Z Premium Deals operates. Any disputes arising out of or related to these terms or your use of the Website shall be resolved in the courts located in that jurisdiction.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Changes to Terms and Conditions</h2>
        <ul className="list-disc list-inside pl-5">
          <li>We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the Website after such changes constitutes your acceptance of the revised terms.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">12. Contact Information</h2>
        <ul className="list-disc list-inside pl-5">
          <li>If you have any questions or concerns about these Terms and Conditions, please contact us at: <strong>Email:</strong> Customercare@a2zpremiumdeals.com or <strong>Phone:</strong> 9902331774.</li>
        </ul>
      </section>
    </div>
  );
}

export default TermsAndConditions;
