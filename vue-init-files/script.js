/* Components */
var sale_price = 100;
var productGrid = Vue.component('product-grid',{
    template: '#product-grid',
    props: ['name'],

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

    
});


var product = Vue.component('product', {
    template: "#product",
    props: ['item']
});




/* Initialize */

new Vue({
    el: '#main'
});



