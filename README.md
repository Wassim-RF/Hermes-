<div align="center">
    <h1 className="text-2xl font-black tracking-tighter text-slate-900 flex items-center">
        <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-500">
            H
        </span>
        <span className="ml-px">ermes</span>
        <div className="ml-1 w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></div>
    </h1>
    <p style="font-size: 1.2em; color: #64748b;"><strong>Productivity Dashboard</strong></p>
</div>

---

**Hermes** est une application web de gestion de tâches (To-Do List avancée) permettant d'organiser son travail quotidien de manière simple, efficace et interactive. Conçue avec une interface dynamique et des composants réutilisables, elle garantit que vos données restent enregistrées même après le rechargement de la page.

## 🚀 Fonctionnalités

Cette application répond aux user stories suivantes :

* **Ajout de tâches :** Créez de nouvelles tâches rapidement.
* **Validation :** Marquez les tâches terminées (barrées visuellement).
* **Suppression :** Retirez une tâche de la liste en un clic.
* **Filtrage dynamique :** Basculez entre toutes les tâches (*All*), les tâches terminées (*Completed*) et les tâches en cours (*Pending*).
* **Persistance des données :** Sauvegarde automatique des tâches dans le `localStorage` du navigateur.
* **Gestion des états vides :** Affichage d'un message convivial lorsqu'aucune tâche n'est présente.

## 🛠️ Stack Technique

* **Framework :** React.js (via Vite)
* **Langage :** JavaScript (ES6+)
* **Styling :** Tailwind CSS
* **Gestion d'état & Effets :** React Hooks (`useState`, `useEffect`)
* **Stockage :** API Web `localStorage`

## 📁 Architecture du Projet

Le projet respecte une structure modulaire avec des composants séparés pour garantir un code propre et maintenable :

```text
src/
├── components/
│   ├── App.jsx        # Composant principal (gestion de l'état global et du localStorage)
│   ├── TaskInput.jsx  # Formulaire d'ajout de tâche
│   ├── TaskList.jsx   # Conteneur affichant la liste des tâches
│   ├── TaskItem.jsx   # Élément individuel représentant une tâche
│   └── Filter.jsx     # Boutons de filtrage (All, Pending, Completed)
├── styles/
│   └── index.css      # Fichier CSS global (directives Tailwind)
└── utils/             # Fonctions utilitaires éventuelles