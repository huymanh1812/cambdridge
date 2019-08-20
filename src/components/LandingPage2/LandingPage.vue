<template>
  <div id="app" class="back">
    <v-container fluid ma-0 pa-0 fill-height>
      <v-layout column>
        <!-- Sidebar -->
        <Sidebar @login-status="value => this.dialogLogin = value" />
        <!-- ------- -->
        <div>
          <v-tabs fixed-tabs color="grey lighten-5" slider-color="grey">
            <v-tab
              v-for="(tab, i) in tabs"
              :key="i"
              :href="tab.href"
              class="black--text"
            ><b>{{tab.name}}</b></v-tab>
            <!---------------------------------------------------- TAB HOME ---------------------------------------------------->
            <v-tab-item :value="'tabHome'">
              <v-content>
                <v-container fluid>
                  <v-layout>
                    <v-flex xs12>
                      <v-container fluid>
                        <v-layout>
                          <v-flex xs12>
                            <!-- Slide Picture -->
                            <Slidepicture />
                            <!-- ------------- -->
                          </v-flex>
                        </v-layout>
                      </v-container>

                      <!-- Content -->
                      <Content />
                      <!-- ------- -->
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-content>
            </v-tab-item>
            <!------------------------------------------------------------------------------------------------------------------>

            <!---------------------------------------------------- TAB BlOG ---------------------------------------------------->
            <v-tab-item :value="'tabBlog'">
              <h1>Blog</h1>
            </v-tab-item>
            <!------------------------------------------------------------------------------------------------------------------>

            <!---------------------------------------------------- TAB NEWS ---------------------------------------------------->
            <v-tab-item :value="'tabNews'">
              <h1>News</h1>
            </v-tab-item>
            <!------------------------------------------------------------------------------------------------------------------>

            <!---------------------------------------------------- TAB EVENTS ---------------------------------------------------->
            <v-tab-item :value="'tabEvents'">
              <h1>Events</h1>
            </v-tab-item>
            <!------------------------------------------------------------------------------------------------------------------>
          </v-tabs>
        </div>
        <!-- Footer -->
        <Footer />
        <!-- ------ -->
        <!-- Signin Form -->
        <v-dialog v-model="dialogLogin" persistent max-width="500">
          <v-card class="mx-auto" max-width="500" color="blue lighten-5" style="color: red">
            <v-card-title class="title font-weight-regular justify-space-between">
              <v-spacer />
              <h2>{{ currentTitleOfLogin }}</h2>
              <v-spacer />
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
                <center>
                  <h2>{{emailOfUser}}</h2>
                </center>
                <v-card-text>
                  <v-text-field v-model="passOfUser" label="Password" type="password"></v-text-field>
                  <span style="font-family: Arial" :class="colorOftempSignin">{{tempSignin}}</span>
                </v-card-text>
              </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
              <em
                v-if="stepLogin === 1"
                flat
                color="red"
                @click="dialogSignup=true,dialogLogin=false"
              >Create an account</em>
              <v-btn v-if="stepLogin === 2" flat color="red" @click="stepLogin--">Back</v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="stepLogin === 1" depressed color="red" @click="isUser">Next</v-btn>
              <v-btn v-if="stepLogin === 2" depressed color="red" @click="isPassword">Login</v-btn>
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
                  <v-text-field v-model="obj.name" label="Full Name"></v-text-field>
                  <v-text-field v-model="obj.email" label="Email"></v-text-field>
                  <span
                    style="font-family: Arial"
                    class="caption grey--text text--darken-1"
                  >This is the email you will use to login to your Cambrige account</span>
                </v-card-text>
              </v-window-item>

              <v-window-item :value="2">
                <v-card-text>
                  <v-text-field v-model="obj.password" label="Password" type="password"></v-text-field>
                  <v-text-field v-model="confirmpassword" label="Confirm Password" type="password"></v-text-field>
                  <span style="font-family: Arial" :class="colorOftempSignup">{{tempSignup}}</span>
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
                  <span style="font-family: Arial" class="caption grey--text">Thanks for signing up!</span>
                </div>
              </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn :disabled="stepSignup === 1" flat color="red" @click="stepSignup--">Back</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                v-if="stepSignup==1 ||  stepSignup==3"
                :disabled="stepSignup === 3"
                color="red"
                depressed
                @click="stepSignup++"
              >Next</v-btn>
              <v-btn v-if="stepSignup==2" color="red" depressed @click="createUser">Next</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- ------- -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

import Sidebar from "./Sidebar/Sidebar.vue";
import Footer from "./Footer/Footer.vue";

import Slidepicture from "./Slidepicture/Slidepicture.vue";
import Content from "./Content/Content.vue";
export default {
  components: {
    Sidebar,
    Footer,
    Slidepicture,
    Content
  },
  data: () => ({
    tabs: [
      { name: "Home", href: "#tabHome" },
      { name: "Blog", href: "#tabBlog" },
      { name: "News", href: "#tabNews" },
      { name: "Events", href: "#tabEvents" }
    ],
    status: true,
    dialogLogin: false,
    dialogSignup: false,
    stepSignup: 1,
    stepLogin: 1,
    emailOfUser: "",
    passOfUser: "",
    nameOfUser: "",
    statusEmail: false,
    statusPassword: false,
    tempSignin: "Please enter your password",
    colorOftempSignin: "caption grey--text text--darken-1",
    obj: {
      password: "",
      name: "",
      email: ""
    },
    confirmpassword: "",
    tempSignup: "Please enter a password for your account",
    colorOftempSignup: "caption grey--text text--darken-1"
  }),
  methods: {
    changStatus() {
      this.status = !this.status;
    },
    async isUser() {
      this.statusEmail = await axios.post(
        `http://localhost:8086/IeltsUser/email`,
        { email: this.emailOfUser }
      );
      console.log(this.statusEmail.data);
      if (this.statusEmail.data) {
        this.stepLogin++;
      } else {
        this.emailOfUser = "NOT EXIST EMAIL !!!";
      }
    },
    async isPassword() {
      this.statusPassword = await axios.post(
        `http://localhost:8086/IeltsUser/password`,
        { password: this.passOfUser, email: this.emailOfUser }
      );
      this.nameOfUser = await axios.post(
        `http://localhost:8086/IeltsUser/name`,
        { email: this.emailOfUser }
      );
      if (this.statusPassword.data) {
        this.$router.push({
          name: "admin",
          params: { id: this.nameOfUser.data },
          query: { email: this.emailOfUser }
        });
      } else {
        this.tempSignin = "Password is wrong !!!";
        this.colorOftempSignin = "caption red--text text--darken-1";
      }
    },
    async createUser() {
      if (this.obj.password != this.confirmpassword) {
        this.tempSignup = "Confirm Password is not same with Password";
        this.colorOftempSignup = "caption red--text text--darken-1";
      } else {
        this.stepSignup++;
        await axios.post(`http://localhost:8086/IeltsUser`, this.obj);
      }
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
  },
  props: {
    source: String
  }
};
</script>
<style scoped>
.back {
  /* background-image: url("https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"); */
  /* background-image: url("http://thuthuatphanmem.vn/uploads/2018/05/23/wallpaper-4k-hinh-nen-4k-thiet-ke-cuc-dep_100024353.jpg");
  background-size: contain;
  background-repeat: repeat-y; */
  /* background-size: cover; */
  /* width: auto; */
  /* height: auto; */
}
</style>
