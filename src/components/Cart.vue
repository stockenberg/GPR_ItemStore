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
                                                                              :src="require('../assets/' + item.img_name)"
                                                                              style="width: 72px; height: 72px;"> </a>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="#">{{item.name}}</a></h4>
                                </div>
                            </div>
                        </td>
                        <td class="col-sm-1 col-md-1" style="text-align: center">
                            <input type="number" class="form-control" @change="addQuantity(item.id)" v-model="item.quantity">
                        </td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$ {{ Math.round(item.price * 100) / 100}}</strong></td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$ {{Math.round((item.price * item.quantity) * 100) / 100}}</strong></td>
                        <td class="col-sm-1 col-md-1">
                            <button type="button" class="btn btn-danger" @click="removeFromCart">
                                <span class="glyphicon glyphicon-remove"></span> Remove
                            </button>
                        </td>
                    </tr>

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
                cart: null,

            }
        },
        mounted() {
            if(localStorage.userid == null){
                console.log("user is not logged in")
                this.$router.push('/login');
            }

            this.cart = JSON.parse(localStorage.getItem('cart'));

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
            addQuantity(id){
                var cart = JSON.parse(localStorage.getItem('cart'));

                for(var i = 0; i < cart.length; i++){
                    if(cart[i].id = id){
                        cart[i].quantity += 1;
                    }
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                console.log(localStorage);
            },
            removeFromCart() {
                this.$toast.success('Removed from cart', 'congratz');
                // TODO : Remove item with id from session
            },
            checkOut(){
                let payload = {cart: this.cart, total: this.totalValue, userid: localStorage.getItem('userid') || null};
                console.log(payload);

                axios.post('http://localhost:8080/?case=user&action=buy', 'data=' + JSON.stringify(payload))
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
                // TODO : ship to php and parse into database
                console.log('request will be sent to php script - saved in database etc.');
            }
        }
    }
</script>

<style scoped>

</style>