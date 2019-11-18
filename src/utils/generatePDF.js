import jsPDF from "jspdf";

export default content => {
    var doc = new jsPDF();

    doc.fromHTML(content, 15, 15, {
        width: 170
    });

    doc.save("a4.pdf");
};
