let menuPlus = document.querySelector('.menu-plus');
let downloadBtn = document.querySelector('.menu-plus .download-btn');
let deleteBtn = document.querySelector('.menu-plus .delete-btn');
let randomBtn = document.querySelector('.menu-plus .random-btn');
let morphologyBtn = document.querySelector('.menu-plus  .morphology-btn');
let download = document.getElementById('Download');
let reset = document.getElementById('Reset');
let random = document.getElementById('Random');
let morphology = document.getElementById('Morphology-btn');

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    menuPlus.style.display = "block";
    menuPlus.style.top = event.pageY + "px";
    menuPlus.style.left = event.pageX + "px";
});

document.addEventListener("click", function (event) {
    if (event.target.closest(".menu-plus")) return;
    menuPlus.style.display = "none";
});

downloadBtn.addEventListener('click', function () {
    download.click();
});
deleteBtn.addEventListener('click', function () {
    reset.click();
});
randomBtn.addEventListener('click', function () {
    random.click();
});
morphologyBtn.addEventListener('click', function () {
    morphology.click();
});


//Navigation
// Sélectionner les éléments de navigation
let buttons = document.querySelectorAll('#Categories button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // get attribute data-target from button and add active id to it



        this.parentNode.classList.add('active');
        if (this.parentNode.classList.contains('with_subnav')) {
            this.parentNode.parentNode.classList.add('active');
            document.querySelector('.with_subnav.active ul li').classList.add('active');
            document.querySelector('.with_subnav.active ul li button').click();
            let subnav_target = document.querySelector('.with_subnav.active ul li button').getAttribute('data-target');

            document.querySelectorAll('#Right-Section section').forEach(element => {
                element.style.display = 'none';
            });
            document.getElementById(subnav_target).style.display = 'flex';
        } else {
            let target = this.getAttribute('data-target');
            document.querySelectorAll('#Right-Section section').forEach(element => {
                element.style.display = 'none';
            });
            document.getElementById(target).style.display = 'flex';
        }
        let siblings = this.parentNode.parentNode.children;
        for (const element of siblings) {
            if (element !== this.parentNode) {
                element.classList.remove('active');
            }
        }
        if (this.parentNode.classList.contains('with_subnav')) {
            let siblings2 = this.parentNode.parentNode.parentNode.children;
            for (const element of siblings2) {
                if (element !== this.parentNode.parentNode) {
                    element.classList.remove('active');
                }
            }
        }
    });
});

//when wheel is scrolled on #Categories section , scroll to right but not to bottom
let categories = document.getElementById('Categories');
categories.addEventListener('wheel', function (event) {
    event.preventDefault();
    categories.scrollLeft += event.deltaY;
}
);
