'use strict';

// Navbar toggle

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
	navToggleBtn.classList.toggle("active");
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
	navbarLinks[i].addEventListener("click", navToggleFunc);
}



// header active on scroll

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
	window.scrollY >= 10 ? header.classList.add("active")
		: header.classList.remove("active");
});


/** Modal Product */
var Modal = (function () {
	var openedModal;

	return {
		open,
		close,
		change,
		alert
	};

	function open(target, callback) {
		document.documentElement.classList.add("is-scroll-disabled");
		openedModal = document.querySelector(target);
		openedModal.dataset.opened = "true";
		callback && callback(openedModal);

		// Add youtube iframe video src or video src
		if (openedModal.dataset.video) {
			if (openedModal.dataset.video.includes("youtube")) {
				var vParam = openedModal.dataset.video.split("v=");
				var videoId = vParam[1].includes("&")
					? vParam[1].substr(0, vParam[1].indexOf("&"))
					: vParam[1];
				var embed =
					"https://www.youtube.com/embed/" +
					videoId +
					"?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1";
				openedModal.querySelector("iframe").src = embed;
			} else {
				openedModal.querySelector("video").src = openedModal.dataset.video;
			}
		}

		// Add iframe src
		if (openedModal.dataset.iframe) {
			openedModal.querySelector("iframe").src = openedModal.dataset.iframe;
		}
	}

	function close(event, callback) {
		if (event) {
			event.preventDefault(), event.stopPropagation();
			if (!event.target.dataset.hasOwnProperty("modalClose")) return;
		}

		document.documentElement.classList.remove("is-scroll-disabled");
		openedModal.dataset.opened = "false";

		// Remove video iframe url or iframe src
		if (openedModal.dataset.iframe) {
			openedModal.querySelector("iframe").src = "";
		}

		// Remove video iframe src or video src
		if (openedModal.dataset.video) {
			if (openedModal.dataset.video.includes("youtube")) {
				openedModal.querySelector("iframe").src = "";
			} else {
				var video = openedModal.querySelector("video");
				video.pause();
				video.currentTime = 0;
			}
		}

		callback && callback(openedModal);
	}

	function change(target, event) {
		event && (event.preventDefault(), event.stopPropagation());
		openedModal.dataset.opened = "false";
		openedModal = document.querySelector(target);
		openedModal.dataset.opened = "true";
	}

	function alert(element, text) {
		open(element, function (element) {
			text && (element.querySelector(".modal--content").innerHTML = text);
		});
	}
})();

// Design Detail
const imgs = document.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];
        let imgId = 1;

        imgBtns.forEach((imgItem) => {
          imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
          });
        });

        function slideImage() {
          const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

          document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
        }

        window.addEventListener('resize', slideImage);

// Scroll Top
let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
	  document.documentElement.scrollHeight -
	  document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
	  scrollProgress.style.display = "grid";
	} else {
	  scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
	  document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;


  // Disable Screenshoot
  document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {

            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
        }
       function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
        }
        setInterval("AccessClipboardData()", 300);


		// Loader
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
	loader.classList.add("disppear");
}