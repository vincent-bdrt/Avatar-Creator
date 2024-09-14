    /**
   * @file
   * Global utilities.
   *
   */
    //VARIABLES--------------------------------------------------------------------
  let currentGender = "Men";

    //START BUTTON-----------------------------------------------------------------
  let start = document.querySelector('.start');
  start.addEventListener('click', function () {
    document.querySelector('section.launcher').style.top = '-100%';
    document.querySelector('body').classList.add('game-started');
    document.getElementById('Nav_Skin').click();
    setTimeout(function () {
      document.querySelector('section.launcher').remove();
    }, 1000);
  });

    //MODAL MORPHOLOGY-------------------------------------------------------------
  function modalMorphology(tabSectionsWithGender) {
    let buttonsGender = document.querySelectorAll('#Vignettes-Skin .vignette');
    buttonsGender.forEach(function (button) {
      button.addEventListener('click', function () {
        let dataElement = this.getAttribute("data-element");
        console.log(dataElement);
        if (dataElement == 2) {
          currentGender = "Women";
          for (const section of tabSectionsWithGender) {
            document.getElementById('Result_' + section).setAttribute('src', document.getElementById('Result_' + section).getAttribute('src').replace('/Men/', '/Women/'));
            let vignettes = document.querySelectorAll('#Vignettes-' + section + ' img');
            vignettes.forEach(function (vignette) {
              vignette.setAttribute('src', vignette.getAttribute('src').replace('/Men/', '/Women/'));
            });
          }
        } else if (dataElement == 1){
          currentGender = "Men";
          for (const section of tabSectionsWithGender) {
            document.getElementById('Result_' + section).setAttribute('src', document.getElementById('Result_' + section).getAttribute('src').replace('/Women/', '/Men/'));
            let vignettes = document.querySelectorAll('#Vignettes-' + section + ' img');
            vignettes.forEach(function (vignette) {
              vignette.setAttribute('src', vignette.getAttribute('src').replace('/Women', '/Men/'));
            });
          }
        }
      });
    });
  };
    //MODAL information-------------------------------------------------------------
  document.getElementById('information').addEventListener('click', function () {
    document.querySelector('.modal-information').style.display = 'block';
  });
  document.getElementById('Mentions').addEventListener('click', function () {
    document.querySelector('.modal-mentions').style.display = 'block';
  });
  document.querySelector('.modal-information .close-modal').addEventListener('click', function () {
    document.querySelector('.modal-information').style.display = 'none';
  });
  document.querySelector('.modal-mentions .close-modal').addEventListener('click', function () {
    document.querySelector('.modal-mentions').style.display = 'none';
  });
  document.addEventListener('mouseup', function (e) {
    let container = document.querySelector('.modal-content-information');
    if (!container.contains(e.target)) {
      document.querySelector('.modal-information').style.display = 'none';
    }
    let container_mentions = document.querySelector('.modal-content-mentions');
    if (!container_mentions.contains(e.target)) {
      document.querySelector('.modal-mentions').style.display = 'none';
    }
  });

    /*-----------------------------------------------------------------------------------*/
    /*----------------------------------FUNCTIONS----------------------------------------*/
    /*-----------------------------------------------------------------------------------*/

  /**
   * Gère le changement global pour une section donnée.
   * @param {string} section - Le nom de la section.
   * @param {string[]} tabCostumes - Liste des costumes.
   * @param {string[]} tabItemsSave - Liste des éléments à sauvegarder.
   */
  function globalChange(section, tabCostumes, tabItemsSave) {
    if (document.querySelector('#Vignettes-' + section + '-color .vignette-color')) {
      let colors = document.querySelectorAll('#Vignettes-' + section + '-color .vignette-color');
      colors[0].classList.add('active');
      changeColor(section);
    }

    changeShape(section, tabCostumes, tabItemsSave);
  }

  /**
   * Change la forme d'un élément de la section spécifiée.
   * @param {string} section - Le nom de la section.
   * @param {string[]} tabCostumes - Liste des costumes.
   * @param {string[]} tabItemsSave - Liste des éléments à sauvegarder.
   */
  function changeShape(section, tabCostumes, tabItemsSave) {
    let vignettes = document.querySelectorAll('#Vignettes-' + section + ' .vignette');
    vignettes[0].classList.add('active');
    
    vignettes.forEach(vignette => {
      vignette.addEventListener('click', function () {
        // Récupération des attributs de données
        let dataElement = this.getAttribute("data-element");
        let dataColor = document.querySelector('#Vignettes-' + section + '-color .vignette-color.active')?.getAttribute("data-color");
        let dataSize = section === "Hair" ? this.getAttribute("data-size") : null;
        let dataCostumes = section === "Hat-Costumes" ? this.getAttribute("data-costumes") : null;

        // Mise à jour des classes actives
        toggleActiveClass(vignettes, this);

        // Gestion des costumes
        if (document.querySelector('#Vignettes-' + section).classList.contains('isCostume')) {
          saveCostums(tabCostumes, tabItemsSave);
        }

        // Création de la nouvelle source pour l'image résultante
        createResultSrc(section, dataElement, dataColor, dataSize, dataCostumes);
      });
    });
  }

  /**
   * Change la couleur d'un élément de la section spécifiée.
   * @param {string} section - Le nom de la section.
   */
  function changeColor(section) {
    let vignettes = document.querySelectorAll('#Vignettes-' + section + '-color .vignette-color');
    
    vignettes.forEach(vignette => {
      vignette.addEventListener('click', function () {
        // Récupération des attributs de données
        let dataColor = this.getAttribute("data-color");
        let dataElement = document.querySelector('#Vignettes-' + section + ' .vignette.active').getAttribute("data-element");
        let dataSize = section === "Hair" ? document.querySelector('#Vignettes-' + section + ' .vignette.active').getAttribute("data-size") : null;

        // Mise à jour des classes actives
        toggleActiveClass(vignettes, this);

        // Mise à jour des vignettes et de l'image résultante
        changeVignette(section, dataColor);
        createResultSrc(section, dataElement, dataColor, dataSize);
      });
    });
  }

  /**
   * Crée la source de l'image résultante pour une section donnée.
   * @param {string} section - Le nom de la section.
   * @param {string} dataElement - L'élément de données.
   * @param {string} dataColor - La couleur de données.
   * @param {string} dataSize - La taille de données (pour les cheveux).
   * @param {string} dataCostumes - Les données de costume.
   */
  function createResultSrc(section, dataElement, dataColor, dataSize, dataCostumes) {
    console.log(section, dataElement, dataColor, dataSize, dataCostumes);
    
    const result = document.getElementById(`Result_${section}`);
    const sectionVignette = document.getElementById(`Vignettes-${section}`);
    const hasColor = !!document.getElementById(`Vignettes-${section}-color`);
    const hasBack = sectionVignette.classList.contains('hasBack');
    const hasGender = sectionVignette.classList.contains('hasGender');
    const isCostume = sectionVignette.classList.contains('isCostume');
  
    const config = {
      Hair: () => ({
        src: `images/sections/Hair/Front/${dataSize}/${dataElement}/${dataColor}.png`,
        srcBack: `images/sections/Hair/Back/${dataSize}/${dataElement}/${dataColor}.png`,
        attributes: { 'data-color': dataColor, 'data-size': dataSize, 'data-element': dataElement }
      }),
      'Hat-Costumes': () => ({
        src: `images/sections/${dataCostumes}/Hat/${dataElement}/Shape/1.png`,
        srcBack: `images/sections/${dataCostumes}/Hat/${dataElement}/Shape_Back/1.png`
      }),
      default: () => {
        let src = `images/sections/${section}`;
        if (hasGender) src += `/${currentGender}`;
        if (hasBack) {
          src += `/Front/${dataElement}`;
        } else {
          src += `/${dataElement}`;
        }
        if (hasColor) src += `/${dataColor}`;
        src += '.png';
        return { 
          src,
          srcBack: hasBack ? src.replace('/Front/', '/Back/') : null
        };
      }
    };
  
    const { src, srcBack, attributes } = (config[section] || config.default)();
  
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => result.setAttribute(key, value));
    }
  
    updateResult(src, srcBack, section);
    saveLocalStorage(src, srcBack, section);
  }

  /**
   * Met à jour le résultat visuel pour une section donnée.
   * @param {string} resultSrc - La source de l'image résultante.
   * @param {string} resultSrcBack - La source de l'image de dos (si applicable).
   * @param {string} section - Le nom de la section.
   */
  function updateResult(resultSrc, resultSrcBack, section) {
    let result     = document.getElementById('Result_' + section);
    let resultBack = document.getElementById('Result_' + section + '_Back');
    if (section == "Hat-Costumes") {
      result     = document.getElementById('Result_Hat');
      resultBack = document.getElementById('Result_Hat_Back');
    }
      /*--- Update Result ---*/
    result.setAttribute('src', resultSrc);
    if (document.querySelector('#Vignettes-' + section).classList.contains('hasBack')) {
      resultBack.setAttribute('src', resultSrcBack);
    }
  }

  /**
   * Sauvegarde les données dans le localStorage.
   * @param {string} resultSrc - La source de l'image résultante.
   * @param {string} resultSrcBack - La source de l'image de dos (si applicable).
   * @param {string} section - Le nom de la section.
   */
  function saveLocalStorage(resultSrc, resultSrcBack, section) {
    if (!document.querySelector('#Vignettes-' + section).classList.contains('isCostume')) {
      localStorage.setItem(`Storage_${section}`, resultSrc);
      if (document.querySelector('#Vignettes-' + section).classList.contains('hasBack')) {
        localStorage.setItem(`Storage_${section}_Back`, resultSrcBack);
      }
    }
  }
    //Save Shape and Color for Costumes 
  /**
   * Sauvegarde la forme et la couleur pour les costumes.
   * @param {string[]} tabCostumes - Liste des costumes.
   * @param {string[]} tabItemsSave - Liste des éléments à sauvegarder.
   */
  function saveCostums(tabCostumes, tabItemsSave) {
    for (const costume of tabCostumes) {
      document.getElementById('Result_' + costume).setAttribute('src', "images/UI/reset.png");
      let vignettesCostumes = document.querySelectorAll('#Vignettes-' + costume + ' .vignette');
      vignettesCostumes.forEach(function (vignette) {
        vignette.classList.remove('active');
      });
    }
    for (const itemSave of tabItemsSave) {
      if (!document.getElementById(itemSave).classList.contains('item-save') && itemSave != "Hair") {
        document.getElementById(itemSave).classList.add('item-save');
        document.getElementById('Result_' + itemSave).setAttribute('data-src-store', document.getElementById('Result_' + itemSave).getAttribute('src'));
        document.getElementById('Result_' + itemSave).setAttribute('src', "images/UI/reset.png");
        document.getElementById(itemSave).classList.add('disable');
      }
    }
  }

  /**
   * Change la vignette pour une section et une couleur données.
   * @param {string} section - Le nom de la section.
   * @param {string} dataColor - La couleur de données.
   */
  function changeVignette(section, dataColor) {
    let vignettes = document.querySelectorAll('#Vignettes-' + section + ' .vignette');
    for (let i = 1; i < vignettes.length + 1; i++) {
      let vignetteItem = document.querySelector('#Vignettes-' + section + ' .vignette[data-element="' + i + '"] img[data-vignette-item="' + section + '"]');
      if (document.querySelector('#Vignettes-' + section).classList.contains('hasGender')) {
        vignetteItem.setAttribute("src", "images/sections/" + section + "/" + currentGender + '/' + i + "/" + dataColor + ".png");
      } else if (document.querySelector('#Vignettes-' + section).classList.contains('hasBack')) {
        if (section == "Hair") {
          let vignetteElement = document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ')').getAttribute("data-element");
          let vignetteSize    = document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ') ').getAttribute("data-size");
          document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ') img[data-vignette-item="Hair"]').setAttribute("src", "images/sections/Hair/Front/" + vignetteSize + "/" + vignetteElement + "/" + dataColor + ".png");
          document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ') img[data-vignette-item="Hair_Back"]').setAttribute("src", "images/sections/Hair/Back/" + vignetteSize + "/" + vignetteElement + "/" + dataColor + ".png");
        } else {
          document.querySelector('#Vignettes-' + section + ' .vignette[data-element="' + i + '"]  img[data-vignette-item="' + section + '"]').setAttribute("src", "images/sections/" + section + "/Front/" + i + "/" + dataColor + ".png");
          document.querySelector('#Vignettes-' + section + ' .vignette[data-element="' + i + '"]  img[data-vignette-item="' + section + '_Back"]').setAttribute("src", "images/sections/" + section + "/Back/" + i + "/" + dataColor + ".png");
        };
      } else {
        vignetteItem.setAttribute("src", "images/sections/" + section + "/" + i + "/" + dataColor + ".png");
      }
    }
  }

  /**
   * Gère le clignotement des éléments (yeux et bouche).
   */
  function blinkElement() {
    const eyesResult = document.querySelector('#Result_Eyes');
    const mouthResult = document.querySelector('#Result_Mouth');

    function blink(element, normalSrc, blinkSrc, duration) {
      if (element.getAttribute('src') === normalSrc) {
        element.setAttribute('src', blinkSrc);
        setTimeout(() => element.setAttribute('src', normalSrc), duration);
      }
    }

    setInterval(() => blink(eyesResult, 'images/sections/Eyes/1.png', 'images/sections/Eyes/5.png', 300), getRandomTime());
    setInterval(() => blink(mouthResult, 'images/sections/Mouth/1.png', 'images/sections/Mouth/3.png', 1000), getRandomTime() * 5);
  }

  /**
   * Génère un temps aléatoire pour le clignotement.
   * @returns {number} - Temps aléatoire en millisecondes.
   */
  function getRandomTime() {
    return Math.floor(Math.random() * 10000) + 5000;
  }

  /**
   * Bascule la classe active entre les éléments.
   * @param {NodeList} elements - Liste des éléments.
   * @param {Element} activeElement - L'élément à activer.
   */
  function toggleActiveClass(elements, activeElement) {
    elements.forEach(el => el.classList.remove('active'));
    activeElement.classList.add('active');
  }

  /**
   * Charge la configuration depuis un fichier JSON.
   */
  async function loadConfig() {
    try {
      const response = await fetch('config.json');
      const { sections } = await response.json();

      const [tabCostumes, tabSectionsWithGender, tabItemsSave] = ['isCostume', 'hasGender', 'hasDisableMessage'].map(
        prop => sections.filter(section => section[prop]).map(section => section.sectionName)
      );

      modalMorphology(tabSectionsWithGender);
      
      tabCostumes.forEach(costumeItem => reset_costume(costumeItem, tabItemsSave, tabCostumes));
      
      sections.forEach(({ sectionName }) => globalChange(sectionName, tabCostumes, tabItemsSave));
    } catch (error) {
      console.error("Erreur lors du chargement de la configuration:", error);
    }
  }

  // Appeler la fonction blinkElement
  blinkElement();

  loadConfig();