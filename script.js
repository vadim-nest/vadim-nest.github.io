// Port Number: http://127.0.0.1:5500/

// Colours:
//     white:           #FFFFFF
//     black:           #222222
//     yellow:          #FFCC02
//     red:             #EE0000
//     grey for laps:   #A3A3A3
// 

//     colors for buttons:
//     yellow button :          #FFDB4D
//     yellow button on hover : #FFD633
//     yellow button on press : #FFCC00

window.onload = function () {
    
    const contactButton = document.querySelector("#contact-float");
    let changeOnProjects = window.innerHeight / 2;
    let toggleProjectChanged = false;
    let toggleLogoChanged = false;
    let toggleContactChanged = false;
    const buttonAbout = document.querySelector("#button-about");
    const buttonProjects = document.querySelector("#button-projects");
    const buttonContact = document.querySelector("#button-contact");
    let namePosition = elementLocation(document.querySelector("#about h1")).top + document.querySelector("#about h1").offsetHeight - document.querySelector(".header").offsetHeight;
    const logoV = document.querySelector("#logo .red");
    const logoG = document.querySelector("#logo");
    const innerText = contactButton.innerHTML;
    let innerTextLength = innerText.length;
    let contactPageStart = elementLocation(document.querySelector("#contact")).top;
    let contactButtonRight = (window.innerWidth - document.querySelector("#contact-float").offsetLeft - document.querySelector("#contact-float").offsetWidth);
    let buttonHidden = false;
    let vh = window.innerHeight * 0.01;
    let changeOnContact = contactPageStart - (45 * vh);
    const buttonDarkTheme = document.querySelector("#dark-theme");
    const header = document.querySelector(".header");
    let mouseOverDarkMode = false;
    const mailLink = document.querySelector(".mail-link");
    const githubButton = document.querySelector(".fa-github");
    const linkedinButton = document.querySelector(".fa-linkedin-in");
    const instagramButton = document.querySelector(".fa-instagram");
    const facebookButton = document.querySelector(".fa-facebook");
    const telegramButton = document.querySelector(".fa-telegram-plane");
    const mailButton = document.querySelector(".mail-icon");
    const buttonOpenProject = document.querySelectorAll(".button-open-project");
    const arrow1 = document.querySelector(".arrow1");
    const arrow2 = document.querySelector(".arrow2");
    const arrows = document.querySelector("#scroll");

    

    ////////////////////////////////////////////
    // Styling / Event Listeners
    ///////////////////////////////////////////

    // // We listen to the resize event
    // window.addEventListener('resize', () => {
    //     // We execute the same script as before
    //     let vh = window.innerHeight * 0.01;
    //     // document.documentElement.style.setProperty('--vh', `${vh}px`);
    // });

    let projectsSectionLocation = elementLocation(document.querySelector("#projects")).top / 2;
    changeBorderHeader();


    // Contact button styling
    contactButton.style.border = "solid 3px #FFDB4D";

    contactButton.onmouseover = function() { 
        contactButton.style.transition = "all 0.1s ease-in-out";
        contactButton.style.background = "#FFD633"
        contactButton.style.border = "solid 3px #FFD633"
        contactButton.style.boxShadow = "0px 3px 5px rgba(0, 0, 0, 0.1)";
        contactButton.style.cursor = "pointer";
    }
    contactButton.onmouseout = function() { 
        contactButton.style.transition = "all 0.4s ease-in-out";
        contactButton.style.background = "#FFDB4D" 
        contactButton.style.border = "solid 3px #FFDB4D"
        contactButton.style.boxShadow = "0px 4px 7px rgba(0, 0, 0, 0.1)";
    }

    // Contact button on mousedown/mouseup
    contactButton.addEventListener('mousedown', e => {
        contactButton.style.background = "#FFCC00";
        contactButton.style.border = "solid 3px #FFCC00";
        contactButton.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.1)";
    });

    contactButton.addEventListener('mouseup', e => {
        contactButton.style.background = "#FFD633";
        contactButton.style.border = "solid 3px #FFD633";
        contactButton.style.boxShadow = "0px 4px 7px rgba(0, 0, 0, 0.1)";
        document.querySelector("#contact").style.transition = "all 0.4s ease-in-out";
        document.querySelector("#contact").scrollIntoView({behavior: "smooth"});         
    });


    // Buttons in header Styling / Event Listeners
    buttonAbout.onmouseover = function() {
        buttonAbout.style.transition = "all 0.1s ease-in-out";
        buttonAbout.style.color = "#ee0000";
        buttonAbout.style.cursor = "pointer";
    }
    buttonAbout.onmouseout = function() {
        buttonAbout.style.transition = "all 0.4s ease-in-out";
        buttonAbout.style.color = "#222222";
    }
    buttonAbout.addEventListener('mouseup', e => {
        document.querySelector("#about").style.transition = "all 0.4s ease-in-out";
        document.querySelector("body").scrollIntoView({behavior: "smooth", block: "start"});  
        buttonAbout.style.transition = "all 1s ease-in-out";
        buttonAbout.style.color = "#222222";
    });


    buttonProjects.onmouseover = function() {
        buttonProjects.style.transition = "all 0.1s ease-in-out";
        buttonProjects.style.color = "#ee0000";
        buttonProjects.style.cursor = "pointer";
    }
    buttonProjects.onmouseout = function() {
        buttonProjects.style.transition = "all 0.4s ease-in-out";
        buttonProjects.style.color = "#222222";
    }
    buttonProjects.addEventListener('mouseup', e => {
        // document.querySelector("#projects").style.transition = "all 0.4s ease-in-out";
        document.querySelector("#projects").scrollIntoView({behavior: "smooth"});  
        // document.querySelector("#projects h1").scrollTop -= 10;      
        buttonProjects.style.transition = "all 1s ease-in-out";
        buttonProjects.style.color = "#222222"; 
    });


    buttonContact.onmouseover = function() {
        buttonContact.style.transition = "all 0.1s ease-in-out";
        buttonContact.style.color = "#ee0000";
        buttonContact.style.cursor = "pointer";
    }
    buttonContact.onmouseout = function() {
        buttonContact.style.transition = "all 0.4s ease-in-out";
        buttonContact.style.color = "#222222";
    }
    buttonContact.addEventListener('mouseup', e => {
        document.querySelector("#contact").style.transition = "all 0.4s ease-in-out";
        document.querySelector("#contact").scrollIntoView({behavior: "smooth"});  
        buttonContact.style.transition = "all 1s ease-in-out";
        buttonContact.style.color = "#222222";        
    });

    // Dark-theme Button in header
    // Dark-theme button grey on hover on header
    header.onmouseover = function() {
        buttonDarkTheme.style.transition = "all 0.2s ease-in-out";
        if (mouseOverDarkMode) {
            buttonDarkTheme.style.color = "#222222";
            buttonDarkTheme.style.cursor = "pointer";
        } else {
            buttonDarkTheme.style.color = "#f3f1f1";
        }
    }
    header.onmouseout = function() {
        buttonDarkTheme.style.transition = "all 0.4s ease-in-out";
        buttonDarkTheme.style.color = "#fff";
    }
    // Dark-theme button black on hover
    buttonDarkTheme.onmouseover = function() {
        mouseOverDarkMode = true;
    }
    buttonDarkTheme.onmouseout = function() {
        mouseOverDarkMode = false;
    }

    // Open project buttons on hover
    buttonOpenProject.forEach(element => {
        element.onmouseover = function() { 
            element.style.transition = "all 0.1s ease-in-out";
            element.style.color = "#EE0000";
        }
        element.onmouseout = function() {
            element.style.transition = "all 0.4s ease-in-out";
            element.style.color = "#222222";
        }

        // Open project buttons on click
        element.addEventListener('mousedown', e => {
            // element.style.background = "#F5F5F5";
            element.style.transition = "all 0.1s ease-in-out";
            element.style.border = "solid 3px #ffdb4d";
        });
        element.addEventListener('mouseup', e => {
            element.style.transition = "all 0.4s ease-in-out";
            element.style.border = "solid 3px #FFCC00";
        });
    });



    // Email link on hover
    mailLink.onmouseover = function() {
        mailLink.style.transition = "all 0.1s ease-in-out";
        mailLink.style.color = "#ee0000";
        mailLink.style.cursor = "pointer";
    }
    mailLink.onmouseout = function() {
        mailLink.style.transition = "all 0.4s ease-in-out";
        mailLink.style.color = "#222222";
    }


    // Icon buttons in the bottom
    githubButton.onmouseover = function() {
        githubButton.style.transition = "all 0.1s ease-in-out";
        githubButton.style.color = "#8831A8";
        githubButton.style.cursor = "pointer";
    }
    githubButton.onmouseout = function() {
        githubButton.style.transition = "all 0.4s ease-in-out";
        githubButton.style.color = "#222222";
    }

    linkedinButton.onmouseover = function() {
        linkedinButton.style.transition = "all 0.1s ease-in-out";
        linkedinButton.style.color = "#0A66C2";
        linkedinButton.style.cursor = "pointer";
    }
    linkedinButton.onmouseout = function() {
        linkedinButton.style.transition = "all 0.4s ease-in-out";
        linkedinButton.style.color = "#222222";
    }

    // instagramButton.onmouseover = function() {
    //     instagramButton.style.transition = "all 0.1s ease-in-out";
    //     instagramButton.style.color = "#F35934";
    //     instagramButton.style.cursor = "pointer";
    // }

    // instagramButton.onmouseout = function() {
    //     instagramButton.style.transition = "all 0.4s ease-in-out";
    //     instagramButton.style.color = "#222222";
    // }

    // facebookButton.onmouseover = function() {
    //     facebookButton.style.transition = "all 0.1s ease-in-out";
    //     facebookButton.style.color = "#1877F2";
    //     facebookButton.style.cursor = "pointer";
    // }
    // facebookButton.onmouseout = function() {
    //     facebookButton.style.transition = "all 0.4s ease-in-out";
    //     facebookButton.style.color = "#222222";
    // }

    // telegramButton.onmouseover = function() {
    //     telegramButton.style.transition = "all 0.1s ease-in-out";
    //     telegramButton.style.color = "#229FDA";
    //     telegramButton.style.cursor = "pointer";
    // }
    // telegramButton.onmouseout = function() {
    //     telegramButton.style.transition = "all 0.4s ease-in-out";
    //     telegramButton.style.color = "#222222";
    // }

    mailButton.onmouseover = function() {
        mailButton.style.transition = "all 0.1s ease-in-out";
        mailButton.style.color = "#ee0000";
        mailButton.style.cursor = "pointer";
    }
    mailButton.onmouseout = function() {
        mailButton.style.transition = "all 0.4s ease-in-out";
        mailButton.style.color = "#222222";
    }


    // Arrows appear in the bottom
    function arrowsAppear() {
        setTimeout(() => {
            arrow1.style.transition = "all 0.6s ease-in-out";
            arrow1.style.color = "rgba(255, 204, 0, 0.3)";
        }, 1000);
        setTimeout(() => {
            arrow2.style.transition = "all 0.6s ease-in-out";
            arrow2.style.color = "rgba(255, 204, 0, 0.6)";
        }, 1700);

    };

    arrows.onmouseover = function() {
        arrows.style.cursor = "pointer";
        arrow1.style.transition = "all 0.2s ease-in-out";
        arrow2.style.transition = "all 0.2s ease-in-out";
        arrow1.style.color = "rgba(255, 204, 0, 0.8)";
        arrow2.style.color = "rgba(255, 204, 0, 0.8)";
        arrow1.style.paddingTop = "10px";

    }
    arrows.onmouseout = function() {
        arrow1.style.transition = "all 0.4s ease-in-out";
        arrow2.style.transition = "all 0.4s ease-in-out";
        arrow1.style.color = "rgba(255, 204, 0, 0.3)";
        arrow2.style.color = "rgba(255, 204, 0, 0.6)";
        arrow1.style.paddingTop = "0px";

    }
    arrows.addEventListener('mouseup', e => {
        document.querySelector("#projects").scrollIntoView({behavior: "smooth"});  
        arrow1.style.transition = "all 0.4s ease-in-out";
        arrow2.style.transition = "all 0.4s ease-in-out";
        arrow1.style.color = "rgba(255, 204, 0, 0.8)";
        arrow2.style.color = "rgba(255, 204, 0, 0.8)";
        arrow1.style.paddingTop = "0px";
    });
    arrowsAppear();

    changingParts();
    

    ////////////////////////////////////////////
    // Responsive Design
    ///////////////////////////////////////////
    // window.addEventListener("resize", displayWindowSize);
    let mobile = false;
    window.onresize = function(event) { 
        responsiveDesign();
    };


    function responsiveDesign() {
        if(window.innerWidth >= 767) {
            if(mobile) {

                // Toggle Dark Theme button
                buttonDarkTheme.classList.toggle("fas");
                buttonDarkTheme.classList.toggle("fa-adjust");
                buttonDarkTheme.classList.toggle("fa-2x");

                let element = document.querySelector("#stopwatchPic");
                element.parentNode.insertBefore(element, element.parentNode.firstChild);


            }
            mobile = false;
        } else if (window.innerWidth < 767){
            if(!mobile) {

                // Toggle Dark Theme button
                buttonDarkTheme.classList.toggle("fas");
                buttonDarkTheme.classList.toggle("fa-adjust");
                buttonDarkTheme.classList.toggle("fa-2x");

                // Swap Picture and text in Projects
                // YOU NEED TO CHANGE IT TO querySelectorAll WHEN YOU HAVE MORE THAN 1 PROJECT
                let element = document.querySelector(".aboutProjects");
                element.parentNode.insertBefore(element, element.parentNode.firstChild);
            }
            mobile = true;
        }
    };

    responsiveDesign();

    // Fix for back button in ios safari (the logo and the floating button weren't updating)
    window.onpageshow = function(event) {
		if (event.persisted) {
            event.preventDefault();
			window.location.reload(true);
		}
	};

    window.onscroll = function() {
        // Changing floating button on scroll
        let top = window.scrollY;
        if ((top > changeOnProjects) && !toggleProjectChanged) {
            // Changing contact button on scroll (to envelope)
            contactButton.style.transition = "all 0.2s ease-in-out";

            // Loop for removing letters one by one with a slight delay
            for(let i = innerTextLength; i > 0; --i) {
                setTimeout(() => {
                    contactButton.innerHTML = contactButton.innerHTML.substring(0, contactButton.innerHTML.length - 1);
                }, i * 20);
            }
            setTimeout(() => {
                if(contactButton.innerHTML !== "") {
                    contactButton.innerHTML = "";
                }
            }, 150);

            contactButton.classList.toggle("far");
            contactButton.classList.toggle("fa-envelope");
            contactButton.style.fontSize = "1.6em"; 
            toggleProjectChanged = true;

            contactButton.style.width = "57px";

        } else if ((top < changeOnProjects) && toggleProjectChanged) {
            // Changing contact button on scroll (to 'Contact')
            contactButton.style.transition = "none";
            contactButton.style.fontSize = "1.2em";
            contactButton.style.transition = "all 0.2s ease-in-out";
            contactButton.style.width = "150px";

            // Loop for adding letters one by one with a slight delay
            for(let i = 0; i < innerTextLength; ++i) {
                setTimeout(() => {
                    contactButton.innerHTML = contactButton.innerHTML + innerText.charAt(i);
                }, i * 40);
            }
            setTimeout(() => {
                if(contactButton.innerHTML !== "Contact") {
                    contactButton.innerHTML = "Contact";
                }
            }, 300);
            contactButton.classList.toggle("far");
            contactButton.classList.toggle("fa-envelope");
            toggleProjectChanged = false;

        }

        // Logo appearing when scroll past my name
        if ((top > namePosition) && !toggleLogoChanged) {
            setTimeout(() => {
                logoV.style.transition = "all 0.2s ease-in-out";
                logoV.style.color = "#ee0000";
            }, 50);
            logoG.style.transition = "all 0.2s ease-in-out";
            logoG.style.color = "#222222";
            toggleLogoChanged = true;
        } else if ((top < namePosition) && toggleLogoChanged) {
            logoV.style.color = "#fff";
            setTimeout(() => {
                logoG.style.color = "#fff";
            }, 50);
            toggleLogoChanged = false;
        }


        // The floating button is white, when you reaching the bottom of the page (fix for mobile browsers scrolling)
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            contactButton.style.color = "#ffffff";
            contactButton.style.background = "#ffffff";
            contactButton.style.border = "#ffffff";
            contactButton.style.boxShadow = "0px 4px 7px rgba(255, 255, 255)";
        } else {
            contactButton.style.color = "#222222";
            contactButton.style.background = "#ffdb4d";
            contactButton.style.border = "#ffdb4d";
            contactButton.style.boxShadow = "0px 4px 7px rgba(0, 0, 0, 0.1)";
        }



        // Hiding Contact Floating Button when reach Contact Section
        // let floatingButtonLocation =  elementLocation(document.querySelector("#contact-float")).top;
        // document.querySelector("#contact-float").style.transition = "all 0.2s ease-in-out";
        // if (floatingButtonLocation >= contactPageStart && !buttonHidden) {
        //     buttonHidden = true;
        //     for(let i = contactButtonRight; i < window.innerWidth; ++i) {
        //         setTimeout(() => {
        //             contactButton.style.right = (contactButtonRight - i).toString() + "px";
        //         }, i * 0.3);
        //     }
        // } else if (floatingButtonLocation <= contactPageStart && buttonHidden) {
        //     buttonHidden = false;
        //     for(let i = window.innerWidth; i > (contactButtonRight); --i) {
        //         setTimeout(() => {
        //             contactButton.style.right = (window.innerWidth - i + 90).toString() + "px";
        //         }, i * 0.4);
        //     }
        // }

        // Changing red border in header on scroll
        buttonAbout.style.transition = "all 0.4s ease-in-out";
        buttonProjects.style.transition = "all 0.4s ease-in-out";
        buttonContact.style.transition = "all 0.4s ease-in-out";
        changeBorderHeader();
    }

    


    // Function for getting an element position relative to the page (document)
    function elementLocation(el) {
        let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    // Function for changing the red line in header
    function changeBorderHeader() {
        if (window.scrollY < projectsSectionLocation && window.scrollY < changeOnContact) {
            buttonAbout.style.borderBottom = "3px solid #ee0000";
            buttonProjects.style.borderBottom = "3px solid #fff";
            buttonContact.style.borderBottom = "3px solid #fff";
        } else if (window.scrollY >= projectsSectionLocation && window.scrollY < changeOnContact) {
            buttonAbout.style.borderBottom = "3px solid #fff";
            buttonProjects.style.borderBottom = "3px solid #ee0000";
            buttonContact.style.borderBottom = "3px solid #fff";
        } else if (window.scrollY > projectsSectionLocation && window.scrollY > changeOnContact) {
            buttonAbout.style.borderBottom = "3px solid #fff";
            buttonProjects.style.borderBottom = "3px solid #fff";
            buttonContact.style.borderBottom = "3px solid #ee0000";
        }
    }

    // When a back button was pressed
    if(!!window.performance && window.performance.navigation.type == 2) {
        // window.location.reload();
        changingParts();
    }

    // When page was reloaded
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        changingParts();
    }

    // Function for double checking that the Logo and the Floating button are correct
    function changingParts() {
        let changeOnProjects = window.innerHeight / 2;
        let namePosition = elementLocation(document.querySelector("#about h1")).top + document.querySelector("#about h1").offsetHeight - document.querySelector(".header").offsetHeight;

        // Double-chek for the Logo colours
        let top = window.scrollY;
        if ((top > namePosition)) {
            logoV.style.color = "#ee0000";
            logoG.style.color = "#222222";
            toggleLogoChanged = true;
        } else if ((top < namePosition)) {
            logoV.style.color = "#fff";
            logoG.style.color = "#fff";
            toggleLogoChanged = false;
        }

        // Double-check for floating button
        if ((top > changeOnProjects)) {
            if(contactButton.innerHTML !== "") {
                contactButton.innerHTML = "";
            }

            if (contactButton.classList.contains("fa-envelope") === false) {
                contactButton.classList.toggle("far");
                contactButton.classList.toggle("fa-envelope");
            }


            contactButton.style.fontSize = "1.6em"; 
            toggleProjectChanged = true;

            contactButton.style.width = "57px";

        } else if ((top < changeOnProjects)) {
            // Changing contact button on scroll (to 'Contact')
            contactButton.style.transition = "none";
            contactButton.style.fontSize = "1.2em";
            contactButton.style.width = "150px";

            if(contactButton.innerHTML !== "Contact") {
                contactButton.innerHTML = "Contact";
            }

            if (contactButton.classList.contains("fa-envelope") === true) {
                contactButton.classList.toggle("far");
                contactButton.classList.toggle("fa-envelope");
            }
            toggleProjectChanged = false;

        }
    } 





    
    // example use
    // var div = document.querySelector('div');
    // var divOffset = offset(div);
    // console.log(divOffset.left, divOffset.top);

    

    ////////////////////////////////////////////
    // Bug fixes
    ///////////////////////////////////////////
    


}