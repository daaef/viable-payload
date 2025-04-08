import React from "react";
import ContactForm from "./form";
import Link from "next/link";
import FaqSubjects from "./faqsSubjects";
import { fetchFaqs } from "@/utils/payloadUtils";

export default async function ContactUs(this: any) {
  const faqs = await fetchFaqs();
  console.log(faqs);

  return (
    <main>
      <div>
        <div className="md:px-24 px-12 md:py-10 sm:py-8 py-5 relative isolate bg-cover bg-[url('/banners/contact-us.webp')]">
          <h1 className="text-white text-bold">Contact Us</h1>
          <h3 className="text-white pl-1 md:pl-2 text-bold">
            We love to hear from you
          </h3>
        </div>

        <div
          className="flex flex-col justify-center pl-8 md:pl-24 mt-2 md:mt-48 pr-8 md:pr-24 w-full md:w-6/12 px-4 md:px-8 pt-4 md:pt-6 mb-4 md:mb-8"
          style={{ order: 2 }}
        >
          <p className="text-lightGreen900">
            We are an international organization that operates asynchronously
            and primarily online. Our team is largely based in and around The
            Hague, where we utilize pop-up meeting spaces for in-person
            collaboration.
          </p>
          <p className="text-lightGreen900 mt-3">
            We are always looking for passionate individuals and organizations
            like you. Whether you&apos;d like to volunteer your skills, share a
            groundbreaking project idea, explore a potential partnership, or
            contribute financially through investment, funding, or a donation,
            we welcome you to join our movement.
            <br></br>
            <br></br>
            <span>Reach out to us via</span>
            <Link
              href="mailto:info@viable.community"
              className="hover:bg-lightGreen hover:text-green"
            >
              {" "}
              info@viable.community
            </Link>{" "}
            or fill out our contact form. We&apos;ll be happy to connect and
            discuss how you can make a difference!
          </p>
          <ul className="list-disc pl-8 pb-6 text-lightGreen900 mt-12">
            <li>RSIN: 863633067</li>
            <li>KVK: 85465941</li>
            <li>BTWID: NL863633067B01</li>
            <li>IBAN: NL86 TRIO 0320 4169 41</li>
          </ul>
          <p className="text-lightGreen900 mt-3">
            Viable is a Dutch-registered foundation with
            <Link
              href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/bijzondere_regelingen/goede_doelen/algemeen_nut_beogende_instellingen/welke_belastingvoordelen_heeft_een_anbi"
              target="_blank"
              className="hover:bg-lightGreen hover:text-green"
            >
              ANBI
            </Link>
            status, meaning we are recognized for serving the public benefit and
            enjoy certain tax advantages
          </p>
        </div>

        <div
          className="float-right flex items-start w-full md:w-6/12 px-4 pl-4 md:pl-4 md:px-8 md:mb-4 md:mt-5 mt-0 md:ml-0 ml-auto "
          style={{ marginTop: "-26rem" }}
        >
          <div className="bg-white md:p-4 max-w-2xl md:w-[607] rounded-lg mt-[28rem] md:mt-0">
            <ContactForm />
          </div>
        </div>

        <div className="pl-8 md:pl-24 md:mt-16 pr-8 md:pr-24 w-full md:w-6/12 px-4 md:px-8 pt-4 md:pt-6 mb-2 md:mb-4">
          <h3 className="pt-4 md:pt-4 lg:pt-8 text-lightGreen900">
            Post Address
          </h3>
          <p className="pb-6">
            Duinweg 17, 1935 EZ, Egmond-Binnen, The Netherlands
          </p>
          <h3 className="pt-4 md:pt-4 lg:pt-8 text-lightGreen900">
            We operate mainly in
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19617.37712667901!2d4.290073900852366!3d52.07659615467261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72c4e1fc797%3A0x3187c309df606953!2sThe%20Hague%20Center%2C%20The%20Hague!5e0!3m2!1sen!2snl!4v1722366134633!5m2!1sen!2snl"
            width="600"
            height="450"
            className="w-full h-64 md:h-72 lg:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <FaqSubjects faqs={faqs} />
      </div>
    </main>
  );
}
