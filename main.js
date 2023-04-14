const generateQRCode = () => {
    const text = document.getElementById("text").value;
    if (text === "") {
        alert("Please enter text or URL");
        return;
    }
    const qrcode = new QRCode({
        content: text,
        padding: 4,
        width: 256,
        height: 256,
        color: "#000000",
        background: "#ffffff",
        ecl: "M"
    });
    const svg = qrcode.svg();
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "qrcode.svg";
    document.getElementById("qrcode").innerHTML = svg.outerHTML;
    downloadLink.click();
}

document.getElementById("generate").addEventListener("click", generateQRCode);
