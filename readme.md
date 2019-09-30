# Tester son code avec Jest

L'objectif de ce projet consiste en la mise en place d'un projet configuré avec Webpack et testé avec Jest.

## Jest

> Jest is a JavaScript test runner, that is, a JavaScript library for creating, running, and structuring tests. Jest is distributed as an NPM package, you can install it in any JavaScript project. Jest is one of the most popular test runner these days and the default choice for Create React App..

Source: [valentinog.com](https://www.valentinog.com/blog/jest/ "valentinog")

### Introduction

Dans le jargon technique, tester signifie vérifier que notre code répond à ce qu'il est censé faire. 

Il y a plusieurs types de tests regroupés en trois catégories 

- Tests unitaires (unit testing)
- Tests d'intégration (integration testing)
- Tests d'interface (UI testing)

**Référence: https://www.valentinog.com/blog/jest/**

### Paramétrer le projet 

`$ npm i jest --save-dev`

Ajoutons aussi un script dans notre package.json 

```javascript
  "scripts": {
    "test": "jest"
  },
```

Par défaut Jest peut comprendre les fichiers .test 

Nous crérons également un dossier "tests"

> Voir fichier tests/demo.test.js

### Lancer un test 
Pour lancer un test nous utilisons la commande 

`$ npm run test`
`$ npx test`

### Support de babel 

> Ajout du fichier .babelrc 

```
 {
   "presets": ['@babel/preset-env'] 

 }
 ```

 ### Extension VS CODE 

 > Téléchargez l'extension VS Code "Jest"

 ### Le code coverage

Le code coverage représente le pourcentage de notre code qui est testé.

Ajouter le code suivant à votre package.json et observer le dossier "coverage"

```
  "jest": {
    "collectCoverage": true,
    "coverageReporters": ["html"]
  }
```

 ### Atteindre 100% de code coverage ? Facile ? 
 > A vous de jouez, essayez d'atteindre 100% de code coverage en ajoutant les tests des fonctions dans notre demo.test.html
