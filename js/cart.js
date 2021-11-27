import { products } from './data/products.js';
import { item } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');
const productsListSm = document.querySelector('.js_products__list-sm');

products.forEach(product => {
        productsList.insertAdjacentHTML('beforeend',item(product)); 
        productsListSm.insertAdjacentHTML('beforeend',item(product)); 
    
    
    // productsList.insertAdjacentHTML('beforeend',item(product));
})
