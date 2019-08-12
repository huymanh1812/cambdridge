<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" color="blue" step="1">Name of step 1</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" color="blue" step="2">Name of step 2</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" color="blue">Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-5" color="blue lighten-4" height="200px"></v-card>
        <v-btn color="red" @click="e1 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-5" color="red lighten-4" height="200px"></v-card>

        <v-btn color="red" @click="e1 = 3">Continue</v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-5" color="green lighten-4" height="200px"></v-card>

        <v-btn color="red" @click="e1 = 1">Continue</v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      e1: 0
    };
  },
  methods: {
    autoTransition(step) {
      this.e1 = step;
      setTimeout(() => {
        if (step == 3) {
          this.autoTransition(1);
        }else if (step == 0) {
          this.autoTransition(step+2);
        }else this.autoTransition(step+1);
      }, 2000);
    }
  },
  mounted() {
    this.autoTransition(0);
  }
};
</script>