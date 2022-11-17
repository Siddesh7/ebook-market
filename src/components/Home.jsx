import { Button } from "@material-tailwind/react";
import Item from "./Card";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="mt-[20px] w-[90%] m-auto">
      <h2 className="text-white text-[54px] mb-[10px] mt-[30px] ">
        Explore Collections
      </h2>
      <Link to="/create">
        <Button color="green">Create a Book</Button>
      </Link>

      <div className="mt-[80px] grid grid-cols-4 gap-6">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
