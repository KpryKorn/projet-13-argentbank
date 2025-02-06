## Init

- [x] Init l'application React dans le dossier "client"
- [x] Installer MongoDB et ajouter les données en base
- [x] Intégrer les pages existantes de "designs" en routes React Router
  - [x] Page d'accueil
  - [x] Page de connexion
  - [x] Page de profil
- [x] Gestion des states avec Redux
- [x] Ajuster le responsive (marge page d'accueil)
- [x] Gestion des messages d'erreur
- [ ] Créer fichier Swagger

## Issues

- [x] (1) L'utilisateur peut voir la page d'accueil
- [x] (2) Connexion via credentials
  - [x] rediriger vers "/profile" après validation des credentials
  - [ ] s'authentifier via "/user/profile" avec le token JWT renvoyé par l'API
- [ ] (3) Déconnexion -> il est impossible d'accéder à "/user" en étant déconnecté
- [ ] (4) Uniquement possible de voir son propre profil + le mettre à jour
