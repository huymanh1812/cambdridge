<template>
  <div id="stest1">
    <v-container>
      <v-layout column>
        <v-flex xs12 v-for="(question,i) in questionList" :key="i">
          {{question.question}}
          <v-layout>
            <v-radio-group v-model="question.selected" column v-if="!showedAnswer">
              <v-radio
                off-icon="$vuetify.icons.checkboxOff"
                on-icon="$vuetify.icons.checkboxOn"
                :label="question.a"
                value="a"
                color=""
              ></v-radio>

              <v-radio
                off-icon="$vuetify.icons.checkboxOff"
                on-icon="$vuetify.icons.checkboxOn"
                :label="question.b"
                value="b"
                color=""
              ></v-radio>

              <v-radio
                off-icon="$vuetify.icons.checkboxOff"
                on-icon="$vuetify.icons.checkboxOn"
                :label="question.c"
                value="c"
                color=""
              ></v-radio>

              <v-radio
                off-icon="$vuetify.icons.checkboxOff"
                on-icon="$vuetify.icons.checkboxOn"
                :label="question.d"
                value="d"
                color=""
              ></v-radio>
            </v-radio-group>

            <div v-if="showedAnswer">
              <v-checkbox
                :input-value="isResultOrSelected(question, 'a')"
                :label="question.a"
                readonly
                :color="isResult(question, 'a') ? 'red' : ''"
              ></v-checkbox>
              <v-checkbox
                :input-value="isResultOrSelected(question, 'b')"
                :label="question.b"
                readonly
                :color="isResult(question, 'b') ? 'red' : ''"
              ></v-checkbox>
              <v-checkbox
                :input-value="isResultOrSelected(question, 'c')"
                :label="question.c"
                readonly
                :color="isResult(question, 'c') ? 'red' : ''"
              ></v-checkbox>
              <v-checkbox
                :input-value="isResultOrSelected(question, 'd')"
                :label="question.d"
                readonly
                :color="isResult(question, 'd') ? 'red' : ''"
              ></v-checkbox>
            </div>
            <!-- <v-btn @click="show(question)">Show answer</v-btn> -->
          </v-layout>
        </v-flex>
      </v-layout>
      <v-btn @click="showAll()">Show all answer</v-btn>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      questionList: [],

      list: [],

      editingTestId: null,
      showedAnswer: false
    };
  },

  async mounted() {
    await this.getList();
  },
  methods: {
    showAll() {
      this.showedAnswer = true;
    },
    isResult(question, checkbox) {
      return question.result.toLowerCase() === checkbox.toLowerCase();
    },
    isSelected(question, checkbox) {
      return question.selected.toLowerCase() === checkbox.toLowerCase();
    },

    isResultOrSelected(question, checkbox) {
      return (
        this.isResult(question, checkbox) || this.isSelected(question, checkbox)
      );
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