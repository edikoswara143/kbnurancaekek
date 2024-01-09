"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Navlink from "./Navlink";

function navbar() {
  const pathname = usePathname();
  return (
    <div className="bg-emerald-800 fixed top-0 z-50 w-full">
      <div className="flex items-center justify-between mx-4 dekstop:mx-12 py-3">
        <div className="w-3/12">
          <Link href="/" className="text-base">
            <span className="font-bold text-slate-50">KBNU</span>
            <span className="font-light text-emerald-50">Rancaekek</span>
          </Link>
        </div>
        <div className="hidden tablet:flex w-6/12 justify-center items-center">
          <Navlink />
        </div>
        <div className="flex items-center space-x-4 w-3/12 justify-end">
          <Link href="/#" className="text-sm text-slate-50">
            Login
          </Link>
          <Link
            href="/#"
            className="text-sm bg-emerald-900 text-slate-50 rounded-md px-4 py-2"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default navbar;
