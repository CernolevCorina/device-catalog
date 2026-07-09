import Container from "@/shared/components/Containder";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container
      classNames={
        "min-h-screen flex flex-col items-center justify-center gap-2"
      }
    >
      <h1 className={"text-2xl text-primary"}>Oooops, nothing found</h1>
      <Link href={"/"} className={"underline italic"}>
        Return to home
      </Link>
    </Container>
  );
};

export default NotFound;
