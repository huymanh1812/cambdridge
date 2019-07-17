<template>
  <div id="listuser">
    <v-app id="inspire">
      <div>
        <v-toolbar flat color="white">
          <v-toolbar-title>List User</v-toolbar-title>
          <v-divider class="mx-2" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <!-- <v-btn color="primary" dark class="mb-2" v-on="on">Add Question</v-btn> -->
              <v-btn dark slot="primary" class="mb-2" @Click="Open1" v-on="on">Add Log</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.name" label="User Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.calories" label="Full Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.fat" label="Email"></v-text-field>
                    </v-flex>
                    <!-- <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                    </v-flex> -->
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.username }}</td>
            <td class="text-xs-right">{{ props.item.fullname }}</td>
            <td class="text-xs-right">{{ props.item.email }}</td>
            <!-- <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td> -->
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
              <v-icon small @click="deleteItem(props.item)">delete</v-icon>
            </td>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-app>
  </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                select: "",
                select2: "",
                editingObj: {
                    name: "",
                    type: "",
                    average: ""
                },
                questionObj:{
                    name: "",
                    type: "",
                    average: "",
                    question: "",
                    ans: "",
                    content: "",
                },
                a: [],
                dialog: false,
                dialog1: false,
                headers: [
                    {
                        text: "Title",
                        align: "left",
                        sortable: false,
                        value: "title"
                    },
                    { text: "Actions", value: "name", sortable: false }
                ],
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
            }
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
                const response = await axios.get("http://localhost:8086/IeltsQuestion/list");
                this.a = response.data;
                console.log("data from database", response, response.data);
            },
            async addLog() {
                const testId = this.$route.params.id;
                console.log(' id ', testId);
                const response = await axios.post(`http://localhost:8086/IeltsQuestion/${testId}`, this.questionObj);
                this.a = response.data;
                console.log(" data from database", response, response.data);
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