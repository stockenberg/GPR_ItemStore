<template>
    <div>
        <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" v-model="user.username" class="form-control" placeholder="Email address" required="" autofocus="" data-cip-id="inputEmail">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" v-model="user.password" class="form-control" placeholder="Password" required="" data-cip-id="inputPassword">
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" v-model="user.remember"> Remember me
                </label>
            </div>
            <button @click.prevent="logIn" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return{
                user: {
                    username: null,
                    password: null,
                    remember: false
                }
            }
        },
        methods: {
            alertMe() {
                alert('Hallo');
            },
            logIn(){
                console.log(this.user);
            }
        }
    }
</script>

<style scoped>
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>