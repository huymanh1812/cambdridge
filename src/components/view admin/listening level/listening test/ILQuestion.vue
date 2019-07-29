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
          <v-btn flat slot="activator" class="sucess" @Click="Open1()">
            Add Question
            <v-icon>add</v-icon>
          </v-btn>
          <v-card>
            <v-card-title>
              <h2>ADD QUESTION</h2>
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
                <v-btn color="success" @click="addLog(),reset()">Add</v-btn>
                <v-btn color="error" @click="reset()">Reset</v-btn>
                <v-btn color="primary" @click="Addfilelisten()">Add Listen File</v-btn>
                <v-btn color="success" @click="dialog1=false">Close</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-dialog max-width="600px" v-model="dialogfilelisten">
          <v-card>
            <v-card-title>
              <h2>Add File Listen</h2>
            </v-card-title>
          </v-card>
        </v-dialog>
        <v-dialog max-width="600px" v-model="success">
          <v-card>
            <v-card-title>
              <h2>Add Success</h2>
            </v-card-title>
            <center>
              <v-btn right color="primary" @click="success=false">Close</v-btn>
            </center>
          </v-card>
        </v-dialog>
        <input type="file" @change="onFileSelect()" />
        <v-btn color="primary" @click="onUpload()">Upload</v-btn>
        <!-- <img v-bind:src="'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kozmikanafor.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fkaradelik-61551-blackhole.jpg&imgrefurl=https%3A%2F%2Fwww.kozmikanafor.com%2Fsamanyolunun-merkezi-ve-merkezdeki-karadelik%2F&docid=y6lJ2C0J8yZdXM&tbnid=M9pUC5YeSNG4HM%3A&vet=1&w=1015&h=550&bih=722&biw=1536&ved=2ahUKEwiyydyn5tHjAhWJr48KHe34D7gQxiAoAXoECAEQFQ&iact=c&ictx=1#h=550&imgdii=M9pUC5YeSNG4HM:&vet=1&w=1015'"> -->
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import { setTimeout } from "timers";
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
      dialogfilelisten: false,
      editingTestId: null,
      test: [],
      filteredTestList: [],
      filteredQuestionList: [],
      fullQuestionList: [],
      SelectedFile: null,
      success: false
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
      if (value.average == 1) {
        this.textlevel = "4.0-5.5";
      } else if (value.average == 2) {
        this.textlevel = "5.5-6.5";
      } else this.textlevel = "6.5-7.5";

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

    Addfilelisten() {
      this.dialog1 = false;
      setTimeout(() => {
        this.dialogfilelisten = true;
      }, 200);
    },

    onFileSelect(event) {
      // this.SelectedFile = event.target.files[0];
      console.log("asdasdsa", event);
    },

    onUpload() {},

    async getTestList() {
      const response = await axios.get(`http://localhost:8086/IeltsTest/list`);
      this.filteredTestList = response.data;
      // this.test = this.filteredTestList[0];

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
      this.success = true;
    },
    reset() {
      setTimeout(() => {
        (this.questionObj.name = ""),
          (this.questionObj.question = ""),
          (this.questionObj.a = ""),
          (this.questionObj.b = ""),
          (this.questionObj.c = ""),
          (this.questionObj.d = ""),
          (this.questionObj.result = "");
      }, 1000);
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