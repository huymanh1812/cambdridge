<template>
<v-container>
        <v-btn @click="show = !show">toggle</v-btn>
        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon color="grey lighten-1">shopping_cart</v-icon>
            </v-btn>
          </template>
          <span>Programmatic tooltip</span>
        </v-tooltip>
</v-container>
</template>
<script>
  export default {
    data () {
      return {
        show: false,
      }
    },
  }
</script>