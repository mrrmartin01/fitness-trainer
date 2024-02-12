import NavList from "../components/NavList";

function Header() {
  return (
    <header className="">
      <ul className="list-none text-xl flex-col gap-5 flex font-semibold">
        <NavList />
      </ul>
    </header>
  );
}

export default Header;
