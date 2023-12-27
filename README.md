# Evershop

## Structure des dossiers

Un projet EverShop contient un node_modules, des fichiers de mise en cache, des fichiers de configuration, des médias et des extensions.

### Le dossier **.evershop**

Ce dossier contient les fichiers compilés pour la production. Les composants et les fichiers d'assets ReactJS seront générés par la commande build et stocker ici automatiquement.

### Le dossier **.log**

Ce dossier contient le fichier journal. Le fichier journal est l'endroit où nous stockons les informations de journalisation de tout ce qui se passe dans votre application.

### Le dossier **config**

Ce dossier contient les fichiers de configuration. Vous pouvez en savoir plus sur la configuration dans ce document.

### Le dossier **extensions**

Ce dossier contient des modules développés par des tiers et des développeurs. Consultez ce document pour mieux comprendre la structure du module.

### Le dossier **media**

Ce dossier contient des fichiers multimédias comme des images de produits, des images de catégories, etc.

### Le dossier **nodes_modules**

Il s'agit du node_modules par défaut de NodeJS. Il contient les paquets de NodeJs et de fournisseurs.

EverShop core package se trouve également dans ce dossier. Pour apporter des modifications à la vue tu les trouveras dans le dossier @evershop/evershop/src/modules/*

Chaques modules a la structure suivante :

=> api
=> graphql
=> migration
=> pages
==> admin
==> frontStore
=> services

Dans le dossier **pages/frontStore** tu trouveras les fichiers ReactJS des vues front.

### Le dossier **themes**

Ce dossier contient des thèmes développés par des tiers et des développeurs. Consultez ce document pour plus d'informations.
