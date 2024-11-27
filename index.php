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

            <li class="menu-item">
                <button class="menu-button random-btn"><i class="fas fa-dice"></i>Aléatoire</button>
            </li>
            <li class="menu-item"><button class="menu-button delete-btn">

                    <i class="fa fa-trash"></i>
                    Corbeille</button>
            </li>

            <li class="menu-item">
                <button class="menu-button information-btn"><i class="fas fa-info"></i>Informations</button>
            </li>
        </ul>
    </nav>
    <header>
        <nav id="sidebar">
            <button class="btn option" id="Random">
                <i class="fas fa-dice"></i>
                <span>Aléatoire</span>
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
            <h2>Jeu de création d'avatar en ligne</h2>
            <a class="start" data-hover="Créer !">Créer !</a>
            <img src="images/UI/background-home.png" alt="Avatar creator" class="background-home">
        </section>

        <div class="grid-2">
            <div id="Left-Section">
                <section class="image-result">
                    <div class="result">
                        <canvas id="Result_final" width="1000" height="1000"></canvas>
                    </div>
                </section>
                <p class="version"><?=$version?></p>
            </div>
            <div id="Right-Section">
                <div id="Top-right-Section">
                    <div id="Categories">
                        <nav class="nav-container">
                            <div class="scroll-arrow left-arrow"> <img src="images/UI/Icon/left-arrow.svg"
                                    alt="arrow-left">

                            </div>
                            <div class="scroll-container">
                                <ul>
                                    <?php generateNavigation(); ?>
                                </ul>
                            </div>
                            <div class="scroll-arrow right-arrow">
                                <img src="images/UI/Icon/right-arrow.svg" alt="arrow-right">
                            </div>
                        </nav>

                    </div>
                    <button id="Download">
                        <i class="fa fa-download" aria-hidden="true"></i> <span>Mon Avatar est prêt !</span></button>
                </div>
                <?php 
                    foreach ($sections as $section) {
                        simpleSection($section);
                    }
                ?>
            </div>
        </div>
        </div>
    </main>
    <footer>
        <div class="modal-information">

            <div class="modal-content-information container">
                <div class="close-modal">&times</div>
                <h2>Informations</h2>
                <h3>Présentations</h3>
                <p>Le site est en cours de développement, il est donc possible que certaines fonctionnalités ne soient
                    pas
                    encore disponibles.</p>
                <p>
                    PinkNose.me est un créateur d'Avatar où les possibilités sont infinies. Dans ce projet il est
                    possible de
                    créer un avatar de toutes pièces en choisissant la couleur de cheveux, les vêtements et également
                    des
                    costumes. Une fois que votre avatar est prêt vous pouvez le télécharger. Il est également possible
                    de
                    changer sa morphology et de choisir aléatoirement sa tenue et son apparence. <br><br>

                    Je développe ce projet sur mon temps libre depuis environ 2 ans. Le langage PHP est également
                    utilisé afin
                    d'automatiser certaines actions comme par
                    exemple faciliter l’ajout de nouveau contenu en ciblant le répertoire désiré.<br>
                    Plusieurs versions sont sorties depuis le début du projet et à chaque fois l'optimisation afin de
                    permettre
                    une lecture simple du code a été effectuée.<br><br>

                    Une documentation sera bientôt fournie pour permettre à tous de pouvoir créer son propre jeu.
                </p>
                <ul class="nav nav-pills info-pills">

                    <li>
                        <a href="https://www.instagram.com/pinknose.me/" target="_blank"
                            title="lien vers instagram"><img src="images/UI/Icon/icon_instagram.svg"
                                alt="Icon instagram"> Compte
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://vincent-bod.art" target="_blank" title="lien mon site perso"><img
                                src="images/UI/Icon/icon_home.svg" alt="lien mon site perso"> Site personnel

                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/vincent-bdrt/Avatar-Creator" target="_blank" title="Dev du projet">
                            <img loading="lazy" src="images/UI/Icon/icon_github.svg" alt="Dev du projet">Github
                        </a>
                    </li>
                    <li>
                        <a href="#" id="Mentions" title="Mentions Légales">
                            Mentions Légales
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="modal-mentions">
            <div class="modal-content-mentions container">
                <div class="close-modal">&times</div>
                <h2>Mentions légales</h2>
                <p>
                    Le site Pinknose.me est un side-project personnel dont l'objectif est de permettre aux utilisateurs
                    de
                    générer des avatars gratuitement et de les utiliser librement sans restriction. En accédant ou en
                    utilisant ce
                    site, vous acceptez les conditions d'utilisation suivantes :
                </p>
                <br><br>
                <h3>Propriété intellectuelle :</h3>
                <p>
                    Les avatars générés par le site Pinknose.me sont gratuits et peuvent être utilisés librement sans
                    restriction. Tous les éléments du site, y compris, mais sans s'y limiter, les textes, les images,
                    les
                    graphiques, les icônes, les logos, les boutons, les logiciels, les codes et les scripts, sont la
                    propriété
                    exclusive de Pinknose.me ou et sont protégés par les lois sur la propriété intellectuelle.
                </p>
                <br><br>
                <h3>Utilisation des avatars :</h3>
                <p>
                    Les avatars générés par le site Pinknose.me peuvent être utilisés gratuitement et sans restriction.
                    Vous n'êtes pas autorisé à vendre ou à distribuer les avatars générés par
                    le site Pinknose.me sous votre propre nom ou sous une autre forme.
                </p>
                <br><br>
                <h3>Liens vers d'autres sites :</h3>
                <p>
                    Le site Pinknose.me peut contenir des liens vers d'autres sites web. Nous n'avons aucun contrôle sur
                    le
                    contenu, les politiques de confidentialité ou les pratiques de ces sites et déclinons toute
                    responsabilité
                    à leur égard.
                </p>
                <br><br>
                <h3>Modification des conditions d'utilisation :</h3>
                <p>
                    Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment sans préavis. En
                    continuant à utiliser le site Pinknose.me, vous acceptez d'être lié par les conditions d'utilisation
                    modifiées.
                </p>
                <br><br>
                <h3>Loi applicable :</h3>
                <p>Les présentes conditions d'utilisation sont régies par les lois de France</p>
                <br><br>
                <h3>Contact :</h3>
                <p>
                    Si vous avez des questions ou des préoccupations concernant ces conditions d'utilisation, veuillez
                    nous
                    contacter à me@vincent-bod.art
                </p>
            </div>
        </div>
    </footer>
</body>

<!--JS-->
<script src="js/download.js"></script>
<script src="js/reset.js"></script>
<script src="js/global.js"></script>
<script src="js/random.js"></script>
<script src="js/navigation.js"></script>


</html>