//Primer punto: tipos, uniones e interfaces
const productName: string = 'Palta';
let productId: string | number = 9;

//Creacion de una interface
interface Product {
    name: string;
    price: number; 
}

const myProduct: Product = {
    name: 'Harina Chacabuco',
    price: 2000
}
console.log(myProduct)