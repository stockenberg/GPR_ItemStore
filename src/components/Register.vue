<template>
    <div class="signup-form">     
        <form action="" method="post">
            <h2>Register</h2>
            <p class="hint-text">Create your account. It's free and only takes a minute.</p>
            <div class="form-group">
                <div class="col-xs-6"><input type="text" class="form-control" v-model="register.firstname" name="first_name" placeholder="First Name"
                                             required="required" data-cip-id="jQuery342845639"></div>
            </div>
            <div class="form-group">
                <div class="col-xs-6"><input type="text" class="form-control" v-model="register.lastname" name="last_name" placeholder="Last Name"
                                             required="required" data-cip-id="jQuery342845640"></div>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="email" v-model="register.email" placeholder="Email" required="required"
                       data-cip-id="jQuery342845641">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" v-model="register.password" placeholder="Password" required="required"
                       data-cip-id="jQuery342845642">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="register.confirm_password" name="confirm_password" placeholder="Confirm Password"
                       required="required" data-cip-id="jQuery342845643">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block" @click.prevent="registerFunc">Register Now</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "Register",
        data () {
            return {
                success: true,
                register: {
                    firstname: null,
                    lastname: null,
                    email: null,
                    password: null,
                    confirm_password: null
                },
                users: null
            }
        },
        mounted(){
            
            this.getAllUsers();
        },
        methods: {
            registerFunc() {
                this.validateInput();
                if(this.success){
                    // TODO : post the request to the php script
                    console.log(this.register);
   
                    axios.post('http://localhost:8080/?case=user&action=register', 'data=' + JSON.stringify(this.register))
                        .then(res => {
                        
                            console.log(res)
                        })
                        .catch(err => {

                        });
                }

            },
            getAllUsers(){
                axios.get('http://localhost:8080/?case=user&action=get')
                .then(res => {

                    this.users = res.data;
                    console.log(res.data);
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
            },
            validateInput() {
                this.success = true;
                if(this.register.firstname === null){
                    this.$toast.error('Please fill in firstname');
                    this.success = false;
                }
                if(this.register.lastname === null){
                    this.$toast.error('Please fill in lastname');
                    this.success = false;
                }
                if(this.register.email === null){
                    this.$toast.error('Please fill in email');
                    this.success = false;
                }
                if(this.register.password === null){
                    this.$toast.error('Please fill in password');
                    this.success = false;
                }
                if(this.register.password !== this.register.confirm_password){
                    this.$toast.error('Your passwords don`t match..');
                    this.success = false;
                }
            }
        }
    }
</script>

<style scoped>
    .form-control {
        height: 40px;
        box-shadow: none;
        color: #969fa4;
    }

    .form-control:focus {
        border-color: #5cb85c;
    }

    .form-control, .btn {
        border-radius: 3px;
    }

    .signup-form {
        width: 400px;
        margin: 0 auto;
        padding: 30px 0;
    }

    .signup-form h2 {
        color: #636363;
        margin: 0 0 15px;
        position: relative;
        text-align: center;
    }

    .signup-form h2:before, .signup-form h2:after {
        content: "";
        height: 2px;
        width: 30%;
        background: #d4d4d4;
        position: absolute;
        top: 50%;
        z-index: 2;
    }

    .signup-form h2:before {
        left: 0;
    }

    .signup-form h2:after {
        right: 0;
    }

    .signup-form .hint-text {
        color: #999;
        margin-bottom: 30px;
        text-align: center;
    }

    .signup-form form {
        color: #999;
        border-radius: 3px;
        margin-bottom: 15px;
        background: #f2f3f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }

    .signup-form .form-group {
        margin-bottom: 20px;
    }

    .signup-form input[type="checkbox"] {
        margin-top: 3px;
    }

    .signup-form .btn {
        font-size: 16px;
        font-weight: bold;
        min-width: 140px;
        outline: none !important;
    }

    .signup-form .row div:first-child {
        padding-right: 10px;
    }

    .signup-form .row div:last-child {
        padding-left: 10px;
    }

    .signup-form a {
        color: #fff;
        text-decoration: underline;
    }

    .signup-form a:hover {
        text-decoration: none;
    }

    .signup-form form a {
        color: #5cb85c;
        text-decoration: none;
    }

    .signup-form form a:hover {
        text-decoration: underline;
    }
</style>