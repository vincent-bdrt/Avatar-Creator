/**
 * Réinitialise tous les éléments de l'avatar
 */
document.getElementById("Reset").addEventListener("click", function () {
    localStorage.clear();
    initializeDefaultAvatar();
});

/**
 * Réinitialise une section spécifique
 * @param {string} section - Le nom de la section à réinitialiser
 */
function reset_button_Section(section) {
    const resetButtons = document.querySelectorAll(`#${section} .reset`);
    const vignettes = document.querySelectorAll(`#Vignettes-${section} .vignette`);

    resetButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Supprime les données stockées
            localStorage.removeItem(`Storage_${section}`);

            // Gestion spéciale pour les lunettes
            if (section === "Glasses") {
                const glassesBack = document.getElementById(`Result_${section}_Back`);
                glassesBack.src = "images/UI/reset.png";
                localStorage.removeItem(`Storage_${section}_Back`);
            }

            // Réinitialise l'image principale
            document.getElementById(`Result_${section}`).src = "images/UI/reset.png";

            // Mise à jour des classes actives
            this.parentElement.querySelector('.active').classList.remove('active');
            vignettes[0].classList.add('active');
        });
    });
}

// Applique la réinitialisation à toutes les sections
ORDER_RESULT.forEach(section => reset_button_Section(section));

/**
 * Réinitialise le chapeau et les cheveux
 * @param {string} section - La section à réinitialiser (Hat ou Hat-Costumes)
 */
function reset_hat(section) {
    document.querySelector(`#${section} .reset`).addEventListener('click', function () {
        // Supprime les données stockées
        localStorage.removeItem(`Storage_${section}`);
        localStorage.removeItem('Storage_Hat_Back');

        // Réinitialise les cheveux
        const hair = document.getElementById('Hair');
        hair.classList.remove('item-save', 'disable');

        // Réinitialise le chapeau
        this.parentElement.querySelector('.active').classList.remove('active');
        if (section === "Hat") {
            const hatColor = document.querySelector('#Vignettes-Hat-color .vignette-color');
            document.querySelector('#Vignettes-Hat-color .vignette-color.active').classList.remove('active');
            hatColor.classList.add('active');
            document.querySelector('#Vignettes-Hat .vignette').classList.add('active');
        }

        // Restaure les images des cheveux et réinitialise le chapeau
        ['Hair', 'Hair_Back'].forEach(item => {
            const element = document.getElementById(`Result_${item}`);
            element.src = element.getAttribute('data-src-store');
            localStorage.setItem(`Storage_${item}`, element.src);
        });

        ['Hat', 'Hat_Back'].forEach(item => {
            const element = document.getElementById(`Result_${item}`);
            element.src = "images/UI/reset.png";
            localStorage.setItem(`Storage_${item}`, element.src);
        });
    });
}

// Applique la réinitialisation au chapeau
reset_hat('Hat');
reset_hat('Hat-Costumes');

/**
 * Réinitialise les costumes
 * @param {string} section - La section de costume à réinitialiser
 * @param {string[]} tabItemsSave - Liste des éléments à sauvegarder
 * @param {string[]} tabCostumes - Liste des costumes
 */
function reset_costume(section, tabItemsSave, tabCostumes) {
    document.querySelector(`#${section} .reset`).addEventListener('click', function () {
        // Réinitialise les éléments sauvegardés
        tabItemsSave.forEach(itemSave => {
            if (itemSave !== "Hair") {
                const element = document.getElementById(`Result_${itemSave}`);
                element.src = element.getAttribute('data-src-store');
                document.getElementById(itemSave).classList.remove('disable', 'item-save');
            }
        });

        // Réinitialise les costumes
        tabCostumes.forEach(costumeItem => {
            document.getElementById(`Result_${costumeItem}`).src = "images/UI/reset.png";
            document.querySelectorAll(`#${costumeItem} .vignette`).forEach(vignette => vignette.classList.remove('active'));
            localStorage.removeItem(`Storage_${costumeItem}`);
        });

        // Réinitialise la section actuelle
        document.getElementById(`Result_${section}`).src = "images/UI/reset.png";
    });

    // Gestion du bouton de suppression de costume
    document.querySelectorAll('.remove-costume-button').forEach(button => {
        button.addEventListener('click', () => {
            tabCostumes.forEach(costumeItem => {
                document.querySelector(`#${costumeItem} .reset`).click();
            });
        });
    });
}

// Commenté car apparemment non utilisé dans le code actuel
/*
document.querySelectorAll('.remove-hat-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('#Hat .reset').click();
    });
});
*/