import Logo from "components/Logo";

function Header() {
  console.log("hola");
  return (
    <header className="header">
      <Logo />
      <h1 className="title">Asteroids</h1>
    </header>
  );
}

export default Header;
