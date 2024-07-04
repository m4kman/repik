import Link from "next/link";

function Navbar() {
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
        <ol className="flex items-center justify-center gap-4 text-xl font-medium">
          <Link href="/">
            <li className="rounded-full bg-black px-[18px] py-2 text-[#f1f5f9]">
              Home
            </li>
          </Link>
          <Link href="/enhance">
            <li className="hover:text-slate-950/75">Restore</li>
          </Link>
        </ol>
      </div>
    </nav>
  );
}

export default Navbar;
