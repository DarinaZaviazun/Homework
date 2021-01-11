class ProductService {

    url = 'https://fakestoreapi.com/products/';

    async productService() {
        return await fetch(this.url)
            .then(el => el.json())
            .then(el => el)
    }
}

export default ProductService;