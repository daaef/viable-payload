"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ViableButton from "./viable-button";

export const externalDonateURL = process.env
  .NEXT_PUBLIC_EXTERNAL_DONATE_URL as string;

export default function Footer() {
  return (
    <footer className="">
      {/* <div
        className="py-12 flex justify-start items-start flex-col text-start md:flex-row md:justify-center md:items-center"
        style={{
          background: "var(--green-700-rgb)",
          color: "var(--light-green-200-rgb)",
        }}
      >
        <FooterNewsletter />
      </div> */}

      <div
        className="py-6 flex justify-start items-start flex-col text-start md:flex-row md:justify-center md:items-center"
        style={{
          background: "var(--orange-900-rgb)",
          color: "var(--light-green-200-rgb)",
        }}
      >
        <FooterGeneral />
      </div>

      <div
        className="py-2 flex justify-start items-start md:justify-center md:items-center place-content-center"
        style={{
          background: "var(--light-green-500-rgb)",
          color: "var(--orange-900-rgb)",
        }}
      >
        <FooterInfo />
      </div>
    </footer>
  );
}

function FooterNewsletter() {
  const [email, setEmail] = React.useState("");
  const [emailErr, setEmailErr] = React.useState(false);

  const handleSubmit = () => {
    alert(`Thank you, your email is: ${email}`);
  };

  return (
    <div className="mx-6 sm:mx-16 max-w-7xl flex flex-1 flex-col justify-start items-start md:flex-row md:space-x-16 ">
      <div className="flex flex-1">
        <div className="max-w-sm min-w-80 text-xl text-left justify-start">
          <p>Sign up to our seasonal newsletter and stay connected</p>
        </div>
      </div>

      <div className="md:ml-0  flex-1 flex flex-col justify-start">
        <div className="flex flex-row">
          <form className="space-x-2 flex items-center" onSubmit={handleSubmit}>
            <input
              className="w-60 border-lightGray rounded text-gray-500 h-8 p-2"
              type="email"
              value={email}
              placeholder={"Your email*"}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button
              className="bg-transparent  text-white font-semibold  py-2 px-2 border border-white 
            hover:border-transparent hover:bg-white hover:text-lime-800
            rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </form>
        </div>

        <div className="text-xs text-left pt-4 min-w-max">
          <a className="flex flex-row items-center max-w-max" href="">
            <p>Check last newsletter</p>
            <button className="bg-transparent font-semibold px-1 hover:border-transparent rounded-full">
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 0.48 0.48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.166 0.114A0.021 0.021 0 0 1 0.195 0.085l0.133 0.133a0.032 0.032 0 0 1 0 0.043L0.195 0.394A0.021 0.021 0 0 1 0.166 0.365L0.291 0.24z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function FooterGeneral() {
  return (
    <div className="mx-6 sm:mx-16 max-w-7xl flex flex-1 flex-col justify-start items-start md:flex-row md:space-x-16 ">
      <div className="flex-1 flex">
        <div className="max-w-sm min-w-80 flex flex-col items-start space-y-6">
          <Image
            className="relative"
            src="/viableLogo-2.svg"
            alt="Viable Logo"
            width={145}
            height={38.71}
            style={{ width: "auto", height: "auto" }}
            priority
          />

          <div className="font-light text-sm space-y-1">
            <p>
              &quot;Never doubt that a small group of thoughtful, committed
              citizens can change the world; indeed, it&apos;s the only thing
              that ever has.&quot;
            </p>
            <p>- Margaret Mead</p>
          </div>
        </div>
      </div>

      <div
        className="md:ml-16 flex flex-1 lg:ml-0 justify-start"
        data-testid="footer-links"
      >
        <div className="lg:space-x-32 md:space-x-16 max-w-sm min-w-80 flex flex-col md:flex-row justify-start md:pt-1 md:space-y-0 pt-6 space-y-6">
          <div className="min-w-max">
            <p className="text-base font-bold">Support</p>
            <div className="flex flex-col space-y-1 font-light text-sm pt-3">
              <Link href="/partner">Become a Partner</Link>
              <Link href="/volunteer">Work with Us</Link>
              <Link href={`${externalDonateURL ?? "/"}`} target="_blank">
                Donate
              </Link>
            </div>
          </div>

          <div className="min-w-max">
            <p className="text-base font-bold">About</p>
            <div className="flex flex-col space-y-1 font-light text-sm pt-3">
              <Link href="/about-us">Mission</Link>
              <Link href="/meet-our-team">Our Team</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/contact-us">Contact us</Link>
              <Link href="/contact-us#faq-sections">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterInfo() {
  return (
    <div
      className="container mx-6 sm:mx-16 max-w-7xl flex flex-1 flex-col md:flex-row md:justify-between 
                 md:items-center items-start justify-start text-sm"
    >
      <div className="my-1 order-1 md:order-2  md:space-x-6  flex md:flex-row flex-col justify-start text-start">
        <span className="min-w-max" data-testid="footer-copyright">
          {" "}
          &copy; 2024 Viable Community{" "}
        </span>
        <span className="min-w-max">
          <Link href="/privacy-policy" data-testid="footer-privacy-policy-link">
            Privacy Policy
          </Link>
        </span>
        <span className="min-w-max">
          <Link href="/terms-of-use" data-testid="footer-privacy-terms-of-use">
            Terms of Use
          </Link>
        </span>
      </div>

      <div className="my-1 order-0 md:order-2 min-w-max">
        <ViableButton title="Marketplace" href="/marketplace" size="sm" />
      </div>

      <div className="my-1 order-1 md:order-2">
        <div className="flex justify-start item-start md:justify-center flex-row space-x-6">
          <a
            href={"https://www.linkedin.com/company/viable-community/"}
            target={"_blank"}
            data-testid="footer-linkedin"
          >
            <span className="sr-only">LinkedIn</span>
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 1a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2H3zm1.102 4.297a1.195 1.195 0 100-2.39 1.195 1.195 0 000 2.39zm1 7.516V6.234h-2v6.579h2zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084 1.438 0 2.219.953 2.219 2.766 0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
          <a
            href={"https://x.com/ViableCommunity"}
            target={"_blank"}
            data-testid="footer-x"
          >
            <span className="sr-only">X.com (formerly known as Twitter)</span>
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
