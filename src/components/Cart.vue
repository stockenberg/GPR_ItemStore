<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Total</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr v-for="(item,index) in cart" :key="index">
                        <td class="col-sm-8 col-md-6" >
                            <div class="media">
                                <a class="thumbnail pull-left" href="#"> <img class="media-object"
                                                                              src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"
                                                                              style="width: 72px; height: 72px;"> </a>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="#">{{item.title}}</a></h4>
                                </div>
                            </div>
                        </td>
                        <td class="col-sm-1 col-md-1" style="text-align: center">
                            <input type="number" class="form-control" v-model="item.quantity">
                        </td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$ {{ Math.round(item.price * 100) / 100}}</strong></td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$ {{Math.round((item.price * item.quantity) * 100) / 100}}</strong></td>
                        <td class="col-sm-1 col-md-1">
                            <button type="button" class="btn btn-danger" @click="removeFromCart">
                                <span class="glyphicon glyphicon-remove"></span> Remove
                            </button>
                        </td>
                    </tr>

                    <!-- later --->
                    <tr>
                        <td> </td>
                        <td>  </td>
                        <td>  </td>
                        <td><h5>Subtotal</h5></td>
                        <td class="text-right"><h5><strong>$24.59</strong></h5></td>
                    </tr>

                    <tr>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td><h3>Total</h3></td>
                        <td class="text-right"><h3><strong>$ {{totalValue}}</strong></h3></td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td>
                           <router-link class="btn btn-default" to="/shop">Back to shop</router-link>
                        </td>
                        <td>
                            <button type="button" class="btn btn-success" @click="checkOut()">
                                Checkout <span class="glyphicon glyphicon-play"></span>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data() {
            return {
                cart: [
                    {id: 1, quantity: 1, title: 'Doombringer', description: 'Krasse waffe!', price: 13.37},
                    {id: 2, quantity: 3, title: 'Infinity Edge', description: 'Noch krassere waffe!', price: 8.15},

                ]
            }
        },
        mounted() {

        },
        computed: {
          totalValue() {
              let total = 0;
              for(let item in this.cart){
                  total += this.cart[item].price * this.cart[item].quantity;
              }
              return Math.round(total * 100) / 100;
          }
        },
        methods: {
            removeFromCart() {
                this.$toast.success('Removed from cart', 'congratz');
                // TODO : Remove item with id from session
            },
            checkOut(){
                let payload = {cart: this.cart, total: this.totalValue};
                console.log(payload);
                // TODO : ship to php and parse into database
                console.log('request will be sent to php script - saved in database etc.');
            }
        }
    }
</script>

<style scoped>

</style>