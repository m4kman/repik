"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-40 pt-8">
      <div className="relative">
        <Link href="/">
          <span className="text-[2.25rem] font-semibold">
            <span className="tracking-tight">{"//"}</span> repik
          </span>
          <div className="absolute -right-2.5 -top-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(156,163,175,0.8)"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div>
        <ol className="flex items-center justify-center gap-1 text-xl font-medium">
          <Link href="/">
            <li
              className={
                pathname === "/"
                  ? "relative px-[18px] py-2 text-slate-100 transition"
                  : "px-[18px] py-2 text-slate-950 hover:text-slate-950/75"
              }
            >
              {pathname === "/" ? (
                <motion.span
                  layoutId="nav-bubble"
                  transition={{
                    duration: 0.6,
                    type: "spring",
                  }}
                  className="absolute inset-0 rounded-full bg-black"
                  style={{
                    borderRadius: 9999,
                  }}
                />
              ) : null}
              <span className="relative z-10">Home</span>
            </li>
          </Link>
          <Link href="/enhance">
            <li
              className={
                pathname === "/enhance"
                  ? "relative px-[18px] py-2 text-slate-100 transition"
                  : "px-[18px] py-2 text-slate-950 hover:text-slate-950/75"
              }
            >
              {pathname.includes("/enhance") ? (
                <motion.span
                  layoutId="nav-bubble"
                  transition={{
                    duration: 0.6,
                    type: "spring",
                  }}
                  className="absolute inset-0 rounded-full bg-black"
                  style={{
                    borderRadius: 9999,
                  }}
                />
              ) : null}
              <span className="relative z-10">Restore</span>
            </li>
          </Link>
        </ol>
      </div>
    </nav>
  );
}

export default Navbar;
