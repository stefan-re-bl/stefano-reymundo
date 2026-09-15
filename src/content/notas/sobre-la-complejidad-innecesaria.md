---
title: "Sobre la complejidad innecesaria"
date: 2026-09-15
description: "Contenido de ejemplo para probar el estilo de lectura y la estructura de una nota."
tags:
  - software
  - arquitectura
  - trabajo
draft: false
---

Este es contenido de ejemplo. Reemplazar por una nota real cuando el sitio empiece a usarse.

La idea de esta entrada es comprobar cómo se ven los párrafos largos, los subtítulos, las listas, las citas y los bloques de código dentro del layout de lectura.

## Una decisión pequeña

No toda complejidad es innecesaria. A veces aparece porque el problema existe de verdad. La pregunta útil suele ser más concreta: qué parte del sistema está resolviendo un problema real y qué parte solo está anticipando uno imaginario.

> Placeholder para una reflexión propia sobre decisiones técnicas, mantenimiento y criterio profesional.

Algunos criterios posibles para revisar una solución:

- si reduce trabajo humano real;
- si se puede explicar sin demasiado aparato;
- si otra persona podría mantenerla dentro de seis meses;
- si el negocio entiende qué problema resuelve.

```ts
const simple = solvesRealProblem && canBeMaintained;
```

| Criterio | Pregunta |
| --- | --- |
| Mantenimiento | ¿Quién cuidará esto después? |
| Claridad | ¿La solución se puede explicar? |
| Valor | ¿Qué trabajo evita o mejora? |
