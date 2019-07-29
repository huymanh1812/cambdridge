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
    SaveAnswer() {
      alert("luu thanh cong");
      console.log("asdasd", this.a[0]);
      console.log("asdasd", this.b[0]);
      console.log("asdasd", this.c[0]);
      console.log("asdasd", this.d[0]);
    },

    // show(question) {
    //   if (question.result.toLowerCase() === question.selected.toLowerCase()) {
    //     alert("You are correct");
    //     // question.result = "red";
    //   } else {
    //     alert("You are wrong");
    //   }
    //   console.log(question.selected.toLowerCase());

    // },
    getColor(question) {
      return this.showedAnswer &&
        question.selected &&
        question.selected.toLowerCase() === question.result.toLowerCase()
        ? "red"
        : "blue";
      // return question.selected = "blue";
    },
    showAll() {
      this.showedAnswer = !this.showedAnswer;
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
