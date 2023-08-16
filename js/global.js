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
      document.querySelector('.modal-morphology').style.display = 'block';
    }, 1000);
  });

    //MODAL MORPHOLOGY-------------------------------------------------------------
  function modalMorphology(tabSectionsWithGender) {
    document.getElementById('Morphology-btn').addEventListener('click', function () {
      document.querySelector('.modal-morphology').style.display = 'block';
    });

    let buttonsGender = document.querySelectorAll('.button.gender');
    buttonsGender.forEach(function (button) {
      button.addEventListener('click', function () {
        buttonsGender.forEach(function (button) {
          button.classList.remove('active');
        });
        document.querySelector('.modal-morphology').style.display = 'none';
        this.classList.add('active');
        if (this.classList.contains('Women')) {
          currentGender = "Women";
          for (const section of tabSectionsWithGender) {
            document.getElementById('Result_' + section).setAttribute('src', document.getElementById('Result_' + section).getAttribute('src').replace('/Men/', '/Women/'));
            let vignettes = document.querySelectorAll('#Vignettes-' + section + ' img');
            vignettes.forEach(function (vignette) {
              vignette.setAttribute('src', vignette.getAttribute('src').replace('/Men/', '/Women/'));
            });
          }
        } else {
              currentGender = "Men";
          let vignettes     = document.querySelectorAll('.vignette img');
          vignettes.forEach(function (vignette) {
            vignette.classList.remove('Women');
          });
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

  function globalChange(section, tabCostumes, tabItemsSave) {

    if (document.querySelector('#Vignettes-' + section + '-color .vignette-color')) {
      let colors = document.querySelectorAll('#Vignettes-' + section + '-color .vignette-color');
      colors[0].classList.add('active');
      changeColor(section);
    }

    changeShape(section, tabCostumes, tabItemsSave);
  }


  function changeShape(section, tabCostumes, tabItemsSave) {
    let vignettes = document.querySelectorAll('#Vignettes-' + section + ' .vignette');
    vignettes[0].classList.add('active');
    for (const vignette of vignettes) {
      vignette.addEventListener('click', function () {
        let dataColor, dataElement, dataSize, dataCostumes;
          //Variables
        dataElement = this.getAttribute("data-element");
          //if colors is not null
        if (document.getElementById('Vignettes-' + section + '-color')) {
          dataColor = document.querySelector('#Vignettes-' + section + '-color .vignette-color.active').getAttribute("data-color");
        }
        if (section === "Hair") {
          dataSize = this.getAttribute("data-size");
        }
        if (section === "Hat-Costumes") {
          dataCostumes = this.getAttribute("data-costumes");
        }
        changeHat(section,dataElement)
          //Remove all active classes
        for (const vignette of vignettes) {
          vignette.classList.remove('active');
        }
        if (document.querySelector('#Vignettes-' + section).classList.contains('isCostume')) {
          saveCostums(tabCostumes, tabItemsSave);
        }
        this.classList.add('active');
        createResultSrc(section, dataElement, dataColor, dataSize, dataCostumes);
      });
    }
  };

  function changeColor(section) {
    let vignettes = document.querySelectorAll('#Vignettes-' + section + '-color .vignette-color');
    for (const vignette of vignettes) {
      vignette.addEventListener('click', function () {
          //Variables
        let dataColor, dataElement, dataSize, dataCostumes;
        dataColor   = this.getAttribute("data-color");
        dataElement = document.querySelector('#Vignettes-' + section + ' .vignette.active').getAttribute("data-element");
        if (section === "Hair") {
          dataSize = document.querySelector('#Vignettes-' + section + ' .vignette.active').getAttribute("data-size");
        }
        changeHat(section,dataElement)

          //Remove all active classes
        for (const vignette of vignettes) {
          vignette.classList.remove('active');
        }
        this.classList.add('active');
        changeVignette(section, dataColor)
        createResultSrc(section, dataElement, dataColor, dataSize, dataCostumes);
      });
    }
  }

  function createResultSrc(section, dataElement, dataColor, dataSize, dataCostumes) {
    console.log(section, dataElement, dataColor, dataSize, dataCostumes)
    let result               = document.getElementById('Result_' + section);
    let sectionVignette      = document.getElementById('Vignettes-' + section);
    let sectionVignetteColor = document.getElementById('Vignettes-' + section + '-color');

    let resultSrc, resultSrcBack;
    if (section == "Hair") {
      resultSrc     = `avatar-creator/images/Hair/Front/${dataSize}/${dataElement}/${dataColor}.png`;
      resultSrcBack = `avatar-creator/images/Hair/Back/${dataSize}/${dataElement}/${dataColor}.png`;
      result.setAttribute('data-color', dataColor);
      result.setAttribute('data-size', dataSize);
      result.setAttribute('data-element', dataElement);
    } else if (section == "Hat-Costumes") {
      resultSrc     = `avatar-creator/images/${dataCostumes}/Hat/${dataElement}/Shape/1.png`;
      resultSrcBack = `avatar-creator/images/${dataCostumes}/Hat/${dataElement}/Shape_Back/1.png`;
    } else if (sectionVignetteColor && sectionVignette.classList.contains('hasBack')) {
      resultSrc     = `avatar-creator/images/${section}/Front/${dataElement}/${dataColor}.png`;
      resultSrcBack = `avatar-creator/images/${section}/Back/${dataElement}/${dataColor}.png`;
    } else if (sectionVignetteColor && sectionVignette.classList.contains('hasGender')) {
      resultSrc = `avatar-creator/images/${section}/${currentGender}/${dataElement}/${dataColor}.png`;
    } else if ((sectionVignette.classList.contains('hasGender') && sectionVignette.classList.contains('isCostume')) || sectionVignette.classList.contains('hasGender')) {
      resultSrc = `avatar-creator/images/${section}/${currentGender}/${dataElement}.png`;
    } else if (sectionVignetteColor) {
      resultSrc = `avatar-creator/images/${section}/${dataElement}/${dataColor}.png`;
    } else {
      resultSrc = `avatar-creator/images/${section}/${dataElement}.png`;
    }
    updateResult(resultSrc, resultSrcBack, section);
    saveLocalStorage(resultSrc, resultSrcBack, section);
  }

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

  function saveLocalStorage(resultSrc, resultSrcBack, section) {
    if (!document.querySelector('#Vignettes-' + section).classList.contains('isCostume')) {
      localStorage.setItem(`Storage_${section}`, resultSrc);
      if (document.querySelector('#Vignettes-' + section).classList.contains('hasBack')) {
        localStorage.setItem(`Storage_${section}_Back`, resultSrcBack);
      }
    }
  }
    //Save Shape and Color for Costumes 
  function saveCostums(tabCostumes, tabItemsSave) {
    for (const costume of tabCostumes) {
      document.getElementById('Result_' + costume).setAttribute('src', "avatar-creator/UI/reset.png");
      let vignettesCostumes = document.querySelectorAll('#Vignettes-' + costume + ' .vignette');
      vignettesCostumes.forEach(function (vignette) {
        vignette.classList.remove('active');
      });
    }
    for (const itemSave of tabItemsSave) {
      if (!document.getElementById(itemSave).classList.contains('item-save') && itemSave != "Hair") {
        document.getElementById(itemSave).classList.add('item-save');
        document.getElementById('Result_' + itemSave).setAttribute('data-src-store', document.getElementById('Result_' + itemSave).getAttribute('src'));
        document.getElementById('Result_' + itemSave).setAttribute('src', "avatar-creator/UI/reset.png");
      }
      document.getElementById(itemSave).classList.add('disable');
    }
  }

function changeHat(section,dataElement) {
  if (section === "Hat-Costumes" || section === "Hat") {
    const sectionHair  = document.getElementById('Hair');
    const resultHair     = document.getElementById('Result_Hair');
    const resultHairBack = document.getElementById('Result_Hair_Back');
    let   hairSize       = resultHair.getAttribute('data-size');
    let   hairColor      = resultHair.getAttribute('data-color');

    sectionHair.classList.add('disable');
      //save hair
    if (!sectionHair.classList.contains('item-save')) {
      sectionHair.classList.add('item-save');
      resultHair.setAttribute('data-src-store', resultHair.getAttribute('src'));
      resultHairBack.setAttribute('data-src-store', document.getElementById('Result_Hair_Back').getAttribute('src'));
    }

    if (hairSize !== "shaved") {
      resultHair.setAttribute('src', 'avatar-creator/images/Hat/Hair/' + dataElement + '/' + hairSize + '/' + hairColor + '.png');
      resultHairBack.setAttribute('src', 'avatar-creator/images/Hat/Hair_Back/' + dataElement + '/' + hairSize + '/' + hairColor + '.png');
    } else {
      resultHair.setAttribute('src', "avatar-creator/UI/reset.png");
      resultHairBack.setAttribute('src', "avatar-creator/UI/reset.png");
    }
  }
}

  function changeVignette(section, dataColor) {
    let vignettes = document.querySelectorAll('#Vignettes-' + section + ' .vignette');
    for (let i = 1; i < vignettes.length + 1; i++) {
      let vignetteItem = document.querySelector('#Vignettes-' + section + ' .vignette[data-element="' + i + '"] img[data-vignette-item="' + section + '"]');
      if (document.querySelector('#Vignettes-' + section).classList.contains('hasGender')) {
        vignetteItem.setAttribute("src", "avatar-creator/images/" + section + "/" + currentGender + '/' + i + "/" + dataColor + ".png");
      } else if (document.querySelector('#Vignettes-' + section).classList.contains('hasBack')) {
        if (section == "Hair") {
          let vignetteElement = document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ')').getAttribute("data-element");
          let vignetteSize    = document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ') ').getAttribute("data-size");
          document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ') img[data-vignette-item="Hair"]').setAttribute("src", "avatar-creator/images/Hair/Front/" + vignetteSize + "/" + vignetteElement + "/" + dataColor + ".png");
          document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ') img[data-vignette-item="Hair_Back"]').setAttribute("src", "avatar-creator/images/Hair/Back/" + vignetteSize + "/" + vignetteElement + "/" + dataColor + ".png");
        } else {
          document.querySelector('#Vignettes-' + section + ' .vignette[data-element="' + i + '"]  img[data-vignette-item="' + section + '"]').setAttribute("src", "avatar-creator/images/" + section + "/Front/" + i + "/" + dataColor + ".png");
          document.querySelector('#Vignettes-' + section + ' .vignette[data-element="' + i + '"]  img[data-vignette-item="' + section + '_Back"]').setAttribute("src", "avatar-creator/images/" + section + "/Back/" + i + "/" + dataColor + ".png");
        };
      } else {
        vignetteItem.setAttribute("src", "avatar-creator/images/" + section + "/" + i + "/" + dataColor + ".png");
      }
    }
  }
    /*--------------------------------------------------------------------------*/
  let vignettes_background = document.querySelectorAll('#Vignettes-Background .vignette');
  for (const vignette_background of vignettes_background) {
    vignette_background.addEventListener('click', function () {
      document.querySelector('#Result_Background').setAttribute('src', 'avatar-creator/images/Background/Front/' + this.getAttribute('data-element') + '.png');
    });
  }

    /*couleurs*/
  let vignettes_backgroundColor = document.querySelectorAll('#Vignettes-Background-color .vignette-color');
  vignettes_backgroundColor[0].classList.add('active');
  for (const vignette_backgroundColor of vignettes_backgroundColor) {
    vignette_backgroundColor.addEventListener('click', function () {
      for (const element of vignettes_backgroundColor) {
        element.classList.remove('active');
      }
      this.classList.add('active');
      document.querySelector('#Result_Background_Back').setAttribute('src', 'avatar-creator/images/Background/Back/' + this.getAttribute('data-color') + '.png');
      let vignettes_image = document.querySelectorAll('#Vignettes-Background .vignette img');
      for (const vignette_image of vignettes_image) {
        vignette_image.style.backgroundColor = this.style.backgroundColor;
      }
    });
  }

  function blinkElement() {
      //EYES
    let eyesResult = document.querySelector('#Result_Eyes');
    setInterval(function () {
      if (eyesResult.getAttribute('src') == 'avatar-creator/images/Eyes/1.png') {
        eyesResult.setAttribute('src', 'avatar-creator/images/Eyes/5.png');
        setTimeout(function () {
          eyesResult.setAttribute('src', 'avatar-creator/images/Eyes/1.png');
        }, 300);
      } else if (eyesResult.getAttribute('src') == 'avatar-creator/images/Eyes/2.png') {
        eyesResult.setAttribute('src', 'avatar-creator/images/Eyes/6.png');
        setTimeout(function () {
          eyesResult.setAttribute('src', 'avatar-creator/images/Eyes/2.png');
        }, 300);
      }
    }, getRandomTime());

    let mouthResult = document.querySelector('#Result_Mouth');
    setInterval(function () {
      if (mouthResult.getAttribute('src') == 'avatar-creator/images/Mouth/1.png') {
        mouthResult.setAttribute('src', 'avatar-creator/images/Mouth/3.png');
        setTimeout(function () {
          mouthResult.setAttribute('src', 'avatar-creator/images/Mouth/1.png');
        }, 1000);
      }
    }, getRandomTime() * 5);
  }

    //Random time
  function getRandomTime() {
    return Math.floor(Math.random() * 10000) + 5000;
  }

    // Appeler la fonction blinkElement
  blinkElement();





  function loadConfig() {
    fetch('config.json')
      .then(response => response.json())
      .then(data => {

        const tabCostumes = data.sections
          .filter(section => section.isCostume === true)
          .map(section => section.sectionName);
        const tabSectionsWithGender = data.sections
          .filter(section => section.hasGender === true)
          .map(section => section.sectionName);
        const tabItemsSave = data.sections
          .filter(section => section.hasDisableMessage === true)
          .map(section => section.sectionName);
        modalMorphology(tabSectionsWithGender);
        for (const costumeItem of tabCostumes) {
          reset_costume(costumeItem, tabItemsSave, tabCostumes);
        }
          //run change() for each section
        for (const section of data.sections) {
          globalChange(section.sectionName, tabCostumes, tabItemsSave);
        }
      });
  }
  loadConfig();