<template>
  <v-layout column>
    <v-layout>
    <v-flex xs4>
      <v-flex xs9>
      <v-select :items="levels" label="Choose Level"></v-select>
      </v-flex>
    </v-flex>
    <v-flex xs4>
      <v-flex xs9>
      <v-select :items="tests" label="Choose Test"></v-select>
      </v-flex>
    </v-flex>
    <v-flex xs4>
      <v-btn color="primary" >Find</v-btn>
    </v-flex>
    </v-layout>
    <v-flex xs12>
        <div id="ilquestion">
            <center>
                <h2> Question List </h2>
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

            <!-- <v-dialog max-width="600px" v-model="dialog1">
                <v-btn flat slot="activator" class="sucess" @Click="Open1">
                    Add Question
                    <v-icon>add</v-icon>
                </v-btn>
                <v-card>
                    <v-card-title>
                        <h2>Edit</h2>
                    </v-card-title>
                    <v-card-title>
                       Type :
                    </v-card-title>
                    <v-card-title>
                       Average :
                    </v-card-title>


                    <v-card-text>
                        <v-form class="px-3">
                            <v-text-field
                                    v-model="questionObj.name"
                                    label="Name"
                                    :counter="10"

                                    required
                            >Name</v-text-field>
                            <v-text-field
                                    v-model="questionObj.question"
                                    label="Question"
                                    :counter="50"

                            >Question</v-text-field>
                             <v-text-field
                                    v-model="questionObj.ans"
                                    label="Ans"
                                    :counter="50"

                            >Ans</v-text-field>
                            <v-text-field
                                    v-model="questionObj.a"
                                    label="A"
                                    :counter="50"
                            ></v-text-field>
                            <v-text-field
                                    v-model="questionObj.b"
                                    label="B"
                                    :counter="50"
                            ></v-text-field>
                            <v-text-field
                                    v-model="questionObj.c"
                                    label="C"
                                    :counter="50"
                            ></v-text-field>
                            <v-text-field
                                    v-model="questionObj.d"
                                    label="D"
                                    :counter="50"
                            ></v-text-field>
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
            </v-dialog> -->


        </div>
    </v-flex>
  </v-layout>
</template>
<script>
    import axios from "axios";
    export default {
        props: {
          testId: Number,
        },
        data() {
            return {
                headers: [
                {
                    text: 'Question',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Type', value: 'type' },
                { text: 'Level', value: 'average' },
                { text: 'Content', value: 'question' },
                { text: 'Action'}
                ],
                select: "",
                select2: "",
                editingObj: {
                    name: "",
                    type: "",
                    average: "",
                    question: ""
                },
                questionObj:{
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
                editingTestId: null,
                levels: ['level 4.0-5.5', 'level 5.5-6.5', 'level 6.5-7.5'],
                tests: []
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
            },
        },
        created() {
            this.initialize();
        },
        async mounted() {
            await this.getList();
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
            async getList() {
                const response = await axios.get(`http://localhost:8086/IeltsQuetion/test/${this.testId}`);
                this.a = response.data;
                console.log("data from database", response, response.data);
            },
            async addLog() {
                const response = await axios.post(`http://localhost:8086/IeltsQuestion/${this.testId}`, this.questionObj);
                this.a = response.data;
                console.log(" data from database", response, response.data);
                alert("Thanh cong");
            },
            async deleteLog(id){
                const response = await axios.delete(`http://localhost:8086/IeltsQuestion/${id}`);
                if (response) {
                    console.log(' loi ', response.error);
                }
                await this.getList();
            },
            initialize() {
                (this.select = { state: "", abbr: "" }),
                    (this.items = [
                        { state: "Listening", abbr: "L" },
                        { state: "Reading", abbr: "R" },
                        { state: "Speaking", abbr: "S" },
                        { state: "Writing", abbr: "W" }
                    ]);
                (this.select2 = { state: "", abbr: "" }),
                    (this.items2 = [
                        { state: "4.0-5.5", abbr: "lv1" },
                        { state: "5.5-6.5", abbr: "lv2" },
                        { state: "6.5-7.5", abbr: "lv3" }
                    ]);

            }
        },


    };
</script>