<?php 
require_once 'functions.php';
?>
<!doctype html>
<html lang="fr">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-HJS2YNWC42"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-HJS2YNWC42');
    </script>

    <title>PinkNose - Avatar gratuit 100% personnalisable</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Vincent BODART">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="description"
        content="PinkNose est un jeu de navigateur de créateur d'avatar - Entièrement gratuit. Les possibilités sont infinies. Crée l'avatar à votre image !">
    <meta property="og:locale" content="fr_FR">
    <meta property="og:type" content="website">
    <meta property="og:title" content="PinkNose - Avatar gratuit 100% personnalisable">
    <meta property="og:description"
        content="PinkNose est un jeu de navigateur de créateur d'avatar - Entièrement gratuit. Les possibilités sont infinies. Crée l'avatar à votre image !">
    <meta property="og:site_name" content="PinkNose - Avatar gratuit 100% personnalisable">
    <meta property="og:image" content="Opengraph.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="627">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="Opengraph.png">

    <link rel="icon" type="image/png" href="/favicon.ico" />
    <!-- CSS - LIBRAIRIES -->
    <script src="https://kit.fontawesome.com/a096bedc5f.js" crossorigin="anonymous"></script>
    <link href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all" rel="stylesheet">
    <!-- CSS -->
    <link href="css/avatar.min.css" rel="stylesheet">
    <link href="css/responsive.min.css" rel="stylesheet">

</head>

<body>
    <nav class="menu-plus">
        <ul class="menu-list">
            <li class="menu-item"><button class="menu-button download-btn">
                    <i class="fa fa-download" aria-hidden="true"></i>
                    Télécharger


                </button></li>
            <li class="menu-item"><button class="menu-button delete-btn">

                    <i class="fa fa-trash"></i>
                    Corbeille</button>
            </li>
            <li class="menu-item">
                <button class="menu-button random-btn"><i class="fas fa-dice"></i>Aléatoire</button>
            </li>
            <li class="menu-item">
                <button class="menu-button morphology-btn"> <i class="fa fa-random" aria-hidden="true"></i>
                    Ma Morphologie</button>
            </li>
        </ul>
    </nav>
    <header>
        <nav id="sidebar">
            <button class="btn option" id="Random">
                <i class="fas fa-dice"></i>
                <span>Aléatoire</span>
            </button>
            <button class="btn option" id="Morphology-btn">
                <i class="fa fa-random" aria-hidden="true"></i>
                <span>Ma Morphologie</span>
            </button>

            <button class="btn option" id="Reset">
                <i class="fa fa-trash "></i>
                <span>Corbeille</span>
            </button>
            <button class="btn option" id="information">
                <i class="fa fa-info"></i>
                <span>Informations</span>
            </button>
        </nav>
    </header>
    <main id="content">
        <section class="launcher">
            <div class="animation-wrapper">
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
            </div>
            <h1>Crée <span>l'avatar</span> qui te plait</h1>
            <a class="start" data-hover="Jouer !">Jouer !</a>
            <img src="avatar-creator/UI/background-home.png" alt="Avatar creator" class="background-home">
        </section>
        <div class="game">
            <?php include 'avatar-creator/section/Information.php'?>
            <div class="grid-2">
                <div id="Left-Section">
                    <?php include 'avatar-creator/result.php'?>
                    <p class="version"><?=$version?></p>
                </div>
                <div id="Right-Section">
                    <div id="Top-right-Section">
                        <div id="Categories">
                            <nav class="nav-container">
                                <div class="scroll-arrow left-arrow"> <img src="avatar-creator/UI/Icon/left-arrow.svg"
                                        alt="arrow-left">

                                </div>
                                <div class="scroll-container">
                                    <ul>
                                        <?php generateNavigation(); ?>
                                    </ul>
                                </div>
                                <div class="scroll-arrow right-arrow">
                                    <img src="avatar-creator/UI/Icon/right-arrow.svg" alt="arrow-right">
                                </div>
                            </nav>

                        </div>
                        <button id="Download">
                <i class="fa fa-download" aria-hidden="true"></i> <span>Mon Avatar est prêt !</span></button>
                    </div>
                    <?php 
                    include 'avatar-creator/section/Morpho.php';
                    include 'avatar-creator/section/Background.php';
                    foreach ($sections as $section) {
                        simpleSection($section);
                    }
                ?>
                </div>
            </div>
        </div>
    </main>
</body>

<!--JS-->
<script src="js/download.js"></script>
<script src="js/reset.js"></script>
<script src="js/global.js"></script>
<script src="js/random.js"></script>
<script src="js/navigation.js"></script>


</html>