'use strict'

var projectsInfo = {
  M1_Pa8: {
    title: 'Projet a 8',
    description: "Ce projet à 8 qui s'est déroulé sur 1 an et dont j'avais pour rôle chef de projet a consisté à developper un site pour animaux en language ELM disponible sur le lien suivant : https://petopia-app.netlify.app/fr (site non fini). Nous avons utilisé la mathode AGILE en terme de management."
  },
  M1_Parking: {
    title: "Analyse d'image",
    description: "Ce projet à été réalisé en trinôme en C sous OpenCV. Le but est, à partir d'une image de parking simple, déterminer automatiquement le nombre de places prises et libres. Nous avons donc pu détecter les places puis si une voiture ou une moto se situait dessus ou non."
  },
  M1_Robot: {
    title: 'Robot manipulateur',
    description: "Ce projet à été réalisé en binôme en C# sous Unity3D. Ce projet consistait à appliquer les techniques de navigation, selection et manipulation à un robot type d'usine muni d'un bras manipulateur avec une base mouvante. Ce robot peut déplacer des cubes d'un point A à un point B."
  },
  M1_RayTracing: {
    title: 'Ray Tracing',
    description: "Ce projet à été réalisé en binôme en C++. Nous avons créé une méthode de capture d'écran d'un scène 3D basé sur la technique du Ray Tracing. Les scenes sont composées de formes géometriques de bases (sphères, cubes, pyramides...)."
  },
  M1_Fusee: {
    title: 'Construction et lancement de fusee ',
    description: 'Ce projet à été réalisé en binôme en C# sous Unity3D. Il consiste a créer dans un environnement 3D, un serious-game permettant au joueur de créer sa fusée plus ou moins personnalisée avec des composants pré-crées (coiffe, réservoire de carburant et moteur). Dans un second temps, le joueur doit faire décoller, si elle bien construite, sa fusée.'
  },
  M1_Chat: {
    title: 'Application de chat',
    description: "Projet solo réalisé en C#. Création d'une simulation web (avec requêtes, threads, sauvegardes en guise de bdd) sur console. J'ai intégré une application de chat permettant à des utilisateurs de communiquer en temps réel via des messages privés et via des forums publiques qu'il peut lui-même créer."
  },
  M1_Covid: {
    title: 'Détection de COVID',
    description: "Projet en duo réalisé en python via Spyder. Le but dans ce projet est, à partir d'une large banque d'images, de les analyser pour en faire resortir des caracteristiques. Nous avons donc choisi des images médicales de poumons en tomographie et réalisé un traitement d'imagerie par dessus afin de pouvoir differencier très facilement et rapidement des poumons sains de poumons possédant le COVID."
  },
  M1_MD_Learning: {
    title: 'Machine et Deep Learning',
    description: "Le projet réalisé à 4 et codé en python consiste en 2 parties. Premièrement, trier des nombres manuscrits en images de 25x25 automatiquement en Machine Learning, puis deuxièmement différencier des images de chiens et de chats en Deep Learning. Le but secondaire était de réaliser une IA la plus rapide possible en terme d'analyse et non pas une qui soit juste fonctionnelle."
  },
  L3_NewsAdventure: {
    title: 'Jeux mobile sous Unity',
    description: 'Projet réalisé à 4 en C# sous Unity3D. Le but du projet est de proposer des mini-jeux liés à une actualite jouable sur mobile. Nous avons donc utilisé Unity pour réaliser une application sur pc et la transférer facilement vers un mobile. Nous avons au final crée 2 mini-jeux en 2D.'
  },
  L3_Psy: {
    title: 'Gestion de clients',
    description: "Projet réalisé en solo en Java. La problématique est de créer un programme de gestion d'emploi du temps et de rendez-vous pour qu'une psychologue puisse l'utiliser et accéder facilement à son emploi du temps ainsi qu'à chacun de ses clients. Chaque fiche client autorise entre autre la prise de notes, des remarques, etc..."
  },
  L3_Graphs: {
    title: 'Analyse de graphs',
    description: "Projet réalisé en solo en Java. L'objectif est, à partir d'un fichier .txt comportant des noeuds et des vecteurs d'un graph, réaliser plusieurs opérations mathematiques. Comme repérer la branche la plus courte, le graph est-il optimisé ? si non le faire, trouver les noeuds innutiles et répartir ses entrées, etc... Ce projet a donc un aspect très mathématique."
  },
  L3_Garage: {
    title: "Gestion d'emploi du temps",
    description: "Projet réalisé en solo en Java. L'objectif est de concevoir un outil de gestion d'emploi du temps et de prises de rendez-vous complexes pour un garagiste (avec l'horaire, les pièces, le technicien attribué, la voiture, les outils, le devis, etc...). La manager, le technicien et le client ont leur propre interface présentant pour chacuns d'eux leurs informations utiles"
  },
  L2_BwarioKart: {
    title: 'Jeux de gestion',
    description: "Projet réalisé en trinôme et codé en C. C'est un jeu de gestion où le joueur gère des voitures louables. Il dispose sur une carte d'une ville de points d'emplacements pour créer des points de récupération de véhicule ou des garages pour réparer ses véhicules. Le joueur peut également acheter de nouveaux véhicules, ordonner une réparation sur un véhjicule précis et dispose de nombreuses améliorations afin que le véhicule dure plus longtemps, soit plus fiable, meilleur, etc. Le but du jeux étant de gagner le plus d'argent en augmentant le nombre de location. Notre jeux possède sa propre interface graphique, luncher, écran de fin..."
  },
  L2_ObjectiveEquilibrium: {
    title: 'Jeux de société adapte aux non-voyants',
    description: "Projet à 5 sur un semestre en entier. Nous avons réalisé un jeu de société jouable entre 3 et 5 joueurs. Il se joue avec des cartes et de pions. L'objectif de ce jeux de société était de le concevoir tel qu'il soit jouable par des personnes non-voyantes."
  },
  Other_This: {
    title: 'Ce projet',
    description: "J'ai réalisé cet espace immersif disponible sur internet, sur mobile ainsi que via un casque VR lors de mon stage de M1 au Cnam (Conservatoire National des Arts et Métiers). J'ai utilisé le framework 'Aframe' pour construire ce musée de mes projets scolaires et non scolaires. Il a fallut environ 5 semaines pour le réaliser en entier."
  },
  Other_Dimension: {
    title: 'Pokémon Dimension',
    description: "Pokémon Dimension est un Fan-game (jeux réalisé par et pour les fans d'une license en particulier) Pokémon maintenant stoppé par son createur 'Zenos'. Pendant 3 ans, j'ai travaillé principalement en tant que mappeur sur ce jeux en 2 dimmensions réalisé à l'aide du logiciel PDSK. J'ai pour ma part utilisé Tiled. L'équipe est composée uniquement de fan ne se connaissant pas dans la vie réèlle ayant entre 16 et 25 ans. Tous les échanges que ce soit d'idées, de concéption ou pour discuter se faisaient via le logiciel Discord. Ce fut une innitiative se basant purement sur le volontariat et la bonne volontée des developpeurs. C'est donc un projet non-scolaire."
  }
}

var putBack = function () {
  document.querySelector('#container').style.zIndex = '-2'
  getElementsByTagName('a-scene')[0].style.zIndex = 'auto'
  document.querySelector('#camera').setAttribute('wasd-controls-enabled', true)
}

var putFront = function (evt) {
  getElementsByTagName('a-scene')[0].style.zIndex = '-2'
  document.querySelector('#container').style.zIndex = 'auto'

  console.log('Camera move avant changement = ' + document.querySelector('#camera').getAttribute('wasd-controls-enabled'))
  var selectedProject = this.projectsInfo[evt.currentTarget.id]
  document.querySelector('#title').innerHTML = selectedProject.title
  document.querySelector('#projectDescription').innerHTML = selectedProject.description
  document.querySelector('#camera').setAttribute('wasd-controls-enabled', false)
  console.log('Camera move après changement = ' + document.querySelector('#camera').getAttribute('wasd-controls-enabled'))
}

var startExperienteBtn = document.querySelector('#start_experience')
startExperienteBtn.addEventListener('click', putBack)

var infoBubble = document.querySelectorAll('.menu-button')
for (var i = 0; i < infoBubble.length; ++i) {
  infoBubble[i].addEventListener('click', putFront)
}
