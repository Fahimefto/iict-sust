import { Footer } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
export default function Footerbar() {
  return (
    <>
      <Footer className="">
        <div className="w-full md:px-20 bg-slate-200 ">
          <div className="grid w-full grid-cols-1 gap-8 py-8 px-6 md:grid-cols-3 ">
            <div>
              <Footer.LinkGroup col={true}>
                <Footer.Brand src="/iict.png" alt="iict logo"></Footer.Brand>
                <p className="text-lg font-semibold text-gray-800">
                  Institute of Information and Communication Technology
                </p>
                <p className="text-gray-700">SUST, Sylhet-3114, Bangladesh</p>
              </Footer.LinkGroup>
            </div>

            <div className="">
              <Footer.Title title="Useful Links" className="text-gray-800" />
              <Footer.LinkGroup col={true} className="text-gray-800">
                <Footer.Link href="#">SUST</Footer.Link>
                <Footer.Link href="#">ePayment</Footer.Link>
                <Footer.Link href="#">MIT</Footer.Link>
                <Footer.Link href="#">Admission</Footer.Link>
                <Footer.Link href="#">MIT</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Vision & Mission"
                className="text-gray-800"
                color="black"
              />
              <Footer.LinkGroup col={true}>
                <p className="text-justify ">
                  Do reprehenderit culpa nulla ipsum Lorem. Id aute ipsum et
                  incididunt officia excepteur incididunt ea duis duis consequat
                  ex adipisicing anim. Ex nostrud ad labore do. Sint est do
                  minim deserunt aute consequat veniam quis velit magna
                  consectetur cupidatat.Aute tempor occaecat dolore veniam sint
                  quis dolor elit excepteur proident magna deserunt. Sunt velit
                  ipsum minim sint commodo pariatur esse nostrud pariatur qui
                  cupidatat mollit veniam. Lorem cupidatat occaecat aliqua
                  reprehenderit do. Nisi proident ullamco ad ullamco adipisicing
                  sunt aliqua nostrud. Excepteur deserunt aliqua deserunt do
                  sunt. Ea anim ut est labore ex officia adipisicing officia
                  laborum ex veniam. Elit occaecat et dolor esse.
                </p>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full  py-6 px-4 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="/" by="IICT, SUST" year={2023} />
            <div className="text-sm text-gray-700 ">
              <Link href="https://chaos-team.vercel.app/">
                <a target="_blank" className="text-blue-800">
                  Developed By Team-Chaos(SWE-18)
                </a>
              </Link>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
