<template>
  <v-flex xs12>
    <div id="ilquestion">
      <center>
        <h2>Question List</h2>
      </center>
      <v-flex xs12 class="table">
        <v-data-table :headers="headers" :items="a" class="elevation-1">
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
              <v-select
                v-model="questionObj.type"
                :items="types"
                item-text="text"
                item-value="value"
                label="Select Type"
                persistent-hint
                single-line
              ></v-select>
              <v-select
                v-model="questionObj.average"
                :items="levels"
                item-text="text"
                item-value="value"
                label="Select Level"
                persistent-hint
                single-line
              ></v-select>
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
      types:[
          {text:'Listening',value:'listening'},
          {text:'Reading',value:'reading'},
          {text:'Speaking',value:'speaking'},
          {text:'Writing',value:'writing'}
      ],
      levels:[
          {text:'level 4.0-5.5',value:'1'},
          {text:'level 5.5-6.5',value:'2'},
          {text:'level 6.5-7.5',value:'3'}
      ],
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
        a: "",
        b: "",
        c: "",
        d: ""
      },
      a: [],
      dialog: false,
      dialog1: false,
      editingTestId: null
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
    async testId(val) {
      if (val) {
        await this.getList();
      }
    }
  },
  async mounted() {
    const response = await axios.get("http://localhost:8086/IeltsQuestion/list");
    this.a = response.data;
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
    // async getList() {
    //   const response = await axios.get(
    //     `http://localhost:8086/IeltsQuetion/list`
    //   );
    //   this.a = response.data;
    //   console.log("data from database", response, response.data);
    // },
    async addLog() {
      const response = await axios.post(
        "http://localhost:8086/IeltsQuestion",
        this.questionObj
      );
      this.a = response.data;
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
      await this.getList();
    }
  }
};
</script>