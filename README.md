## **Contexte**

Le candidat doit réaliser une **Card interactive** (élément d’interface utilisateur (UI) conçu pour présenter des informations de manière concise et engageante, tout en permettant une interaction directe de l’utilisateur) en utilisant des données provenant d’une API générant un profil aléatoire. Certains points listés ci-dessous sont requis pour établir une base commune entre les candidats.

La liste **Bonus** est totalement optionnelle et apporte une difficulté supplémentaire.

La liste **Optionnelle** est là pour donner des idées au candidat s’il/elle souhaite aller plus loin dans l’exercice.

Le candidat peut poser des questions pendant le test si nécessaire.

---

## **Requis**

- Le projet doit être **public sur Git** avec des commits réguliers et des messages clairs.
- Le projet doit être développé sous la dernière version d’**Angular**, en utilisant exclusivement **TypeScript**.
- Pas d’utilisation de framework CSS : uniquement du SCSS personnalisé.
- Utilisation de l’API gratuite https://randomuser.me/ comme source de données :
    - Au moins **5 données** doivent être utilisées provenant d’un profil aléatoire.
    - Intégration d’une liste d’utilisateurs (liste d’amis) toujours en utilisant la même API, avec au moins **2 données par utilisateur**.
- Intégration d’un **embed Google Maps**.
- Ajout d’interactions animées :
    - Au moins **deux animations simples** (exemple : redirection, `:hover`, `:active`).
    - Au moins **une animation complexe**, comme un changement de classe avec apparition/disparition fluide d’un élément (par exemple via `overflow` , `traanimation`ou `transform`).
- Développement “from scratch” uniquement : pas de copier-coller extérieur ni de code généré par une IA. L’objectif est d’évaluer le niveau actuel du candidat.
- Le code doit inclure des commentaires en anglais pour expliquer les parties complexes ou importantes.
- Merci de prévenir la personne de contact lorsque vous commencez le test et lorsque vous l’avez terminé, en fournissant le lien vers le dépôt Git public.

---

## **Bonus**

- Intégration d’un formulaire de contact en utilisant le **FormBuilder** d’Angular :
    - Le formulaire doit afficher un message d’erreur si les conditions requises ne sont pas remplies (exemple : longueur minimale/maximale du texte, champ requis, pattern spécifique, etc.).
    - Si les conditions sont remplies au moment du submit, l’utilisateur doit être informé que son message a été envoyé avec succès (par exemple via un changement de step ou l’affichage d’un message).
    - Il n’est pas nécessaire d’envoyer réellement un e-mail.

---

## **Optionnel**

- Rendu responsive pour une meilleure adaptation aux différents écrans.
- Utilisation de polices non natives pour améliorer le design.
- Création d’un composant réutilisable et scalable basé sur une configuration interprétée par le composant.
