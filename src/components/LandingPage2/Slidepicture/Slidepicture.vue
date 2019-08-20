<template>
  <v-carousel hide-delimiters>
    <v-card class="mb-5" color="black lighten-4">
      <v-carousel-item contain height="400px" v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-card>
  </v-carousel>
</template>
<script>
var img1 = require("@/images/Nguyen Manh Huy.jpg");
var img2 = require("@/images/ZzHuyDzZ.jpg");
var img3 = require("@/images/ZzHuyDzZ1.jpg");
var img4 = require("@/images/ZzHuyDzZ2.jpg");
var img5 = require("@/images/ZzHuyDzZ3.jpg");
export default {
  data() {
    return {
      items: [
        { src: img1 },
        { src: img2 },
        { src: img3 },
        { src: img4 },
        { src: img5 },
      ]
    };
  }
};
</script>