import Container from "@/components/shared/Container";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import Logo from "@/components/shared/logo";
import ThemeToggle from "@/components/shared/theme-toggle";
import DesktopNav from "./desktop-nav";
import MobileNavigation from "./MobileNavigation";
import NavbarActions from "./navbar-actions";

export default function Navbar() {
  return (
    <header className="bg-card/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />

            <NavbarActions />

            <MobileNavigation />
          </div>
        </nav>
      </Container>
    </header>
  );
}
