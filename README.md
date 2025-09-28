# Examen Técnico – Fullstack Junior (Next.js)

## Descripción

Este proyecto es un CRUD básico de productos usando Next.js.
Incluye **frontend** con React y **API interna** dentro del mismo proyecto.

---

## Funcionalidades

- Listar productos (nombre y precio)
- Agregar un nuevo producto desde un formulario
- Validación básica: el precio debe ser un número positivo
- Comunicación frontend ↔ backend usando `fetch`

---

## Referencia de UI

Esta imagen se usó como referencia para la interfaz, aunque no todos los elementos están implementados:

![Referencia UI](public/images/ui-reference.png)

> Nota: La imagen es solo referencia visual.

---

## Estructura del proyecto

```
/app
 ├─ /api
 │   └─ /products/route.js   ← API interna
 ├─ /components
 │   ├─ ProductForm.js
 │   └─ ProductList.js
 ├─ /data
 │   └─ products.js
 ├─ /icons
 │   └─ ...                 ← íconos usados
 └─ /page.js                 ← página principal
```

---

## Cómo ejecutar

1. Clonar el repositorio:

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Instalar dependencias:

```bash
npm install
```

3. Levantar servidor de desarrollo:

```bash
npm run dev
```

4. Abrir en navegador:

```
http://localhost:3000/
```

---

## Endpoints de la API

| Método | Ruta          | Descripción                |
| ------ | ------------- | -------------------------- |
| GET    | /api/products | Listar todos los productos |
| POST   | /api/products | Agregar un producto nuevo  |

---

## Notas

- La lista de productos se guarda en memoria (array), no usa base de datos.
- La API valida que el precio sea positivo.
- Se pueden mejorar estilos o hacer deploy en Vercel (opcional).
