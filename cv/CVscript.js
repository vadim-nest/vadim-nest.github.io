window.onload = function() {
    const pdfButton = document.querySelector("#button-pdf");
    const wordButton = document.querySelector("#button-word");
    
    // Buttons on the left styling
    pdfButton.onmouseover = function() {
        pdfButton.style.transition = "all 0.1s ease-in-out";
        pdfButton.style.border = "solid 2px beige"
        pdfButton.style.cursor = "pointer";
    }
    pdfButton.onmouseout = function() {
        pdfButton.style.transition = "all 0.4s ease-in-out";
        pdfButton.style.border = "solid 2px #ff312e"

    }

    wordButton.onmouseover = function() {
        wordButton.style.transition = "all 0.1s ease-in-out";
        wordButton.style.border = "solid 2px beige"
        wordButton.style.cursor = "pointer";
    }
    wordButton.onmouseout = function() {
        wordButton.style.transition = "all 0.4s ease-in-out";
        wordButton.style.border = "solid 2px #ff312e"
    }
}