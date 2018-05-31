# Cifrado César

## Descripción del proyecto

El proyecto se basa en crear una página web que transforme los mensajes entregados por el usuario en cifrado césar. Asimismo, una vez entregado el mensaje cifrado, este puede volver a descifrarse mediante otra caja de texto disponible en el `HTML`.

Mi solución ante el desafío de la página web, fue incluír dos cajas de texto (una para cifrar y otra para descifrar) con sus botones correspondientes para ejecutar las funciones y donde se imprima el mensaje en la caja paralela a la que se usó. Además, añadí una última caja de texto que transforma un mensaje a cifrado o descifrado con desplazamiento definido. Todas estas opciones incluyen un botón de copiado para comodidad del usuario y el `CSS` adaptado de manera que todo fuese más amigable.

Para acceder directamente a la página de cifrado césar, haz click [aquí.](https://valegutierrez.github.io/scl-2018-05-bc-core-pm/)

Para explicar cómo funciona el cifrado césar en este caso, añadiremos un poco de explicación detrás de ello.

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## Instrucciones de instalación/testeo

Se puede hacer descarga de un `ZIP` con todos los archivos apretando el link de 
**Clone or download** en Github y descomprimir el archivo.
Requisitos:
* El usuario debe tener instalado previamente [Node.js](https://nodejs.org/en/)
* Instalar `npm` con el comando `npm install`
* Instalar `mocha` con el comando `npm install --global mocha`

Con esto, podemos comprobar que la carpeta `test` funcione de manera correcta. Para probarla, se puede acceder a `/test/index.html`

La página del cifrado césar puede ser accedida desde `/src/index.html`