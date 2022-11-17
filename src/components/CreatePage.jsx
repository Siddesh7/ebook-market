import { Image } from "@chakra-ui/react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";

export default function CreatePage() {
  const [coverImg, setCoverImg] = useState();
  const [pdfFile, setPdfFile] = useState();
  const [bookData, setBookData] = useState({
    name: "",
    author: "anon",
    description: "",
    price: 0,
  });
  return (
    <div className="w-[90%] m-auto mt-[30px]">
      <h3 className="text-[38px] text-white font-semibold">
        Upload your Book and start earning!
      </h3>
      <div className="flex flex-row items-center justify-between">
        <div className="bg-white w-[70%] rounded-lg border border-white p-[20px] mt-[20px] font-bold">
          <form action="">
            <div className="flex flex-row ">
              <div className="flex flex-col w-[40%]">
                <div className="my-[10px]">
                  <Input
                    variant="standard"
                    label="Name of the Book"
                    value={bookData.name}
                    onChange={(e) => {
                      setBookData({ ...bookData, name: e.target.value });
                    }}
                  />
                </div>
                <div className="my-[10px]">
                  <Input
                    variant="standard"
                    label="Author (default : Anon)"
                    value={bookData.author}
                    onChange={(e) => {
                      setBookData({ ...bookData, author: e.target.value });
                    }}
                  />
                </div>{" "}
              </div>
              <div className="flex flex-row ml-[40px] items-center text-gray-400 text-[14px]">
                <div className="flex flex-col">
                  <label className="text-black text-[14px]" for="coverImg">
                    Cover Image
                  </label>
                  <input
                    onChange={(e) => {
                      setCoverImg(e.target.files[0]);
                    }}
                    id="coverImg"
                    type={"file"}
                    accept="image/*"
                  />{" "}
                </div>
                <div className="flex flex-col">
                  <label className="text-black text-[14px]" for="coverImg">
                    Book (PDF Document)
                  </label>
                  <input
                    onChange={(e) => {
                      setPdfFile(e.target.files[0]);
                    }}
                    id="coverImg"
                    type={"file"}
                    accept="application/pdf"
                  />{" "}
                </div>
              </div>
            </div>
            <div className="my-[10px]">
              <Textarea
                label="Short Description"
                variant="standard"
                value={bookData.description}
                onChange={(e) => {
                  setBookData({ ...bookData, description: e.target.value });
                }}
              />
            </div>
            <div className="my-[10px]">
              <Input
                type={"number"}
                variant="standard"
                label="Price ($DAI)"
                value={bookData.price}
                onChange={(e) => {
                  setBookData({ ...bookData, price: e.target.value });
                }}
              />
            </div>
            <Button
              onClick={() => {
                console.log(coverImg);
                console.log(pdfFile);
              }}
              className="my-[20px]"
              fullWidth
              color="green"
            >
              Create
            </Button>
          </form>
        </div>
        <div className="w-[25%] mt-[10px] animate-border from-pink-500 via-green-500 to-yellow-500 bg-[length:400%_400%] p-[4px] bg-gradient-to-r">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilecoin.io%2Fuploads%2Ffil-blog-wormhole.jpg&f=1&nofb=1&ipt=4363b4c2b3e5243a4a25657fe76dc3a872e016d26a87a71dbe7c3078d9568162&ipo=images"
            alt="filecoin"
            className="h-[400px] object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}
