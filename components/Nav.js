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
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
  BiBuoy,
} from "react-icons/hi";

import { CgMenuRound } from "react-icons/cg";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar fluid={true} rounded={true} className="shadow-md">
        <Navbar.Brand href="/">
          <img
            src="/iict.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
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
          <Avatar alt="User settings" className="h-10" img="/sust.png" />
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
      {isOpen && (
        <div className="w-full md:hidden absolute z-30 -p-10 border-2 bo border-gray-100 ">
          <Sidebar
            className="w-full shadow-md "
            aria-label="Sidebar with content separator example"
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Kanban
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox}>
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                  Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                  Sign Up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Upgrade to Pro
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Documentation
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={BiBuoy}>
                  Help
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      )}
    </>
  );
}
