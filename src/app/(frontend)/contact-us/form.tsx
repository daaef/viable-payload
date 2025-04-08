"use client";

import Link from "next/link";
import { sendForm } from "../api/contact-us/sendToSalesforce";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(sendForm, initialState);

  return (
    <div className="w-full mt-0 sm:-mt-12 md:-mt-24">
      <form
        action={formAction}
        className="bg-white md:shadow-xl rounded px-8 py-6 mb-4 relative"
      >
        <h2 className="text-black py-6">Contact Form</h2>
        <div className="flex-col mb-4">
          <label className="text-black ">
            First Name
            <span className="required">*</span>
            <br></br>
            <input
              className="border-lightGray rounded text-gray-500 w-full h-14"
              type="text"
              name="firstName"
              required
            />
          </label>
        </div>
        <div className="flex-col mb-4">
          <label className="text-black">
            Last Name
            <span className="required">*</span>
            <br></br>
            <input
              className="border-lightGray rounded text-gray-500 w-full h-14"
              type="text"
              name="lastName"
              required
            />
          </label>
        </div>
        <div className="flex-col mb-4">
          {" "}
          <label className="text-black">
            Email Address
            <span className="required">*</span>
            <br></br>
            <input
              className="border-lightGray rounded text-gray-500 w-full h-14"
              type="email"
              name="email"
              required
            />
          </label>
        </div>
        <div className="flex-col mb-4">
          <label className="text-black">
            Phone Number
            <br></br>
            <input
              className="border-lightGray rounded text-gray-500 w-full h-14"
              type="text"
              name="phone"
            />
          </label>
        </div>
        <div className="flex-col mb-4">
          <label className="text-black">
            Subject
            <span className="required">*</span>
            <br></br>
            <select
              className="border-lightGray rounded text-gray-500 w-full h-14 "
              name="subject"
            >
              <option value="volunteering">Volunteering</option>
              <option value="investing">Investing</option>
              <option value="funding">Funding</option>
              <option value="donating">Donating</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className="flex-col mb-4">
          <label className="text-black ">
            Message
            <span className="required">*</span>
            <br></br>
            <textarea
              className="border-lightGray rounded text-gray-500 w-full h-40"
              name="comments"
              required
            ></textarea>
          </label>
        </div>
        <div className="text-gray-500 flex-col pr-9 mb-4">
          <label>
            <div className="pt-8">
              <p className="text-lightGreen900">
                <input
                  type="checkbox"
                  name="acceptTermsAndPolicy"
                  className="mr-2 h-4 w-4"
                  required
                />{" "}
                By Clicking &quot;Submit&quot;, I accept Viable Community&apos;s{" "}
                <Link
                  className="text-termsBlue border-b border-blue-400"
                  href="/terms-of-use"
                >
                  Terms of use
                </Link>{" "}
                and{" "}
                <Link
                  className="text-termsBlue border-b border-blue-400"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                *
              </p>
            </div>
          </label>
        </div>
        <div className="text-gray-500 flex-col mb-4">
          <label>
            <div>
              <p className="text-lightGreen900">
                <input
                  type="checkbox"
                  name="receiveNewsletter"
                  className="mr-2 h-4 w-4"
                  value={1}
                />
                Sign up for our seasonal newsletters
              </p>
            </div>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green text-white rounded-md w-11/12 py-4 mb-12 mt-10"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {state?.message && (
        <div
          className="bg-[var(--orange-700-rgb)] text-[var(--orange-100-rgb)] 
          border-l-4 border-[var(--orange-800-rgb)] p-4"
          role="alert"
        >
          <p className="font-bold">Form not sent</p>
          <p>{state?.message}</p>
        </div>
      )}
    </div>
  );
}
