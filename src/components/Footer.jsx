/* eslint-disable react/prop-types */
import visa from "../images/img_verified_by_visa-min.webp";
import masterCard from "../images/img_mastercard_secure-min.webp";
import iso from "../images/ISO.webp";
import playstore from "../images/img_google_play_badge.png";
import appstore from "../images/img_appstore_badge.webp";
import f1Logo from "../images/f1-logo-new.webp";
import esewaLogo from "../images/esewa_logo.png";

import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="text-light">
      <section className="bg-dark py-5 px-3 ">
        <FooterLinks />
        <div className="d-flex xlWidth mx-auto flex-column row-gap-4 flex-sm-row justify-content-between align-items-center">
          <div className="d-flex column-gap-2 justify-content-center">
            <img src={visa} className="bg-white rounded-1 footerImg" />
            <img src={masterCard} className="bg-white rounded-1 footerImg" />
            <img src={iso} className="bg-white rounded-1 footerImg" />
          </div>

          <div className="d-flex flex-column align-items-center row-gap-1">
            <span className="d-none d-lg-block fs-5">Download Mobile Apps</span>
            <div className="d-flex justify-content-center column-gap-2 align-items-center">
              <img src={playstore} className="footerImg1 rounded-1" />
              <img src={appstore} className="footerImg1 rounded-1" />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <img
              src={f1Logo}
              className="bg-white rounded-5 px-2 py-1 footerImg"
            />
          </div>
        </div>
      </section>
      <section className="py-2 px-3 bg-primary">
        <div className="d-flex justify-content-between align-items-start column-gap-5 xlWidth mx-auto">
          <p className="text-center">
            &copy; 2009 - {new Date().getFullYear()} eSewa. All Rights Reserved
          </p>

          <div className="d-flex column-gap-1 justify-content-evenly">
            <b className="d-none d-sm-block">Keep in touch</b>
            <div
              style={{
                width: "2.3rem",
                borderTop: "3px solid",
                margin: "auto",
              }}
              className="d-none d-sm-block align-self-end"
            ></div>
            <BiLogoFacebookSquare className="fs-3" />
            <FaTwitterSquare className="fs-3" />
            <TfiYoutube className="bg-light text-dark fs-4" />
            <BiLogoLinkedinSquare className="fs-3" />
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterLinks() {
  return (
    <>
      <section className="xlWidth mx-auto d-none d-lg-flex justify-content-between">
        {/* <div className=""> */}
        <div className="">
          <div className="footerImg mb-2">
            <img src={esewaLogo} alt="logo" className="h-100 w-100" />
          </div>
          <h5 className="text-uppercase">grievance officer</h5>
          <div className="">
            <p>Bijay Rai</p>
            <p>Contact: +9779801079465</p>
            <p>Email: csd@esewa.com.np</p>
          </div>
        </div>
        {data.map((jsonData) => (
          <FooterLinkLayout key={jsonData.header} data={jsonData} />
        ))}
      </section>
      <hr className="pb-3" />
    </>
  );
}

function FooterLinkLayout({ data }) {
  return (
    <div className="">
      <h5 className="text-uppercase">{data.header}</h5>
      <div className="">
        {data.liElements?.map((item) => (
          <p className="" key={item}>
            {item}
          </p>
        ))}
      </div>
      {data.button ? (
        <button className="bg-success text-white rounded-1 p-2 border-0">
          {data?.button}
        </button>
      ) : null}
    </div>
  );
}

const data = [
  {
    header: "Policy",
    liElements: [
      "Privacy Policies",
      "Information Security",
      "Policy and Terms",
      "Report Fraud/ Misuse of Account",
      "Transaction Limits",
    ],
  },
  {
    header: "General",
    liElements: [
      "Getting Started",
      "Security",
      "SMS Syntax",
      "Video Tutorials",
      "eSewa Tariffs",
    ],
  },
  {
    header: "Company",
    liElements: ["About us", "Career", "Blog/ News"],
  },
  {
    header: "Partners",
    liElements: ["Banks", "Western Union", "Agents"],
  },
  {
    header: "Help",
    liElements: ["Developer's Guide", "FAQs", "Contact us"],
    button: "Become a merchant",
  },
];
