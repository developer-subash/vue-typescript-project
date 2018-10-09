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
                    <h1>Register</h1>
                  </div>
                  <form action="#" method="#">
    
                    <div class="form-group">
    
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Example@email.com">
                     
    
                    </div>

                    <div class="form-group">
    
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                          placeholder="First name">
                       
      
                      </div>

                      <div class="form-group">
    
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Second name">
                         
        
                        </div>
    
                    <div class="form-group">
    
                      <input type="password" class="form-control password" id="exampleInputPassword1" placeholder="Password">
    
                     
                    </div>
                     
                    <div class="spacing">
                       <a href="index.html" class="default-btn">Register</a>
                    </div>
                   
    
                    <p>Already have an account? <router-link to="/login" class="link">Log in</router-link> </p>
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
@Component({})
export default class Register extends Vue {
  private title: string = "hello";

  constructor() {
    super();
    this.title = "changes";
  }
}
</script>

