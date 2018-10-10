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
                            <h1>Forgot password?</h1>
                          </div>
                          <form action="#" method="#">
            
                            <div class="form-group">
            
                              <input type="email" class="form-control"  aria-describedby="emailHelp"
                                placeholder="example@email.com">
                             
            
                            </div>              
                             
                            <div class="spacing">
                               <a href="dashboard-home.html" class="default-btn">Send email</a>
                            </div>
                           
            
                            <p>Don't have an account? 
                                
                                <router-link :to="{ name:'admin-register'}">Sign up</router-link>
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
@Component
export default class ForgetPassword extends Vue {
  constructor() {
    super();
  }
}
</script>

