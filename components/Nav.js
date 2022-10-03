import React, { useState } from "react";
import Link from "next/link";
import { BarsArrowDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <BarsArrowDownIcon className="w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-white border-2  rounded-box w-52"
            >
              {/**Home  */}
              <li className="font-semibold">
                <Link href="/">Home</Link>
              </li>
              {/** About IICT*/}
              <li tabIndex={0}>
                <div className="font-semibold ">About IICT</div>
                <ul className="p-2 border-2 bg-white">
                  <li className="hover:bg-rose-100">
                    <Link href="#">Institution</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Aims and Objective</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">History</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Faculty</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Officers and Staffs</Link>
                  </li>
                </ul>
              </li>
              {/** Programs*/}
              <li tabIndex={0}>
                <div className="font-semibold">Programs</div>
                <ul className="p-2 border-2 bg-white ">
                  <li className="hover:bg-rose-100">
                    <Link href="#">Undergraduation Program</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Graduation Program</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Certificate Courses</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Diploma Courses</Link>
                  </li>
                </ul>
              </li>
              {/** Notice*/}
              <li tabIndex={0}>
                <div className="font-semibold">Notice</div>
                <ul className="p-2 border-2 bg-white ">
                  <li className="hover:bg-rose-100">
                    <Link href="#">General</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Projects</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Undergraduation Program</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Graduation Program</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Certificate Coursess</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Diploma Coursess</Link>
                  </li>
                </ul>
              </li>
              {/** Life in IICT*/}
              <li tabIndex={0}>
                <div className="font-semibold">Life in IICT</div>
                <ul className="p-2 border-2 bg-white ">
                  <li className="hover:bg-rose-100">
                    <Link href="#">News & Events</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Upcomming Events</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Achievements</Link>
                  </li>
                </ul>
              </li>
              {/** Research*/}
              <li className="font-semibold">
                <Link href="#">Research</Link>
              </li>
              {/** People*/}
              <li tabIndex={0}>
                <div className="font-semibold">People</div>
                <ul className="p-2 w-48 border-2 bg-white">
                  <li className="hover:bg-rose-100">
                    <Link href="#">Alumni</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Faculty</Link>
                  </li>
                  <li className="hover:bg-rose-100">
                    <Link href="#">Student</Link>
                  </li>
                  <li className="hover:bg-rose-100">
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
            <li tabIndex={0}>
              <div className="font-semibold">About IICT</div>
              <ul className="p-2 border-2 ">
                <li className="hover:bg-rose-100">
                  <Link href="#">Institution</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Aims and Objective</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">History</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Faculty</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Officers and Staffs</Link>
                </li>
              </ul>
            </li>
            {/** Programs*/}
            <li tabIndex={0}>
              <div className="font-semibold">Programs</div>
              <ul className="p-2 border-2 ">
                <li className="hover:bg-rose-100">
                  <Link href="#">Undergraduation Program</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Graduation Program</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Certificate Courses</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Diploma Courses</Link>
                </li>
              </ul>
            </li>
            {/** Notice*/}
            <li tabIndex={0}>
              <div className="font-semibold">Notice</div>
              <ul className="p-2 border-2 ">
                <li className="hover:bg-rose-100">
                  <Link href="#">General</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Projects</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Undergraduation Program</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Graduation Program</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Certificate Coursess</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Diploma Coursess</Link>
                </li>
              </ul>
            </li>
            {/** Life in IICT*/}
            <li tabIndex={0}>
              <div className="font-semibold">Life in IICT</div>
              <ul className="p-2 border-2 ">
                <li className="hover:bg-rose-100">
                  <Link href="#">News & Events</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Upcomming Events</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Achievements</Link>
                </li>
              </ul>
            </li>
            {/** Research*/}
            <li className="font-semibold">
              <Link href="#">Research</Link>
            </li>
            {/** People*/}
            <li tabIndex={0}>
              <div className="font-semibold">People</div>
              <ul className="p-2 w-48 border-2 ">
                <li className="hover:bg-rose-100">
                  <Link href="#">Alumni</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Faculty</Link>
                </li>
                <li className="hover:bg-rose-100">
                  <Link href="#">Student</Link>
                </li>
                <li className="hover:bg-rose-100">
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
