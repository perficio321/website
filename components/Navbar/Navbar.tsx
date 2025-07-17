"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Types

type MenuLink = {
  name: string;
  href?: string;
};

type MenuItemWithSubmenu = MenuLink & {
  submenu?: MenuLink[];
};

type Role = "USER" | "ADMIN" | "SUPERADMIN";

// Menu Config

const menuConfig: Record<Role, MenuItemWithSubmenu[]> = {
  USER: [
    { name: "Home", href: "/" },
    {
      name: "Taxation",
      submenu: [
        { name: "Direct Tax", href: "/direct-tax" },
        { name: "Indirect Tax", href: "/indirect-tax" },
        { name: "MCA Services", href: "/mca" },
        { name: "RERA", href: "/rera" },
        { name: "International Tax", href: "/international-tax" }
      ]
    },
    {
      name: "Wealth",
      submenu: [
        { name: "Invest", href: "/invest" },
        { name: "Real Estate", href: "/real-estate" },
      ]
    },
     {
      name: "Blogs & Pdf",
      submenu: [
        { name: "All Blogs", href: "/all-blogs" },
        { name: "All Pdfs", href: "/all-pdfs" },
      ]
    },
    { name: "Insurance", href: "/insurance" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ],
  ADMIN: [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    {
      name: "Posts",
      submenu: [{ name: "Create New Post", href: "/create-post" }]
    },
    {
      name: "Files",
      submenu: [
        { name: "Upload Pdf", href: "/upload-pdf" },
        { name: "View All Pdf", href: "/all-pdfs" }
      ]
    },
    { name: "Contact", href: "/show-contacts" }
  ],
  SUPERADMIN: [
    { name: "Home", href: "/" },
    { name: "Insurance Master", href: "/superadmin/insurance" },
    { name: "Tax Controls", href: "/superadmin/taxation" },
    { name: "Wealth System", href: "/superadmin/wealth" },
    { name: "Settings", href: "/superadmin/settings" },
    { name: "Logs", href: "/superadmin/logs" }
  ]
};

export default function Navbar() {
  const { data: session } = useSession();
  const role = (session?.user?.role?.toUpperCase() as Role) || "USER";
  const menu = menuConfig[role] || [];

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 hover:text-black">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              {/* XMarkIcon will be shown when the menu is open */}
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                {/* Ensure the image path is correct relative to your public folder */}
                <img
                  className="h-5 w-auto" // Adjusted height for better visual balance
                  src="/perificio-logo.png"
                  alt="Perificio"
                />
              </Link>
            </div>
            {/* Desktop menu items */}
            <div className="hidden sm:ml-6 sm:block text-[#3a4664]">
              <div className="flex space-x-4">
                {menu.map((item) =>
                  item.submenu ? (
                    <Menu
                      key={item.name}
                      as="div"
                      className="relative inline-block text-left"
                    >
                      <div>
                        <MenuButton className="inline-flex items-center  hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                          {item.name}
                          <ChevronDownIcon
                            className="ml-1 h-4 w-4"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems className="absolute left-0 z-20 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        {item.submenu.map((sub) => (
                          <MenuItem key={sub.name}>
                            {({ active }) => (
                              <Link
                                href={sub.href || "#"}
                                className={`block px-4 py-2 text-sm ${
                                  active ? "bg-gray-100" : ""
                                }`}
                              >
                                {sub.name}
                              </Link>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href || "#"}
                      className=" hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Profile dropdown */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex items-center gap-2 rounded-full bg-white text-sm">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="User"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <FaUser className="w-7 h-7 text-blue-900 hover:text-blue-400" />
                  )}
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                {session?.user ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{session?.user?.name}</p>
                      <p className="text-xs text-gray-500">
                        {session?.user?.email}
                      </p>
                    </div>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={`block px-4 py-2 text-sm text-black ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Your Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={`block px-4 py-2 text-sm text-black ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Settings
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          className={`w-full text-left px-4 py-2 text-sm text-black ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Sign out
                        </button>
                      )}
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/sign-in"
                        className={`block px-4 py-2 text-sm text-black ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Sign In
                      </Link>
                    )}
                  </MenuItem>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {menu.map((item) =>
            item.submenu ? (
              <Disclosure key={item.name} as="div" className="space-y-1">
                <DisclosureButton className="flex items-center justify-between w-full rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200 hover:text-black">
                  {item.name}
                  <ChevronDownIcon className="ml-auto h-5 w-5 ui-open:rotate-180 ui-open:transform" />
                </DisclosureButton>
                <DisclosurePanel className="pl-6 space-y-1">
                  {item.submenu.map((sub) => (
                    <DisclosureButton
                      key={sub.name}
                      as="a"
                      href={sub.href || "#"}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100"
                    >
                      {sub.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>
            ) : (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href || "#"}
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200 hover:text-black"
              >
                {item.name}
              </DisclosureButton>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
