<?php 
$version="09-06-2023 - Save & Code Update";

$sectionName=["Skin","Eyes","Eyebrow","Nose","Mouth","Spot","Makeup","Hair",["Beards-Mustaches","Mustaches","Beards"],["Accessory","Glasses","Necklace","Earring"],"Top","Jacket","Hat",["Costumes","Christmas","Halloween","Job","Medieval","Antiquity","Pirate"],"Background"];
//"Neutral",
$lengthSection=count($sectionName);


$rainbowColor=["#DA6A6A", "#DA7A6A", "#DA8A6A", "#D29056", "#DAA06A", "#DAB16A", "#DAC56A", "#C2DA6A", "#AADA6A", "#90DA6A", "#79DA6A", "#6ADA78", "#6ADA93", "#6ADAB8", "#6ADACA", "#5AE4DF", "#6AC1DA", "#6AA9DA", "#6A8CDA", "#6A76DA", "#7E6ADA", "#926ADA", "#AA6ADA", "#CB6ADA", "#DA6ABB", "#DA6A94", "#DA6A6F", "#AE6165", "#896263", "#877273", "#615C5C", "#6F6767", "#716D6D", "#928F8F", "#A3A2A2", "#BFB9B9", "#CAC6C6", "#DFD9D9", "#F7F6F6", "#FFFFFF"];
$hairColor=["#715B48", "#8B6D53", "#A3764F", "#D29056", "#D5A186", "#C8A380", "#C8B380", "#E3C06C", "#E6D19E", "#DFD2B5", "#F7F4ED", "#BEBBB3", "#928F89", "#6F6C63", "#4F4E4A","#9B99E0","#6260AF","#9151BC","#B57476","#A5595B","#BF97BC","#DEB4DB","#F5E3ED","#A16BAF","#98839D","#4C988D","#79C9BD","#59A24C","#80AA79","#9DC795"];
$lengthRainbowColor=count($rainbowColor);
$lengthHairColor=count($hairColor);
/*------------------------------------------------------*/
function simpleSection($sectionName,$hasZoomFace,$hasColorPart,$id_color,$hasReset,$hasDisableMessage,$hasGender,$isHair,$hairSize,$isCostume,$hasBack,$customVignette){
    global $rainbowColor;
    global $hairColor;


    if ($hasColorPart && $hasGender) {
        $file = glob("avatar-creator/images/$sectionName/Men/*" , GLOB_ONLYDIR);
        $sectionColor = ($id_color === 1) ? $rainbowColor : $hairColor;
        $sectionColorLength = count($sectionColor);
    } elseif ($hasColorPart && $hasBack) {
        $file = glob("avatar-creator/images/$sectionName/Front/*" , GLOB_ONLYDIR);
        $fileBack = glob("avatar-creator/images/$sectionName/Back/*" , GLOB_ONLYDIR);
        $sectionColor = ($id_color === 1) ? $rainbowColor : $hairColor;
        $sectionColorLength = count($sectionColor);
     } elseif ($hasBack) {
        $file = glob("avatar-creator/images/$sectionName/Front/*.png");
        $fileBack = glob("avatar-creator/images/$sectionName/Back/*.png");
    } elseif ($hasColorPart) {
        $file = glob("avatar-creator/images/$sectionName/*" , GLOB_ONLYDIR);
        $sectionColor = ($id_color === 1) ? $rainbowColor : $hairColor;
        $sectionColorLength = count($sectionColor);
    } elseif ($hasGender) {
        $file = glob("avatar-creator/images/$sectionName/Men/*.png");
    } else {
        $file = glob("avatar-creator/images/$sectionName/*.png");
    }
    $countFile = count($file);
    
   
    echo '<section id="'.$sectionName.'">';
    if ($hasDisableMessage && $isHair) {
        echo '<div class="disable-message">';
        if ($isHair){
            echo '<p>Vous portez un chapeau.</p>';
            echo ' <div class="remove-hat-button"><i class="fa fa-trash reset color-item"></i>Supprimer le chapeau </div></div>';
        }else{
            echo '<p>Vous portez un costume.</p>';
            echo ' <div class="remove-costume-button"><i class="fa fa-trash reset color-item"></i>Supprimer le costume </div></div>';
        }
        
    }
    //Vignettes
    echo '<div class="vignettes-section';
    if ($hasZoomFace) {echo ' hasZoomFace';}
    if ($hasColorPart) {echo ' hasColorPart';}
    if ($isCostume) {echo ' isCostume';}
    if ($hasDisableMessage && !$isHair) {echo ' hasDisableMessage';}
    if ($hasGender) {echo ' hasGender';}
    if (empty($customVignette)) {echo ' vignette-default';} else {echo ' vignette-custom';}

    echo '" id="Vignettes-'.$sectionName.'" data-section="'.$sectionName.'" >';
    if ($hasReset) {
        echo '<div class="reset" data-reset="' . $sectionName . '"><img loading="lazy" src="avatar-creator/UI/cross.png" alt="Reset ' . $sectionName . '"> </div>';
    }

    
        if (!empty($hairSize)){
            foreach ( $hairSize as $key => $hairSize_item){
                $file = glob("avatar-creator/images/Hair/Front/".$hairSize_item."/*", GLOB_ONLYDIR);
                $countFile = count($file);
                
                for ($j = 1; $j <= $countFile; $j++) {
                    echo '<div class="vignette" data-element="'.$j.'" data-size="'.$hairSize_item.'">';
                    echo '<img loading="lazy" data-vignette-item="Hair" src="avatar-creator/images/Hair/Front/'.$hairSize_item.'/'.$j.'/1.png" alt="Avatar Vignette" style="z-index:3"> ';
                    echo '<img loading="lazy" src="avatar-creator/UI/Base.png" alt="Avatar Vignette" style="z-index:2">';
                    echo '<img loading="lazy" data-vignette-item="Hair_Back" src="avatar-creator/images/Hair/Back/'.$hairSize_item.'/'.$j.'/1.png" alt="Avatar Vignette" style="z-index:1"> ';
                    echo '</div>';
                }
        }
        }else{
            for ($i = 1; $i <= $countFile; $i++) {
            $dirPath = "avatar-creator/images/$sectionName" . ($hasGender ? "/Men" : "") .($hasBack ? "/Front" : ""). ($hasColorPart ? "/$i/1.png" : "/$i.png");
            echo '<div class="vignette" data-element="'.$i.'">';
        if (empty($customVignette)) {
                echo '<img loading="lazy" data-vignette-item="'.$sectionName.'"  alt="Avatar Vignette '.$sectionName.'"  src="'.$dirPath.'">'; 
            } else {
                foreach ($customVignette as $key => $value) {
                    if ($value === $sectionName) {
                        echo '<img loading="lazy" data-vignette-item="'.$sectionName.'"  alt="Avatar Vignette '.$sectionName.'"  src="'.$dirPath.'" style="z-index:'.$key.'">';
                    } elseif ($value === $sectionName."_Back") {
                        $dirPathBack = "avatar-creator/images/$sectionName" . ($hasGender ? "/Men" : "") .($hasBack ? "/Back" : ""). ($hasColorPart ? "/$i/1.png" : "/$i.png");
                        echo '<img loading="lazy" data-vignette-item="'.$sectionName.'_Back"  alt="Avatar Vignette '.$sectionName.'"  src="'.$dirPathBack.'" style="z-index:'.$key.'">';
                    } elseif ($value === "Base") {
                        echo '<img loading="lazy" data-vignette-item="' . $value . '"  alt="Avatar Vignette ' .$value . '"  src="avatar-creator/UI/Base.png" style="z-index:'.$key.'">';
                    } else {
                        echo '<img loading="lazy" data-vignette-item="' . $value . '"  alt="Avatar Vignette ' .$value . '"  src="avatar-creator/images/'.$value.'/1.png" style="z-index:'.$key.'">';
                    }
                }
            }
            echo '</div>';

}
    }
    echo '</div>';
    if ($hasColorPart) {
        echo '<div class="vignettes-color" id="Vignettes-' . $sectionName . '-color">
    <span><i class="fas fa-eye-dropper"></i></span>';
    for ($i = 0; $i < $sectionColorLength; $i++) {
        echo '<div class="color-item" data-color="'. ($i + 1) .'" style="background-color:'. $sectionColor[$i] .'"></div>';
    }
    echo '</div>';
}
echo '</section>';
}

?>