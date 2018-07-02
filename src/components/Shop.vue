<template>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">{{headline}}</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                to featured content
                or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button" @click="get('item', 'getAll')">Get Items</a>
            <a class="btn btn-primary btn-lg" href="#" role="button" @click="get('item', 'get')">Get Item by ID</a>
            <a class="btn btn-primary btn-lg" href="#" role="button" @click="get('user', 'login')">Login</a>
            <a class="btn btn-primary btn-lg" href="#" role="button" @click="get('user', 'logout')">Logout</a>
            <a class="btn btn-primary btn-lg" href="#" role="button" @click="get('user', 'register')">Register</a>
            <a class="btn btn-primary btn-lg" href="#" role="button" @click="get('user', 'addToCart')">AddToCart</a>
            <a class="btn btn-primary btn-lg" href="#" role="button" @click="get('user', 'buy')">Buy</a>
        </div>
        <div class="row">
            <div class="col" v-for="(item,index) in items" :key="index">
                <div class="card">
                    <img class="card-img-top" :src="'../assets/' + item.img_name" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}} {{item.id}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <a href="#" @click="addToCart(item)" class="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Sword from '../assets/sword.jpeg';

    export default {
        name: "Shop",
        data () {
            return{
                test: "hallo",
                imgPath: '../assets/',
                headline: null,
                items: null
            }
        },
        mounted() {
            this.getAllItems();
            setInterval(this.getAllItems, 10000)
            if(localStorage.userid == null){
                console.log("user is not logged in")
                this.$router.push('/login');
            }
        },
        methods: {
            get(apiCase, action){
                axios.get("http://localhost:8080/?case=" + apiCase + "&action=" + action)
                .then(res => {
                    this.headline = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
            },
            getAllItems(){
                axios.get('http://localhost:8080/?case=item&action=getAll')
                .then(res => {
                    console.log(res);
                    this.items = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
            },
            imagePath(imgName) {
                return this.imgPath + imgName;
            },
            addToCart(item) {

                // add Quantity
                item.quantity = 1

                // Get Cart from LocalStorage
                var cart = JSON.parse(localStorage.getItem('cart')) || [];

                // inital checker if item was found in loop
                found = false;

                // Check entries in localStorage and add 1 to quantity
                if(cart.length > 0){
                    for(var i = 0; i < cart.length; i++){
                        if(cart[i].id === item.id){
                            cart[i].quantity += 1;
                            var found = true;
                        }
                    }
                }

                // if no entry is found - push item
                if(!found){
                    cart.push(item);
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // localStorage.removeItem('cart'); reset
                this.$toast.success('Added to Cart', 'Item was added successfully, id: ' + id);
                // TODO : ajax request to php - add id to session
            }
        }
    }
</script>

<style scoped>

</style>