# Workflow Editor Application

## Descripción

Esta es una aplicación web construida con Next.js que permite a los usuarios crear y editar flujos de trabajo mediante una interfaz gráfica de arrastrar y soltar. La aplicación utiliza React y Tailwind CSS para proporcionar una experiencia de usuario fluida y moderna.

## Tecnologías Utilizadas

- **Next.js**: Framework para aplicaciones React.
- **React**: Biblioteca para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para estilos.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **ReactFlow**: Biblioteca para crear gráficos y flujos de trabajo.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Para ejecutar la aplicación en modo desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

- `app/page.tsx`: Layout principal de la aplicación.
- `components/`: Carpeta que contiene todos los componentes de la aplicación.
  - `workflow-editor.tsx`: Componente principal del editor de flujos.
  - `sidebar.tsx`: Panel lateral con bloques de acción.
  - `config-panel.tsx`: Panel de configuración para los elementos seleccionados.
  - `custom-nodes.tsx`: Definición de nodos personalizados.

## Funcionalidades

- **Editor de Flujos**: Crea nodos de diferentes tipos (inicio, webhook, verificación, etc.) y conéctalos entre sí.
- **Interfaz Drag-and-Drop**: Arrastra y suelta nodos para crear flujos de trabajo visualmente.
- **Configuración de Nodos**: Personaliza los nodos seleccionados en el panel de configuración.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes preguntas o necesitas ayuda, no dudes en contactar a [tu nombre] en [tu correo electrónico].
