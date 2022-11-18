import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
export default function BookPage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [books, setBooks] = useState();
  const [bookFetched, setBookFetched] = useState(false);
  const queryParameters = new URLSearchParams(window.location.search);
  const author = queryParameters.get("author");
  const name = queryParameters.get("name");

  useEffect(() => {
    fetch(`http://localhost:3001/api/get?name=${name}&author=${author}`)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
        console.log(json);
        setBookFetched(true);
      });
  }, []);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="mt-[20px] w-[90%] m-auto h-[140vh] overflow-y-hidden">
      {bookFetched && (
        <div className="flex flex-row justify-between">
          <div className="text-white w-[40%] mt-[50px]">
            <AnimatedGradientText className="text-[64px] font-bold">
              {books.name}
            </AnimatedGradientText>
            <p className="text-[18px] mb-[40px]">
              Author: &nbsp;{books.author}
            </p>
            <p className="text-[18px]">{books.description}</p>

            {numPages > 1 && numPages > pageNumber ? (
              <Button
                color="green"
                onClick={() => {
                  if (numPages !== null && pageNumber + 1 <= numPages) {
                    setPageNumber(pageNumber + 1);
                  }
                }}
                className="my-[30px]"
              >
                Click to view next page
              </Button>
            ) : null}
          </div>
          <div className="relative overflow-x-hidden">
            <Document
              file={`https://${books.pdfUri}.ipfs.w3s.link`}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            {numPages > 1 ? (
              <div className="absolute top-[122vh] flex flex-row justify-between w-[100%]">
                {pageNumber > 1 ? (
                  <div
                    className={
                      "cursor-pointer text-white hover:text-gray-700 flex flex-row items-center"
                    }
                    onClick={() => {
                      if (numPages !== null && pageNumber - 1 > 0) {
                        setPageNumber(pageNumber - 1);
                      }
                    }}
                  >
                    <BsArrowLeftSquareFill size={"2rem"} color="white" />
                    <p className="ml-[10px]">Previous Page</p>
                  </div>
                ) : null}
                {pageNumber < numPages ? (
                  <div
                    className={
                      "cursor-pointer text-white hover:text-gray-700 flex flex-row items-center"
                    }
                    onClick={() => {
                      if (numPages !== null && pageNumber + 1 <= numPages) {
                        setPageNumber(pageNumber + 1);
                      }
                    }}
                  >
                    <p className="mr-[10px]">Next Page</p>
                    <BsArrowRightSquareFill size={"2rem"} color="white" />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
export const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(192deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 4s infinite linear;
  font-feature-settings: "kern";
  overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;
