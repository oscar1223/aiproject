# ⚛️ React + TypeScript + Vite Starter

Un boilerplate minimalista para comenzar rápidamente con un entorno moderno usando **React**, **TypeScript** y **Vite**, incluyendo soporte para **Hot Module Replacement (HMR)** y **ESLint** preconfigurado.

---

## 🚀 Tecnologías incluidas

- 🧠 **React 18** – Librería para interfaces de usuario
- ⚡ **Vite** – Dev server superrápido y bundler moderno
- ✨ **TypeScript** – Tipado estático de próxima generación
- 🧹 **ESLint** – Linter configurable con reglas específicas para TypeScript y React
- 🔄 **Fast Refresh** – Recarga en caliente al instante

---

## 📦 Plugins oficiales disponibles

### 👉 [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)
Usa **Babel** para habilitar _Fast Refresh_.

### 👉 [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc)
Usa **SWC** para una compilación ultrarrápida con _Fast Refresh_.

---

## 🧪 Expandiendo la configuración de ESLint

Para proyectos serios en producción, te recomendamos habilitar reglas _type-aware_ para un análisis más profundo:

```ts
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // También puedes usar esta opción más estricta:
    // ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
