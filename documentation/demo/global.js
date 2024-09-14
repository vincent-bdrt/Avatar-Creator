/*-------------------------------------------------------------------*/
//VARIABLES----------------------------------------------------------*/
/*-------------------------------------------------------------------*/
const navigationButtons = document.querySelectorAll('#categories button');
const sections = document.querySelectorAll('main section');
const result = document.getElementById('result');
let currentGender = "men";
let sectionsWithGender = ['Top'];
let sectionsWithColor = ['Skin','Hair','Top'];
// Fonction qui permet de changer de section en cliquant sur les boutons de navigation
function switchSection() {
    navigationButtons.forEach(button => {
        button.addEventListener('click', function () {
            //Ajout de la classe active au bouton cliqué
            navigationButtons.forEach(button => {
                button.classList.remove("active");
            })
            this.classList.add("active");
            //Ajout de la classe active à la section correspondante
            const dataTarget = this.getAttribute('data-target');
            const sectionTarget = document.getElementById(dataTarget);
            sections.forEach(section => {
                section.classList.remove("active");
            })
            sectionTarget.classList.add("active");
        })
    });
}

switchSection();

/*-------------------------------------------------------------------*/
function changeGender(){
    //Par défaut, on affiche l'avatar est un homme
    let skinSection = document.getElementById('Skin');
    let skinVignettes = skinSection.querySelectorAll('.vignette');
    //On ajoute un écouteur d'évènement sur les vignettes de la section Skin
    //Lorsque l'on clique sur une vignette, on récupère l'url de l'image et on l'ajoute à la balise img de la section
    for(const skinVignette of skinVignettes){
        skinVignette.addEventListener('click', function(){
            let url, newUrl;
            currentGender = this.getAttribute('data-element');
            if( currentGender == "men"){
                for(const section of sectionsWithGender){
                    url = document.getElementById('result'+section).getAttribute('src');
                    newUrl = url.replace('women', 'men');
                    document.getElementById('result'+section).setAttribute('src', newUrl);
                }
            }else{
                for(const section of sectionsWithGender){
                    url = document.getElementById('result'+section).getAttribute('src');
                    newUrl = url.replace('men', 'women');
                    document.getElementById('result'+section).setAttribute('src', newUrl);
                }       
            }

    });
    }
}
/*-------------------------------------------------------------------*/
function changeResultURL(sectionName){
    let section = document.getElementById(sectionName);
    let result = document.getElementById('result' + sectionName);
    let url;
    //On récupère la vignette active et on récupère l'attribut data-element
    let activeVignette = section.querySelector('.vignette.active');
    let dataElement = activeVignette.getAttribute('data-element');

    //Si la section est une section avec couleur, on récupère la couleur active et on récupère l'attribut data-color
    if(sectionsWithColor.includes(sectionName)){

        let activeColor = section.querySelector('.color.active');
        let dataColor = activeColor.getAttribute('data-color');
        url = "sections/" + sectionName + "/" + dataElement + "/" + dataColor + ".png";
        if (sectionsWithGender.includes(sectionName)){
            url = "sections/" + sectionName + "/" + currentGender + "/" + dataElement + "/" + dataColor + ".png";
        }
    //Sinon, on récupère l'attribut data-element de la vignette active    
    }else{
        url = "sections/" + sectionName + "/" + dataElement + ".png";
        if (sectionsWithGender.includes(sectionName)){
            url = "sections/" + sectionName + "/" + currentGender + "/" + dataElement + ".png";
        }
    }
    result.setAttribute('src', url);
}
        

/*-------------------------------------------------------------------*/
function changeShape() {
    //Pour chacune des sections, on récupère les vignettes et le nom de la section
    for (const section of sections) {
        let vignettes = section.querySelectorAll('.vignette');
        let sectionName = section.getAttribute('id');
        for (const vignette of vignettes) {
            vignette.addEventListener('click', function () {
                //On retire la classe active de toutes les vignettes de la section et on l'ajoute à la vignette cliquée
                this.parentElement.querySelector('.active').classList.remove('active');
                this.classList.add("active");
                changeResultURL(sectionName);
            });
        }
    }
}

changeShape();

/*-------------------------------------------------------------------*/
function changeColor() {
    for (const section of sections) {
        let colors = section.querySelectorAll('.color');
        let sectionName = section.getAttribute('id');
        for (const color of colors) {
            color.addEventListener('click', function () {
                this.parentElement.querySelector('.active').classList.remove('active');
                this.classList.add("active");
                changeResultURL(sectionName);
            });
        }
    }
}

changeColor();

/*-------------------------------------------------------------------*/
