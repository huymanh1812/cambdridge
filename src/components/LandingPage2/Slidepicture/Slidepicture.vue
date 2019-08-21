<template>
  <v-carousel hide-delimiters>
    <v-card class="mb-5" color="grey lighten-3">
      <v-carousel-item contain height="400px" v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-card>
  </v-carousel>
</template>
<script>
var img1 = require("@/images/slidepicture1.jpg");
var img2 = require("@/images/slidepicture2.jpg");
var img3 = require("@/images/slidepicture3.jpg");
var img4 = require("@/images/slidepicture5.jpg");
// var img5 = require("@/images/ZzHuyDzZ3.jpg");
export default {
  data() {
    return {
      items: [
        { src: img1 },
        { src: img2 },
        { src: img3 },
        { src: img4 },
        // { src: img5 },
      ]
    };
  }
};
</script>