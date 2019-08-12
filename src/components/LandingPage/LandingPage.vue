<template>
  <v-container>
    <v-layout column>
      <!-- Sidebar -->
      <Sidebar @login-status="value => this.dialogLogin = value" />
      <!-- ------- -->
      <v-content>
        <v-container fluid>
          <v-layout>
            <v-flex>
              <!-- Slide Picture -->
              <Slidepicture />
              <!-- ------------- -->
              <!-- Timeline -->
              <Timeline />  
              <!-- -------- -->

              <!-- Signin Form -->
              <v-dialog v-model="dialogLogin" persistent max-width="500">
                <v-card class="mx-auto" max-width="500" color="blue lighten-5" style="color: red">
                  <v-card-title class="title font-weight-regular justify-space-between">
                    <v-spacer/>
                    <h2>{{ currentTitleOfLogin }}</h2>
                    <v-spacer/>
                    <v-avatar color="red" class="subheading white--text" size="24">
                      <v-tooltip top>
                        <template v-slot:activator="{ on }">
                          <v-icon @click="dialogLogin=false" v-on="on">close</v-icon>
                        </template>
                        <span>Close</span>
                      </v-tooltip>
                    </v-avatar>
                  </v-card-title>

                  <v-window v-model="stepLogin">
                    <v-window-item :value="1">
                     
                      <v-card-text>
                        <v-text-field v-model="emailOfUser" label="Email"></v-text-field>
                      </v-card-text>
                    </v-window-item>

                    <v-window-item :value="2">
                     <center><h2>{{emailOfUser}}</h2></center>
                      <v-card-text>
                        <v-text-field label="Password" type="password"></v-text-field>
                        <span
                          style="font-family: Arial"
                          class="caption grey--text text--darken-1"
                        >Please enter your password</span>
                      </v-card-text>
                    </v-window-item>
                  </v-window>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <em v-if="stepLogin === 1" flat color="red" @click="dialogSignup=true,dialogLogin=false">Create an account</em>
                    <v-btn v-if="stepLogin === 2" flat color="red" @click="stepLogin--">Back</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-if="stepLogin === 1" depressed color="red" @click="stepLogin++">Next</v-btn>
                    <v-btn v-if="stepLogin === 2" depressed color="red" href="/admin">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!-- ------- -->

              <!-- Signup Form -->
              <v-dialog v-model="dialogSignup" persistent max-width="500">
                <v-card class="mx-auto" max-width="500" color="blue lighten-5" style="color: red">
                  <v-card-title class="title font-weight-regular justify-space-between">
                    <h2>{{ currentTitleOfSignup }}</h2>
                    <v-avatar color="red" class="subheading white--text" size="24">
                      <v-tooltip top>
                        <template v-slot:activator="{ on }">
                          <v-icon @click="dialogSignup=false" v-on="on">close</v-icon>
                        </template>
                        <span>Close</span>
                      </v-tooltip>
                    </v-avatar>
                  </v-card-title>

                  <v-window v-model="stepSignup">
                    <v-window-item :value="1">
                     
                      <v-card-text>
                        <v-text-field label="Full Name"></v-text-field>
                        <v-text-field label="Email"></v-text-field>
                        <span
                          style="font-family: Arial"
                          class="caption grey--text text--darken-1"
                        >This is the email you will use to login to your Cambrige account</span>
                      </v-card-text>
                    </v-window-item>

                    <v-window-item :value="2">
                      <v-card-text>
                        <v-text-field label="Password" type="password"></v-text-field>
                        <v-text-field label="Confirm Password" type="password"></v-text-field>
                        <span
                          style="font-family: Arial"
                          class="caption grey--text text--darken-1"
                        >Please enter a password for your account</span>
                      </v-card-text>
                    </v-window-item>

                    <v-window-item :value="3">
                      <div class="pa-3 text-xs-center">
                        <v-img
                          class="mb-3"
                          contain
                          height="128"
                          src="https://www.cambridge.org/us/files/1214/1225/1877/Open-Access-icons-3-blue.png"
                        ></v-img>
                        <h3 class="title font-weight-light mb-2">Welcome to Cambrige</h3>
                        <span
                          style="font-family: Arial"
                          class="caption grey--text"
                        >Thanks for signing up!</span>
                      </div>
                    </v-window-item>
                  </v-window>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-btn :disabled="stepSignup === 1" flat color="red" @click="stepSignup--">Back</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="stepSignup === 3" color="red" depressed @click="stepSignup++">Next</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!-- ------- -->

            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <!-- Footer -->
      <Footer />
      <!-- ------ -->
    </v-layout>
  </v-container>
</template>

<script>
import Sidebar from "./Sidebar/Sidebar.vue";
import Footer from "./Footer/Footer.vue";
import Timeline from "./Timeline/Timeline.vue";
import Slidepicture from "./Slidepicture/Slidepicture.vue"
export default {
  components: {
    Sidebar,
    Footer,
    Timeline,
    Slidepicture
  },
  data: () => ({
    status: true,
    dialogLogin: false,
    dialogSignup: false,
    stepSignup: 1,
    stepLogin: 1,
    emailOfUser: ""
  }),
  methods: {
    changStatus() {
      this.status = !this.status;
    }
  },
  computed: {
    currentTitleOfLogin() {
      switch (this.stepLogin) {
        case 1:
          return "LOGIN";
        default:
          return "Welcome";          
      }
    },
    currentTitleOfSignup() {
      switch (this.stepSignup) {
        case 1:
          return "SIGN-UP";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    }
  }
};
</script>
