

export const products = [
    {
        id: 1,
        Name: "TopCandy",
        Marca: "TopCrop",
        descripcion: "Los azúcares de top candy harán que los cogollos de tus plantas pesen más, produzcan más resina y además, mejora el olor y el sabor. ",
        img: "../components/assets/images/imagenesproductos/topcandy.jpg", precio: "$ " + 5000,
        cantidad: 15
    },
    {
        id: 2,
        Name: "TopVeg",
        Marca: "TopCrop",
        descripcion: "Top Veg de Top Crop es un fertilizante líquido destinado, principalmente, para el crecimiento de nuestras plantas. ",
        img: "../components/assets/images/imagenesproductos/topveg.jpg", precio: "$ " + 3500,
        cantidad: 10
    },
    {
        id: 3,
        Name: "Big One",
        Marca: "TopCrop",
        descripcion: "Big One de Top Crop es un estimulador de floración capaz de aumentar el volumen de tus flores hasta un 40% e incrementar la producción de resina en más de un 30%. ",
        img: "../components/assets/images/imagenesproductos/bigone.jpg", precio: "$ " + 7500,
        cantidad: 10
    },
    {
        id: 4,
        Name: "TopAuto",
        Marca: "TopCrop",
        descripcion: "Top auto es un fertilizante orgánico especial para las semillas autoflorecientes ",
        img: "../components/assets/images/imagenesproductos/topauto.jpg", precio: "$ " + 5000,
        cantidad: 10
    },
    {
        id: 5,
        Name: "TopBloom",
        Marca: "TopCrop",
        descripcion: "Top Bloom es un fertilizante top crop para la fase de floración 100% orgánico y natural . ",
        img: "../components/assets/images/imagenesproductos/topbloom.jpg", precio: "$ " + 8000,
        cantidad: 10
    },
    {
        id: 6,
        Name: "TopWash",
        Marca: "TopCrop",
        descripcion: "Top Wash es un aditivo que actúa sobre el medio de cultivo limpiando o eliminando el exceso de sales del sustrato. ",
        img: "../components/assets/images/imagenesproductos/topwash.jpg", precio: "$ " + 10000,
        cantidad: 10
    },
    {
        id: 7,
        Name: "TopBud",
        Marca: "TopCrop",
        descripcion: "Top Bud es un potenciador para darle el impulso final que tus plantas necesitan durante la etapa de floración. ",
        img: "../components/assets/images/imagenesproductos/topbud.jpg", precio: "$ " + 9000,
        cantidad: 10
    },
    {
        id: 8,
        Name: "Deeper Underground",
        Marca: "TopCrop",
        descripcion: "Deeper Underground es un fertilizante líquido formulado para la estimulación del crecimiento y del desarrollo de las raíces de las plantas. ",
        img: "../components/assets/images/imagenesproductos/deeperunderground.jpg", precio: "$ " + 4500,
        cantidad: 10
    },
    {
        id: 9,
        Name: "Barrier",
        Marca: "TopCrop",
        descripcion: "Los azúcares de top candy harán que los cogollos de tus plantas pesen más, produzcan más resina y además, mejora el olor y el sabor. ",
        img: "../components/assets/images/imagenesproductos/barrier.jpg", precio: "$ " + 6000,
        cantidad: 10
    },
];




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