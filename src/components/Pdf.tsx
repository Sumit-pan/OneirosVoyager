import { Document, Page, pdfjs } from 'react-pdf';
import React from 'react';

// Setup pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer() {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/pdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={() => setPageNumber(prev => (numPages ? Math.min(prev + 1, numPages) : prev))} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>

      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}
