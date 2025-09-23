# Exercices React

Rendez-vous dans le dossier `exo`

Toutes les documentations dans le dossier `docs`

## Installer le projet

```bash
...
```

## Organisation du projet

```bash
├── dist                     # Dossier de build généré par Vite pour la production
├── docs                     # HS : documentations Kévin
├── exo                      # HS : exercices Kévin
├── public                   # Fichiers statiques accessibles directement
├── src                      # Code source principal de l’application
│   ├── main.tsx             # Point d’entrée principal de l’application React
│   ├── fakeData.ts          # Données factices pour tests et développement
│   ├── assets               # Ressources (images, polices, etc.)
│   ├── core                 # Noyau applicatif (types, constantes, logique partagée)
│   ├── ui                   # Composants UI réutilisables et styles
│   │   ├── globals.css      # Styles globaux de l’application
│   │   ├── button
│   │   ├── counter
│   │   ├── header
│   │   ├── icons            # Composants et styles liés aux icônes
│   │   │   ├── CartIcon.tsx # Icône spécifique du panier
│   │   │   ├── icon.css     # Styles associés aux icônes
│   │   │   └── Icon.ts      # Typage générique pour les icônes
│   │   ├── productCard
│   │   └── productList
│   ├── views                # Pages principales de l’application
│   │   ├── ContactPage.tsx
│   │   └── Homepage.tsx
│   └── vite-env.d.ts
├── eslint.config.js
├── index.html               # Fichier HTML racine de l’application
├── package.json             # Dépendances, scripts et métadonnées du projet
├── package-lock.json        # Verrouillage des versions des dépendances
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```