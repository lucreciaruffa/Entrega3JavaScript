let nombrecito = document.querySelector("#pizzaNombre");
let precio = document.querySelector("#pizzaPrecio");
let ingred = document.querySelector("#pizzaIngredientes");
let form = document.querySelector("#formulario");
let input = document.querySelector("#input_number");
let mensajito = document.querySelector("#mensajito");
let fotoPizza = document.querySelector("#pizzaPic");
let boton = document.querySelector("#btn");
let container = document.querySelector("#divcito");

//Tarjeta
let renderCard = (pizza) => {
    let divcito = document.createElement("div");
    divcito.classList.add("container");
    let hache2 = document.createElement("h2");
    hache2.innerHTML = `${pizza.nombre}`;
    let hache4 = document.createElement("h4");
    hache4.innerHTML = `${pizza.precio}`;
    let otroHache4 = document.createElement("h4");
    otroHache4.innerHTML = `${pizza.ingredientes}`;
    let img = document.createElement("img");
    img.src = pizza.img;
    img.classList.add("imagenEstilo");

    divcito.appendChild(hache2);
    divcito.appendChild(hache4);
    divcito.appendChild(otroHache4);
    divcito.appendChild(img);

    return divcito;
};

function submit(e) {
    e.preventDefault();

//Para eliminar la card
    let findDiv = document.querySelector(".container");

    if (findDiv) {
        findDiv.remove();
    }

    let toFind = parseInt(input.value);
    const found = pizzas.find((pizza) => pizza.id === toFind);
    console.log(found);

    if (found) {
        container.appendChild(renderCard(found));
        console.log(renderCard(found));
        mensajito.innerHTML = "";
    } else {
        mensajito.innerHTML = `No contamos con la pizza que solicitaste`;
    }
    input.value = "";
}

//submit
form.addEventListener("submit", submit);

//almacenarEnLocalStorage
localStorage.setItem("menuPizzas", JSON.stringify(pizzas));
pipipipizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
