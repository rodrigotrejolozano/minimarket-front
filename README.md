
# minimarket-front

## Descripción

**Minimarket-front** es una aplicación web creada con **Next.js** y **TypeScript**, diseñada para consumir API desde **minimarket-back**. Es una interfaz simple pero efectiva para administrar categorías y productos, que permite a los usuarios realizar operaciones CRUD en productos y filtrarlos según categorías. La aplicación utiliza **Axios** para solicitudes HTTP y **React Query** para manejar el estado del servidor y el almacenamiento en caché. **Tailwind CSS** se utiliza para los estilos en clase.

## Características

- Operaciones CRUD para productos.
- Filtrado de productos basado en categorías.
- Custom hooks para manejar llamadas API
- Manejo de errores y notificaciones de brindis.
- Diseño responsivo con Tailwind CSS
- Capa de servicios con integración de Axios y React Query

## Arquitectura

El proyecto sigue una arquitectura **Service-Hook-Component**:

- **Servicios**: clases como `ProductServices` y `CategoryServices` son responsables de interactuar con los puntos finales de API (a través de Axios) para recuperar o modificar datos.
- **Custom Hooks**: hooks como `useCreateProduct`, `useGetAllProducts` y otros usan **React Query** para administrar el estado de los datos y realizar solicitudes de API a través de los servicios.
- **Componentes**: Componentes reutilizables para botones, inputs, modales y select. Los componentes manejan la interacción del usuario y muestran los datos obtenidos por los hooks.

## Estructura del Proyecto

La estructura clave del proyecto es la siguiente:

- `/services` : Capa de servicios para interactuar con los puntos finales de la API.
  - `ProductServices.ts`
  - `CategoryServices.ts`
  
- `/hooks` : Custom hooks para manejar el estado de los datos y realizar solicitudes de API.
  - `useCreateProduct.ts`
  - `useGetAllProducts.ts`
  - `useDeleteProduct.ts`
  - etc.

- `/components` : Reusable components for UI rendering.
  - `CustomButton.tsx`
  - `CustomInput.tsx`
  - `ProductModal.tsx`
  - `CategoryFilter.tsx`
  - etc.

- `/pages` : Next.js pages para renderizar las vistas.
  - `index.tsx` (index.tsx para la página de inicio)

## Requirements

- **OS**: Windows (recommended)
- **Node.js**: v18.17.0 (minimo)
- **npm**: v9.6.7 (minimo)

## Installation

instalar el proyecto localmente es muy sencillo. Siga los pasos a continuación:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/rodrigotrejolozano/minimarket-front.git
   ```
   
2. **Navega a la carpeta del producto**:

   ```bash
   cd minimarket-front
   ```

3. **Instala las dependencias:
   ```bash
   npm install
   ```

4. **Crea un archivo `.env.local` en la raíz del proyecto, donde deberia tener la siguiente estructura:
   ```bash
    API_URL=http://localhost:3001
    NEXT_PUBLIC_API_DOMAIN=http://localhost:3000
    URL_DOMAIN=http://localhost:3000
   ```

5. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
   
5. **Accede a la aplicación en:
   ```
   http://localhost:3000
   ```


## Uso en Producción

1. Compila el proyecto:
   ```bash
   npm run build
   ```

2. Inicia el servidor en modo producción:
   ```bash
   npm run start
   ```

3. Accede a la aplicación en:
   ```
   http://localhost:3000
    ```
## Hecho por

Desarrollado con cariño por **rorodev** 🖤 ( ^///^ )