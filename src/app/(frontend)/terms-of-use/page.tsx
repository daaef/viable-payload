import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main>
      <div
        className="relative isolate bg-[var(--light-green-100-rgb)] py-12 px-40 
                        mx-auto max-w-[50rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-[var(--light-green-800-rgb)] hover:prose-a:text-[var(--light-green-900-rgb)]"
      >
        <h1 className="text-center">Terms and Conditions</h1>
        <h2>1. General</h2>
        <p>
          1.1 These terms and conditions apply to the website and all services
          of Stichting Viable Community, located at Duinweg 17, 1935EZ,
          Egmond-binnen, Netherlands, registered with the Chamber of Commerce
          under number 85465941.
        </p>
        <p>
          1.2 Stichting Viable Community is an ANBI (Algemeen Nut Beogende
          Instelling) and focuses on preserving and regenerating ecosystems
          through efficient resource allocation and community collaboration to
          identify, develop, organize, and implement initiatives that focus on
          co-ownership, co-working, knowledge sharing, and promoting
          sustainability.
        </p>
        <h2>2. Objectives and Activities</h2>
        <p>
          2.1 Stichting Viable Community aims to preserve and regenerate
          ecosystems through efficient resource allocation and community
          collaboration to identify, develop, organize, and implement
          initiatives that focus on co-ownership, co-working, knowledge sharing,
          and promoting sustainability.
        </p>
        <p>
          2.2 All activities and projects are carried out in accordance with the
          statutes of the foundation and applicable legal regulations.
        </p>
        <h2>3. Donations and Funding</h2>
        <p>
          3.1 Donations to Stichting Viable Community are voluntary and are used
          for the purposes described in article 2.1.
        </p>
        <p>
          3.2 Stichting Viable Community is committed to transparent and
          responsible spending of received donations.
        </p>
        <p>
          3.3 Donors cannot reclaim their donations, unless there is a legal
          obligation to do so.
        </p>
        <h2>4. Intellectual Property</h2>
        <p>
          4.1 All content on this website, including texts, images, logos, and
          other materials, are the property of Stichting Viable Community or its
          licensors and are protected by copyright and other intellectual
          property rights.
        </p>
        <p>
          4.2 It is not permitted to copy, distribute, or otherwise use the
          content of the website without prior written permission from Stichting
          Viable Community.
        </p>
        <h2>5. Privacy Policy</h2>
        <p>
          5.1 Stichting Viable Community respects the privacy of all users of
          the website and handles personal information confidentially and in
          accordance with the General Data Protection Regulation (GDPR).
        </p>
        <p>
          5.2 Please refer to our privacy policy for more information on how we
          collect, use, and protect your personal data.
        </p>
        <h2>6. Liability</h2>
        <p>
          6.1 Stichting Viable Community strives to keep the content of the
          website current and accurate, but cannot be held liable for
          inaccuracies or omissions.
        </p>
        <p>
          6.2 Stichting Viable Community is not liable for any damages resulting
          from the use of the website or the inability to use the website.
        </p>
        <h2>7. Amendments</h2>
        <p>
          7.1 Stichting Viable Community reserves the right to amend these terms
          and conditions at any time. Changes will be published on the website
          and will take effect from the time of publication.
        </p>
        <p>
          7.2 It is the responsibility of the user to regularly check the terms
          and conditions for changes.
        </p>
        <h2>8. Applicable Law</h2>
        <p>8.1 These terms and conditions are governed by Dutch law.</p>
        <p>
          8.2 Disputes arising from or related to these terms and conditions
          will be submitted to the competent court in the district where
          Stichting Viable Community is located.
        </p>
        <h2>Contact Information</h2>
        <p>
          For more information or questions about these terms and conditions,
          please contact us:
        </p>
        <ul>
          <li>Name: Stichting Viable Community</li>
          <li>
            Primary Address: Duinweg 17, 1935EZ, Egmond-binnen, Netherlands
          </li>
          <li>Headquarters: The Hague, Netherlands</li>
          <li>
            Email:{" "}
            <Link
              href="mailto:info@viable.community?subject=Terms of use&body=Hello, about the terms of use...."
              className="hover:bg-lightGreen hover:text-green"
            >
              Info@Viable.community
            </Link>
          </li>
          <li>
            Telephone: <Link href="tel:+31644444247">+316 44444247</Link> /{" "}
            <Link href="tel:+31614243406">+316 142434 06</Link>
          </li>
          <li>RSIN: 863633067</li>
          <li>KVK (Chamber of Commerce): 85465941</li>
          <li>BTW: NL863633067B01</li>
          <li>IBAN: NL86 TRIO 0320 4169 41</li>
          <li>Spanish NIF: N0271966D</li>
        </ul>
      </div>
    </main>
  );
}
