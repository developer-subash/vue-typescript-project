<template>  
   <div>
    
     <main>
        <div class="container-fluid">
            <div class="row">
    
              <div class="col-lg-7 px-0 d-md-none d-sm-none d-none d-lg-block">
                <div class="entry-banner">
    
                  <img src="img/102NepalNeedsYou-SummitPost-Org.jpg" alt="" class="bg-stretch">
    
                </div>
              </div>
              <div class="col-lg-5 px-0">
    
    
                <div class="login-box">
                  
                  <div class="box-title">
                    <h1>Login</h1>
                  </div>
                  <form action="#" method="#">
    
                    <div class="form-group">
    
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Username">
                     
    
                    </div>

                    
    
                    <div class="form-group">
    
                      <input type="password" class="form-control password" id="exampleInputPassword1" placeholder="Password">
                        <p>
                          
                           <router-link to="/ForgetPassword">Forgot password?</router-link>
                                <!-- <a href="forgot-password.html" class="link"></a> -->
                        </p>
                    
                    </div>
                     
                    <div class="spacing">
                       <!-- <a href="" class="default-btn">Login</a> -->
                       <router-link class="default-btn" to="/login">Login</router-link>
                    </div>
                   

                    <p>Don't have an account? 
                      <!-- <a href="signup.html" class="link">Register</a></p> -->
                      <router-link to="/register">Register</router-link></p>
                  </form>
    
                </div>
    
              </div>
            </div>
    
    
          </div>
    </main>
   </div> 
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { authService } from "../_container/AuthenticationService";

@Component({})
export default class Login extends Vue {
  private title: string = "hello from login component";

  constructor() {
    super();
    // console.log(authService.addUser());
  }
}
</script>

