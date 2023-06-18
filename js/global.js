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
          let vignettes = document.querySelectorAll('.vignette img');
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

  function change(section, hasBack, isCostumes, id_color, hasGender, tabCostumes, tabItemsSave) {

    /*VARIABLES*/
    let vignettes = document.querySelectorAll('#Vignettes-' + section + ' .vignette');
    let result = document.getElementById('Result_' + section);
    let resultSrc, resultSrcBack;
    if (hasBack) {
      var resultBack = document.getElementById('Result_' + section + '_Back');
    }

    /*Change Shape*/
    for (const vignette of vignettes) {
      vignette.addEventListener('click', function () {
        //Variables
        let dataElement = this.getAttribute("data-element");
        let dataColor;
        //Remove active class
        vignettes.forEach(function (vignette) {
          vignette.classList.remove('active');
        });
        this.classList.add('active');
        //Save Costums
        if (isCostumes) {
          console.log("isCostumes" + tabCostumes);
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
        if (id_color != null) {
          dataColor = document.querySelector('#Vignettes-' + section + '-color .vignette-color.active').getAttribute("data-color");
        }
        //Create Result URL;
        if (section == "Hair") {
          let dataColor = document.querySelector('#Vignettes-' + section + '-color .vignette-color.active').getAttribute("data-color");
          let dataSize = this.getAttribute("data-size");
          resultSrc = 'avatar-creator/images/Hair/Front/' + dataSize + '/' + dataElement + '/' + dataColor + '.png';
          resultSrcBack = 'avatar-creator/images/Hair/Back/' + dataSize + '/' + dataElement + '/' + dataColor + '.png';
          result.setAttribute('data-color', dataColor);
          result.setAttribute('data-size', dataSize);
          result.setAttribute('data-element', dataElement);
        } else if (id_color != null && hasBack) {
          let dataColor = document.querySelector('#Vignettes-' + section + '-color .vignette-color.active').getAttribute("data-color");
          resultSrc = 'avatar-creator/images/' + section + '/Front/' + dataElement + '/' + dataColor + '.png';
          resultSrcBack = 'avatar-creator/images/' + section + '/Back/' + dataElement + '/' + dataColor + '.png';
        } else if (id_color != null && hasGender) {
          let dataColor = document.querySelector('#Vignettes-' + section + '-color .vignette-color.active').getAttribute("data-color");
          resultSrc = 'avatar-creator/images/' + section + '/' + currentGender + '/' + dataElement + '/' + dataColor + '.png';
        } else if (hasGender && isCostumes) {
          resultSrc = 'avatar-creator/images/' + section + '/' + currentGender + '/' + dataElement + '.png';
        } else if (hasGender) {
          resultSrc = 'avatar-creator/images/' + section + '/' + currentGender + '/' + dataElement + '.png';
        } else if (id_color != null) {
          resultSrc = 'avatar-creator/images/' + section + '/' + dataElement + '/' + dataColor + '.png';
        } else {
          resultSrc = 'avatar-creator/images/' + section + '/' + dataElement + '.png';
        }

        //Change result : 
        result.setAttribute('src', resultSrc);
        if (hasBack) {
          resultBack.setAttribute('src', resultSrcBack);
        }


        // save on local storage
        if (!isCostumes) {
          localStorage.setItem('Storage_' + section, resultSrc);
          if (hasBack) {
            localStorage.setItem('Storage_' + section + '_Back', resultSrcBack);
          }
        }
      });


    }
    /*Change Color*/
    if (id_color != null) {
      let colors = document.querySelectorAll('#Vignettes-' + section + '-color .vignette-color');
      vignettes[0].classList.add('active');
      colors[0].classList.add('active');
      for (const color of colors) {
        color.addEventListener('click', function () {
          //Variables
          let dataColor = this.getAttribute("data-color");
          let dataElement = document.querySelector('#Vignettes-' + section + ' .vignette.active').getAttribute("data-element");
          //Remove active class
          colors.forEach(function (color) {
            color.classList.remove('active');
          });
          this.classList.add('active');
          /*Change vignette color**/
          for (let i = 1; i < vignettes.length + 1; i++) {
            let vignetteItem = document.querySelector('#Vignettes-' + section + ' .vignette[data-element="' + i + '"] img[data-vignette-item="' + section + '"]');
            if (hasGender) {
              vignetteItem.setAttribute("src", "avatar-creator/images/" + section + "/" + currentGender + '/' + i + "/" + dataColor + ".png");
            } else if (hasBack) {
              if (section == "Hair") {

                let vignetteElement = document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ')').getAttribute("data-element");
                let vignetteSize = document.querySelector('#Vignettes-Hair .vignette:nth-child(' + i + ') ').getAttribute("data-size");
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
          //Create Result URL;
          if (section == "Hair") {
            let dataSize = document.querySelector('#Vignettes-Hair .vignette.active ').getAttribute("data-size");
            resultSrc = 'avatar-creator/images/Hair/Front/' + dataSize + '/' + dataElement + '/' + dataColor + '.png';
            resultSrcBack = 'avatar-creator/images/Hair/Back/' + dataSize + '/' + dataElement + '/' + dataColor + '.png';
            result.setAttribute('data-color', dataColor);
            result.setAttribute('data-size', dataSize);
            result.setAttribute('data-element', dataElement);
          } else if (hasBack) {
            resultSrc = 'avatar-creator/images/' + section + '/Front/' + dataElement + '/' + dataColor + '.png';
            resultSrcBack = 'avatar-creator/images/' + section + '/Back/' + dataElement + '/' + dataColor + '.png';
          } else if (hasGender) {
            resultSrc = 'avatar-creator/images/' + section + '/' + currentGender + '/' + dataElement + '/' + dataColor + '.png';
          } else {
            resultSrc = 'avatar-creator/images/' + section + '/' + dataElement + '/' + dataColor + '.png';
          }
          //Change result & save cookies
          //Change result : 
          result.setAttribute('src', resultSrc);
          if (hasBack) {
            resultBack.setAttribute('src', resultSrcBack);
          }
          // save on local storage
          if (!isCostumes) {
            localStorage.setItem('Storage_' + section, resultSrc);
            if (hasBack) {
              localStorage.setItem('Storage_' + section + '_Back', resultSrcBack);
            }
          }
        });
      }
    }
  }


  //********************************************************************************
  //CHANGE VIGNETTE HAT-----------------------------------------------------------
  //********************************************************************************
  function change_hat(section) {
    let vignettes = document.querySelectorAll('#Vignettes-' + section + ' .vignette');
    let colors = document.querySelectorAll('#Vignettes-' + section + '-color .vignette-color');

    vignettes[0].classList.add('active');
    colors[0].classList.add('active');
    let colorsSection = document.getElementById('Vignettes-' + section + '-color');
    colorsSection.style.display = 'none';
    /*Change shape*/
    for (const vignette of vignettes) {
      vignette.addEventListener('click', function () {
        colorsSection.style.display = 'grid';

        document.getElementById('Hair').classList.add('disable');
        let hairSize = document.getElementById('Result_Hair').getAttribute('data-size');
        let hairColor = document.getElementById('Result_Hair').getAttribute('data-color');
        let hatColor = document.querySelector('#Vignettes-Hat-color .vignette-color.active').getAttribute("data-color");
        let hatElement = this.getAttribute("data-element");

        let resetHatButton = document.querySelector('#' + section + ' .reset');
        resetHatButton.style.display = 'flex';

        document.querySelector('#Vignettes-Hat .vignette.active').classList.remove('active');
        this.classList.add('active');
        document.getElementById('Vignettes-Hat-color').style.display = 'grid';



        document.getElementById('Result_Hat').setAttribute('src', 'avatar-creator/images/Hat/' + hatElement +
          '/Shape/' + hatColor + '.png');
        document.getElementById('Result_Hat_Back').setAttribute('src', 'avatar-creator/images/Hat/' + hatElement +
          '/Shape_Back/' + hatColor + '.png');

        if (hairSize !== "shaved") {
          document.getElementById('Result_Hat_Hair').setAttribute('src', 'avatar-creator/images/Hat/' + hatElement +
            '/Hair/' + hairSize + '/' + hairColor + '.png');
          document.getElementById('Result_Hat_Hair_Back').setAttribute('src', 'avatar-creator/images/Hat/' + hatElement +
            '/Hair_Back/' + hairSize + '/' + hairColor + '.png');
        } else {
          document.getElementById('Result_Hat_Hair').setAttribute('src', "avatar-creator/UI/reset.png");
          document.getElementById('Result_Hat_Hair_Back').setAttribute('src', "avatar-creator/UI/reset.png");
        }


        /*SAVE*/
        if (!document.getElementById('Hair').classList.contains('item-save')) {
          document.getElementById('Hair').classList.add('item-save');
          document.getElementById('Result_Hair').setAttribute('data-src-store', document.getElementById('Result_Hair').getAttribute('src'));
          document.getElementById('Result_Hair_Back').setAttribute('data-src-store', document.getElementById('Result_Hair_Back').getAttribute('src'));
          document.getElementById('Result_Hair').setAttribute('src', "avatar-creator/UI/reset.png");
          document.getElementById('Result_Hair_Back').setAttribute('src', "avatar-creator/UI/reset.png");
        }
      });
    }

    /*Change color Rainbow*/
    for (const color of colors) {
      color.addEventListener('click', function () {
        let hatColor = this.getAttribute("data-color");
        let hatElement = document.querySelector('#Vignettes-Hat .vignette.active').getAttribute("data-element");
        document.getElementById('Hair').classList.add('disable');
        document.querySelector('#Vignettes-Hat-color .vignette-color.active').classList.remove('active');
        this.classList.add('active');

        /*Change result color*/
        document.getElementById('Result_Hat').setAttribute('src', 'avatar-creator/images/Hat/' + hatElement +
          '/Shape/' + hatColor + '.png');
        document.getElementById('Result_Hat_Back').setAttribute('src', 'avatar-creator/images/Hat/' + hatElement +
          '/Shape_Back/' + hatColor + '.png');

        /*Change vignette color*/
        for (let i = 1; i < vignettes.length + 1; i++) {
          document.querySelector('#Vignettes-Hat .vignette[data-element="' + i + '"] img[data-vignette-item="Hat"]').setAttribute("src", "avatar-creator/images/Hat/" + i + "/Shape/" + hatColor + ".png");
          document.querySelector('#Vignettes-Hat .vignette[data-element="' + i + '"] img[data-vignette-item="Hat_Back"]').setAttribute("src", "avatar-creator/images/Hat/" + i + "/Shape_Back/" + hatColor + ".png");
        }
      });
    }
  }
  change_hat("Hat");
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
    }, getRandomTime()*5);
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
          change(section.sectionName, section.hasBack, section.isCostume, section.id_color, section.hasGender, tabCostumes, tabItemsSave);
        }

      });
  }
  loadConfig();