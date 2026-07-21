import Container from "@/components/shared/Container";
import Logo from "@/components/shared/logo";
import DesktopNav from "./desktop-nav";
import NavbarActions from "./navbar-actions";

export default function Navbar() {
  return (
    <header>
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Logo />
          <DesktopNav />
          <NavbarActions />
        </nav>
      </Container>
    </header>
  );
}
