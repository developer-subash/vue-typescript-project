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
    
                      <input type="email" class="form-control"  aria-describedby="emailHelp"
                        placeholder="Username">
                     
    
                    </div>

                    
    
                    <div class="form-group">
    
                      <input type="password" class="form-control password"  placeholder="Password">
                        <p>
                                <router-link :to="{name:'admin-forgetpassword'}" class="link">Forgot password?</router-link>
                        </p>
                    
                    </div>
                     
                    <div class="spacing">
                       <a href="index.html" class="default-btn">Login</a>
                    </div>
                   
    
                    <p>Don't have an account? 
                      <router-link :to="{ name:'admin-register'}" class="link">Register</router-link>
                      </p>
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
    console.log(authService.addUser());
  }
}
</script>

