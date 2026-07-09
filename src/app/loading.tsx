import Container from "@/shared/components/Containder";

const Loading = () => {
  return (
    <Container
      classNames={
        "min-h-screen flex flex-col items-center justify-center gap-2"
      }
    >
      <h1 className={"text-2xl text-primary"}>Loading...</h1>
    </Container>
  );
};

export default Loading;
