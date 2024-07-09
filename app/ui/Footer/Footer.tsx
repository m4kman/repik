import Link from "next/link";
import { Github, Twitter } from "@/app/ui/svgs";
import Branding from "../Branding";

function Footer() {
  return (
    <footer className="relative mt-52 border-t border-gray-400 lg:mt-72">
      <div className="absolute inset-x-0 flex -translate-y-3/4 justify-center px-10">
        <Branding />
      </div>
      <div className="isolate flex items-center justify-between px-10 py-10 lg:px-16 xl:px-20 2xl:px-40">
        <div>
          <span className="text-xs">
            Designed and developed by <span className="font-bold">m4kman.</span>
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="https://github.com/m4kman/repik" target="_blank">
            <Github
              width={"1.5rem"}
              height={"1.25rem"}
              className="fill-black hover:fill-black/75"
            />
          </Link>
          <Link href="https://x.com/m4kman" target="_blank">
            <Twitter
              width={"1.25rem"}
              height={"1.25rem"}
              className="fill-black hover:fill-black/75"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
