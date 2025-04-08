"use client";

import React, { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import Link from "next/link";
import ViableButton from "./viable-button";

const aboutUsDesktop = [
  {
    name: "Who are we?",
    href: "/about-us",
    target: "_self",
  },
  {
    name: "Our Work",
    href: "/our-work",
    target: "_self",
  },
  {
    name: "Meet our team",
    href: "/meet-our-team",
    target: "_self",
  },
  {
    name: "Publications",
    href: "/publications",
    target: "_self",
  },
];

const aboutUsMobile = [
  {
    name: "Who are we?",
    href: "/about-us",
    target: "_self",
  },
  {
    name: "Our Work",
    href: "/our-work",
    target: "_self",
  },
  {
    name: "Meet our team",
    href: "/meet-our-team",
    target: "_self",
  },
  {
    name: "Publications",
    href: "/publications",
    target: "_self",
  },
];

const actNowDesktop = [
  {
    name: "Donate",
    href: process.env.NEXT_PUBLIC_EXTERNAL_DONATE_URL,
    target: "_blank",
  },
  {
    name: "Become a Partner",
    href: "/partner",
    target: "_self",
  },
  {
    name: "Become a Volunteer",
    href: "/volunteer",
    target: "_self",
  },
];
const actNowMobile = [
  {
    name: "Donate",
    href: process.env.NEXT_PUBLIC_EXTERNAL_DONATE_URL,
    target: "_blank",
  },
  {
    name: "Become a Partner",
    href: "/partner",
    target: "_self",
  },
  {
    name: "Become a Volunteer",
    href: "/volunteer",
    target: "_self",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutUsPopoverOpen, setAboutUsPopoverOpen] = useState(false);
  const [actNowPopoverOpen, setActNowPopoverOpen] = useState(false);
  return (
    <header className="p-6 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between navigation-header"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:flex-auto">
          <Link href="/" data-testid="header-logo-link">
            <span className="sr-only">Viable Community</span>
            <Image
              className="relative"
              src="/viableLogo.svg"
              alt="Viable Logo"
              width={145}
              height={92}
              priority
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            data-testid="header-mobile-menu-button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="lg:hidden">
          <Link href="/" data-testid="header-logo-link">
            <span className="sr-only">Viable Community</span>
            <Image
              className="relative"
              src="/viableLogo.svg"
              alt="Viable Logo"
              width={73}
              height={46}
              priority
            />
          </Link>
        </div>
        <div className="lg:hidden">{/* <ViableGoogleLogin /> */}</div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 mt-[65px] justify-between space-x-12">
          <Link href="/" className="leading-6">
            <h3 className="text-lightGreen900 font-semibold transition-all duration-300 ease-in-out hover:text-[#889649] hover:overline decoration-[#889649]">
              Home
            </h3>
          </Link>
          <Popover
            className="relative"
            onMouseEnter={() => setAboutUsPopoverOpen(true)}
            onMouseLeave={() => setAboutUsPopoverOpen(false)}
          >
            <PopoverButton className="flex items-center gap-x-1 leading-6 focus:outline-none">
              <h3 className="text-lightGreen900 font-semibold transition-all duration-300 ease-in-out hover:text-[#889649] hover:overline decoration-[#889649]">
                About Us
              </h3>
              <ChevronDownIcon
                className="h-5 w-5 flex-none "
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              as={Fragment}
              show={aboutUsPopoverOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4" data-testid="about-us-desktop-popover">
                  {aboutUsDesktop.map((item, index) => (
                    <div
                      key={index}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6 hover:bg-[#f3f3ec] text-lightGreen900"
                    >
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          target={item.target}
                          onClick={() => setAboutUsPopoverOpen(false)}
                          className="block"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <Popover
            className="relative"
            onMouseEnter={() => setActNowPopoverOpen(true)}
            onMouseLeave={() => setActNowPopoverOpen(false)}
          >
            <PopoverButton className="flex items-center gap-x-1 leading-6 font-semibold focus:outline-none">
              <h3 className="text-lightGreen900 font-semibold transition-all duration-300 ease-in-out hover:text-[#889649] hover:overline decoration-[#889649]">
                Act Now
              </h3>
              <ChevronDownIcon
                className="h-5 w-5 flex-none "
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              as={Fragment}
              show={actNowPopoverOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4" data-testid="act-now-desktop-popover">
                  {actNowDesktop.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6 hover:bg-[#f3f3ec] text-lightGreen900"
                    >
                      <div className="flex-auto">
                        <Link
                          href={item.href ?? "/"}
                          target={item.target}
                          onClick={() => setActNowPopoverOpen(false)}
                          className="block"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <Link href="/contact-us" className="leading-6 ">
            <h3 className="text-lightGreen900 font-semibold transition-all duration-300 ease-in-out hover:text-[#889649] hover:overline decoration-[#889649]">
              Contact Us
            </h3>
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 ml-[100px]">
          <div className="flex flex-col items-center">
            <ViableButton
              title="Donate"
              href={process.env.NEXT_PUBLIC_EXTERNAL_DONATE_URL ?? "/"}
              target="_blank"
              size="xl"
              data-testid="header-donate-button"
            />
            {/* <div className="flex flex-row justify-center items-center mt-2">
              <ViableGoogleLogin />
              <LanguageIcon className="h-[34px] w-[34px] ml-[12px] text-lightGreen900" />
              <MagnifyingGlassIcon className="h-[34px] w-[34px] ml-[7px] text-lightGreen900" />
            </div> */}
          </div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div
            className="flex items-center justify-between"
            data-testid="mobile-menu-dialog-header"
          >
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              data-testid="header-logo-link"
            >
              <span className="sr-only">Viable Community</span>
              <Image
                className="relative"
                src="/viableLogo.svg"
                alt="Viable Logo"
                width={94}
                height={68}
                priority
              />
            </Link>
            {/* <button type="button" className="-m-2.5 rounded-md p-2.5 ">
              <span className="sr-only">Login</span>
              <ViableGoogleLogin />
            </button> */}
          </div>
          <div
            className="mt-6 flow-root font-semibold navigation-header"
            data-testid="mobile-menu-dialog"
          >
            <div className="-my-6">
              <div className="space-y-2 py-6">
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3 text-lg leading-7 text-lightGreen900 hover:bg-[#f3f3ec]">
                        About Us
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...aboutUsMobile].map((item, index) => (
                          <DisclosureButton
                            key={index}
                            as="a"
                            href={item.href}
                            target={item.target}
                            className="block rounded-lg py-2 pl-3 pr-3 leading-7 text-base text-lightGreen900 font-normal hover:bg-[#f3f3ec]"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3 text-lg leading-7 text-lightGreen900 hover:bg-[#f3f3ec]">
                        Act Now
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {actNowMobile.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href ?? "/"}
                            target={item.target}
                            className="block rounded-lg py-2 pl-6 pr-3 leading-7 text-base text-lightGreen900 font-normal hover:bg-[#f3f3ec]"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
