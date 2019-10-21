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

- **DB_COLLECTION:** Nombre de la colección que contiene los datos a consumir. 
> Por defecto es **hotels**.

- **DB_USER:** Nombre de usuario para acceder a la base de datos. 
> Dejar vacío en caso de no poseer.

- **DB_PASS:** Contraseña para acceder a la base de datos. 
> Dejar vacío en caso de no poseer.

## API

#### `GET` api/hotels

Recupera la lista completa de los hoteles, aplicando los filtros en caso de existir.

###### queryParams
- **name:**  Se utiliza para listar por el nombre especificado.
- **stars:**  Se utiliza para listar por estrellas, soporta una o varias.


#### `GET` api/hotels/:mongoId

Recupera la información especifica de un hotel, según el ID recibido.

#### `POST` api/hotels/

Crea un nuevo hotel, con la info enviada desde el body.

###### body

```json
  {
    "id": "2499432",
    "name": "Hotel Venezuela",
    "stars": 5,
    "price": 9294.18,
    "image": "4900059_30_b.jpg",
    "amenities": [
        "safety-box",
        "newspaper",
        "garden",
        "separate-bredroom",
        "children-club"
    ]
  }
```



#### `PUT` api/hotels/:mongoId

Modifica la información especifica del hotel correspondiente al ID recibido.

#### `DELETE` api/hotels/:mongoId

Elimina el hotel correspondiente al ID recibido.






