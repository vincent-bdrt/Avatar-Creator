
<section id="Background">
  <div class="vignettes-section hasColorPart vignette-default" id="Vignettes-Background">
    <?php
            
            $F_top = glob("avatar-creator/images/Background/Front/*.png");
                  $C_top = count($F_top);
                  for ($i = 1; $i <= $C_top; $i++) {
                    echo '<div class="vignette" data-element="';
                    echo $i;
                    echo '">';
                    echo '<img loading="lazy"alt="Avatar Vignette background" src="avatar-creator/images/Background/Front/';
                    echo $i;
                    echo '.png"></div>';
                }
             ?>

  </div>
  <?php 
            echo '<div class="vignettes-section-color" id="Vignettes-Background-color">
            <span><i class="fas fa-eye-dropper"></i></span>';
            echo '<div class="scroll-arrow left-arrow"> <img src="avatar-creator/UI/Icon/left-arrow.svg" alt="arrow-left"></div>';
            echo '<div class="scroll-container">';
            $sectionColorLengthHat = 0;
            if (isset($colors[0]["colorValues"])) {
                $sectionColorLengthHat = count($colors[0]["colorValues"]);
            }

            for ($i = 0; $i < $sectionColorLengthHat ; $i++) {
                echo '<div class="vignette-color" data-color="'. ($i + 1) .'" style="background-color:'. $colors[0]["colorValues"][$i].'"></div>';
            }
            echo '</div>';
            echo '<div class="scroll-arrow right-arrow active"> <img src="avatar-creator/UI/Icon/right-arrow.svg" alt="arrow-right"> </div>';
            echo '</div>';
            ?>
</section>