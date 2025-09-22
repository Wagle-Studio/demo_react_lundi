# Exercice React - useState

Le hook `useState` permet de déclarer et gérer l’état local d’un composant fonctionnel. Il est indispensable pour créer des interfaces interactives en permettant aux composants de stocker et de modifier des données sans dépendre d’un état global.

Importez `useState` depuis React avant de l’utiliser :

```jsx
import { useState } from "react";
```

Une fois importé, il permet de déclarer un état au sein du composant de la manière suivante :

```jsx
const [state, setState] = useState(initialState);
```

- `state` : variable qui contient l'état actuel.
- `setState` : fonction qui permet de mettre à jour l'état.
- `initialState` : la valeur initiale de l'état.

## Votre mission

Pour vous exercer à la prise en main du hook d’état `useState`, créez l’arborescence et les composants suivants :

> Pré-requis : commentez la liste des produits pour travailler dans `main.tsx`

**1. Le parent : `Counter.tsx`**

- Déclare la variable d’état `count` à l’aide de `useState`.
- Stocke la valeur du compteur total actuel.
- Son unique rôle est de gérer l’état : l’affichage et les actions sont délégués aux composants enfants.

**2. L’affichage : `CounterScore.tsx`**

- Reçoit `count` en propriété.
- Affiche la valeur actuelle du compteur.
- Si la valeur de `count` est égale à 0 affichez un message, exemple : "Compteur en veille, utilisez les boutons pour commencer"
- Si la valeur de `count` est négative, affichez un message supplémentaire sous le total du compteur, exemple : "Attention, valeur négative"
- Si la valeur de `count` est supérieur à 10, affichez un message supplémentaire sous le total du compteur, exemple : "Ça fait beaucoup la non ?"

**3. L’incrémenteur : `CounterIncrement.tsx`**

- Reçoit `count` ainsi que la fonction de mise à jour associée.
- Contient un bouton qui incrémente le compteur lorsqu’on clique dessus.

**4. Le décrémenteur : `CounterDecrement.tsx`**

- Reçoit `count` ainsi que la fonction de mise à jour associée.
- Contient un bouton qui décrémente le compteur lorsqu’on clique dessus.

**Objectif**
Assemblez ces composants pour obtenir un compteur complet :

- un parent qui gère l’état,
- un composant qui affiche la valeur,
- deux boutons pour incrémenter et décrémenter le compteur.

---

> 💡 **Note** : Ce découpage en plusieurs composants n’est pas représentatif d’une pratique professionnelle. Il s’agit d’un exercice pédagogique destiné à vous entraîner à manipuler `useState`. Le résultat final ne cherche pas à être optimisé.
