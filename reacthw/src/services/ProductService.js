class ProductService {

    async getProducts() {
        const url = 'https://fakestoreapi.com/products'

        return await fetch(url)
             .then(value => value.json())
    }
}

export default new ProductService();