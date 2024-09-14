//DOWNLOAD CODE FOR MERGING IMAGES AND DOWNLOADING THEM AS PNG FILE 
/*-----------------------------------------------------------------*/


// Configuration de l'ordre d'affichage des éléments de l'avatar
const ORDER_RESULT = [
  "Background", "Hair_Back", "Skin", "Spot", "Top", "Necklace", "Jacket",
  "Antiquity", "Christmas", "Halloween", "Medieval", "Pirate", "Neutral", "Job",
  "Beards", "Eyes", "Mouth", "Eyebrow", "Mustaches", "Glasses_Back", "Nose",
  "Glasses", "Earring", "Hair"
];

/**
 * Met à jour l'apparence du bouton de téléchargement
 * @param {boolean} isLoading - Indique si le chargement est en cours
 */
function updateDownloadButton(isLoading) {
  const button = document.getElementById('Download');
  const icon = button.querySelector('i');
  const span = button.querySelector('span');

  icon.classList.toggle('fa-download', !isLoading);
  icon.classList.toggle('fa-circle-o-notch', isLoading);
  icon.classList.toggle('fa-spin', isLoading);
  span.textContent = isLoading ? 'Chargement...' : 'Mon Avatar est prêt !';
  button.classList.toggle('btn-success', isLoading);
}

/**
 * Crée dynamiquement les éléments de l'avatar
 */
function createAvatarElements() {
  const resultDiv = document.querySelector('.image-result .result');
  ORDER_RESULT.forEach((element, index) => {
    const img = document.createElement('img');
    img.id = `Result_${element}`;
    img.src = 'images/UI/reset.png';
    img.loading = 'lazy';
    img.alt = '';
    img.style.zIndex = index + 1;
    resultDiv.appendChild(img);
  });
}

/**
 * Initialise les éléments par défaut de l'avatar
 */function initializeDefaultAvatar() {
  const defaultElements = {
    Skin: 'images/sections/Skin/1/1.png',
    Eyes: 'images/sections/Eyes/1.png',
    Mouth: 'images/sections/Mouth/1.png',
    Eyebrow: 'images/sections/Eyebrow/1/1.png',
    Nose: 'images/sections/Nose/1.png',
    Spot: 'images/sections/Spot/11.png',
    Hair: 'images/sections/Hair/Front/shaved/1/1.png',
    Hair_Back: 'images/sections/Hair/Front/shaved/1/1.png'
  };

  ORDER_RESULT.forEach(element => {
    const img = document.getElementById(`Result_${element}`);
    if (localStorage.getItem(`Storage_${element}`)) {
      img.src = localStorage.getItem(`Storage_${element}`);
    } else if (defaultElements[element]) {
      img.src = defaultElements[element];
      if (element === 'Hair' || element === 'Hair_Back') {
        img.dataset.color = '1';
        img.dataset.size = 'shaved';
        img.dataset.srcStore = defaultElements[element];
      }
    } else {
      img.src = 'images/UI/reset.png';
    }
  });
}

/**
 * Fusionne les images de l'avatar
 * @returns {Promise<HTMLCanvasElement>} Canvas contenant l'image fusionnée
 */
async function mergeImages() {
  const canvas = document.getElementById('Result_final');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const element of ORDER_RESULT) {
    const img = document.getElementById(`Result_${element}`);
    if (img.src !== 'images/UI/reset.png') {
      await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve();
        };
        image.onerror = reject;
        image.src = img.src;
      });
    }
  }

  return canvas;
}

/**
 * Télécharge l'image fusionnée
 * @param {HTMLCanvasElement} canvas - Le canvas contenant l'image fusionnée
 */
function downloadMergedImage(canvas) {
  const link = document.createElement('a');
  link.href = canvas.toDataURL("image/png");
  link.download = 'avatar.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Gestionnaire d'événement pour le bouton de téléchargement
document.getElementById('Download').addEventListener('click', async function () {
  updateDownloadButton(true);
  try {
    const mergedCanvas = await mergeImages();
    downloadMergedImage(mergedCanvas);
  } catch (error) {
    console.error("Erreur lors de la fusion des images:", error);
  } finally {
    updateDownloadButton(false);
  }
});

// Initialisation
createAvatarElements();
initializeDefaultAvatar();