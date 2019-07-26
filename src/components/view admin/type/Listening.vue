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
      <v-flex xs4>
        <!-- <v-btn color="primary" @Click="findList()">Find</v-btn> -->
      </v-flex>
    </v-layout>

    <v-flex xs12>
      <div id="ilquestion">
        <center>
          <h2>Question List</h2>
        </center>
        <v-container>
          <v-layout column>
            <!-- <v-layout justify-center>
                    <v-flex>
                        <h3>Listening</h3>
                    </v-flex>
            </v-layout>-->
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
      </div>
    </v-flex>
  </v-layout>
  <!-- </v-card> -->
</template>
<script>
import axios from "axios";

export default {
  props: {
    testId: Number
  },
  data() {
    return {
      headers: [
        {
          text: "Question",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Type", value: "type" },
        { text: "Level", value: "average" },
        { text: "Content", value: "question" },
        { text: "Action" }
      ],
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
      a: [],
      b: [],
      c: [],
      d: [],
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
      test: {}
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
    }
  },

  methods: {
    // findList() {
    // },
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
        d: elm.d
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
