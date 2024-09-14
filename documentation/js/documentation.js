document.addEventListener('DOMContentLoaded', function () {
    let accordions = document.querySelectorAll('.accordion');

    for(const accordion of accordions) {
        let title = accordion.querySelector('.accordion-title');
        let body = accordion.querySelector('.accordion-body');

        title.addEventListener('click', function () {
            body.classList.toggle('active');
            title.classList.toggle('active');
        });
    };

let copyButtons = document.querySelectorAll('.copy');
for(const copyButton of copyButtons){
    copyButton.addEventListener('click',function(){
        let copyText = copyButton.parentElement.parentElement.querySelector('pre code');
        //create temporary textarea
        let textarea = document.createElement('textarea');
        textarea.value = copyText.innerText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        copyButton.innerText = "Copié !"
        copyButton.classList.add('copied');
        setTimeout(() => {
            copyButton.innerHTML = '<i class="fa fa-copy"></i> Copier le code </span>'
            copyButton.classList.remove('copied');
        }, 2000);
    })
    };

    let rainbowColor = ['red','orange','yellow','green','blue','purple'];
});