window.onload = function() {
    const pdfButton = document.querySelector("#button-pdf");
    const wordButton = document.querySelector("#button-word");
    const buttonsSize = document.querySelector("#button-pdf").offsetWidth * 2 + 5; // 5 is margin-right for every button (space between buttons)
    const cvButtons = document.querySelector("#cv-buttons");


    
    // Buttons on the left styling
    pdfButton.onmouseover = function() {
        pdfButton.style.transition = "all 0.1s ease-in-out";
        pdfButton.style.border = "solid 2px beige"
        pdfButton.style.cursor = "pointer";
    }
    pdfButton.onmouseout = function() {
        pdfButton.style.transition = "all 0.2s ease-in-out";
        pdfButton.style.border = "solid 2px #ff312e";
        pdfButton.style.background = "#ff312e";

    }

    pdfButton.addEventListener('mousedown', e => {
        pdfButton.style.background = "#FF5F5C";
    });

    pdfButton.addEventListener('mouseup', e => {
        pdfButton.style.background = "#ff312e";
    });

    wordButton.onmouseover = function() {
        wordButton.style.transition = "all 0.1s ease-in-out";
        wordButton.style.border = "solid 2px beige"
        wordButton.style.cursor = "pointer";
    }
    wordButton.onmouseout = function() {
        wordButton.style.transition = "all 0.2s ease-in-out";
        wordButton.style.border = "solid 2px #ff312e";
        wordButton.style.background = "#ff312e";

    }

    wordButton.addEventListener('mousedown', e => {
        wordButton.style.background = "#FF5F5C";
    });

    wordButton.addEventListener('mouseup', e => {
        wordButton.style.background = "#ff312e";
    });


    buttonsCenterResponsive();

    function buttonsCenterResponsive() {
        cvButtons.style.left = (window.innerWidth - buttonsSize) / 2 + "px";
    
    };

    // You need to finish here (put buttons in place when not mobile screen)
    window.onresize = function(event) { 
        buttonsCenterResponsive
    };

}


