import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";

export default async (template, data) => {
    // This should be a Uint8Array or ArrayBuffer
    // This data can be obtained in a number of different ways
    // If your running in a Node environment, you could use fs.readFile()
    // In the browser, you could make a fetch() call and use res.arrayBuffer()

    const existingPdfBytes = await fetch(template.file).then(res =>
        res.arrayBuffer()
    );

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Get the first page of the document
    const pages = pdfDoc.getPages();

    template.fields.forEach(field => {
        pages[field.page - 1].drawText(
            "" + (field.literal || data[field.field.toUpperCase()]),
            {
                x: field.x,
                y: field.y,
                size: field.size || 10,
                font: helveticaFont,
                color: rgb(0.95, 0.1, 0.1)
            }
        );
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)

    const pdfBytes = await pdfDoc.save();

    // For example, `pdfBytes` can be:
    //   • Written to a file in Node
    //   • Downloaded from the browser
    //   • Rendered in an <iframe>

    download(pdfBytes, template.name + ".pdf", "application/pdf");
};

// const PDFToImages = pdfFile => {
//     return [];
// };

// const addText = (x, y, text) => {
//     return;
// };

// const imagesToPDF = images => {};

// export const generatePDF = (template, fields) => {
//     const images = PDFToImages(template.file);

//     template.fields.forEach(field => {
//         images[field.page] = addText(field.x, field.y, fields[field.text]);
//     });

//     imagesToPDF(images);
// };
