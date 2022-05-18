# Invitaciones Digitales


> Este es un proyecto realizado para el curso de React JS. Es un E-commerce en el que el usuario podra como sera su tarjeta digital para su evento.


## Installation git clone

Para acceder al proyecto clonándolo, deberás ejecutar en consola: 
```sh
git clone  https://github.com/CarmeloRubiolo/react-proyect.git
npm install 
npm start
```

## Installation download ZIP
```sh
Ir a “code” > download ZIP
Descomprimir el archivo
En la carpeta donde se encuentra “package.json” ejecutar en terminal: 
npm install
npm start
```
## Techs

🛠️ React JS

🛠️ JavaScript

🛠️ HTML

🛠️ CSS

## Firebase

***


| orders | buyer: (contiene email, nombre, apellido y número de teléfono del comprador)
            date: (fecha de la compra)
            items: (array de  objetos donde cada objeto es un producto con id, name, price y quantity)
            total: (precio total de la compra) |
| products | 
            img: (imagen)
            name: (título)
            price: (precio)
            description: (descripcion del producto)
            stock: (stock infinito) |

## Breve descripción de los componentes

***

Al ingresar en la página, te encontrarás con la página de armar tu tarjeta, con la ruta "/list". Aquí encontrarás el componente "NavBar", donde aparece para ver muestras de tarjeta y para armar tu tarjeta que sería el "ItemListContainer", que muestra una lista de items, donde cada "Item" es una card que muestra una breve información sobre un producto. Además, cada "Item" contiene un botón que dirige al "ItemDetailContainer".

El "ItemDetailContainer" muestra, según el ID, el detalle ("ItemDetail") de un producto. El "ItemDetail" muestra una foto de lo que iría en la tarjeta(imagen ilustrativa), su título, su precio, y el stock(donde es infinito). Además, muestra el "ItemCount" que permite seleccionar solamente un producto y que se añade al carrito ("Cart"). Una vez agregado el producto, un botón permite navegar hacia el "Cart". También puede accederse al  Cart a través del "CartWidget", el ícono que se muestra en la "NavBar" cuando hay al menos un producto en el carrito.

El carrito muestra un resumen de la compra, detallando por cada producto título, precio, total, y un botón para eliminar el producto. Además existe un botón para finalizar la compra, que conduce al componente "Order". El componente "Order" solicita nombre, apellido, email y número de teléfono del comprador, información que se sube a firebase en la colección "orders", junto con la fecha y un resumen de la compra.

## Visualización de la página en el navegador
![obs](https://user-images.githubusercontent.com/91704257/168946556-bacea26c-e0fe-46ce-98c5-af6a2ed9fadc.gif)



