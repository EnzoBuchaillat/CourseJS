# Shifumi

Jeu du Pierre, Feuille, Ciseaux : on joue contre l'ordinateur, qui choisit son coup au hasard.

## Fonctionnalités

- Trois boutons pour jouer Pierre, Feuille ou Ciseaux
- Affichage du coup joué, du coup de l'ordinateur et du résultat de la manche
- Le bloc de résultat reste masqué jusqu'à la première manche jouée
- Compteurs de victoires, égalités et défaites
- Bouton de réinitialisation du score, qui masque à nouveau le bloc de résultat
- Boutons stylés avec un remplissage animé au survol

## Notions utilisées

### JavaScript

- Sélection d'éléments avec `document.getElementById`
- Écoute d'événements avec `addEventListener`
- Tirage aléatoire avec `Math.floor(Math.random() * 3)`
- Structure conditionnelle `switch`
- Mise à jour du DOM via `textContent` et `style.display`

### CSS

- Mise en page en `flex` avec `flex-direction: column`
- Dégradé de fond avec `linear-gradient`
- Pseudo-élément `::before` positionné en absolu, animé au `:hover` avec `transition`
- Empilement des calques avec `z-index` et `overflow: hidden`

## Lancer le jeu

Ouvrir `index.html` dans un navigateur.

## À faire

- [ ] Factoriser la logique des trois boutons dans une seule fonction
