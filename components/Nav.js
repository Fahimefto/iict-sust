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
} from "flowbite-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar fluid={true} rounded={true} className="shadow-md">
      <Navbar.Brand href="/">
        <img src="/iict.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Avatar alt="User settings" img="/sust.png" />

        <Navbar.Toggle className="ml-2" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link>
          <Dropdown label="Dropdown button" inline={true}>
            <Dropdown.Item href="/navbars">Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
