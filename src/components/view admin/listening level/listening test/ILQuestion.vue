<template>
  <v-layout column>
    <v-layout>
      <v-flex xs3>
        <v-flex xs12>
          <v-select
            v-model="test"
            :items="filteredTestList"
            item-text="name"
            return-object
            label="Choose Test"
            persistent-hint
            single-line
          ></v-select>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3>
        <div>Id Test: {{this.questionObj.id_test}}</div>
        <div>Type: {{this.questionObj.type}}</div>
        <div>Level: {{textlevel}}</div>
        <!-- <v-text-field v-model="test" label="Level" disabled>{{questionObj.id_test}}</v-text-field> -->
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <div id="ilquestion">
        <center>
          <h2>Question List</h2>
        </center>
        <v-flex xs12 class="table">
          <v-data-table :headers="headers" :items="filteredQuestionList" class="elevation-1">
            <template v-slot:items="props">
              <td>{{props.item.name}}</td>
              <td>{{props.item.type}}</td>
              <td>{{props.item.average}}</td>
              <td>{{props.item.question}}</td>

              <td>
                <v-btn @click="Open2(props.item)" fab dark small color="primary">
                  <v-icon dark>edit</v-icon>
                </v-btn>
                <v-btn @click="deleteLog(props.item.id)" fab dark small color="cyan">
                  <v-icon dark>delete</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </v-flex>

        <v-dialog max-width="600px" v-model="dialog1">
          <v-btn flat slot="activator" class="sucess" @Click="Open1">
            Add Question
            <v-icon>add</v-icon>
          </v-btn>
          <v-card>
            <v-card-title>
              <h2>Edit</h2>
            </v-card-title>

            <v-card-text>
              <v-form class="px-3">
                <v-text-field
                  :label="`Type: ${this.questionObj.type}`"
                  disabled
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-text-field
                  :label="`Level: ${this.textlevel}`"
                  disabled
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-text-field
                  :label="`Id_test: ${this.questionObj.id_test}`"
                  disabled
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-text-field v-model="questionObj.name" label="Name" :counter="10" required>Name</v-text-field>
                <v-text-field v-model="questionObj.question" label="Question" :counter="50">Question</v-text-field>
                <v-text-field v-model="questionObj.a" label="A" :counter="50"></v-text-field>
                <v-text-field v-model="questionObj.b" label="B" :counter="50"></v-text-field>
                <v-text-field v-model="questionObj.c" label="C" :counter="50"></v-text-field>
                <v-text-field v-model="questionObj.d" label="D" :counter="50"></v-text-field>
                <v-text-field
                  v-model="questionObj.result"
                  label="Correct Answer(A/B/C/D)"
                  :counter="50"
                ></v-text-field>
                <v-btn color="success" @click="addLog(),dialog1=false">Save</v-btn>
                <v-btn color="error" @click="reset()">Clear</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  // props: {
  //   testId: Number
  // },
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
      types: [
        { text: "Listening", value: "listening" },
        { text: "Reading", value: "reading" },
        { text: "Speaking", value: "speaking" },
        { text: "Writing", value: "writing" }
      ],
      levels: [
        { text: "level 4.0-5.5", value: "1" },
        { text: "level 5.5-6.5", value: "2" },
        { text: "level 6.5-7.5", value: "3" }
      ],
      fullTestList: [],
      tests: [],
      select: "",
      select2: "",
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
        id_test: "",
        a: "",
        b: "",
        c: "",
        d: ""
      },
      textlevel: "",
      a: [],
      dialog: false,
      dialog1: false,
      editingTestId: null,
      test: "",
      filteredTestList: [],
      filteredQuestionList: [],
      fullQuestionList: []
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Test" : "Edit Test";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    // async testId(val) {
    //   if (val) {
    //     await this.getList();
    //   }
    // },
    test(value) {
      console.log(value);
      this.questionObj.id_test = value.id;
      this.questionObj.type = value.type;
      this.questionObj.average = value.average;
      if (value.average == 1)
      {
        this.textlevel = "4.0-5.5";
      }
      else if (value.average == 2) {
        this.textlevel = "5.5-6.5";
      }
      else this.textlevel = "6.5-7.5";
      
      // this.id_test = value;
      if (value.id && value.id > 0) {
        this.getListQuestionByTestId();
      }
    }
  },
  async mounted() {
    await this.getTestList();
    await this.getQuestions();
  },
  methods: {
    Open1() {
      this.editingObj = {};
      this.dialog = true;
    },

    Open2(truyen) {
      this.editingObj = truyen;
      this.dialog1 = true;
    },
    async getTestList() {
      const response = await axios.get(`http://localhost:8086/IeltsTest/list`);
      this.filteredTestList = response.data;
      console.log(response.data);
    },
    getListQuestionByTestId() {
      console.log("sdfsdf", this.fullQuestionList);
      console.log("object", this.test);
      this.filteredQuestionList = this.fullQuestionList.filter(
        question => question.idTest == this.test.id
      );
    },
    async getQuestions() {
      const response = await axios.get(
        `http://localhost:8086/IeltsQuestion/list`
      );
      this.fullQuestionList = response.data;
    },
    async addLog() {
      const response = await axios.post(
        `http://localhost:8086/IeltsQuestion/${this.test.id}`,
        this.questionObj
      );
      this.filteredQuestionList = response.data;
      console.log(" data from database", response, response.data);
      alert("Thanh cong");
    },
    async deleteLog(id) {
      const response = await axios.delete(
        `http://localhost:8086/IeltsQuestion/${id}`
      );
      if (response) {
        console.log(" loi ", response.error);
      }
      await this.getListQuestionByTestId();
    }
  }
};
</script>