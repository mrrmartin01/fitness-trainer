import NavList from "../components/NavList";

function Header() {
  return (
    <header className="flex flex-col gap-20">
      <ul className="list-none text-xl flex-col gap-5 flex font-semibold">
        <NavList />
      </ul>
      <hr className="bg-red-300 flex "></hr>
    </header>
  );
}

export default Header;
