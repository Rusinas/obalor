export default instance => ({
    getProductList({ search, limit, offset, categories } = {}) {
        return instance.get('/products', { params: { search, limit, offset, categories } })
    },
    getProduct(product_id) {
        return instance.get(`/products/${product_id}`)
    },
    getCategories() {
        return instance.get('/categories')
    }
})