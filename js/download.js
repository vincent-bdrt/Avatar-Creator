//DOWNLOAD CODE FOR MERGING IMAGES AND DOWNLOADING THEM AS PNG FILE 
/*-----------------------------------------------------------------*/


function clicklink() {
    document.getElementById('Download').querySelector('i').classList.add('fa-download');
    document.getElementById('Download').querySelector('i').classList.remove('fa-circle-o-notch', 'fa-spin');
    document.getElementById('Download').classList.remove('btn-success');
}
const order_result = ["Background_Back", "Background", "Hat_Back", "Hat_Hair_Back", "Hair_Back",
    "Skin", "Spot", "Makeup", "Top", "Necklace", "Jacket", "Antiquity", "Christmas", "Halloween", "Medieval", "Pirate", "Neutral", "Job", "Beards", "Eyes",
    "Mouth", "Eyebrow", "Mustaches", "Glasses_Back", "Nose", "Glasses", "Earring",
    "Hair", "Hat_Hair", "Hat"
];

for (let i = 0; i < order_result.length; i++) {
    let result_div = document.querySelector('.image-result .result');
    let img = document.createElement('img');
    img.setAttribute('id', 'Result_' + order_result[i]);
    img.setAttribute('src', 'avatar-creator/UI/reset.png');
    img.setAttribute('loading', 'lazy');
    img.setAttribute('alt', order_result[i]);

    result_div.appendChild(img);
    document.getElementById('Result_' + order_result[i]).style.zIndex = i + 1;
}
var initialLoad = false;
function defaultResult() {
    for (const element of order_result) {
         //if element is in cookies
        if (localStorage.getItem("Storage_" + element) && initialLoad == false) {
            document.getElementById('Result_'+ element).setAttribute('src', localStorage.getItem("Storage_" + element));
        } else {
            switch (element) {
                case "Skin":
                    document.getElementById('Result_Skin').setAttribute('src', 'avatar-creator/images/Skin/Men/1.png');
                    break;
                case "Eyes":
                    document.getElementById('Result_Eyes').setAttribute('src', 'avatar-creator/images/Eyes/1.png');
                    break;
                case "Mouth":
                    document.getElementById('Result_Mouth').setAttribute('src', 'avatar-creator/images/Mouth/1.png');
                    break;
                case "Eyebrow":
                    document.getElementById('Result_Eyebrow').setAttribute('src', 'avatar-creator/images/Eyebrow/1/1.png');
                    break;
                case "Nose":
                    document.getElementById('Result_Nose').setAttribute('src', 'avatar-creator/images/Nose/1.png');
                    break;
                case "Makeup":
                    document.getElementById('Result_Makeup').setAttribute('src', 'avatar-creator/images/Makeup/3.png');
                    break;
                case "Hair":
                    document.getElementById('Result_Hair').setAttribute('data-color', '1');
                    document.getElementById('Result_Hair').setAttribute('data-size', 'shaved');
                    document.getElementById('Result_Hair').setAttribute('data-src-store', 'avatar-creator/UI/reset.png');
                    break;
                case "Hair_Back":
                    document.getElementById('Result_Hair_Back').setAttribute('data-color', '1');
                    document.getElementById('Result_Hair_Back').setAttribute('data-size', 'shaved');
                    document.getElementById('Result_Hair_Back').setAttribute('data-src-store', 'avatar-creator/UI/reset.png');
                    break;

                default:
                    document.getElementById('Result_' + element).setAttribute('src', 'avatar-creator/UI/reset.png');
                    break;
            }
        }
    }
    initialLoad = true;
}
 
defaultResult();

document.getElementById('Download').addEventListener('click', function () {
    document.getElementById('Download').querySelector('i').classList.remove('fa-download');
    document.getElementById('Download').querySelector('i').classList.add('fa-circle-o-notch', 'fa-spin');
    document.getElementById('Download').classList.add('btn-success');
    const canvas = document.getElementById('Result_final');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let images = [];
    for (const element of order_result) {
        let image_url = document.getElementById('Result_' + element);
        let src = image_url.getAttribute('src');
        images.push(src);
    }
    //merge all image in one
    const mergeImages = (images) => {
        images.forEach((image) => {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        });

        return canvas;
    }
    //load all images
    const loadImages = (images) => {
        return Promise.all(images.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = image;
            });
        }));
    }
    //load all images
    loadImages(images).then((images) => {
        //merge all images
        const mergedImage = mergeImages(images);
        //draw merged image
        ctx.drawImage(mergedImage, 0, 0, canvas.width, canvas.height);
    });
    setTimeout(
        function () {
            const download_link = document.createElement('a');
            document.body.appendChild(download_link);
            download_link.setAttribute('href', canvas.toDataURL("image/png;base64"));
            download_link.download = 'avatar.png';
            // trigger download event
            download_link.click();
            clicklink();
        }, 1000)
});