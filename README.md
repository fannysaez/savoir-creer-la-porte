# savoir-gerer-la-porte

Projet TDD (Test-Driven Development) : classes `Porte`, `Joueur` et `Salle` en TypeScript, testées avec Vitest.

---

## Installation (dans l'ordre)

### 1. Initialiser le projet

```bash
npm init -y
```

Crée le fichier `package.json` de base.

### 2. Installer les dépendances

```bash
npm install -D vitest typescript
```

Installe Vitest (framework de tests) et TypeScript en dépendances de développement (`-D`), car elles ne sont utiles que pendant le développement, pas en production.

### 3. Modifier `package.json`

Deux changements à faire par rapport au fichier généré par `npm init -y` :

**a) Le script de test** — remplacer le script par défaut par `vitest`, pour que `npm test` lance la suite de tests :

```diff
  "scripts": {
-   "test": "echo \"Error: no test specified\" && exit 1"
+   "test": "vitest"
  }
```

**b) Le type de module** — ajouter `"type": "module"` à la racine, pour que Node interprète correctement la syntaxe `import`/`export` utilisée dans les fichiers `.ts` :

```diff
  {
    "name": "savoir-faire-le-cafe",
    "version": "1.0.0",
+   "type": "module",
    "scripts": {
```

### 4. Créer le `.gitignore`

Avant le premier commit, pour ne jamais suivre `node_modules` sur Git :

```bash
echo "node_modules/" > .gitignore
```

```
node_modules/
```

### 5. Ajouter les fichiers du projet

Deux fichiers TypeScript à la racine :

- **`door.ts`** — le code source : les classes `Porte`, `Joueur` et `Salle`
- **`door.test.ts`** — la suite de tests Vitest correspondante

## Structure du projet

``` bash
savoir-gerer-la-porte/
├── .gitignore
├── package.json
├── package-lock.json
├── door.ts
├── door.test.ts
├── player.ts
├── room.ts
└── player.test.ts
```

---

## Exécution des tests du projet

```bash
npx vitest run  
```

`npx vitest run` exécute tous les tests une seule fois.