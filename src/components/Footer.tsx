import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import config from '../config/index.json';

const Footer = () => {
  const { company } = config;
  const { name: companyName, logo } = company;
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const handleSectionNavigation = (href: string) => {
    if (isHomePage) {
      // On home page, scroll to the section
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      router.push('/').then(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const element = document.getElementById(href);
            if (element) {
              window.scrollTo({ top: 0, behavior: 'auto' });

              setTimeout(() => {
                const rect = element.getBoundingClientRect();
                const scrollTop =
                  window.pageYOffset || document.documentElement.scrollTop;
                const elementTop = rect.top + scrollTop;
                const targetPosition = Math.max(0, elementTop - 200);

                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth',
                });
              }, 100);
            }
          });
        });
      });
    }
  };

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src={logo} alt={companyName} />
            <p className="text-gray-500 text-base">
              Your ultimate selling companion. Connect with local buyers and
              sell your items with ease.
            </p>
            <div className="flex space-x-6">
              {/* Social media icons can be added here if needed */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button
                      onClick={() => handleSectionNavigation('why-us')}
                      className="text-base text-gray-500 hover:text-gray-900 bg-transparent border-none p-0 cursor-pointer"
                    >
                      Why us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSectionNavigation('features')}
                      className="text-base text-gray-500 hover:text-gray-900 bg-transparent border-none p-0 cursor-pointer"
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSectionNavigation('about')}
                      className="text-base text-gray-500 hover:text-gray-900 bg-transparent border-none p-0 cursor-pointer"
                    >
                      About
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="mailto:contact@bi3app.com"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bi3app.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy">
                      <a className="text-base text-gray-500 hover:text-gray-900">
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Download
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      iOS App
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Android App
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <Link href="/privacy">
                <a className="text-gray-400 hover:text-gray-500">
                  Privacy Policy
                </a>
              </Link>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
