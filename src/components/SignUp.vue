<template>
  <div id="signup" style="background-color">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar>
                <v-toolbar-title class="header-form">SignUp Form</v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip> -->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="fullname" label="Full Name" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" name="username" label="User Name" type="text"></v-text-field>
                  <v-text-field prepend-icon="mail" name="email" label="Email" type="Email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Repeat Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="sucess" style="margin-right: 220px">SIGNUP</v-btn>
              </v-card-actions>
                <center>
                    <a href="/login" >
                        <h3>Or Login</h3>
                    </a>
                </center>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
    props: {
         source: String
    },
    data() {
        return {
            drawer: null
        }
    }
}
</script>

<style scoped>
    .theme--light.application{
        background-color: #DCEDC8
    }
    .theme--light.v-toolbar {
        background-color: #212121;
        color: #FFFFFF;
    }
    .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
        background-color: #212121;
        color: #FFFFFF;
    }
    a {
        color: #212121;
        font-family: Times;
    }
</style>
