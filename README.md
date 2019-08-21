
# Evaluación Final (Bis)
El ejercicio consiste en desarrollar una aplicación web que simula un juego de buscar las parejas. 

## Implementar el juego
Por cada carta, tenemos información en el JSON de cuáles
son pareja.
- Cuando se hace clic en una primera carta esta se da la vuelta y nos muestra su pokemon.
- Al hacer clic en una segunda carta esta se da la vuelta y: si es la pareja de la primera las dos
se quedan boca arriba, si no es la pareja de la primera las dos deben
mantenerse visibles durante un periodo corto de tiempo (para que la usuaria vea los
pokemon) y ponerse boca abajo.

## Estructura del proyecto
La estructura de carpetas tiene esta pinta:
```
/
`- _src
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   `- templates
      `- partials

