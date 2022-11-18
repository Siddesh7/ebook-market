import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <Card className="w-full my-[20px]">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={`https://${props.coverImg}.ipfs.dweb.link/`}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="h-[60%] relative">
        <Typography variant="h5" className="mb-2">
          {props.name}
        </Typography>
        <Typography>
          {props.description.slice(0, 100)}
          {props.description.length > 100 && " ...."}
        </Typography>
        <Link
          to={`/book?name=${props.name}&author=${props.author}`}
          className="mt-[50px] absolute bottom-[20px] left-[20px]"
        >
          <Button color="green">Read</Button>
        </Link>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">Author</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          {props.author}
        </Typography>
      </CardFooter>
    </Card>
  );
}
