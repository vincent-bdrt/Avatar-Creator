<?php 
$config = json_decode(file_get_contents('config.json'), true);
$version = $config['version'];
$sections = $config['sections'];
$colors = $config['colors'];
$navigationOrder = $config['navigationOrder'];
$news = $config['news'];

$costumes = array();
foreach ($sections as $section) {
    if ($section['isCostume']) {
        array_push($costumes, $section['sectionName']);
    }
}



function simpleSection($section)
{
    global $colors;
    global $costumes;
    
    $sectionName = $section['sectionName'];
    $hasZoomFace = $section['hasZoomFace'];
    $id_color = $section['id_color'];
    $hasReset = $section['hasReset'];
    $hasDisableMessage = $section['hasDisableMessage'];
    $hasGender = $section['hasGender'];
    $isCostume = $section['isCostume'];
    $optionsFilter = $section['optionsFilter'];
    $hasBack = $section['hasBack'];
    $customVignette = $section['customVignette'];
    $length_costumes = count($costumes);


    $sectionColorLength = 0;
        if (isset($colors[$id_color]["colorValues"])) {
            $sectionColorLength = count($colors[$id_color]["colorValues"]);
        }
        if($id_color !== null){
            $hasColor = true;
        }else{
            $hasColor = false;
        }

    if ($hasColor && $hasGender) {
        $file               = glob("images/sections/$sectionName/Men/*" , GLOB_ONLYDIR);
    } elseif ($hasColor && $hasBack) {
        $file               = glob("images/sections/$sectionName/Front/*" , GLOB_ONLYDIR);
        $fileBack           = glob("images/sections/$sectionName/Back/*" , GLOB_ONLYDIR);
     } elseif ($hasBack) {
        $file     = glob("images/sections/$sectionName/Front/*.png");
        $fileBack = glob("images/sections/$sectionName/Back/*.png");
    } elseif ($hasColor) {
        $file               = glob("images/sections/$sectionName/*" , GLOB_ONLYDIR);
    } elseif ($hasGender) {
        $file = glob("images/sections/$sectionName/Men/*.png");
    } else {
        $file = glob("images/sections/$sectionName/*.png");
    }
    $countFile = count($file);


   
    echo '<section id="'.$sectionName.'">';
    if ($hasDisableMessage && $hasColor) {
        echo '<div class="disable-message">';
        if ($sectionName=="Hair") {
            echo '<p>Vous portez un chapeau.</p>';
            echo ' <div class="remove-hat-button"><i class="fa fa-trash"></i>Supprimer le chapeau </div></div>';
        }else{
            echo '<p>Vous portez un costume.</p>';
            echo ' <div class="remove-costume-button"><i class="fa fa-trash"></i>Supprimer le costume </div></div>';
        }
        
    }
    //Vignettes
    echo '<ul class="vignettes-section';
    if ($hasZoomFace) {echo ' hasZoomFace';}
    if ($hasColor) {echo ' hasColorPart';}
    if ($hasGender) {echo ' hasGender';}
    if ($isCostume) {echo ' isCostume';}
    if ($hasBack) {echo ' hasBack';}
    if (empty($customVignette)) {echo ' vignette-default';} else {echo ' vignette-custom';}

    echo '" id="Vignettes-'.$sectionName.'" data-section="'.$sectionName.'" >';
    if ($hasReset) {
        echo '<li class="reset" data-reset="' . $sectionName . '"><img loading="lazy" src="images/UI/cross.png" alt="Reset ' . $sectionName . '"> </li>';
    }

    
        if (!empty($optionsFilter)){
            foreach ( $optionsFilter as $key => $optionsFilter_item){
                $file = glob("images/sections/Hair/Front/".$optionsFilter_item."/*", GLOB_ONLYDIR);
                $countFile = count($file);
                
                for ($j = 1; $j <= $countFile; $j++) {
                    echo '<li class="vignette" data-element="'.$j.'" data-size="'.$optionsFilter_item.'">';
                    echo '<img loading="lazy" data-vignette-item="Hair" src="images/sections/Hair/Front/'.$optionsFilter_item.'/'.$j.'/1.png" alt="Avatar Vignette" style="z-index:3"> ';
                    echo '<img loading="lazy" src="images/UI/Base.png" alt="Avatar Vignette" style="z-index:2">';
                    echo '<img loading="lazy" data-vignette-item="Hair_Back" src="images/sections/Hair/Back/'.$optionsFilter_item.'/'.$j.'/1.png" alt="Avatar Vignette" style="z-index:1"> ';
                    echo '</li>';
                }
        }
        }else if($sectionName=="Hat-Costumes"){
            for ($i = 0; $i <= $length_costumes; $i++){
                $FileCostumes = glob("images/sections/$costumes[$i]/Hat/*", GLOB_ONLYDIR);
                $CountCostumes = count($FileCostumes);
                if($CountCostumes > 0){
                for ($j = 1; $j <= $CountCostumes; $j++) {
                    $File = glob("images/sections/$costumes[$i]/Hat/$j/Shape/*.png");
                    $Count = count($File);
                    if($Count > 0){
                        echo '<li class="vignette" data-element="'.$j.'" data-costumes="'.$costumes[$i].'">';
                        echo '<img loading="lazy" src="images/UI/Icon/icon_'.$costumes[$i].'.svg" alt="Icon Costume '.$costumes[$i].'" class="costume-category">';
                        echo '<img loading="lazy" data-vignette-item="Hat" src="images/sections/'.$costumes[$i].'/Hat/'.$j.'/Shape/1.png" alt="Avatar Vignette" style="z-index:4"> ';
                        echo '<img loading="lazy" src="images/UI/Base.png" alt="Avatar Vignette" style="z-index:3">';
                        echo '<img loading="lazy" data-vignette-item="Hat_Back" src="images/sections/'.$costumes[$i].'/Hat/'.$j.'/Shape_Back/1.png" alt="Avatar Vignette" style="z-index:2">';
                        echo '</li>';
                    }
                }
                }
            } 
        }else{
            for ($i = 1; $i <= $countFile; $i++) {
            $dirPath = "images/sections/$sectionName" . ($hasGender ? "/Men" : "") .($hasBack ? "/Front" : ""). ($hasColor ? "/$i/1.png" : "/$i.png");
            echo '<li class="vignette" data-element="'.$i.'">';
        if (empty($customVignette)) {
                echo '<img loading="lazy" data-vignette-item="'.$sectionName.'"  alt="Avatar Vignette '.$sectionName.'"  src="'.$dirPath.'">'; 
            } else {
                foreach ($customVignette as $key => $value) {
                    if ($value === $sectionName) {
                        echo '<img loading="lazy" data-vignette-item="'.$sectionName.'"  alt="Avatar Vignette '.$sectionName.'"  src="'.$dirPath.'" style="z-index:'.$key.'">';
                    } elseif ($value === $sectionName."_Back") {
                        $dirPathBack = "images/sections/$sectionName" . ($hasGender ? "/Men" : "") .($hasBack ? "/Back" : ""). ($hasColor ? "/$i/1.png" : "/$i.png");
                        echo '<img loading="lazy" data-vignette-item="'.$sectionName.'_Back"  alt="Avatar Vignette '.$sectionName.'"  src="'.$dirPathBack.'" style="z-index:'.$key.'">';
                    } elseif ($value === "Base") {
                        echo '<img loading="lazy" data-vignette-item="' . $value . '"  alt="Avatar Vignette ' .$value . '"  src="images/UI/Base.png" style="z-index:'.$key.'">';
                    } else {
                        echo '<img loading="lazy" data-vignette-item="' . $value . '"  alt="Avatar Vignette ' .$value . '"  src="images/sections/'.$value.'/1.png" style="z-index:'.$key.'">';
                    }
                }
            }
            echo '</li>';

}
    }
    echo '</ul>';
    if ($hasColor) {
        echo '<div class="vignettes-section-color" id="Vignettes-' . $sectionName . '-color">
    <span><i class="fas fa-eye-dropper"></i></span>';
    echo '<div class="scroll-arrow left-arrow"> <img src="images/UI/Icon/left-arrow.svg" alt="arrow-left"></div>';
    echo '<ul class="scroll-container">';           
    
    for ($i = 0; $i < $sectionColorLength; $i++) {
        echo '<li class="vignette-color" data-color="'. ($i + 1) .'" style="background-color:'. $colors[$id_color]["colorValues"][$i] .'"></li>';
    }
    echo '</ul>';
    echo '<div class="scroll-arrow right-arrow active"> <img src="images/UI/Icon/right-arrow.svg" alt="arrow-right"> </div>';
    echo '</div>';
}
echo '</section>';
}

function generateNavigation()
{
    global $news;
    global $navigationOrder;

    foreach ($navigationOrder as $section) {
        if (is_array($section)) {
            echo '<li class="with_subnav">
                <button type="button" id="Nav_' . $section[0] . '" data-target="' . $section[0] . '"
                class="' . (in_array($section[0], $news) ? 'new' : '') . '">
                    <img loading="lazy" src="images/UI/Icon/icon_' . $section[0] . '.svg" alt="Icon ' . $section[0] . '">
                </button>
                <ul>';

            for ($i = 1; $i < count($section); $i++) {
                echo '<li>
                    <button type="button" id="Nav_' . $section[$i] . '" data-target="' . $section[$i] . '"
                    class="' . (in_array($section[$i], $news) ? 'new' : '') . '">
                        <img loading="lazy" src="images/UI/Icon/icon_' . $section[$i] . '.svg" alt="Icon ' . $section[$i] . '">
                    </button>
                </li>';
            }

            echo '</ul>
            </li>';
        } else {
            echo '<li>
                <button type="button" id="Nav_' . $section . '" data-target="' . $section . '"
                class="' . (in_array($section, $news) ? 'new' : '') . '">
                    <img loading="lazy" src="images/UI/Icon/icon_' . $section . '.svg" alt="Icon ' . $section . '">
                </button>
            </li>';
        }
    }
}


?>