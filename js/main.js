let feedbackWindowOpen = document.querySelector(".btn--js");
let feedbackWindow = document.querySelector(".feedback");
let feedbackWindowClose = document.querySelector(".form__close");
let block = document.querySelectorAll('.popup');
let blockOpen = document.querySelectorAll('.navigation__link--js');
let blockClose = document.querySelectorAll('.close');
let form = document.querySelector(".form");
let submitForm = document.querySelector(".form__intro--js");

function toggle (window, open, close) {
  open.addEventListener('click', () => {
    window.classList.remove('hide'); 
    window.classList.add('show');  
  });
  
  close.addEventListener('click', () => {
    window.classList.remove('show'); 
    window.classList.add('hide');     
  });
}
toggle(feedbackWindow, feedbackWindowOpen, feedbackWindowClose);

blockOpen.forEach((item, index) => {
	item.addEventListener('click', () => {
		block.forEach((i, ind) => {
			if (index === ind) {
                i.classList.remove('hide');
                skillsClear.forEach((el) => {
                    el.textContent = ``;
                });
                setTimeout(() => {
                    getProcentsSkill(0, 75, skillHtml);
                    getProcentsSkill(0, 70, skillCSS3);
                    getProcentsSkill(0, 65, skillJS);
                    getProcentsSkill(0, 45, skillReact);
                    getProcentsSkill(0, 65, skillSASS);
                    getProcentsSkill(0, 55, skillNPM);
                }, 500);
			} else {
				i.classList.add('hide');
			}
		});
	});
});

blockClose.forEach((it, idx) => {
	it.addEventListener('click', () => {
		block.forEach((i, ind) => {
			if (idx === ind) {
				i.classList.add('hide');
			}
		});
	});
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__item"); 
    let dots = document.getElementsByClassName("dots__item");
    if (n > slides.length) {
      slideIndex = 1
    } 
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

let skillsClear = document.querySelectorAll('.about__skill-text--clear');
let skillHtml = document.querySelector('.about__skill-text--html');
let skillCSS3 = document.querySelector('.about__skill-text--css3');
let skillJS = document.querySelector('.about__skill-text--js');
let skillReact = document.querySelector('.about__skill-text--react');
let skillSASS = document.querySelector('.about__skill-text--sass');
let skillNPM = document.querySelector('.about__skill-text--npm');

let getProcentsSkill = (start, end, el) => {
    let counter = setInterval(foo, 10);
    function foo () {
        start += 1; 
        el.textContent = `${start}%`;
        if (start >= end) {
            clearInterval(counter);
        }
    }   
};

form && form.addEventListener("submit", (e) => {
    e.preventDefault();
    var t = new FormData(form),
        n = {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: t.get("name"),
                organization: t.get("organization"),
                message: t.get("message")
            })
        };
    fetch("/send_post.php", n).then((e) => { 
        feedbackWindow.classList.remove("show"), 
        feedbackWindow.classList.add("hide"),
        submitForm.classList.add("show");
    }).catch((e) => {
        return console.log('error');
    });
});