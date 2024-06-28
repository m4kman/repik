function Navbar() {
  return (
    <nav className="justify-between flex px-28 pt-8 items-center">
      <div>
        <span className="font-semibold text-[2.25rem]">// repik</span>
      </div>
      <div>
        <ol className="flex gap-4 items-center justify-center font-medium text-xl">
          <li className="py-2 px-[18px] bg-black text-[#f1f5f9] rounded-full">
            Home
          </li>
          <li>Restore</li>
        </ol>
      </div>
    </nav>
  );
}

export default Navbar;
