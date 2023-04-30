<section id="Hair">
    <div class="disable-message">
        <p>Vous portez un chapeau.</p>
        <div class="remove-hat-button"><i class="fa fa-trash reset color-item"> </i> Supprimer le chapeau </div>
    </div>

    <div class="vignettes-section withsubpart" id="Vignettes-Hair">
        <?php
            foreach ($hairSize as $hairSizeItem) {
                hair_vignette_list($hairSizeItem);
            }
        ?>
    </div>


    <?php  echo '<div class="vignettes-color" id="Vignettes-Hair-color">
    <span><i class="fas fa-eye-dropper"></i></span>';
    for ($i = 0; $i < $lengthHairColor; $i++) {
        $j = $i + 1;
        echo '<div class="color-item" data-color="'. ($i + 1) .'" style="background-color:'. $hairColor[$i] .'"></div>';
        }
    echo '</div>';
    ?>
 </section>