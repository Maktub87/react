

export const products = [
    {
        id: 1,
        Name: "TopCandy",
        Categoria: "Fertilizante",
        descripcion: "Los azúcares de top candy harán que los cogollos de tus plantas pesen más, produzcan más resina y además, mejora el olor y el sabor. ",
        img: '../../imagenesproductos/topcandy.jpg', precio: "$ " + 5000,
        cantidad: 15
    },
    {
        id: 2,
        Name: "TopVeg",
        Categoria: "Fertilizante",
        descripcion: "Top Veg de Top Crop es un fertilizante líquido destinado, principalmente, para el crecimiento de nuestras plantas. ",
        img: '../../imagenesproductos/topveg.jpg', precio: "$ " + 3500,
        cantidad: 10
    },
    {
        id: 3,
        Name: "Big One",
        Categoria: "Fertilizante",
        descripcion: "Big One de Top Crop es un estimulador de floración capaz de aumentar el volumen de tus flores hasta un 40% e incrementar la producción de resina en más de un 30%. ",
        img: '../../imagenesproductos/bigone.jpg', precio: "$ " + 7500,
        cantidad: 10
    },
    {
        id: 4,
        Name: "TopAuto",
        Categoria: "Fertilizante",
        descripcion: "Top auto es un fertilizante orgánico especial para las semillas autoflorecientes ",
        img: '../../imagenesproductos/topauto.jpg', precio: "$ " + 5000,
        cantidad: 10
    },
    {
        id: 5,
        Name: "TopBloom",
        Categoria: "Fertilizante",
        descripcion: "Top Bloom es un fertilizante top crop para la fase de floración 100% orgánico y natural . ",
        img: '../../imagenesproductos/topbloom.jpg', precio: "$ " + 8000,
        cantidad: 10
    },
    {
        id: 6,
        Name: "TopWash",
        Categoria: "Fertilizante",
        descripcion: "Top Wash es un aditivo que actúa sobre el medio de cultivo limpiando o eliminando el exceso de sales del sustrato. ",
        img: '../../imagenesproductos/topwash.jpg', precio: "$ " + 10000,
        cantidad: 10
    },
    {
        id: 7,
        Name: "TopBud",
        Categoria: "Fertilizante",
        descripcion: "Top Bud es un potenciador para darle el impulso final que tus plantas necesitan durante la etapa de floración. ",
        img: '../../imagenesproductos/topbud.jpg', precio: "$ " + 9000,
        cantidad: 10
    },
    {
        id: 8,
        Name: "Deeper Underground",
        Categoria: "Fertilizante",
        descripcion: "Deeper Underground es un fertilizante líquido formulado para la estimulación del crecimiento y del desarrollo de las raíces de las plantas. ",
        img: '../../imagenesproductos/deeperunderground.jpg', precio: "$ " + 4500,
        cantidad: 10
    },
    {
        id: 9,
        Name: "Barrier",
        Categoria: "Fertilizante",
        descripcion: "Los azúcares de top candy harán que los cogollos de tus plantas pesen más, produzcan más resina y además, mejora el olor y el sabor. ",
        img: '../../imagenesproductos/barrier.jpg', precio: "$ " + 6000,
        cantidad: 10
    },
    {
        id: 10,
        Name: "Bolsa de Cultivo",
        Categoria: "Macetas",
        descripcion: "Las bolsas de cultivo son unos recipientes fabricados con tela transpirable que destacan por su gran capacidad de drenaje y aireación que se utilizan para cultivar flores y hortalizas con raíces cortas. ",
        img: '../../macetas/bolsaparacultivo.jpg', precio: "$ " + 7000,
        cantidad: 10
    },
    {
        id: 11,
        Name: "Maceta Cuadrada",
        Categoria: "Macetas",
        descripcion: "Especiales para florales de estación, arbustos jóvenes de vivero e incluso proyectos hortícolas especiales. ",
        img: '../../macetas/cuadrada.jpg', precio: "$ " + 2500,
        cantidad: 10
    },
    {
        id: 12,
        Name: "Maceta Soplada",
        Categoria: "Macetas",
        descripcion: "La maceta soplada es un envase fuerte con labios reforzados son más fácil de transportar y provoca menos daño a la planta durante el transporte. ",
        img: '../../macetas/sopladas.webp', precio: "$ " + 900,
        cantidad: 10
    },
    {
        id: 13,
        Name: "Sustrato Vamp",
        Categoria: "Sustratos",
        descripcion: "Su equilibrada porosidad promueve una buena distribución de raíces, una excelente aireación y alta absorción de humedad.",
        img: '../../sustratos/sustratovamp.jpg', precio: "$ " + 5200,
        cantidad: 10
    },





];


export const productosFail = [];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject(new Error(`no hay productos`));
        }
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                products.find((product) => product.id.toString() === id.toString())
            );
        }, 2000);
    });
};

export const getProductsByCategory = (Categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.Categoria === Categoria));
        }, 2000);
    });
};