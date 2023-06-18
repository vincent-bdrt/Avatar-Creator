
document.getElementById("Reset").addEventListener("click", function () {
        localStorage.clear();
        defaultResult();

    });
    /*Reset function for specific item*/
    function reset_button_Section(section) {
        let resetButton =  document.querySelectorAll('#'+section+' .reset');
        let vignettes = document.querySelectorAll('#Vignettes-' + section + ' .vignette');
        for(const button of resetButton) {
        button.addEventListener('click', function () {
            
            for (let vignette of vignettes) {
                vignette.classList.remove('active');
            }
            if (section === "Glasses") {
                document.getElementById('Result_' + section + '_Back').setAttribute('src', "avatar-creator/UI/reset.png");
            }
            if (section === "Background") {
                document.getElementById('Result_' + section + '_Back').setAttribute('src', "avatar-creator/UI/reset.png");
            }
            document.getElementById('Result_' + section).setAttribute('src', "avatar-creator/UI/reset.png");
            vignettes[0].classList.add('active');  
        })
    };
    }

    for ( const section of order_result) {
        reset_button_Section(section);
    }


    function reset_hat(section) {
        let vignettes = document.querySelectorAll('#Vignettes-' + section + ' .vignette');
        let colors = document.querySelectorAll('#Vignettes-' + section + '-color .vignette-color');

        
       document.querySelector('#'+section+' .reset').addEventListener('click', function () {
        
        let colorsSection = document.getElementById('Vignettes-' + section + '-color');
        colorsSection.style.display = 'none';

            /*Reset saved item*/
            document.getElementById('Hair').classList.remove('item-save');
            document.getElementById('Result_Hair').setAttribute('src', document.getElementById('Result_Hair').getAttribute('data-src-store'));
            document.getElementById('Result_Hair_Back').setAttribute('src', document.getElementById('Result_Hair_Back').getAttribute('data-src-store'));
            document.getElementById('Hair').classList.remove('disable');
            /*Reset Hat*/
            for(let vignette of vignettes){
                vignette.classList.remove('active');
            }
            for(let color of colors){
                color.classList.remove('active');
            }
            document.querySelector('#Vignettes-Hat-color .vignette-color').classList.add('active');
            document.querySelector('#Vignettes-Hat .vignette').classList.add('active');

            
            document.getElementById('Result_Hat_Hair_Back').setAttribute('src', "avatar-creator/UI/reset.png");
            document.getElementById('Result_Hat_Hair').setAttribute('src', "avatar-creator/UI/reset.png");
            document.getElementById('Result_Hat_Back').setAttribute('src', "avatar-creator/UI/reset.png");
            document.getElementById('Result_Hat').setAttribute('src', "avatar-creator/UI/reset.png");
        });
    }
    reset_hat('Hat');
    //reset_hat('Hat_Costumes');

    /*-----------RESET COSTUMS-----------------*/
    function reset_costume(section,tabItemsSave,tabCostumes) {
        document.querySelector('#'+section+' .reset').addEventListener('click', function () {
            for (const itemSave of tabItemsSave) {
                if (itemSave != "Hair") {
                document.getElementById('Result_'+itemSave).setAttribute('src', document.getElementById('Result_'+itemSave).getAttribute('data-src-store'));
                document.getElementById(itemSave).classList.remove('disable');
                document.getElementById(itemSave).classList.remove('item-save');
                }
            }
            for (const costumeItem of tabCostumes) {
                document.getElementById('Result_'+costumeItem).setAttribute('src', "avatar-creator/UI/reset.png");
                let vignetteCostumes = document.querySelectorAll('#'+costumeItem+' .vignette');
                for(let vignette of vignetteCostumes){
                    vignette.classList.remove('active');
                }
            }
            /*-----------*/
            document.getElementById('Result_'+section).setAttribute('src', "avatar-creator/UI/reset.png");
        })
    }

    
    let removeHatButton = document.querySelectorAll('.remove-hat-button');
    let removeCostumeButton = document.querySelectorAll('.remove-costume-button');
    for(let removeHatButtonItem of removeHatButton){
        removeHatButtonItem.addEventListener('click', function () {
            document.querySelector('#Hat .reset').click();
        });
    }
    for(let removeCostumeButtonItem of removeCostumeButton){
        removeCostumeButtonItem.addEventListener('click', function () {
            let costumesSectionActive = document.querySelectorAll('.isCostume .reset');
            for(let costumeSection of costumesSectionActive){
                costumeSection.click();
            }
        });
    }

