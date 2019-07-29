<template>
  <!-- <v-card style="width:100%"> -->
  <v-layout column>
    <v-layout>
      <v-flex xs4>
        <v-flex xs9>
          <v-select :items="levels" label="Choose Level" v-model="level"></v-select>
        </v-flex>
      </v-flex>
      <v-flex xs4>
        <v-flex xs9>
          <v-select
            :items="filteredTestList"
            item-text="name"
            item-value="id"
            label="Choose Test"
            v-model="test"
          ></v-select>
        </v-flex>
      </v-flex>
      <v-btn color="primary" @click="SaveAnswer()">Save</v-btn>
    </v-layout>

    <v-flex xs12>
      <div id="ilquestion">
        <center>
          <h2 v-if="temp==true">Question List</h2>
        </center>
        <v-container>
          <v-layout column>
            <v-flex xs12 v-for="(question,i) in questionList" :key="i">
              Cau {{i+1}}:{{question.question}}
              <v-layout>
                <v-radio-group v-model="question.selected" column v-if="!showedAnswer">
                  <v-radio
                    off-icon="$vuetify.icons.checkboxOff"
                    on-icon="$vuetify.icons.checkboxOn"
                    :label="question.a"
                    value="a"
                    color
                  ></v-radio>

                  <v-radio
                    off-icon="$vuetify.icons.checkboxOff"
                    on-icon="$vuetify.icons.checkboxOn"
                    :label="question.b"
                    value="b"
                    color
                  ></v-radio>

                  <v-radio
                    off-icon="$vuetify.icons.checkboxOff"
                    on-icon="$vuetify.icons.checkboxOn"
                    :label="question.c"
                    value="c"
                    color
                  ></v-radio>

                  <v-radio
                    off-icon="$vuetify.icons.checkboxOff"
                    on-icon="$vuetify.icons.checkboxOn"
                    :label="question.d"
                    value="d"
                    color
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

          <v-btn v-if="temp==true" @click="showAll">Show all answer</v-btn>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";

export default {
  props: {
    testId: Number
  },
  data() {
    return {
      editingObj: {
        name: "",
        type: "",
        average: "",
        question: ""
      },
      questionObj: {
        name: "",
        type: "",
        average: "",
        question: "",
        result: "",
        a: "",
        b: "",
        c: "",
        d: ""
      },
      questionList: [],
      editingTestId: null,
      levels: [
        { text: "level 4.0-5.5", value: 1 },
        { text: "level 5.5-6.5", value: 2 },
        { text: "level 6.5-7.5", value: 3 }
      ],
      level: 0,
      filteredTestList: [],
      fullTestList: [],
      fullQuestionList: [],
      filteredQuestionList: [],
      test: {},
      list: [],
      showedAnswer: false,
      temp: false
    };
  },

  async mounted() {
    await this.getTestListByType();
    await this.getQuestions();
  },

  watch: {
    level(val) {
      if (val && val > 0) {
        this.getTestListByLevel();
      }
    },

    test(value) {
      console.log(" test value", value);
      if (value && value > 0) {
        this.getQuestionByTestId();
      }
      this.temp = true;
    }
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

    async getQuestions() {
      const response = await axios.get(
        `http://localhost:8086/IeltsQuestion/list`
      );
      this.fullQuestionList = response.data;
    },

    getQuestionByTestId() {
      this.filteredQuestionList = this.fullQuestionList.filter(
        question => question.idTest === this.test
      );
      this.questionList = this.filteredQuestionList.map(elm => ({
        question: elm.question,
        a: elm.a,
        b: elm.b,
        c: elm.c,
        d: elm.d,
        result: elm.result
      }));
    },

    async getTestListByType() {
      const type = this.$route.params.typeId;
      const response = await axios.get(
        `http://localhost:8086/IeltsTest/type/${type}`
      );
      this.fullTestList = response.data;
    },

    getTestListByLevel() {
      this.filteredTestList = this.fullTestList.filter(
        test => test.average === this.level
      );
    }
  }
};
</script>
