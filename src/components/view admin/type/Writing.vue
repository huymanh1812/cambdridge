<template>
  <div id="stest1">
    <v-container>
      <v-layout column>
        <v-flex xs12 v-for="(question,i) in questionList" :key="i">
          {{question.question}}
          <v-layout>
            <v-radio-group v-model="question.selected" column>
              <v-radio
                off-icon="$vuetify.icons.checkboxOff"
                on-icon="$vuetify.icons.checkboxOn"
                :label="question.a"
                value="a"
                :color="getColor(question)"
              ></v-radio>

              <v-radio
                off-icon="$vuetify.icons.checkboxOff"
                on-icon="$vuetify.icons.checkboxOn"
                :label="question.b"
                value="b"
                :color="getColor(question)"
              ></v-radio>

              <v-radio
                off-icon="$vuetify.icons.checkboxOff"
                on-icon="$vuetify.icons.checkboxOn"
                :label="question.c"
                value="c"
                :color="getColor(question)"
              ></v-radio>

              <v-radio
                off-icon="$vuetify.icons.checkboxOff"
                on-icon="$vuetify.icons.checkboxOn"
                :label="question.d"
                value="d"
                :color="getColor(question)"
              ></v-radio>
            </v-radio-group>

            <v-btn @click="show(question)">Show answer</v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-btn @click="showAll">Show all answer</v-btn>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      questionList: [],

      editingObj: {
        name: "",
        type: "",
        average: ""
      },
      list: [],
  
      editingTestId: null,
      showedAnswer: false
    };
  },
 
  async mounted() {
    await this.getList();
  },
  methods: {
  
    // show(question) {
    //   if (question.result.toLowerCase() === question.selected.toLowerCase()) {
    //     console.log(" kit sida");
    //   } else {
    //     console.log(" meo meo");
    //   }
    // },

    getColor(question) {
      return this.showedAnswer &&
        question.selected &&
        question.selected === question.result.toLowerCase()
        ? "red"
        : "";
    },
    showAll() {
      this.showedAnswer = !this.showedAnswer;
    },
    async getList() {
      const response = await axios.get(
        "http://localhost:8086/IeltsQuestion/list"
      );
      this.questionList = response.data;
    }
  }
};
</script>