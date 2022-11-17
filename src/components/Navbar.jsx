import { Navbar, Typography, Button } from "@material-tailwind/react";

export default function NavbarComponent() {
  return (
    <Navbar className="w-full m-auto mt-[30px] border-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-bold text-[22px] text-[#130F40]"
        >
          <span>DeBoook</span>
        </Typography>

        <Button variant="gradient" size="md" className="inline-block">
          <span>Sign in</span>
        </Button>
      </div>
    </Navbar>
  );
}
