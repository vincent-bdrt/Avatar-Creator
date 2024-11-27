<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Créer un jeu de création d'avatar - Avatar Creator - TUTORIEL FACILE</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/prism.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header>
        <section class="top-header">
            <div class="container">
                <p>La documentation est en cours de redaction, certaines informations sont manquantes</p>
                <div class="darkmode"></div>
                <div class="swith-langue"></div>
            </div>
        </section>
        <div class="container">
            <h1>Créer un jeu de création d'avatar en HTML, CSS et JavaScript</h1>
            <h2>TUTORIEL FACILE</h2>
        </div>
    </header>
    <main>
        <section>
            <article>
                <div class="article-content">


                    <h2 id="#Introduction">Introduction</h2>
                    <p>Bienvenue dans ce tutoriel où nous allons apprendre à créer des avatars en utilisant JavaScript,
                        étape par étape comment construire un jeu d'avatar interactif.
                        <br>
                        <br>
                        Nous allons couvrir les bases du développement web, en utilisant JavaScript pour la logique,
                        HTML pour la structure de la page, et CSS pour le style. Vous apprendrez à permettre aux
                        utilisateurs de personnaliser leurs avatars avec différentes options pour créer des personnages
                        uniques.
                    </p>

                    <hr>

                    <h2 id="Prerequis">Prérequis</h2>
                    <p>
                        Avant de plonger dans la création de votre jeu d'avatar en JavaScript, HTML et CSS,
                        assurez-vous d'avoir les éléments suivants en place :
                    </p>
                    <h3 id="editeur">
                        Éditeur de code
                    </h3>
                    <p>
                        Assurez-vous d'avoir un éditeur de code installé sur votre machine. Nous recommandons
                        l'utilisation de Visual Studio Code, un éditeur puissant et convivial largement utilisé par les
                        développeurs web. Si vous n'avez pas déjà installé Visual Studio Code, vous pouvez le
                        télécharger à partir du <a href="https://code.visualstudio.com/Download" target="_blank">site
                            officiel</a>.
                    </p>
                    <h3 id="notions">
                        Notions de base en HTML, CSS et JavaScript
                    </h3>

                    <p>
                        Ce tutoriel suppose une compréhension de base des langages de balisage HTML, des feuilles de
                        style CSS pour la mise en forme, et du langage de programmation JavaScript pour la logique
                        dynamique. Si vous n'êtes pas familier avec ces concepts, nous <strong>vous recommandons de
                            passer en
                            revue les bases avant de poursuivre</strong>. Il existe de nombreuses ressources en ligne
                        pour vous aider
                        à acquérir ces compétences, et une connaissance préalable facilitera grandement votre expérience
                        avec ce tutoriel.
                    </p>
                    <h3 id="Elements">
                        Éléments de l'avatar
                    </h3>
                    <p>
                        Préparez au moins 4 à 5 formes pour chaque catégorie d'avatar que vous souhaitez inclure
                        (coiffures, accessoires, vêtements, etc.). Assurez-vous que tous les éléments sont au format PNG
                        pour prendre en charge la transparence. Uniformisez la taille de chaque élément à 1000x1000
                        pixels pour maintenir la cohérence visuelle.
                    </p>

                    <p>
                        En résumé, assurez-vous d'avoir un éditeur de code prêt à l'emploi et une compréhension
                        préalable des concepts de base en HTML, CSS et JavaScript. Avec ces prérequis en place, vous
                        êtes prêt à plonger dans le processus de création de votre propre jeu d'avatar interactif !
                    </p>
                    <p>
                        Pour faciliter votre expérience dans la création du jeu d'avatar en JavaScript, HTML et CSS, je
                        mets à votre disposition un kit de démarrage. Ce kit comprend les documents de base, une
                        structure de dossier prête à l'emploi, ainsi que des éléments visuels d'exemple pour chaque
                        catégorie d'avatar (coiffures, accessoires, vêtements, etc.). <br /> Ce kit de démarrage vous
                        permettra de gagner du temps en vous fournissant une base solide pour commencer votre projet
                        sans avoir à créer chaque élément visuel dès le départ.
                    </p>
                    <a href="">Télécharger le kit de démarrage </a>
                    <hr>

                    <h2 id="Architectures">Architectures des dossiers</h2>
                    <p>
                        Avant de commencer à coder, nous allons d'abord créer une structure de dossiers pour notre jeu
                        d'avatar. Cette structure de dossiers nous aidera à organiser notre code et à maintenir une
                        base de code propre et modulaire. Premierement il faut créer un dossier pour notre projet et
                        nous l'appelerons
                        avatar-creator. Dans ce dossier, nous allons créer trois fichier : index.html, style.css et
                        global.js.
                        Nous allons également créer un dossier sections qui regrouperas nos images.
                        <br>
                        <br>
                        Pour faciliter la compréhension de la structure de notre dossier, nous allons créer des
                        sous-dossiers dans le dossier avatar-creator pour chaque catégorie d'avatar. Dans notre cas,
                        nous
                        aurons des sous-dossiers pour les coiffures, les accessoires, les vêtements, les yeux, les
                        sourcils, les bouches, les nez et les oreilles. Nous aurons également un sous-dossier pour les
                        images de base, qui contiendra les images de base pour les avatars masculins et féminins.
                        <br>
                        <br>
                        Notre structure de dossiers ressemblera à ceci :
                    <pre class="tree">
📦avatar-creator
 ┣ 📂sections
 ┃ ┣ 📂Eyes
 ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┗ 📜(...).png
 ┃ ┣ 📂Hair 
 ┃ ┃ ┣ 📂1
 ┃ ┃ ┃ ┣ 📜black.png
 ┃ ┃ ┃ ┣ 📜darkbrown.png
 ┃ ┃ ┃ ┣ 📜brown.png
 ┃ ┃ ┃ ┗ 📜(...).png
 ┃ ┃ ┣ 📂2
 ┃ ┃ ┣ 📂3
 ┃ ┃ ┗ 📂(...)
 ┃ ┣ 📂Mouth
 ┃ ┣ 📂Nose
 ┃ ┣ 📂Skin
 ┃ ┃ ┣ 📂men
 ┃ ┃ ┗ 📂women
 ┃ ┗ 📂Top 
 ┃ ┃ ┣ 📂men
 ┃ ┃ ┃ ┣ 📂1
 ┃ ┃ ┃ ┃ ┣ 📜black.png
 ┃ ┃ ┃ ┃ ┣ 📜grey.png
 ┃ ┃ ┃ ┃ ┣ 📜white.png
 ┃ ┃ ┃ ┃ ┗ 📜(...).png
 ┃ ┃ ┃ ┣ 📂2
 ┃ ┃ ┃ ┣ 📂3
 ┃ ┃ ┃ ┗ 📂(...)
 ┃ ┃ ┗ 📂women
 ┣ 📂UI
 ┣ 📜global.js
 ┣ 📜index.html
 ┣ 📜reset.css
 ┗ 📜style.css
                        </pre>
                    En regle général on utilise des noms de dossiers en anglais. Cela permet de faciliter la
                    compréhension du code par les autres développeurs. <br>
                    <br>
                    Nous allons également créer un fichier reset.css qui contiendra
                    les styles de réinitialisation de notre page.
                    <br><br>
                    Le dossier UI contiendra les éléments de l'interface utilisateur, tels que des icones ou des
                    images. <br>

                    Pour ce qui est des sections, on retrouve la même structure de dossiers. Chaque section
                    [nom de la section] avec une majuscule puis [option] puis [couleur.png/variation.png]. <br>
                    <br>


                    </p>


                    <h2 id="HTML">
                        Étape 1 : Créer un fichier HTML
                    </h2>
                    <p>
                        La première étape de la création de votre jeu d'avatar consiste à créer un fichier HTML. C'est
                        dans ce fichier que nous définirons la structure de la page et que nous inclurons les éléments
                        nécessaires à l'interaction avec l'utilisateur. Pour commencer, ouvrez le fichier index.html.
                    <div class="code">
                        <div class="informations">
                            <span class="HTML language">HTML</span>
                            <span class="file">index.html</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;mesta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Creation d'avatar&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;
                    </code>
                </pre>
                    </div>
                    </p>

                    <hr>
                    <p>
                        Pour construire la base de notre jeu d'avatar, nous allons diviser notre page en deux sections
                        principales : une section pour afficher le résultat final de l'avatar personnalisé et une
                        section pour la sélection des différentes options. De plus, nous inclurons un en-tête (header)
                        qui contiendra la navigation et un bouton de téléchargement.
                    <div class="code">
                        <div class="informations">
                            <span class="HTML language">HTML</span>
                            <span class="file">index.html</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-html">
&lt;body&gt;
    &lt;div class="grid-2"&gt;
        &lt;div id="leftSection"&gt;
            &lt;div class="result"&gt;
                &lt;canvas id="resultFinal" width="1000" height="1000"&gt;&lt;/canvas&gt;
                &lt;img src="sections/Skin/men/1.png" alt="Avatar" id="resultSkin"&gt;
                &lt;img src="sections/Hair/1/black.png" alt="Avatar" id="resultHair"&gt;
                &lt;img src="sections/Eyes/1.png" alt="Avatar" id="resultEyes"&gt;
                &lt;img src="sections/Mouth/1.png" alt="Avatar" id="resultMouth"&gt;
                &lt;img src="sections/Nose/1.png" alt="Avatar" id="resultNose"&gt;
                &lt;img src="sections/Top/men/1/red.png" alt="Avatar" id="resultTop"&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div id="rightSection"&gt;
            &lt;header&gt;
                &lt;!-- Navigation des différentes sections--&gt;
            &lt;/header&gt;
            &lt;main&gt;
                &lt;!--Sections--&gt;
            &lt;/main&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
                    </code>
                </pre>
                    </div>
                    <p> Dans la section de gauche, nous allons inclure un canvas pour afficher le résultat final de
                        l'avatar personnalisé. Nous allons également inclure des images pour chaque option
                        d'avatar. Ces images seront utilisées pour afficher les options sélectionnées par
                        l'utilisateur. Ces images sont les choix par défaut de l'utilisateur.
                        Lorsque l'utilisateur sélectionne une option, nous allons mettre à jour l'image. Par
                        exemple, si l'utilisateur sélectionne une option de cheveux, nous allons mettre à jour
                        l'image des cheveux pour afficher l'option sélectionnée.


                    </p>
                    <div class="note">
                        Avant de plonger dans la complexité du développement de votre jeu d'avatar, nous allons
                        commencer par travailler avec des éléments simples. Cette approche nous permettra de bien
                        comprendre les bases et de construire progressivement vers des concepts plus avancés.

                        Dans cette première étape, nous allons créer des éléments de base pour l'affichage du
                        résultat
                        final de l'avatar et la sélection des options. Au fil du tutoriel, nous évoluerons vers des
                        méthodes plus avancées pour rendre votre code plus modulaire, maintenable et extensible.
                    </div>
                    </p>
                    <hr>
                    <h3>Navigation</h3>
                    <p>
                        Pour permettre aux utilisateurs de naviguer entre les différentes options d'avatar, nous allons
                        créer des boutons de navigation qui correspondent à des catégories spécifiques. Ces boutons
                        permettront de changer dynamiquement le contenu de la section de sélection d'options.
                    </p>
                    <p>
                    <div class="code">
                        <div class="informations">
                            <span class="HTML language">HTML</span>
                            <span class="file">index.html</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-html">
&lt;!--Header de la section de droite--&gt;
&lt;header&gt;
    &lt;nav id="categories"&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;button type="button" data-target="Skin" class="active"&gt;Peau&lt;/button&gt;&lt;/li&gt;
            &lt;li&gt;&lt;button type="button" data-target="Mouth"&gt;Bouche&lt;/button&gt;&lt;/li&gt;
            &lt;li&gt;&lt;button type="button" data-target="Nose"&gt;Nez&lt;/button&gt;&lt;/li&gt;
            &lt;li&gt;&lt;button type="button" data-target="Eyes"&gt;Regard&lt;/button&gt;&lt;/li&gt;
            &lt;li&gt;&lt;button type="button" data-target="Hair"&gt;Cheveux&lt;/button&gt;&lt;/li&gt;
            &lt;li&gt;&lt;button type="button" data-target="Top"&gt;Vetement&lt;/button&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
&lt;/header&gt;
                            </code>
                            </pre>
                    </div>
                    </p>
                    <p>
                        Nous allons également inclure un bouton de téléchargement dans la section de la peau pour
                        permettre aux
                        utilisateurs de télécharger leur avatar personnalisé.
                    </p>
                    <div class="code">
                        <div class="informations">
                            <span class="HTML language">HTML</span>
                            <span class="file">index.html</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-html">
&lt;!--Bouton de téléchargement--&gt;                     
&lt;button id="download"&gt;
    Mon Avatar est prêt !<br />
&lt;/button&gt;                                
                            </code>
                            </pre>
                    </div>

                    <hr>
                    <h3>Sections</h3>
                    <p>
                        Maintenant que nous avons créé les boutons de navigation, nous allons créer les sections
                        correspondantes pour afficher les options d'avatar. Nous allons créer une section pour chaque
                        catégorie d'avatar et inclure les options correspondantes dans chaque section.

                        Chaque section est composée d'une liste d'images qui représentent les options d'avatar. Chaque
                        image est enveloppée dans une balise li et possède un attribut data-element qui correspond à
                        l'élément d'avatar. Par exemple, la première image de la section de la peau aura un attribut
                        data-element de 1, la deuxième image aura un attribut data-element de 2, et ainsi de suite.
                        <br>
                        <br>
                        Nous utiliserons ces attributs data-element pour identifier les options d'avatar et les
                        afficher dans la section de résultat final.<br>

                        Des options peuvent exister dans plusieurs catégories d'avatar. Par exemple, la peau peut
                        être utilisée pour les avatars masculins et féminins. Pour éviter les doublons, nous allons
                        créer une seule section pour la peau et l'inclure dans les deux catégories d'avatar.
                        <br>
                        On peut également ajouter une couleur à certaines options. Par exemple, les cheveux peuvent
                        avoir une couleur. Pour permettre aux utilisateurs de choisir une couleur, nous allons créer
                        une section pour les couleurs et l'inclure dans les catégories d'avatar qui ont des options
                        de couleur.
                        <br>
                        De la meme façon, certaine option peuvent être utilisé dans plusieurs catégories d'avatar.
                        Les vetements peuvent être utilisé pour les avatars masculins et féminins et avoir une couleur.
                    </p>
                    <!--Section sans option-->
                    <div class="accordion">
                        <div class="accordion-title">
                            <h4>Section sans options</h4>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-contain">
                                <p>
                                    Nous allons commencer par créer une section pour la bouche. Cette section contiendra
                                    aucune
                                    option pour le moment.
                                </p>
                                <div class="code">
                                    <div class="informations">
                                        <span class="HTML language">HTML</span>
                                        <span class="file">index.html</span>
                                        <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                                    </div>
                                    <pre>
                                <code class="language-html">
&lt;section id="Mouth"&gt;
    &lt;ul class="vignettes"&gt;
        &lt;li class="vignette active" data-element="1"&gt;&lt;img src="sections/Mouth/1.png" alt="Mouth - 1"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="2"&gt;&lt;img src="sections/Mouth/2.png" alt="Mouth - 2"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="3"&gt;&lt;img src="sections/Mouth/3.png" alt="Mouth - 3"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="4"&gt;&lt;img src="sections/Mouth/4.png" alt="Mouth - 4"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="5"&gt;&lt;img src="sections/Mouth/5.png" alt="Mouth - 5"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="6"&gt;&lt;img src="sections/Mouth/6.png" alt="Mouth - 6"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="7"&gt;&lt;img src="sections/Mouth/7.png" alt="Mouth - 7"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="8"&gt;&lt;img src="sections/Mouth/8.png" alt="Mouth - 8"&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;
                                </code>
                            </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Section avec option de genre-->
                    <div class="accordion">
                        <div class="accordion-title">
                            <h4>Section pour definir le genre</h4>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-contain">
                                <p>
                                    Ensuite, nous allons créer une section pour la peau. Cette section contiendra
                                    des options de
                                    couleur pour
                                    la peau et des options de genre pour les avatars masculins et féminins.

                                    Cette option est importante car elle permettra de determiner pour l'ensemble du
                                    jeu si l'utilisateur est un homme ou une femme.

                                    Cette option se comporte comme pour le choix des couleurs.

                                    J'initialise la section avec la class .active pour que ça soit la section visible au
                                    lancement du jeu.


                                </p>
                                <div class="code">
                                    <div class="informations">
                                        <span class="HTML language">HTML</span>
                                        <span class="file">index.html</span>
                                        <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                                    </div>
                                    <pre>
                                <code class="language-html">
&lt;section id="Skin" class="active"&gt;
    &lt;ul class="vignettes"&gt;
        &lt;li class="vignette active" data-element="men"&gt;&lt;img src="sections/Skin/men/1.png" alt="Skin - men"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="women"&gt;&lt;img src="sections/Skin/women/1.png" alt="Skin - women"&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="colors"><br />
        &lt;li class="color active" data-color="1" style="background-color: #eed8c5;">&lt;/li&gt;
        &lt;li class="color" data-color="2" style="background-color: #d1b39a;">&lt;/li&gt;
        &lt;li class="color" data-color="3" style="background-color: #bd9574;">&lt;/li&gt;
        &lt;li class="color" data-color="4" style="background-color: #ba875e;">&lt;/li&gt;
        &lt;li class="color" data-color="5" style="background-color: #9b6e4a;">&lt;/li&gt;
        &lt;li class="color" data-color="6" style="background-color: #775235;">&lt;/li&gt;
        &lt;li class="color" data-color="7" style="background-color: #68513f;">&lt;/li&gt;
        &lt;li class="color" data-color="8" style="background-color: #64554b;">&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;
</code>
                            </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Section avec option de couleur-->
                    <div class="accordion">
                        <div class="accordion-title">
                            <h4>Section avec option couleur</h4>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-contain">
                                <p>
                                    Ensuite, nous allons créer une section pour les cheveux. Cette section contiendra
                                    des options de couleur pour les cheveux.
                                    Par defaut, nous allons afficher la couleur noir. Cette option est importante car
                                    elle permettra de determiner pour l'ensemble du jeu la couleur de cheveux de
                                    l'utilisateur.

                                    Ce genre de section peut etre utilisés pour les yeux, les sourcils, les vetements
                                    et les accessoires.

                                </p>
                                <div class="code">
                                    <div class="informations">
                                        <span class="HTML language">HTML</span>
                                        <span class="file">index.html</span>
                                        <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                                    </div>
                                    <pre>
                                            <code class="language-html">
            &lt;section id="Hair"&gt;
                &lt;ul class="vignettes"&gt;
                    &lt;li class="vignette" data-element="1"&gt;&lt;img src="sections/Hair/1/black.png" alt="Hair - 1"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="2"&gt;&lt;img src="sections/Hair/2/black.png" alt="Hair - 2"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="3"&gt;&lt;img src="sections/Hair/3/black.png" alt="Hair - 3"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="4"&gt;&lt;img src="sections/Hair/4/black.png" alt="Hair - 4"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="5"&gt;&lt;img src="sections/Hair/5/black.png" alt="Hair - 5"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="6"&gt;&lt;img src="sections/Hair/6/black.png" alt="Hair - 6"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="7"&gt;&lt;img src="sections/Hair/7/black.png" alt="Hair - 7"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="8"&gt;&lt;img src="sections/Hair/8/black.png" alt="Hair - 8"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="9"&gt;&lt;img src="sections/Hair/9/black.png" alt="Hair - 9"&gt;&lt;/li&gt;
                    &lt;li class="vignette" data-element="10"&gt;&lt;img src="sections/Hair/10/black.png" alt="Hair - 10"&gt;&lt;/li&gt;

                &lt;/ul&gt;
                &lt;ul class="colors">
                    &lt;li class="color active" data-color="black" style="background-color: #000000;">&lt;/li&gt;
                    &lt;li class="color" data-color="darkbrown" style="background-color: #373018;">&lt;/li&gt;
                    &lt;li class="color" data-color="brown" style="background-color: #7e623e;">&lt;/li&gt;
                    &lt;li class="color" data-color="darkred" style="background-color: #a9612e;">&lt;/li&gt;
                    &lt;li class="color" data-color="ginger" style="background-color: #db792e;">&lt;/li&gt;
                    &lt;li class="color" data-color="blond" style="background-color: #dede7e;">&lt;/li&gt;
                    &lt;li class="color" data-color="gray" style="background-color: #888888;">&lt;/li&gt;
                    &lt;li class="color" data-color="white" style="background-color: #ededed;">&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/section&gt;
            </code>
                                        </pre>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!--Section avec option de genre et couleur-->
                    <div class="accordion">
                        <div class="accordion-title">
                            <h4>Section avec options genre & couleurs</h4>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-contain">
                                <p>
                                    Ensuite, nous allons créer une section pour les vêtements. Cette section contiendra
                                    des options de couleur seulement. Le choix du genre aura été réalisé en amont lors
                                    du choix de
                                    la peau.

                                </p>
                                <div class="code">
                                    <div class="informations">
                                        <span class="HTML language">HTML</span>
                                        <span class="file">index.html</span>
                                        <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                                    </div>
                                    <pre>
                                <code class="language-html">
&lt;section id="Top"&gt;
    &lt;ul class="vignettes"&gt;
        &lt;li class="vignette" data-element="1"&gt;&lt;img src="sections/Top/1/men/red.png" alt="Top - 1"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="2"&gt;&lt;img src="sections/Top/2/men/red.png" alt="Top - 2"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="3"&gt;&lt;img src="sections/Top/3/men/red.png" alt="Top - 3"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="4"&gt;&lt;img src="sections/Top/4/men/red.png" alt="Top - 4"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="5"&gt;&lt;img src="sections/Top/5/men/red.png" alt="Top - 5"&gt;&lt;/li&gt;
        &lt;li class="vignette" data-element="6"&gt;&lt;img src="sections/Top/6/men/red.png" alt="Top - 6"&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="colors">
        &lt;li class="color" data-color="black" style="background-color: #000000;">&lt;/li&gt;
        &lt;li class="color" data-color="grey" style="background-color: #888888;">&lt;/li&gt;
        &lt;li class="color" data-color="white" style="background-color: #ffffff;">&lt;/li&gt;
        &lt;li class="color active" data-color="red" style="background-color: #ff0000;">&lt;/li&gt;
        &lt;li class="color" data-color="orange" style="background-color: #ff8800;">&lt;/li&gt;
        &lt;li class="color" data-color="yellow" style="background-color: #ffff00;">&lt;/li&gt;
        &lt;li class="color" data-color="green" style="background-color: #44ff44;">&lt;/li&gt;
        &lt;li class="color" data-color="blue" style="background-color: #0000ff;">&lt;/li&gt;
        &lt;li class="color" data-color="purple" style="background-color: #aa44aa;">&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;
</code>
                            </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    Vous avez maintenant toutes les sections de votre avatar. Il ne vous reste plus qu'à les
                    styliser.
                    <br>
                    <br>
                    <h2>Style CSS</h2>
                    <p>
                        Créez un fichier CSS et ajoutez le lien vers ce fichier dans la section head de votre
                        document HTML.

                    <div class="code">
                        <div class="informations">
                            <span class="HTML language">HTML</span>
                            <span class="file">index.html</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-html">
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;mesta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Creation d'avatar&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
                    </code>
                </pre>
                    </div>

                    </p>
                    <p>
                        Nous allons commencer par réinitialiser les styles de base de notre page. Pour cela, nous
                        allons utiliser le fichier CSS de reset de Eric Meyer. Ce fichier permet de réinitialiser
                        les styles de base de votre page et d'éviter les problèmes de compatibilité entre les
                        navigateurs.
                        <br>
                        <br>
                        <a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank">Télécharger le
                            fichier CSS de reset</a>
                        <br>
                        <br>
                        Ajoutez le code suivant dans votre fichier CSS.
                    <div class="code">
                        <div class="informations">
                            <span class="HTML language">HTML</span>
                            <span class="file">index.html</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-html">
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;mesta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Creation d'avatar&lt;/title&gt;
    &lt;link rel="stylesheet" href="reset.css"&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
                    </code>
                </pre>
                    </div>
                    <div class="code">
                        <div class="informations">
                            <span class="CSS language">CSS</span>
                            <span class="file">style.css</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-css">                             
/*---GLOBAL---*/
.grid-2 {
	display: grid;
	grid-template-columns: 40% 60%;
	grid-gap: 0px;
}
#leftSection{
    background-color: #eaeaea;
    padding: 16px;
    font-size: 16px;
}
#rightSection{
    background-color: #1f1f1f;
    color: white;
    padding: 16px;
    font-size: 16px;
}

                            </code>
                        </pre>
                    </div>
                    <h3>Navigation</h3>
                    <p>
                        Nous allons commencer par styliser la navigation. Nous allons utiliser la propriété
                        display:flex pour afficher les boutons de navigation sur une ligne.
                        <br>
                        <br>
                        Ajoutez le code suivant dans votre fichier CSS.
                    <div class="code">
                        <div class="informations">
                            <span class="CSS language">CSS</span>
                            <span class="file">style.css</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-css">
/*---NAVIGATION---*/                                
header{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 16px;
}
header nav ul{
    display: flex;
    gap: 16px;
    padding: 8px;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
button{
    padding: 8px;
    border-radius: 8px;
    border: none;
    background-color: #eaeaea;
    color: black;
    cursor: pointer;
    border:solid 2px #eaeaea;
    transition: all ease-in-out 0.5s;
}
button.active,button:hover{
    background-color: #1f1f1f;
    color: white;
}
                            </code>
                        </pre>
                    </div>


                    <h3>Resultats</h3>
                    <p>
                        Afin de rendre le résultat final de l'avatar plus attrayant, nous allons ajouter une ombre et un
                        fond blanc. Nous allons également utiliser la propriété object-fit:cover pour afficher l'image
                        de
                        l'avatar en plein écran.
                        <br>
                        Ajoutez le code suivant dans votre fichier CSS.
                    </p>

                    <div class="code">
                        <div class="informations">
                            <span class="CSS language">CSS</span>
                            <span class="file">style.css</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-css">
                    /*---RESULT---*/
.result {
    overflow: hidden;
    max-width: 100%;
    position: relative;
    background-color: white;
    border-radius: 1rem;
    margin: 1rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    min-height: 80vh;
    min-width: 80vh;
}

.result:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}

.result img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    object-fit: cover;
    height: auto;
}
#resultFinal{
    display: none;
}

</code>
                        </pre>
                    </div>
                    <h3>Sections</h3>
                    <p>
                        Nous allons maintenant styliser les sections. Nous allons utiliser la propriété
                        display:grid pour afficher les vignettes sur une ligne. Nous allons également utiliser
                        la propriété grid-template-columns pour définir la largeur de chaque vignette.
                        <br>
                        <br>
                        Ajoutez le code suivant dans votre fichier CSS.
                    <div class="code">
                        <div class="informations">
                            <span class="CSS language">CSS</span>
                            <span class="file">style.css</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-css">
/*---SECTIONS---*/                           
main section{
    display: none;
}
main section.active{
    padding: 16px 0px;
    display: block;
}

/*---VIGNETTES---*/
.vignettes{
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    grid-auto-rows: max-content;
    grid-gap: 16px;
}
.vignette{
    transition: all ease-in-out 0.5s;
    transition-duration: 0.5s;
    cursor: pointer;
    transition-duration: 300ms;
    box-shadow: rgba(0,0,0,0.18) 0px 2px 4px;
    border-radius: 16px;
    position: relative;
    background-size: 100%;
    background-color: white;
    overflow: hidden;
}
.vignette:after{
    content: "";
    display: block;
    padding-bottom: 100%;
}
.vignette img{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    image-rendering: optimizequality;
}

                            </code>
                        </pre>
                    </div>
                    <p>
                        Occupons nous desormais des sections de couleurs. Nous allons utiliser la propriété
                        display:grid pour afficher les couleurs sur une ligne. Nous allons également
                        utiliser la propriété grid-template-columns pour définir la largeur de chaque
                        couleur.
                        <br>
                        <br>
                        Ajoutez le code suivant dans votre fichier CSS.
                    <div class="code">
                        <div class="informations">
                            <span class="CSS language">CSS</span>
                            <span class="file">style.css</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                            <code class="language-css">
/*---COULEURS---*/
.colors{
    background-color: white;
    padding:1rem;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.18) 0px 2px 4px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    grid-gap:8px;
    height:max-content;
    margin-top: 1rem;
}
.color{
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow:0px 0px 0px 2px rgba(0, 0, 0, .3) inset;
    transition: all ease-in-out 0.5s;
}
.color:active,.color:hover{
    box-shadow:0px 0px 0px 2px rgb(255, 255, 255) inset;
    cursor: pointer;
}
</code>
</pre>
                    </div>
                    <hr>
                    <h2>JavaScript</h2>
                    <h3>
                        Changer de categories
                    </h3>
                    <p>
                        Nous allons maintenant ajouter le code JavaScript pour changer de catégorie
                        lorsque l'utilisateur clique sur un bouton de navigation. Nous allons utiliser
                        la méthode addEventListener pour détecter le clic sur un bouton de navigation.
                        Nous allons également utiliser la méthode querySelectorAll pour sélectionner
                        tous les boutons de navigation.
                        <br>
                        <br>
                        Ajoutez le code suivant dans votre fichier JavaScript.
                    <div class="code">
                        <div class="informations">
                            <span class="JS language">JS</span>
                            <span class="file">global.js</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                                                <code class="language-js">
const navigationButtons = document.querySelectorAll('#categories button');
const sections = document.querySelectorAll('main section');
// Fonction qui permet de changer de section en cliquant sur les boutons de navigation
function switchSection() {
    navigationButtons.forEach(button => {
        button.addEventListener('click', function () {
            //Ajout de la classe active au bouton cliqué
            navigationButtons.forEach(button => {
                button.classList.remove("active");
            })
            this.classList.add("active");
            //Ajout de la classe active à la section correspondante
            const dataTarget = this.getAttribute('data-target');
            const sectionTarget = document.getElementById(dataTarget);
            sections.forEach(section => {
                section.classList.remove("active");
            })
            sectionTarget.classList.add("active");
        })
    });
}

switchSection();
</code>
</pre>
                    </div>

                    <hr>
                    <h3>Réecrire l'URL du résultat</h3>

                    <div class="code">
                        <div class="informations">
                            <span class="JS language">JS</span>
                            <span class="file">global.js</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                                                <code class="language-js">
let currentGender = "men";
let sectionsWithGender = ['Top'];
let sectionsWithColor = ['Skin','Hair','Top'];

function changeResultURL(sectionName){
    let section = document.getElementById(sectionName);
    let result = document.getElementById('result' + sectionName);
    let url;
    //On récupère la vignette active et on récupère l'attribut data-element
    let activeVignette = section.querySelector('.vignette.active');
    let dataElement = activeVignette.getAttribute('data-element');

    //Si la section est une section avec couleur, on récupère la couleur active et on récupère l'attribut data-color
    if(sectionsWithColor.includes(sectionName)){

        let activeColor = section.querySelector('.color.active');
        let dataColor = activeColor.getAttribute('data-color');
        url = "sections/" + sectionName + "/" + dataElement + "/" + dataColor + ".png";
        if (sectionsWithGender.includes(sectionName)){
            url = "sections/" + sectionName + "/" + currentGender + "/" + dataElement + "/" + dataColor + ".png";
        }
    //Sinon, on récupère l'attribut data-element de la vignette active    
    }else{
        url = "sections/" + sectionName + "/" + dataElement + ".png";
        if (sectionsWithGender.includes(sectionName)){
            url = "sections/" + sectionName + "/" + currentGender + "/" + dataElement + ".png";
        }
    }
    result.setAttribute('src', url);
}
</code>
</pre>
                    </div>
                    <p>La fonction changeResultURL permet de changer l'image du résultat final en
                        fonction de la section sélectionnée. Elle prend en paramètre le nom de la
                        section et utilise la méthode querySelector pour sélectionner la vignette
                        active. Elle utilise ensuite la méthode getAttribute pour récupérer
                        l'attribut data-element de la vignette active. Elle utilise également la
                        méthode setAttribute pour changer l'attribut src de l'image du résultat
                        final.</p>

                    <p>
                        Nous allons maintenant ajouter le code JavaScript pour changer l'image du
                        résultat final lorsque l'utilisateur sélectionne une option. Nous allons
                        utiliser la méthode addEventListener pour détecter le clic sur une vignette.
                        Nous allons également utiliser la méthode querySelectorAll pour sélectionner
                        toutes les vignettes.
                    </p>
                    <p>
                        Ajoutez le code suivant dans votre fichier JavaScript.
                    <div class="code">
                        <div class="informations">
                            <span class="JS language">JS</span>
                            <span class="file">global.js</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                                                <code class="language-js">
function changeShape() {
    //Pour chacune des sections, on récupère les vignettes et le nom de la section
    for (const section of sections) {
        let vignettes = section.querySelectorAll('.vignette');
        let sectionName = section.getAttribute('id');
        for (const vignette of vignettes) {
            vignette.addEventListener('click', function () {
                //On retire la classe active de toutes les vignettes de la section et on l'ajoute à la vignette cliquée
                for(const vignette of vignettes){
                    vignette.classList.remove("active");
                }
                this.classList.add("active");

                changeResultURL(sectionName);
            });
        }
    }
}
changeShape();
</code>
</pre>
                    </div>
                    <p>
                        Nous allons également ajouter le code JavaScript pour changer la couleur
                        de l'avatar lorsque l'utilisateur sélectionne une couleur. Nous allons
                        utiliser la méthode addEventListener pour détecter le clic sur une
                        couleur. Nous allons également utiliser la méthode querySelectorAll pour
                        sélectionner toutes les couleurs.
                    </p>
                    <div class="code">
                        <div class="informations">
                            <span class="JS language">JS</span>
                            <span class="file">global.js</span>
                            <span class="copy"><i class="fa fa-copy"></i> Copier le code </span>
                        </div>
                        <pre>
                                                <code class="language-js">
function changeColor() {
    for (const section of sections) {
        let colors = section.querySelectorAll('.color');
        let sectionName = section.getAttribute('id');
        for (const color of colors) {
            color.addEventListener('click', function () {
                //On retire la classe active de toutes les vignettes de la section et on l'ajoute à la vignette cliquée
                for(const color of colors){
                    color.classList.remove("active");
                }
                this.classList.add("active");
                changeResultURL(sectionName);
            });
        }
    }
}

changeColor();
</code>
</pre>
                    </div>





                </div>
                <aside>
                    <div>
                        <h2>Navigation</h2>
                        <nav>
                            <ul>

                                <li>
                                    <a href="#Introduction">Introduction</a>
                                </li>
                                <li>
                                    <a href="#HTML">HTML</a>
                                </li>
                                <li>
                                    <a href="#CSS">CSS</a>
                                </li>
                                <li>
                                    <a href="#JS">Javacript</a>
                                    <ul>
                                        <li>
                                            <a href="#ChangeCategories">Changer de categories</a>
                                        </li>
                                        <li>
                                            <a href="#ChangeOptions">Changer une option</a>
                                        </li>
                                        <li>
                                            <a href="#Download">Télécharger l'avatar</a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="title">Options</li>
                                <li>
                                    <a href="#Automatisation">Automatisation</a>
                                </li>
                                <li>
                                    <a href="#Sauvegarde">Sauvegarde</a>
                                </li>

                            </ul>
                        </nav>



                    </div>
                    <a href="demo">Démonstration</a>
                </aside>
            </article>
        </section>

    </main>

    <footer>
        <div class="backtotop"></div>
    </footer>
    <script src="js/prism.js"></script>
    <script src="js/documentation.js"></script>
</body>

</html>