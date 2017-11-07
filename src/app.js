var sale_price = 100;

export default {
    name: 'main',

    data: function () {
        return { 
            products: [],
            productFilterKey: 'all'
            }

    },

    created: function(){
       this.$http.get("http://project.web-page.in.ua/vue-app/list.json")
        .then(function(resp){
            if(typeof resp.data == 'string') {
               resp.data = JSON.parse(resp.data);
            }
            this.products=resp.data.data.children;

        });
    },

    computed: {
        productFilter() {
            return this[this.productFilterKey]
        },
        all() {
          return this.products
        },
        sale() {
          return this.products.filter((item) => item.data.price <= sale_price)
        }
    }

    
}

