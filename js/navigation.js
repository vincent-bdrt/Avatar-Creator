let menuPlus = document.querySelector('.menu-plus');
let randomBtn = document.querySelector('.menu-plus .random-btn');
let downloadBtn = document.querySelector('.menu-plus .download-btn');
let deleteBtn = document.querySelector('.menu-plus .delete-btn');
let informationBtn = document.querySelector('.menu-plus .information-btn');

let download = document.getElementById('Download');
let reset = document.getElementById('Reset');
let random = document.getElementById('Random');
let information = document.getElementById('Information');

/**
 * Affiche le menu contextuel à la position du clic droit
 * @param {MouseEvent} event - L'événement de clic droit
 */
function showContextMenu(event) {
    event.preventDefault();
    menuPlus.style.display = "block";
    menuPlus.style.top = `${event.pageY}px`;
    menuPlus.style.left = `${event.pageX}px`;
}

/**
 * Cache le menu contextuel si on clique en dehors
 * @param {MouseEvent} event - L'événement de clic
 */
function hideContextMenu(event) {
    if (!event.target.closest(".menu-plus")) {
        menuPlus.style.display = "none";
    }
}

// Gestionnaires d'événements pour le menu contextuel
document.addEventListener("contextmenu", showContextMenu);
document.addEventListener("click", hideContextMenu);

// Associer les actions du menu contextuel aux boutons principaux
downloadBtn.addEventListener('click', () => download.click());
deleteBtn.addEventListener('click', () => reset.click());
randomBtn.addEventListener('click', () => random.click());
informationBtn.addEventListener('click', () => information.click());

// Navigation
const buttons = document.querySelectorAll('#Categories button');

/**
 * Gère la navigation entre les sections
 * @param {HTMLElement} button - Le bouton cliqué
 */
function handleNavigation(button) {
    const dataTarget = button.getAttribute('data-target');
    const parentLi = button.parentNode;
    const grandParentUl = parentLi.parentNode;

    // Gestion des classes actives
    Array.from(grandParentUl.children).forEach(li => li.classList.remove('active'));
    parentLi.classList.add('active');

    if (parentLi.classList.contains('with_subnav')) {
        grandParentUl.parentNode.classList.add('active');
        const firstSubNavItem = parentLi.querySelector('ul li');
        firstSubNavItem.classList.add('active');
        const subnavTarget = firstSubNavItem.querySelector('button').getAttribute('data-target');
        showSection(subnavTarget);
    } else {
        showSection(dataTarget);
    }

    // Défilement des sections de navigation
    scrollNavigationSection('Categories');
    scrollNavigationSection(dataTarget);
}

/**
 * Affiche la section cible et cache les autres
 * @param {string} target - L'ID de la section à afficher
 */
function showSection(target) {
    document.querySelectorAll('#Right-Section section').forEach(section => {
        section.style.display = section.id === target ? 'flex' : 'none';
    });
}

buttons.forEach(button => button.addEventListener('click', () => handleNavigation(button)));

// Défilement horizontal pour la section #Categories
const categories = document.getElementById('Categories');
categories.addEventListener('wheel', event => {
    event.preventDefault();
    categories.scrollLeft += event.deltaY;
});

/**
 * Gère le défilement de la navigation dans une section
 * @param {string} section - L'ID de la section
 */
function scrollNavigationSection(section) {
    const scrollContainer = document.querySelector(`#${section} .scroll-container`);
    const leftArrow = document.querySelector(`#${section} .left-arrow`);
    const rightArrow = document.querySelector(`#${section} .right-arrow`);

    if (!scrollContainer) return;

    function updateArrows() {
        leftArrow.classList.toggle('active', scrollContainer.scrollLeft > 0);
        rightArrow.classList.toggle('active', scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth);
    }

    scrollContainer.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);

    leftArrow.addEventListener('click', () => scrollContainer.scrollLeft -= 100);
    rightArrow.addEventListener('click', () => scrollContainer.scrollLeft += 100);

    // Fonctionnalité de déplacement par grab
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', e => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    updateArrows();
}

scrollNavigationSection('Categories');

/**
 * Centre l'élément cliqué dans le conteneur de défilement
 * @param {HTMLElement} element - L'élément à centrer
 */
function centerElement(element) {
    const scrollContainer = element.closest('.scroll-container');
    scrollContainer.scrollLeft = element.offsetLeft - scrollContainer.clientWidth / 2 + element.clientWidth / 2;
}

// Centrer les boutons de catégorie et les vignettes de couleur
document.querySelectorAll('#Categories li, .vignettes-section-color .vignette-color').forEach(item => {
    item.addEventListener('click', () => centerElement(item));
});
