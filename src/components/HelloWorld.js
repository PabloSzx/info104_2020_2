import { Button, Input } from "@chakra-ui/core";

export const HelloWorld = () => {
  return (
    <div>
      <p
        css={{
          fontSize: "20em",
        }}
      >
        hello world
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input />
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          asdasd
        </Button>
      </form>
    </div>
  );
};
