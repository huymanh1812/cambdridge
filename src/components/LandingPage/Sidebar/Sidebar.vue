<template>
  <v-toolbar app absolute clipped-left color="purple darken-4">
    <v-toolbar-title>
      <h1 style="color: orange"><i>Cambridge Page</i></h1>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn flat @click="login">
        <h3 style="color: white">LOGIN</h3>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data: () => ({}),
  methods: {
    login() {
      this.$emit("login-status", true);
    }
  }
};
</script>

