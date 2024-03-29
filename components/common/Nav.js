import React, { useState } from "react";
import Link from "next/link";
import { BarsArrowDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import CrossToogle from "./CrossToogle";
import {
  Alert,
  DarkThemeToggle,
  Flowbite,
  Navbar,
  DropdownItemProps,
  Dropdown,
  Avatar,
  Button,
  Sidebar,
} from "flowbite-react";

import { MdArrowRight } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { CgMenuRound } from "react-icons/cg";
import dynamic from "next/dynamic";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar fluid={true} rounded={true} className="shadow-md  z-30">
        <Navbar.Brand href="/">
          <img src="/iict.png" className="mr-3 h-6 sm:h-9" alt="IICT Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <div className="mr-3 md:hidden ">
            <Button
              pill={true}
              outline={true}
              color="light"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <p>Close</p> : <p>Menu</p>}
            </Button>
          </div>
          <Avatar alt="SUST" className="h-10" img="/sust.png" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link>
            <Dropdown label="About IICT" inline={true}>
              <Dropdown.Item>
                <Link href="/about/institute">Institution</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/about/aim&objective">Aim & Objective</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/about/history">Institution</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/about/faculty">Faculty</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/about/officer&staff">Officers & Staffs</Link>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown label="Programs" inline={true}>
              <Dropdown.Item href="/navbars">
                UnderGraduation Program
              </Dropdown.Item>
              <Dropdown.Item>Graduation Program</Dropdown.Item>
              <Dropdown.Item>Certificate Course</Dropdown.Item>
              <Dropdown.Item>Diploma Course</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown label="Notice" inline={true}>
              <Dropdown.Item href="/navbars">General</Dropdown.Item>
              <Dropdown.Item>Projects</Dropdown.Item>
              <Dropdown.Item>UnderGraduation Program</Dropdown.Item>
              <Dropdown.Item>Graduation Program</Dropdown.Item>
              <Dropdown.Item>Certificate Course</Dropdown.Item>
              <Dropdown.Item>Diploma Course</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown label="Life at IICT" inline={true}>
              <Dropdown.Item href="/navbars">News & Events</Dropdown.Item>
              <Dropdown.Item>Upcomming Events</Dropdown.Item>
              <Dropdown.Item>Achievement</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/navbars">Research</Navbar.Link>
          <Navbar.Link>
            <Dropdown label="People" inline={true}>
              <Dropdown.Item href="/navbars">Alumni</Dropdown.Item>
              <Dropdown.Item>Faculty</Dropdown.Item>
              <Dropdown.Item>Student</Dropdown.Item>
              <Dropdown.Item>Staff</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {isOpen && (
        <div className="w-full md:hidden absolute -p-10 border-2 border-gray-100 z-50">
          <Sidebar
            className="w-full shadow-md z-50"
            aria-label="Sidebar with content separator example"
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item icon={IoIosArrowDroprightCircle}>
                  <Link href="/">Home</Link>
                </Sidebar.Item>
                <Sidebar.Collapse
                  label="About IICT"
                  icon={IoIosArrowDroprightCircle}
                >
                  <Sidebar.Item icon={GrFormSubtract}>
                    <Link href="/about/institute">Institution</Link>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    <Link href="/about/aim&obejctive">Aim & Objective</Link>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    History
                  </Sidebar.Item>
                  <Sidebar.Item icon={GrFormSubtract} href="#">
                    Faculty
                  </Sidebar.Item>
                  <Sidebar.Item icon={GrFormSubtract} href="#">
                    Officers & Staffs
                  </Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Collapse
                  label="Programs"
                  icon={IoIosArrowDroprightCircle}
                >
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    UnderGraduation Program
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Graduation Program
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Certificate Course
                  </Sidebar.Item>
                  <Sidebar.Item icon={GrFormSubtract} href="#">
                    Diploma Course
                  </Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Collapse
                  label="Notice"
                  icon={IoIosArrowDroprightCircle}
                >
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    General
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Project
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    UnderGraduation Program
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Graduation Program
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Certificate Course
                  </Sidebar.Item>
                  <Sidebar.Item icon={GrFormSubtract} href="#">
                    Diploma Course
                  </Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Collapse
                  label="Life at IICT"
                  icon={IoIosArrowDroprightCircle}
                >
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    News & Events
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Upcomming Events
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Achievement
                  </Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Item href="#" icon={IoIosArrowDroprightCircle}>
                  Research
                </Sidebar.Item>

                <Sidebar.Collapse
                  label="People"
                  icon={IoIosArrowDroprightCircle}
                >
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Alumni
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Faculty
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Student
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={GrFormSubtract}>
                    Staff
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href="#" icon={IoIosArrowDroprightCircle}>
                  Contact
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Nav), { ssr: false });
