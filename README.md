# Importante  

La aplicación está desarrollada en Node Js (Backend) y Nuxt Js (Frontend - este es un framework de Vue Js), a continuación explicaré como correr el backend y el frontend.

### **Tener en cuenta**

La base de datos que se trabajó en este proyecto está en SQL así que debemos poner a correr nuestro servicio de MySQL localmente y crear una base de datos vacía, puede llevar cualquier nombre, mas adelante se harán las respectivas configuraciones.

También debemos tener instalado [Node Js](https://nodejs.org/en/) previamente   
## Backend

### **Instalación**


Primero debemos clonar el repositorio completo, entramos a la carpeta **Backend** por medio de la consola y ejecutamos el comando:

``` sh
npm install
```

Aquí comenzará a instalar todos los paquetes necesarios.

### **Configuración**

Ahora debemos configurar nuestra base de datos, para eso vamos a dirigirnos a la ruta `src/config/database.ts`, en este archivo pondremos el userName, password y el nombre de la base de datos que creamos anteriormente (puede llevar cualquier nombre), en dado caso de que nuestro MySQL corra en otro puerto o entro host, cambiamos esta información.

### **Ejecución**

Por último debemos ejecutar en nuestra consola (OJO: Debemos estár dentro de la carpeta **Backend**):

```sh
npm run dev
```

en nuestra base de datos se debieron haber creado las tablas automaticamente y nuestro servidor comenzará a correr en el puerto **3001**

## FrontEnd

### **Instalación**


Primero debemos clonar el repositorio completo, entramos a la carpeta **Frontend** por medio de la consola y ejecutamos el comando:

``` sh
npm install
```

### **Ejecución**

Por último debemos ejecutar en nuestra consola (OJO: Debemos estár dentro de la carpeta **Frontend**):

```sh
npm run dev
```

y nuestro servidor comenzará a correr en el puerto **3001**   

Si todo se ejecutó correctamente el backend debe estar corriendo en la url: `http://localhost:3001` y el frontend en la url: `http://localhost:3000`, solo debemos abrir la url del frontend y listo, todo deberá funcionar correctamente.