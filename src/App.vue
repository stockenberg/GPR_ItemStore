<template>
    <div id="app">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button @click="show = !show" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <transition name="fade">
                    <div :class="{'show': show}" class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <router-link to="/shop" class="nav-link">Shop</router-link>
                            </li>
                            <li class="nav-item active">
                                <router-link to="/cart" class="nav-link">Warenkorb</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/login" class="nav-link">Login</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/register" class="nav-link">Register</router-link>
                            </li>
                        </ul>
                    </div>
                </transition>
            </nav>
        </header>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return{
                show: false
            }
        },

    }
</script>

<style>
    .container{
        text-align: center;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
