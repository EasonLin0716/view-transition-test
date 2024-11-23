import CustomLink from "./CustomLink";

function AppHeader() {
  const h1Text = "SPA React";
  return (
    <header>
      <nav>
        <h1>{h1Text}</h1>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </nav>
    </header>
  );
}

export default AppHeader