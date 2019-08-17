<template>
  <v-timeline>
    <v-timeline-item v-for="n in 4" :key="n" color="red lighten-2" >
      <template v-slot:opposite>
        <span style="font-family: Arial; color: white">Tus eu perfecto</span>
      </template>
      <v-card class="elevation-2" color="indigo lighten-3">
        <v-card-title class="headline" style="color: red">Lorem ipsum</v-card-title>
        <v-card-text
          style="font-family: Arial"
        >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
