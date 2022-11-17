import { retrieve, storeFiles } from "./web3";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "./cn.pdf";

export default function Pdf() {
  const [cid, setCid] = useState(
    "bafybeiflsuj3rwpriw5y5kyr3at4ilwvsei4ihbmdxcktzp7sunssj7aqy"
  );
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  var cids = "";
  function handleChange(fie) {
    cids = storeFiles(fie);
  }

  function view() {
    var c = retrieve(
      "bafybeiflsuj3rwpriw5y5kyr3at4ilwvsei4ihbmdxcktzp7sunssj7aqy"
    );
    setCid(c);
  }
  return (
    <div>
      <input
        type={"file"}
        onChange={(e) => {
          handleChange(e.target.files);
        }}
      ></input>
      <button onClick={view}>click</button>

      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
