# Stefano Reymundo

Sitio personal y blog construido con Astro, Markdown y GitHub Pages.

La idea editorial es simple: notas de un desarrollador independiente construyendo software para negocios reales. El proyecto evita backend, CMS tradicional, base de datos y JavaScript innecesario. Git funciona como sistema de publicación.

## Desarrollo

Requisito: Node.js 22.12 o superior.

Instalar dependencias:

```bash
npm install
```

Ejecutar en local:

```bash
npm run dev
```

Compilar:

```bash
npm run build
```

Previsualizar el build:

```bash
npm run preview
```

## Publicar una nota

1. Crear un archivo `.md` dentro de `src/content/notas/`.
2. Agregar frontmatter:

```yaml
---
title: "Sobre la complejidad innecesaria"
date: 2026-09-15
description: "Algunas notas sobre cuándo la arquitectura deja de resolver problemas y empieza a crearlos."
tags:
  - software
  - arquitectura
  - trabajo
draft: false
---
```

3. Escribir el contenido desde Obsidian o cualquier editor.
4. Ejecutar `npm run build` si quieres verificar antes de publicar.
5. Hacer `git add`, `git commit` y `git push`.
6. GitHub Actions compila y despliega automáticamente en GitHub Pages.

Los borradores se marcan con `draft: true` y no aparecen en el sitio, RSS ni rutas públicas.

## Obsidian

La carpeta recomendada para abrir o enlazar desde Obsidian es:

```text
src/content/notas/
```

Puedes abrir esa carpeta como vault pequeño o incluirla dentro de otro vault. Los artículos son Markdown estándar con frontmatter YAML, sin dependencias específicas de Obsidian.

## GitHub Pages

El workflow está en `.github/workflows/deploy.yml`.

En GitHub, configura el repositorio así:

1. Ir a `Settings > Pages`.
2. En `Build and deployment`, elegir `GitHub Actions`.
3. Asegurarte de que la rama principal se llame `main`.
4. Hacer push a `main`.

La configuración de Astro calcula automáticamente la URL base cuando el sitio se publica en un repositorio normal, por ejemplo `https://usuario.github.io/repositorio/`. Si el repositorio se llama `usuario.github.io`, lo publica como sitio de usuario sin prefijo extra.

## Dominio personalizado

Cuando tengas un dominio propio:

1. Configurarlo en `Settings > Pages > Custom domain`.
2. Agregar los registros DNS que indique GitHub.
3. Definir la variable `SITE` en el workflow o en variables del repositorio si quieres fijar explícitamente la URL canónica, por ejemplo `https://tu-dominio.com`.
4. Si el dominio publica desde la raíz, definir `BASE_PATH=/` si hiciera falta.

No hay un dominio ficticio configurado en el proyecto.

## Estructura

```text
src/
├── components/
├── content/
│   └── notas/
├── layouts/
├── pages/
│   └── notas/
└── styles/
```

## Principio

Usar la menor cantidad de sistema necesaria para resolver correctamente el problema.
