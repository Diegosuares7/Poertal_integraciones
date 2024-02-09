# DESCRIPCION

Frontend para la gestión y control de integraciones en JetSMART, diseñado para facilitar la interacción con diversas fuentes de datos

### DEPENDENCIAS IMPORTANTES:

- Posee husky y lint stage para mantener las buenas prácticas
- Esta realizado con vite

## Installation

- Utilizar yarn para bajar paquetes (yarn install)
- Verificar que a la hora de hacer un commit se este corriendo el pre commit de .husky (es importante para mantener el lint y las estructuras)

-Para asegurar que Husky se ejecute correctamente tras instalar las dependencias del proyecto, se ha incluido el script "prepare": "husky install" dentro de la seccion scripts en el archivo package.json. Esto garantiza que Husky se instale automaticamente cada vez que se ejecute yarn install

## ESTRUCTURA CARPETAS

```
|──────public/ ---> Agregar assets necesarios
|──────src
	|────── components : componentes globales de la aplicacion
	|────── constants : constantes utilizadas a lo largo del proyecto
	|────── contexts : manejo de contextos, estructurarlo por carpetas con un index por cada una y que cada contexto tenga si .context su .provider y su interfaz de props
	|────── interfaces : si se vuelven muchas organizarlas por carpetas
	|────── pages : organizar paginas por carpetas si tienen mas de un elemento, lo mismo si poseen su archivo .css propio. En caso de ser necesario agregar index
	|────── requests : interfaces de los requests a enviar a apis de terceros
	|────── responses : interfaces de los responses a enviar a apis de terceros
	|────── routes : archivos de ruteo (manejar un archivo publico y uno privado para rutas). Agregar las rutas a constanteS!
	|────── services : Encapsula la llamada a api de terceros. Que estos servicios interactuen con el provider! no usarlo en las paginas y componentes en lo posible.


## ARQUITECTURA

Arquitectura SPA para aplicación react vite.

## Variables de entorno

## Deploy Local

- Hacer un yarn install parado sobre el package json
- Correr el comando yarn dev

```

## Aclaraciones importantes

Por favor respetar los namings de las naming policies y verificar que este bien configurado .husky y lint staged.
Para verificarlo pueden probar que al comitear se esten ejecutando scripts de chequeo de linters.
Respetar el orden de las carpetas, y tratar de respetar la nomenclatura agregando .Tipodearchivo a la hora de crearlo (por ejemplo Navbar.component)

-Path aliases y index

Para importar archivos estamos usando path aliases. Revisar la configuracion de tsconfig.json. Para hacer importaciones SIEMPRE IMPORTAR SOBRE LOS PATH ALIAS.
Es mucho mas prolijo. En carpetas que tengan muchos archivos USEN INDEX para poder agrupar importaciones.

tsconfig.json

    "paths": {
      "@components/*": ["./src/components/*"],
      "@pages/*": ["./src/pages/*"],
      "@contexts/*": ["./src/contexts/*"],
      "@interfaces/*": ["./src/interfaces/*"],
      "@interfaces": ["./src/interfaces/index"],
      "@responses/*": ["./src/responses/*"],
      "@requests/*": ["./src/requests/*"],
      "@services/*": ["./src/services/*"],
      "@constants/*": ["./src/constants/*"],
    }

y vite.config.json

resolve: {
alias: {
'@components': path.resolve(**dirname, './src/components/'),
'@public': path.resolve(**dirname, './public'),
'@contexts': path.resolve(**dirname, './src/contexts/'),
'@pages': path.resolve(**dirname, './src/pages/'),
'@interfaces': path.resolve(**dirname, './src/interfaces/'),
'@requests': path.resolve(**dirname, './src/requests/'),
'@responses': path.resolve(**dirname, './src/responses/'),
'@services': path.resolve(**dirname, './src/services/'),
'@constants': path.resolve(\_\_dirname, './src/constants/')
},
},

## Decisiones técnicas importantes

## Tests

## Changelog
