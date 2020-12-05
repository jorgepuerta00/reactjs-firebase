import React, { PropsWithChildren } from "react";

const FooterLink = (props: PropsWithChildren<{ href?: string }>) => (
  <a href={props.href} className="font-normal hover:text-gray-900">
    {props.children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative p-6 text-sm">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-end">
          <div className="w-full px-4 text-base lg:w-6/12">
            <span className="block mb-1 text-xl font-semibold opacity-75">
              About us
            </span>
            <p className="block mb-1 text-sm font-normal opacity-75">
              We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.
            </p>
            <p className="block mb-1 text-sm font-normal opacity-75">
              All copyrights reserved © 2020 - Health Expore.
            </p>
          </div>
          <div className="flex flex-wrap w-full px-4 lg:w-6/12 lg:text-left">
            <div className="w-full px-4 mt-3 lg:w-5/12">
              <span className="block mb-1 text-xl font-semibold opacity-75">
                Sitemap
              </span>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="#">
                    Nurses
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    Employers
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    Social networking
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    Jobs
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mt-3 lg:w-5/12">
              <span className="block mb-1 text-xl font-semibold opacity-75">
                Privacy
              </span>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="#">
                    Terms of use
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    Privacy policy
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    Cookie policy
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
