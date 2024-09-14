/**
 * @file
 * Global utilities.
 *
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function generateRandom(item) {
    const countItem = document.querySelectorAll(`#Vignettes-${item} .vignette`).length;
    const randomItem = randomIntFromInterval(1, countItem);
    document.querySelector(`#Result_${item}`).src = `images/sections/${item}/${randomItem}.png`;
  }
  
  function randomize(item, chanceValue) {
    const chance = randomIntFromInterval(1, chanceValue); 
    if (chance === 1) {
      const countItem = document.querySelectorAll(`#Vignettes-${item} .vignette`).length;
      const randomItem = randomIntFromInterval(1, countItem);
      const randomColorItem = randomIntFromInterval(1, 40);
      document.querySelector(`#Vignettes-${item}-color .vignette-color[data-color="${randomColorItem}"]`).click();
      document.querySelector(`#Vignettes-${item} .vignette[data-element="${randomItem}"]`).click();
    }
  }

  function randomizeHairstyle() {
    const randomColorItem = randomIntFromInterval(1, 15);
    const randomMustaches = randomIntFromInterval(1, document.querySelectorAll('#Vignettes-Mustaches .vignette').length);
    const randomBeards = randomIntFromInterval(1, document.querySelectorAll('#Vignettes-Beards .vignette').length);
    const randomHair = randomIntFromInterval(1, document.querySelectorAll('#Vignettes-Hair .vignette').length);
    const randomEyebrow = randomIntFromInterval(1, document.querySelectorAll('#Vignettes-Eyebrow .vignette').length);
    
    if (currentGender === "Men") {
      const chanceMustaches = randomIntFromInterval(1, 10); 
      const chanceBeards = randomIntFromInterval(1, 10); 
      if (chanceMustaches === 1) {
        document.querySelector(`#Vignettes-Mustaches-color .vignette-color[data-color="${randomColorItem}"]`).click();
        document.querySelector(`#Vignettes-Mustaches .vignette[data-element="${randomMustaches}"]`).click();
      }
      if (chanceBeards === 1) {
        document.querySelector(`#Vignettes-Beards-color .vignette-color[data-color="${randomColorItem}"]`).click();
        document.querySelector(`#Vignettes-Beards .vignette[data-element="${randomBeards}"]`).click();
      }
    }
    
    document.querySelector(`#Vignettes-Hair-color .vignette-color[data-color="${randomColorItem}"]`).click();
    document.querySelectorAll('#Vignettes-Hair .vignette')[randomHair - 1].click();
    document.querySelector(`#Vignettes-Eyebrow-color .vignette-color[data-color="${randomColorItem}"]`).click();
    document.querySelector(`#Vignettes-Eyebrow .vignette[data-element="${randomEyebrow}"]`).click();
  }

  document.getElementById('Random').addEventListener('click', async function () {
    try {
      document.querySelector('.result').classList.add('loading');
      document.getElementById('Reset').click();
      generateRandom('Mouth');
      generateRandom('Nose');
      randomizeHairstyle();
      randomize('Glasses', 8);
      randomize('Necklace', 8);
      randomize('Earring', 8);
      randomize('Top', 1);
      randomize('Jacket', 8);
      randomize('Background', 1);
      await new Promise(resolve => setTimeout(resolve, 500));
      document.querySelector('.result').classList.remove('loading');
    } catch (error) {
      console.error('Erreur :', error.message);
    }
  });
