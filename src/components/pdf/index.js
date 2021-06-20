import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import WhitePaper from '../../CTCWTF TOKEN LAUNCH 2021.pdf'

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="../../CTCWTF TOKEN LAUNCH 2021.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default PdfViewer