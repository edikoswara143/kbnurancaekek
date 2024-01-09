"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navlink() {
  const pathname = usePathname();
  const links = [
    {
      linkName: "Profile",
      linkPath: "/profile",
    },
    {
      linkName: "Banom",
      linkPath: "/banom",
    },
    {
      linkName: "Lembaga",
      linkPath: "/lembaga",
    },
    {
      linkName: "Warta",
      linkPath: "/#",
    },
    {
      linkName: "Jurnal",
      linkPath: "/#",
    },
  ];

  return (
    <div>
      <div className="flex space-x-4">
        {links.map((link) => (
          <div key={link.linkName}>
            <Link
              href={`${link.linkPath}`}
              className={`link ${
                pathname === link.linkPath
                  ? "font-semibold text-sm text-emerald-50"
                  : "font-light text-sm text-slate-50"
              }`}
            >
              {link.linkName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navlink;
