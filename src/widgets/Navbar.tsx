import ThemeToggle from "@/features/theme-toggle";
import Container from "@/shared/components/Containder";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={"bg-primary"}>
      <Container classNames={"py-2 flex justify-between"}>
        <Link href={"/"} className={"text-foreground"}>
          Home
        </Link>
        <ThemeToggle />
      </Container>
    </nav>
  );
};

export default Navbar;
