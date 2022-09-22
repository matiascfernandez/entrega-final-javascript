const divProductos = document.getElementById("divProductos")
const botonProductos = document.getElementById("botonProductos")
const inputProducto = document.getElementById("inputProducto")

const traerProductos = async () => {
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    return productos
}




function mostrarProductos(arrayProductos) {
    arrayProductos.forEach((producto, indice) => {
        divProductos.innerHTML += `
            <div class="card" id="producto${indice}" style="width: 18rem;margin:3px;">
            <img src="./img/${producto.img}" class="card-img-top  img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Marca: ${producto.marca}</p>
                    <p class="card-text">Modelo: ${producto.modelo}</p>
                    <p class="card-text">Categoria: ${producto.categoria}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                    <button class="btn btn-dark botonesProducto">Agregar al carrito</button>
                </div>
            </div>
        
        `
    });

    for (let i = 0; i < botonesProducto.length; i++) {
        botonesProducto[i].addEventListener('click', () => {
            Toastify({

                text: "Agregado al carrito",

                duration: 3000,
                style: {
                    background: "linear-gradient(to right,#D3CCE3,#E9E4F0)",
                },

            }).showToast();

        })
    }


}




const botonCarrito = document.getElementById("botonCarrito")
const botonesProducto = document.getElementsByClassName("botonesProducto")
console.log(botonesProducto)



botonCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Carrito',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Finalizar Compra',
        denyButtonText: `Cancelar compra`,
        cancelButtonText: 'Seguir comprando'
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Compra Finalizada', 'En breve te enviaremos el producto', 'success')
        } else if (result.isDenied) {
            Swal.fire('Compra Cancelada', '', 'info')
           
        }
    })

})





/*buscador de productos*/

inputProducto.addEventListener('input', () => {
    let res = inputProducto.value

    traerProductos().then(productos => {
        const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(res.toLowerCase()))
        divProductos.innerHTML = ""
        mostrarProductos(productosFiltrados)
    })
})


botonProductos.addEventListener('click', () => {
    traerProductos().then(productos => {
        mostrarProductos(productos)
    })
})


/*Boton VER CARRITO*/





/* Alerta Agregar CARRITO*/





/* formulario registro */


const boton1 = document.querySelector("#boton1")
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}

const idForm = document.getElementById("idForm")
const botonUsers = document.getElementById("botonUsers")
const divUsers = document.getElementById("divUsers")

const users = []

idForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = new User(username, email, password)

    users.push(user)

    idForm.reset()
    console.log(users)
})


botonUsers.addEventListener('click', () => {
    divUsers.innerHTML = ""
    users.forEach((user, indice) => {
        divUsers.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem;margin:3px;">
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                    <p class="card-text">${user.email}</p>
                </div>
            </div>
        
        `
    })
})