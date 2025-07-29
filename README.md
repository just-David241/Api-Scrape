
<h1 align="center">🌤️ Open-Meteo Wrapper</h1>
<p align="center">
  <b>API Weather Wrapper ultra simple & puissant, écrit en TypeScript</b><br>
  <i>Made with ❤️ by Ｃｒａｚｙ</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript">
  <img src="https://img.shields.io/badge/Node.js-%20v18+-green?style=flat-square&logo=node.js">
  <img src="https://img.shields.io/badge/Open%20Source-%E2%9C%94%EF%B8%8F-lightgrey?style=flat-square&logo=github">
  <img src="https://img.shields.io/github/license/Crazynotdev/open-meteo-wrapper?style=flat-square">
  <img src="https://img.shields.io/github/stars/Crazynotdev/open-meteo-wrapper?style=flat-square">
</p>

---

🚀 À propos

`open-meteo-wrapper` est un *wrapper TypeScript moderne* de l’API [Open-Meteo](https://open-meteo.com/), permettant d’obtenir facilement des données météo *horaires*, *journalières*, et bien plus.

- ✅ Simple à utiliser
- 🌍 Supporte tous les pays
- ⚡ Performant et modulaire
- 🧠 Prêt à être intégré dans vos bots, sites, ou apps météo

---

🛠️ Technologies

```ts
[TypeScript] + [Axios] + [Node.js] = ❤️
```

> Bonus : compatible avec JavaScript & facilement portable vers Python

---

📦 Installation

```bash
git clone https://github.com/Crazynotdev/open-meteo-wrapper
cd open-meteo-wrapper
npm install
```

---

🧪 Exemple d'utilisation

```ts
import { getWeatherForecast } from './src/client'

const forecast = await getWeatherForecast({
  latitude: 48.8566,
  longitude: 2.3522,
  hourly: ['temperature_2m'],
  timezone: 'Europe/Paris',
})
console.log(forecast)
```

---

📁 Structure

```
📦 open-meteo-wrapper
├─ 📂 src
│  ├─ index.ts
│  ├─ client.ts
│  ├─ types.ts
│  └─ utils.ts
├─ 📂 examples
│  └─ basicUsage.ts
├─ README.md
├─ package.json
└─ tsconfig.json
```

---

🧠 Contribution

Toute PR propre est la bienvenue.  
*Fork + Clone + Code + PR* 💥

---

👑 Auteur

*Ｃｒａｚｙ* — [github.com/Crazynotdev](https://github.com/Crazynotdev)

<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="300"/>
<br/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="60"/>


---

📄 Licence

MIT — Libre pour usage perso, commercial ou académique.
