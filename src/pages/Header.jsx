import NavList from "../components/NavList";

function Header() {
  return (
    <header className="flex flex-col gap-10">
      <ul className="list-none text-xl flex-col gap-5 flex font-semibold">
        <NavList />
      </ul>
      <hr className="bg-white flex h-0.5"></hr>
    </header>
  );
}

export default Header;
