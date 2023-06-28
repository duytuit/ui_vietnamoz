import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-opacity-5"
        data-wow-delay=".1s"
      >
        <div className="emblem-wr mb-8">
          <div className="VietNam-visa-emblem"></div>
        </div>
        <div className="container">
          <div className="container mx-auto flex flex-wrap px-2 py-4">
            <div className="h-full p-4 xss:w-2/4 lg:w-1/4 lg:flex lg:justify-center lg:items-center">
              <div className=" bg-gray-100 relative px-2">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Get in Touch
                </h2>
                <ul>
                  <li>
                    <a
                      href="/mailto:sales@VietNamvisa.com"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      visa@visavisa.net
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=84766200333"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Whatapps
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:847245292"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      +84.724.52.92
                    </a>
                  </li>
                </ul>
                <div>
                  <a className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary">
                    The Trump Building <br />
                    29th Floor <br />
                    40 Wall Street <br />
                    Manhattan, New York
                  </a>
                </div>
              </div>
            </div>
            <div className="h-full p-4 xss:w-2/4 lg:w-1/4 lg:flex lg:justify-center lg:items-center">
              <div className="bg-gray-100 relative px-2">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Help & Support
                </h2>
                <ul>
                  <li>
                    <a
                      href="/mailto:sales@VietNamvisa.com"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      visa@visavisa.net
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-full p-4 xss:w-2/4 lg:w-1/4 lg:flex lg:justify-center lg:items-center">
              <div className="bg-gray-100 relative px-2">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Hangout with Us
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      TrustPilot
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-full p-4 xss:w-2/4 lg:w-1/4 lg:flex lg:justify-center lg:items-center">
              <div className="bg-gray-100 relative px-2">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  About us
                </h2>
                <ul>
                  <li>
                    <a
                      href="/about"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Term of use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-8">
          <div className="container">
            <div className="cc-wrapper"></div>
            <div>
              <div className="mx-auto inline-block w-full text-center text-base font-medium text-body-color">
                Visavisa.net is registered brand name of World Tours LLC.
                &nbsp;We are building the future of Travel &amp; Tourism.
                <br></br>© 2023 Visavisa.net. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
