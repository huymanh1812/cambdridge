<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialogTest" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialogTest = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialogTest = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
            <v-layout column>
                <v-flex xs12 v-for="(question,i) in questionList" :key="i">
                    {{question.question}}
                    <v-layout>
                    <v-flex xs3>
                        <v-checkbox v-model="a[i]" :label="question.a"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                        <v-checkbox v-model="b[i]" :label="question.b"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                        <v-checkbox v-model="c[i]" :label="question.c"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                        <v-checkbox v-model="d[i]" :label="question.d"></v-checkbox>
                    </v-flex>
                    </v-layout>
                </v-flex>

            </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import axios from "axios";
  export default {
    data () {
      return {
        dialogTest: false,
        notifications: false,
        sound: true,
        widgets: false,
        a: [],
            b: [],
            c: [],
            d: [],
            questionList : []
      }
    },
    methods: {
        async getList() {
                const response = await axios.get("http://localhost:8086/IeltsQuestion/list");
                this.questionList = response.data.map(
                    elm => ({
                        question: elm.question,
                        a: elm.a,
                        b: elm.b,
                        c: elm.c,
                        d: elm.d
                    })
                );
               
            },
    },
    async mounted() {
            await this.getList();
    }
  }
</script>