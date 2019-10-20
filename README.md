# Almundo Hotels Backend

Esta aplicación usa como base de datos no relacional a **MongoDB**, debes tener previamente instalado la misma antes de continuar.

## Instalación
Debemos realizar la instalación de las dependencias con el siguiente comando:

**`npm install`**

## Levantar la solución

Tenemos la posibilidad de iniciar la aplicación bajo dos entornos:
- **DESARROLLO:** **`npm run start`**

- **PRODUCCIÓN:** **`npm run start:prod`**

## Configuración de los entornos

La configuración de cada entorno se encuentra ubicada en `./environments` con el nombre de `.env.{NOMBRE DEL ENTORNO}`.

Cada archivo contiene las siguientes variables de entorno:
- **PORT:** Puerto en donde será levantada la aplicación.

- **DB_URL:** URL completa de la base de datos (incluyendo el puerto de ser necesario). 
> **localhost/almundo** o **localhost:27017/almundo**.

- **DB_USER:** Nombre de usuario para acceder a la base de datos. 
> Dejar vacío en caso de no poseer.

- **DB_PASS:** Contraseña para acceder a la base de datos. 
> Dejar vacío en caso de no poseer.