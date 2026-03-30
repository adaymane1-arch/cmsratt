# CMS RATT - Application Hello

Une application simple avec **Backend Node.js** et **Frontend HTML/CSS/JS** liés ensemble.

## 📂 Structure du projet

```
cms-ratt/
├── backend/
│   └── server.js          # Serveur Express Node.js
├── frontend/
│   ├── index.html         # Page HTML
│   ├── style.css          # Feuille de styles
│   └── script.js          # JavaScript client
├── package.json           # Dépendances npm
└── README.md             # Ce fichier
```

## 🚀 Installation et Lancement

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur

```bash
npm start
```

Ou en mode développement :

```bash
npm run dev
```

### 3. Accéder à l'application

Ouvrez votre navigateur et allez à :
```
http://localhost:3000
```

## 💡 Fonctionnement

1. **Backend (Node.js/Express)**
   - Écoute sur le port 3000
   - Expose l'API `/api/hello` qui retourne `{ message: "hello" }`
   - Sert les fichiers statiques du frontend

2. **Frontend (HTML/CSS/JS)**
   - Affiche une interface attractive
   - Effectue une requête FETCH à `/api/hello` au chargement
   - Affiche le message "hello" reçu du backend

## 📡 Communication

- **Frontend** → **Backend** : Requête HTTP GET `/api/hello`
- **Backend** → **Frontend** : Réponds JSON `{ message: "hello" }`

## 🎨 Fonctionnalités

- ✨ Interface moderne et responsive
- 🔄 Bouton pour recharger le message
- ⚡ Communication asynchrone
- 🛡️ Gestion des erreurs
- 📱 Design mobile-friendly

## 🛠️ Technologies Utilisées

- **Backend** : Node.js, Express, CORS
- **Frontend** : HTML5, CSS3, JavaScript ES6

## 📝 Notes

- Le serveur doit être lancé pour que l'application fonctionne
- Les fichiers HTML/CSS/JS sont servis automatiquement par Express
- Les routes API peuvent être étendues facilement

---

**Créé pour démontrer la connexion entre frontend et backend** 🎯
