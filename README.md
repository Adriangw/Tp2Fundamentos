# Fundamentos Teóricos de Informática trabajo práctico N° 2 Sierpiński arrowhead curve

Este proyecto fué desarrollado utilizando [Typescript](https://www.typescriptlang.org/) y [Reactjs](https://es.reactjs.org/).

## Nodejs

Para poder lanzar la aplicación se debe instalar [nodejs](https://nodejs.org/es/) que además instalará el gestor de paquetes npm.

## Luego de Clonar

En el directorio del Proyecto ejecutar:

### `npm install`

Para lanzar la aplicación, en el directorio del proyecto ejecutar:

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

### `Detalle`

La curva de la punta de flecha de Sierpinski dibuja un triángulo equilátero con ventanas triangulares a intervalos iguales. Se puede describir con dos reglas de producción sustitutivas: (A → B-A-B) y (B → A + B + A). A y B se repiten y en el fondo hacen lo mismo (dibujar una línea). Los signos más y menos (+ y -) significan un giro de 60 grados a la izquierda o a la derecha. El punto de terminación de la curva de la punta de flecha de Sierpinski es el mismo, siempre que se repita un número par de veces, dividiéndose a la mitad la longitud del segmento en cada recursión. Si se repite una iteración impar (el orden es impar) entonces el punto final aparece girado 60 grados, en un punto diferente del triángulo. 

### `Uso`

En el input `Cantidad de iteraciones` se ingresa la cantidad de iteraciones sobre las reglas de producción, en el input
`Tamaño de segmento A B` se ingresa el largo del segmento o trazo que se usará para dibujar la figura, en el input `Angulo` 
se selecciona el ángulo de rotación luego de dibujar cada segmento, por último el input `Ajustar` es una opción que 
permite ajustar el tamaño del triangulo una vez que ha sido dibujado. 



