
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
            echo '<div class="vignettes-color" id="Vignettes-Background-color">
            <span><i class="fas fa-eye-dropper"></i></span>';
            for ($i = 0; $i < $lengthRainbowColor; $i++) {
                echo '<div class="color-item" data-color="'. ($i + 1) .'" style="background-color:'. $rainbowColor[$i] .'"></div>';
            }
            echo '</div>';?>
</section>