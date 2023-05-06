# CAC2023Python-G24
<<<<<<< HEAD
Codo a Codo 2023 - Full Stack Python - Grupo 24

rama : V.Orlando

* Se Actualizo el 24 :


* La Hoja Index depende de Las Capetas:

Jv -> tiene un Archivo que maneja contenedores (Div) dent,
las cuales son ( aside, footer, header, nav) cada una de ellas puede tener sus propias hojas de estilo y de Js. 

Ejemplo el nav tiene un archivo js para realizar las animaciones de ocultar el nav en la parte izquierda .

( Las Div de aside, footer, header y nav pueden ser utilizadas una y otra vez en diferentes Hojas sin necesidad esribir el mismo codigo se inyectan por medio de MOD via id ).

Dentro de la Carpeta @ se encuentran Las Hojas ; 
( Acerca, Aprender, Bonus, Contacto, Geografia, Lengua, Matematica)

* Hojas Padres son las Siguientes : 

Bonus de ---> Calculadora, Fiesta (Presupuesto para Fiestas Infantiles) ,  Juegos de scratch y tal vez de Cuentos intantiles si es con un Visor de pdf estaria bien. 

Aprender de --> Esta Hoja presenta las Categorias ( Geografia, Lengua, Matematicas con Preguntas Basadas en JavaScript ) 

Si Es necesario crear carpetas para dividir Las Hojas se crearan en ls misma ubicacion donde se encuentren la hoja padre .

* Grid 

El uso de Grid es el mas recomendable para crear paginas que sean compartible con varios dispositivos.
se puede crear contenedores dentro de otros.

El medida que normalmente se encontraran sea en porcentaje ya que si definimos en otras medidas sera mas complicada a la hora de editarlos. ( tan vez hallaran trozos de codigos con dimesiones o contenedores No grid )


Ejemplos del Grib de index .

    ```CS
    grid-template-columns: 10% 60% 30%  ;
    grid-template-rows: 10% 80% 10%;
    grid-template-areas:
    "header header header"
    "nav section aside"
    "footer footer footer";
    ```

* grid-template-columns: --> Primera Columna tiene un 10%

Header
Nav
Foother 

El 10% No Afecta al Header ni al Footer ya que ellos se trabajaran en Fila .
Se trabajo con 10% para darle margen y espacio entre los contenedores asi evitar que todo se amontonen
El Nav como Posee una Animacion fixed .

* grid-template-columns: --> segunda Columna tiene un 60%

Header
section
footer

Tampoco afectara directamente al Header ni al Footer ya que ellos estan ubicados en filas.

El Contenedor mas importante de la pagina es Section donde se puede publicar los Articulos o seccion por lo tanto un 60% para el contendor del section es Apropiado para que se vea La diferencia entre los demas contendores y dado a que en el se colocaran 

* grid-template-columns: --> Tercera Columna tiene un 30%

Header
aside
footer

Para el Aside donde se colocaran enlaces directos a paginas internas o externas , un pco de imagen, color ect .


* grid-template-rows: primera Fila 10% 

Header Header Header

directamente se enfocara el en header

* grid-template-rows: 80%;

nav section aside

directamente esto le da el 80% de la pagina al Nav, Section y Aside .

* grid-template-rows: 10%;

footer footer footer

directamente se enfocara en el footer 


* fontawesome , se utilizo se estan realizando uso de estos inconos Gratuidos 
la carpeta de fontawesone esta en la raiz , y estan importadas los archivos como lo indica la pagina Web

para ver los comandos y atributos por inconos se pueden encontrar en :

https://fontawesome.com/search?m=free&o=r 

siempre y cuando sean No premiun .


* Se estan utilizando Font de Google 

los archivos estan importadas en la Hoja index.css
tambien fueron creadas variables de Colores por lo tanto hojas que estan vinculadas despues de invocar a la hoja index.css o contenedor y variantes esto afectara y reconocera las variables creadas . se crearon diversas por las dudas.


Nota: Es importante mencionar que fuera de los estilos css, se deben tomar en cuentas las etiquetas basicas del html , no hacerlo todo con el css , si existen etiquetas que podemos usar en el html sera buena practica hacerlo, ejemplo en cada imagen o enlace colocar un title="detalles".


* Aun sigue Abiertas propuestas al Proyecto .

* las Dimenciones @media 

las dimenciones se realizaran gracias al uso de grid y las medidas en porcentaje .
se colocaran condiciones o cambio de valores si se notan diferencia en la pantallas or cada medidas .

* Se Actualizo la Pagina Web, se establecio Fondos y se agrego la Calculadora

21 de Abril  . Se establecio imagenes como fondos en diversos div, se reparo las enlaces en comun internos entre hojas html, se agrego la Calculadora .
(Nota: Queda pendiente Agregar un Indice en La hoja Aprender .)

* Se agrego la funcion de onmouseover en el Boton para invocar la nav .

17 Abril 2023 . Se Agrego paginas para El Proyecto Web

* Se agrego : Acerca, Aprender, Bonus, Contacto, Ingresar 
a medida de lo posible se moveran las estruturas  ya que se copio la misma estructuras del index y el mismo css . por cada hoja se creo una caperta donde la cual se optiene el css y el archivo javaS..


15 Abril 2023 . Actualizacion de index.html - Version 1

* Se estableció el diseño html con un poco de css para diferencial las etiquetas , los colores puede ser cambiados y se cambiaran en dicho momento no es Definitivo . 

* Se creó botón Menú con una transición en el nav ( basado en JavaS y un poco de css)

* Se creo carpetas img, js , css para depositar futuros archivos .

# Nota:

* Los Enlaces para Matemáticas , Lengua y Geografía estaran en la Pagina "Aprender" este sera una pagina con efectos de animacion , mostrando las tres Opciones (Matematica, Lengua, Geografia) el cual se creo un Boton .

* se creo un boton llamado extra para vincular cualquier contenido extraordinario que sea relevante con la pagina , ejemplo La calculadora y calucalodra de presupuesto para Celebraciones de Fiestas (Este trabajo sera encargado por los que deseen apoyarla y mi Persona .)

... En los proximo dias se realizaran cambio y se subira nuevo contenido. 
=======


* Codo a Codo 2023 - Full Stack Python - Grupo 24


Para clonar el repositorio :
`
 git clone https://github.com/eugeinga/CAC2023Python-G24.git `

Para  saber que cual rama te encuentras usa : 
`git branch `

Para ver cuales ramas estan creadas usa :
 `
git branch -a `

# Moverte entre ramas 
Para moverte entre las ramas (Nota una vez te muevas se mostraran y no estaran ocultas ):

`git checkout NOMBRE_DE_LA_RAMA `

# Actualizar Ramas desde github a tu Local 

Para actualizar tu archivos Locales con las Actualizaciones de otros desarrollador :

`git pull origin `

Si quieres individual una rama :

`git pull origin nombre_de_la_rama`


# Para crear Una Rama idividual :

`git branch NOMBRE_DE_LA_RAMA
`

luego de crearla necesitas subirla al github con el siguiente comando :

 ` git push origin NOMBRE_DE_LA_RAMA
 `

Cuando realices eso odras ser push con normalidad solo se realiza el push origin una vez no es necesario hacerlo otra vez . 



>>>>>>> main
