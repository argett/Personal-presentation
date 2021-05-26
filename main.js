'use strict'

var projectsInfo = {
  M1_Pa8: {
    title: 'Projet à 8',
    description: "Ce projet à 8 qui s'est déroulé sur 1 an et dont j'avais pour rôle chef de projet a consisté innover ou améliorer une chose existante. Nous avons choisi de developper un site pour animaux en language ELM disponible sur <a href='https://petopia-app.netlify.app/fr' style='color: rgb(0, 200, 200);'>ici</a> (site non fini). Notre but était de créer un site réunissant plusieurs fonctionnalités existantes sur d'autres sites mais en les centralisant sur le nôtre, tout en créant un site plus facile d'utilisation et avec une meilleur expérience utilisateur générale. En plus du rôle de chef de projet, j'avais pour rôle celui de développeur. Tout au long de notre projet, nous avons utilisé la mathode de management AGILE. Vous trouverez sur le repo Gitlab toutes les informations sur ce projet, et notemment le backlog. Pour accéder au repo, il suffit de cliquer sur l'iconne de Gitlab en haut à droite du site."
  },
  M1_Parking: {
    title: "Analyse d'image",
    description: "Ce projet à été réalisé en trinôme en C++ sous OpenCV. Le but est, à partir d'une image de parking simple, l'analyser automatiquement afin de determiner le nombre de places prises et libres. Nous avons utilisé OpenCV pour la détection de lignes blanches. Nous avons donc créé le reste du programme et notemment l'algorithmie du programme. Nous avons donc pu détecter les places puis si une voiture ou une moto se situait dessus ou non. Ce projet fonctionne avec une seule grande ligne de parking sur laquelle sont alignées des voitures. Pour accéder au repo Github cliquez <a href='https://github.com/argett/Image-Analysis---Parking' style='color: rgb(0, 200, 200);'>ici</a>"

  },
  M1_Robot: {
    title: 'Robot manipulateur',
    description: "Ce projet à été réalisé en binôme en C# sous Unity3D. Ce projet consistait à appliquer les techniques de navigation, selection et manipulation à un robot type d'usine muni d'un bras manipulateur avec une base mouvante. Le modèle 3D et l'agencement des pièces en fonction des mouvements du bras ont été fournis par le professeur. Ce robot peut donc se déplacer à proximité de petits cubes qu'il peut saisir et déplacer d'un point A à un point B."
  },
  M1_RayTracing: {
    title: 'Ray Tracing',
    description: "Ce projet à été réalisé en binôme en C++ sur une VM afin de profiter de la parallélisation des calculs sur le GPU. Nous avons créé une méthode de capture d'écran d'une scène 3D basé sur la technique du Ray Tracing. Les scènes sont gérées par un programme fournis. Nous pouvons composer la scène de formes géometriques de bases (sphères, cubes, pyramides...) selon notre volonté. Le rendu se faisait comme une capture d'écran de cette scène dont le résultat était enregistré en tant qu'image. Nous avons donc réalisé toute l'algorithmie de la technique du RayTracing."
  },
  M1_Fusee: {
    title: 'Construction et lancement de fusée ',
    description: "Ce projet à été réalisé en binôme en C# sous Unity3D. Il consiste à créer dans un environnement 3D, un serious-game permettant au joueur de créer sa fusée personnalisée avec des composants pré-crées. Le joueur a donc à sa disposition plusieurs coiffes, réservoires de carburant et moteurs pour faire son choix. Il a également la possibilité de rajouter jusqu'à deux étages supplémentaires. Dans un second temps, le joueur doit faire décoller, si bien construite, sa fusée. Le but étant de la faire décoller et aller le plus haut possible. Nous avons rajouté quelques interractions supplémentaires afin de rendre le serious game plus vivant et interractif pour le joueur."
  },
  M1_Chat: {
    title: 'Application de chat',
    description: "Projet solo réalisé en C#. Création d'une simulation web en format console avec une relation client/serveur et une communication via des requêtes. Le programme est géré par des threads et une sauvegarde sous forme de fichier .out est disponible. Le but était sur ce support crée, d'y intégré une application de chat toujours ne mode console permettant à des utilisateurs de communiquer via des messages privés et via des forums publiques qu'il peut lui-même créer. Chaque utilisateur dispose donc de son propre compte et de ses propres amis. Pour accéder au repo Github cliquez <a href='https://github.com/argett/Chatting-app' style='color: rgb(0, 200, 200);'>ici</a>"
  },
  M1_Covid: {
    title: 'Détection de COVID',
    description: "Projet en duo réalisé en python via Spyder. Le but dans ce projet est, à partir d'une large banque d'images, de les analyser pour en faire resortir des caracteristiques. Nous avons donc choisi des images médicales de poumons sains et atteints par le covid en tomographie. Notre but étant de réaliser un traitement d'imagerie par dessus afin de pouvoir differencier très facilement et rapidement en mettant en avant la présence de COVID, des poumons sains de poumons possédant le COVID. Pour accéder au code cliquez <a href='https://colab.research.google.com/drive/1R8OSFqdE46QUplDLWrTSZBdjN4-KNZqh?usp=sharing' style='color: rgb(0, 200, 200);'>ici</a>"
  },
  M1_MD_Learning: {
    title: 'Machine et Deep Learning',
    description: "Projet réalisé à 4 et codé en python. Il est séparé en 2 parties distinctes. Premièrement, trier des nombres manuscrits en images de 25x25 pixels en noir et blanc automatiquement en Machine Learning, puis deuxièmement différencier des images de chiens et de chats en couleur en Deep Learning. Le but secondaire était de réaliser l'IA la plus rapide possible en terme d'analyse et non pas une qui soit juste fonctionnelle."
  },
  L3_NewsAdventure: {
    title: 'Jeux mobile sous Unity',
    description: "Projet réalisé à 4 en C# sous Unity3D. Le but du projet est de proposer des mini-jeux liés à une actualite jouable sur mobile. Et cela pour faire découvrir une actualité de façon ludique. Nous avons donc utilisé Unity car le logiciel possède le double intérêt de pouvoir réaliser un jeux simplement en plus de pouvoir le transférer automatiquement vers un mobile sans avoir à passer par une application tier tel qu'Electron. Nous avons au final créé 2 mini-jeux en 2D mais nous n'avons pas uploadé notre application sur le Playstore."
  },
  L3_Psy: {
    title: 'Gestion de clients',
    description: "Projet réalisé en solo en Java. La problématique était de créer un programme de gestion d'emploi du temps et de rendez-vous pour avec une interface afin qu'une psychologue puisse l'utiliser et accéder facilement à son emploi du temps ainsi qu'à chacun de ses patients. Le programme devait pouvoir présenter chaque fiche client avec entre autre une prise de notes, des remarques, un traitement potentiel, un résumé des rendez-vous etc..."
  },
  L3_Graphs: {
    title: 'Analyse de graphs',
    description: "Projet réalisé en solo en Java. L'objectif est, à partir d'un fichier .txt comportant des noeuds et des vecteurs d'un graph, réaliser plusieurs opérations mathematiques. Comme repérer la branche la plus courte, le graph est-il optimisé ? si non le faire, trouver les noeuds innutiles et répartir ses entrées, etc... Ce projet a donc un aspect très mathématique."
  },
  L3_Garage: {
    title: "Gestion d'emploi du temps",
    description: "Projet réalisé en solo en Java. L'objectif était de concevoir un outil de gestion d'emploi du temps et de prises de rendez-vous complexes pour un garagiste (avec l'horaire, les pièces, le technicien attribué, la voiture, les outils, le devis, etc...). La manager, le technicien et le client ont leur propre interface présentant pour chacuns d'eux leurs informations utiles et nécéssaires."
  },
  L2_BwarioKart: {
    title: 'Jeux de gestion',
    description: "Projet réalisé en trinôme et codé en C avec SDL. C'est un jeu de gestion où le joueur gère des karting louables. Il dispose sur une carte d'une ville de points d'emplacements vide sur lesquels le joueur peut créer des points de récupération de véhicule avec des places supplémentaires pour augmenter le nombre de karts ou des garages pour réparer ses véhicules. Le joueur peut également acheter de nouveaux véhicules, ordonner une réparation sur un véhicule précis et dispose de nombreuses améliorations afin que le véhicule dure plus longtemps, soit plus fiable, meilleur, etc. Le but du jeux étant de gagner le plus d'argent en augmentant le nombre de location. Notre jeux possède sa propre interface graphique, luncher, écran de fin...Le principae étant d'utiliser un maximum la structure de donnée 'Linked List' pour apprendre à manipuler un grands nombres de pointeurs et optimiser un code."
  },
  L2_ObjectiveEquilibrium: {
    title: 'Jeux de société adapté aux non-voyants',
    description: "Projet à 5 sur un semestre en entier. Nous avons réalisé un jeu de société jouable entre 3 et 5 joueurs. Il se joue avec des cartes et des pions. L'objectif de ce jeux de société était de le concevoir tel qu'il soit jouable par des personnes non-voyantes. Nous avons réalisé les règles, les cartes, les designs ainsi qu'un site internet en HTML/CSS/JS afin de présenter l'équipe et mettre en avant notre produit."
  },
  Other_This: {
    title: 'Ce projet',
    description: "J'ai réalisé cet espace immersif disponible sur internet, sur mobile ainsi que via un casque VR lors de mon stage de M1 au Cnam (Conservatoire National des Arts et Métiers). J'ai utilisé le framework 'Aframe' pour construire ce musée de mes projets scolaires et non scolaires. <br><br><p style='text-align: center;'><strong>Crédits :</strong></p><p style='text-align: left; font-size=0.8em'>sons sur https://freesound.org/<br>textures sur https://www.swtexture.com/ <br>modèles 3D sur https://sketchfab.com/<br><br> H-IIA Rocket (https://sketchfab.com/3d-models/h-iia-rocket-99a86c831c2a4b24bdd42365e382427e) by MarioK (https://sketchfab.com/marioklos) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)<br>Lowpoly - Car (https://skfb.ly/6vZyo) by david.campuzano is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)[CC0] <br>Newspaper Stack - Ready to Unity HDRP (https://skfb.ly/6SAvK) by karlwirbelwind is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/) <br>The Matrix Red Chesterfield Chair (https://skfb.ly/6G6UP) by Rodrigo Villani is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).<br>P3 - Petersen Family (https://skfb.ly/o6rX8) by mathgrrl is licensed under CC Attribution-NonCommercial-ShareAlike (http://creativecommons.org/licenses/by-nc-sa/4.0/).<br>Go Kart (https://skfb.ly/Du9G) by GRIP420 is licensed under CC Attribution-NonCommercial-NoDerivs (http://creativecommons.org/licenses/by-nc-nd/4.0/).<br>Dice (https://skfb.ly/6RtsC) by tnRaro is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).<br>PB120 Wrenchs Low (https://skfb.ly/6wV89) by Makovetkyi Volodymyr is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>"
  },
  Other_Dimension: {
    title: 'Pokémon Dimension',
    description: "Pokémon Dimension est un Fan-game (jeux réalisé par et pour les fans d'une license en particulier) Pokémon maintenant stoppé par son createur 'Zenos'. Pendant 3 ans, j'ai travaillé principalement en tant que mappeur sur ce jeux en 2 dimmensions réalisé à l'aide du logiciel PDSK. J'ai pour ma part utilisé Tiled. L'équipe est composée uniquement de fan ne se connaissant pas dans la vie réèlle ayant entre 16 et 25 ans. Tous les échanges que ce soit d'idées, de conception ou pour discuter se faisaient via le logiciel Discord. Ce fut une innitiative se basant purement sur le volontariat et la bonne volontée des developpeurs. C'est donc un projet non-scolaire."
  }
}

var putBack = function () {
  document.querySelector('#container').style.zIndex = '-2'
  document.getElementsByTagName('a-scene')[0].style.zIndex = 'auto'
  document.querySelector('#camera').setAttribute('wasd-controls-enabled', true)
}

var putFront = function (evt) {
  document.getElementsByTagName('a-scene')[0].style.zIndex = '-2'
  document.querySelector('#container').style.zIndex = 'auto'

  var selectedProject = projectsInfo[evt.currentTarget.id]
  var titre = document.getElementById('title')
  var description = document.getElementById('projectDescription')
  var pc = document.getElementById('pc')
  var mobile = document.getElementById('mobile')
  var linkedin = document.getElementById('linkedin')
  var button = document.getElementById('start_experience')

  // remove first "
  var title = JSON.stringify(selectedProject.title).substring(1)
  var des = JSON.stringify(selectedProject.description).substring(1)
  // remove last "
  var title = title.slice(0, -1)
  var des = des.slice(0, -1)

  titre.innerHTML = title
  description.innerHTML = des
  pc.innerHTML = ''
  mobile.innerHTML = ''
  linkedin.innerHTML = ''
  button.innerHTML = 'Fermer'
  document.querySelector('#camera').setAttribute('wasd-controls-enabled', false)
}

var startExperienteBtn = document.querySelector('#start_experience')
startExperienteBtn.addEventListener('click', putBack)

var infoBubble = document.querySelectorAll('.menu-button')
for (var i = 0; i < infoBubble.length; ++i) {
  infoBubble[i].addEventListener('click', putFront)
}
