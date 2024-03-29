let listaAnimais = [
    {
    idAnimal: 1,
    nome: "Barão",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dianisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis",
    img: "./img/img1.webp"
    },

    {
        idAnimal: 2,
        nome: "Barão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dianisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis",
        img: "./img/img2.jpg"
    },

    {
        idAnimal: 3,
        nome: "Barão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dianisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis",
        img: "./img/img3.webp"
    },

    {
        idAnimal: 4,
        nome: "Barão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dianisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis",
        img: "./img/img4.jpg"
    },

    {
        idAnimal: 5,
        nome: "Barão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dianisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis",
        img: "./img/img5.webp"
    },
];

const criarCard = () => {
    let container = document.querySelector(".container");

    listaAnimais.forEach((elemento) => {
        let card = `<div class="card">
        <img class="card-img" src="${elemento.img}" />
        <h2 class="card-titulo">${elemento.nome}</h2>
        <p class="card-descricao">${elemento.descricao}</p>
        <a class="card-botao" idAnimal=${elemento.idAnimal}> ADOTAR </a>
      </div>
      `;
      container.innerHTML += card;
    });
};

criarCard();

let container = document.querySelector(".container");
container.classList.add("change-background");