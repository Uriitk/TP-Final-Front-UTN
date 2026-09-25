# DC Racing - TP Final React

Trabajo práctico final del Módulo 3 (React.js) del Curso Inicial de Desarrollo Front-End de la UTN.

La consigna era migrar a React el sitio que armé antes con HTML y CSS, manteniendo el diseño pero separándolo en componentes. El sitio es de una concesionaria de autos ficticia, DC Racing.

La versión original en HTML y CSS está acá: https://uriitk.github.io/TPI-Diplomatura-UTN/

## Tecnologías

- React
- Vite
- React Router
- CSS (sin Bootstrap, reutilicé los estilos que ya tenía)
- Font Awesome y Google Fonts para íconos y tipografías

## Cómo correr el proyecto

Hace falta tener instalado Node.js (yo usé la versión 20) y npm.

1. Clonar el repositorio:

```bash
git clone https://github.com/Uriitk/TP-Final-Front-UTN.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd TP-Final-Front-UTN
```

3. Instalar las dependencias:

```bash
npm install
```

4. Levantar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección que aparece en la terminal (normalmente http://localhost:5173).

Otros comandos que se pueden usar:

- `npm run build`: genera la versión para producción en la carpeta `dist`
- `npm run preview`: muestra la versión de producción de forma local
- `npm run lint`: revisa el código con ESLint

## Páginas

| Ruta | Qué muestra |
|---|---|
| `/` | Inicio: hero, quiénes somos, vehículos destacados, galería y contacto |
| `/vehiculos` | Todos los autos |
| `/galeria` | Galería de fotos |
| `/contacto` | Formulario de contacto |

La navegación está hecha con React Router. La navbar y el footer están en un Layout, así se muestran en todas las páginas sin repetir código.

## Estructura

```
src/
├── assets/img/    imágenes del sitio
├── components/    componentes reutilizables (Navbar, Footer, Layout, Hero, Card, Gallery, Contact)
├── data/          datos de los autos y de la galería
├── hooks/         custom hook useForm para el formulario
├── pages/         una página por ruta (Home, Vehiculos, Galeria, Contacto)
├── styles/        un archivo CSS por componente y App.css con los estilos generales
├── App.jsx        rutas de la aplicación
└── main.jsx       punto de entrada
```

Los datos de los autos están en `src/data/vehiculos.js`. Tanto el inicio como la página de vehículos leen de ese mismo archivo, así que si hay que agregar o cambiar un auto se hace en un solo lugar.

## Formulario de contacto

El formulario es controlado, o sea que cada campo guarda su valor en el estado con `useState` (dentro del hook `useForm`).

- Cada vez que se escribe en un campo, se muestra en la consola qué campo cambió y su valor.
- Al enviar, se evita que la página se recargue con `preventDefault()` y se muestran todos los datos en la consola.
- El botón "Limpiar" vuelve todos los campos a su valor inicial.

No se conecta con ningún servidor, los datos solo se ven en la consola del navegador (F12).

## Autor

Uriel Tkaczuk - UriCodex®
