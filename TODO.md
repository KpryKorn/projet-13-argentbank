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
  - [x] s'authentifier via "api/user/profile" avec le token JWT renvoyé par l'API
  - [x] protéger la page "/profile" avec auth JWT
- [x] (3) Déconnexion
- [ ] (4) Uniquement possible de voir son propre profil
  - [ ] Mettre à jour les informations de son profil via les inputs
