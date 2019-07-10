<template>
  <div id="login">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="sucess">
                  <v-toolbar-title>Login form</v-toolbar-title>
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
                  </v-tooltip>-->
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      prepend-icon="person"
                      name="username"
                      label="User Name"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      id="password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="sucess" style="margin-left: 220px">LOGIN</v-btn>
                </v-card-actions>
                <center>
                  <h2>
                    <a>Not a user?  </a>
                    <a href="/signup">Sign Up</a>
                  </h2>
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
    };
  }
};
</script>
<style scoped>
.theme--light.application {
  background-color: #dcedc8;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: #212121;
  color: #ffffff;
}
a {
  color: #212121;
  font-family: Times New Roman;
}
</style>