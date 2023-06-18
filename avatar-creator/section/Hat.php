 <section id="Hat">
             <div class="vignettes-section withsubpart" id="Vignettes-Hat">
             <div class="reset" data-reset="Hat"><img loading="lazy" src="avatar-creator/UI/cross.png" alt="Reset Hat"> </div>
                 <?php
                 
                    $F_Hat = glob("avatar-creator/images/Hat/*", GLOB_ONLYDIR);
                    $C_Hat = count($F_Hat);
                    for ($i = 1; $i <= $C_Hat; $i++) {
                        echo '<div class="vignette" data-element="'.$i.'">';
                        echo '<img loading="lazy" data-vignette-item="Hat" src="avatar-creator/images/Hat/'.$i.'/Shape/1.png" alt="Avatar Vignette" style="z-index:4"> ';
                        echo '<img loading="lazy" src="avatar-creator/UI/Base.png" alt="Avatar Vignette" style="z-index:3">';
                        echo '<img loading="lazy" data-vignette-item="Hat_Back" src="avatar-creator/images/Hat/'.$i.'/Shape_Back/1.png" alt="Avatar Vignette" style="z-index:2">';
                        echo '</div>';
                    }
                    ?>
             </div>
            <?php 
            echo '<div class="vignettes-section-color" id="Vignettes-Hat-color">
            <span><i class="fas fa-eye-dropper"></i></span>';
            $sectionColorLengthHat = 0;
            if (isset($colors[0]["colorValues"])) {
                $sectionColorLengthHat = count($colors[0]["colorValues"]);
            }

            for ($i = 0; $i < $sectionColorLengthHat ; $i++) {
                echo '<div class="vignette-color" data-color="'. ($i + 1) .'" style="background-color:'. $colors[0]["colorValues"][$i].'"></div>';
            }
            echo '</div>';?>
 </section>