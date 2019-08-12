<template>
  <v-toolbar app absolute clipped-left>
    <v-toolbar-title>
      <h1 style="color: red">Cambridge Page</h1>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn flat @click="login">
        <h3>LOGIN</h3>
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

