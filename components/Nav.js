import React, { useState } from "react";
import Link from "next/link";
import { BarsArrowDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import CrossToogle from "./CrossToogle";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="pl-3  lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <CrossToogle isOpen={isOpen} />
            </div>
            {isOpen ? (
              <ul className="menu menu-compact absolute top- mt-3 p-2 shadow-md bg-white border-2  rounded-box w-52 z-40">
                {/**Home  */}
                <li className="font-semibold">
                  <Link href="/">Home</Link>
                </li>
                {/** About IICT*/}
                <li>
                  <div className="font-semibold ">About IICT</div>
                  <ul className="p-2 border-2 bg-white">
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Institution</Link>
                    </li>
                    <li className="hover:bg-slate-100 ">
                      <Link href="#">Aims and Objective</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">History</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Faculty</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Officers and Staffs</Link>
                    </li>
                  </ul>
                </li>
                {/** Programs*/}
                <li>
                  <div className="font-semibold">Programs</div>
                  <ul className="p-2 border-2 bg-white ">
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Undergraduation Program</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Graduation Program</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Certificate Courses</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Diploma Courses</Link>
                    </li>
                  </ul>
                </li>
                {/** Notice*/}
                <li>
                  <div className="font-semibold">Notice</div>
                  <ul className="p-2 border-2 bg-white ">
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">General</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Projects</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Undergraduation Program</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Graduation Program</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Certificate Coursess</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Diploma Coursess</Link>
                    </li>
                  </ul>
                </li>
                {/** Life in IICT*/}
                <li>
                  <div className="font-semibold">Life in IICT</div>
                  <ul className="p-2 border-2 bg-white ">
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">News & Events</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Upcomming Events</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Achievements</Link>
                    </li>
                  </ul>
                </li>
                {/** Research*/}
                <li className="font-semibold">
                  <Link href="#">Research</Link>
                </li>
                {/** People*/}
                <li>
                  <div className="font-semibold">People</div>
                  <ul className="p-2 w-48 border-2 bg-white">
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Alumni</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Faculty</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Student</Link>
                    </li>
                    <li className="hover:bg-slate-100 bg-white">
                      <Link href="#">Staff</Link>
                    </li>
                  </ul>
                </li>
                {/** Contact*/}
                <li className="font-semibold">
                  <Link href="#">Contact</Link>
                </li>
                {/** About*/}
                <li className="font-semibold">
                  <Link href="#">About</Link>
                </li>
              </ul>
            ) : null}
          </div>
          <div className=" ml-5 hidden lg:block ">
            <Image src="/iict.png" height={50} width={100}></Image>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0  ">
            {/**Home  */}
            <li className="font-semibold">
              <Link href="/">Home</Link>
            </li>
            {/** About IICT*/}
            <li>
              <div className="font-semibold">About IICT</div>
              <ul className="p-2 border-2 ">
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Institution</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Aims and Objective</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">History</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Faculty</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Officers and Staffs</Link>
                </li>
              </ul>
            </li>
            {/** Programs*/}
            <li>
              <div className="font-semibold">Programs</div>
              <ul className="p-2 border-2 ">
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Undergraduation Program</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Graduation Program</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Certificate Courses</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Diploma Courses</Link>
                </li>
              </ul>
            </li>
            {/** Notice*/}
            <li>
              <div className="font-semibold">Notice</div>
              <ul className="p-2 border-2 ">
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">General</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Projects</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Undergraduation Program</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Graduation Program</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Certificate Coursess</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Diploma Coursess</Link>
                </li>
              </ul>
            </li>
            {/** Life in IICT*/}
            <li>
              <div className="font-semibold">Life in IICT</div>
              <ul className="p-2 border-2 ">
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">News & Events</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Upcomming Events</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Achievements</Link>
                </li>
              </ul>
            </li>
            {/** Research*/}
            <li className="font-semibold">
              <Link href="#">Research</Link>
            </li>
            {/** People*/}
            <li>
              <div className="font-semibold">People</div>
              <ul className="p-2 w-48 border-2 ">
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Alumni</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Faculty</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Student</Link>
                </li>
                <li className="hover:bg-slate-100 bg-white">
                  <Link href="#">Staff</Link>
                </li>
              </ul>
            </li>
            {/** Contact*/}
            <li className="font-semibold">
              <Link href="#">Contact</Link>
            </li>
            {/** About*/}
            <li className="font-semibold">
              <Link href="#">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block lg:mr-5">
            <Image src="/sust.png" height={80} width={80}></Image>
          </div>
          <div className="lg:hidden ">
            <Image src="/iict.png" height={50} width={100}></Image>
          </div>
        </div>
      </div>
    </nav>
  );
}
