<template>
<<<<<<< Updated upstream:src/components/TestList.vue
  <v-flex xs12>
    <div id="illv">
      <center>
        <h2>Level {{$route.params.id}} Listening List Test</h2>
      </center>
      <v-flex xs12 class="table">
        <v-data-table :items="a" class="elevation-1">
          <template v-slot:items="props">
            <td>{{props.item.name}}</td>
            <td>{{props.item.type}}</td>
            <td>{{props.item.average}}</td>

            <td>
              <v-btn @click="Open2(props.item)" fab dark small color="primary">
                <v-icon dark>edit</v-icon>
              </v-btn>
              <v-btn @click="deleteLog(props.item.id)" fab dark small color="cyan">
                <v-icon dark>del</v-icon>
              </v-btn>
              <v-btn :to="`${$route.path}/${props.item.id}`" fab dark small color="cyan">
                <v-icon dark>show</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>

      <!--<v-dialog max-width="600px" v-model="dialog1">-->
      <!--<v-btn flat slot="activator" class="sucess">Add Log</v-btn>-->
      <!--<v-card>-->
      <!--<v-card-title>-->
      <!--<h2>Add project</h2>-->
      <!--</v-card-title>-->
      <!--<v-card-text>-->
      <!--<v-form class="px-3">-->
      <!--<v-text-field-->
      <!--v-model="editingObj.name"-->
      <!--label="Name"-->
      <!--:counter="10"-->
      <!--:rules="nameRules"-->
      <!--required-->
      <!--&gt;Name</v-text-field>-->
      <!--<v-text-field-->
      <!--v-model="editingObj.type"-->
      <!--label="Type"-->
      <!--:counter="50"-->
      <!--:rules="todoRules"-->
      <!--&gt;To do</v-text-field>-->
      <!--<v-text-field-->
      <!--v-model="editingObj.average"-->
      <!--label="average"-->
      <!--:counter="50"-->
      <!--:rules="todoRules"-->
      <!--&gt;IdTest</v-text-field>-->
      <!--<v-btn color="success" @click="addLog()">Save</v-btn>-->
      <!--<v-btn color="error" @click="reset()">Clear</v-btn>-->
      <!--</v-form>-->
      <!--</v-card-text>-->
      <!--</v-card>-->
      <!--</v-dialog>-->

      <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat slot="activator" class="sucess">Add Log</v-btn>
        <v-card>
          <v-card-title>
            <h2>Add project</h2>
          </v-card-title>
          <v-card-text>
            <v-form class="px-3">
              <v-select
                v-model="editingObj.type"
                :items="items"
                item-text="state"
                item-value="state"
                label="Select Type"
                persistent-hint
                single-line
              ></v-select>
              <v-select
                v-model="editingObj.average"
                :items="items2"
                item-text="state"
                item-value="state"
                label="Select Level"
                persistent-hint
                single-line
              ></v-select>
              <v-text-field
                v-model="editingObj.name"
                label="Name"
                :counter="50"
              >Average</v-text-field>

              <v-btn color="success" @click="addLog()">Save</v-btn>
              <v-btn color="error" @click="reset()">Clear</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
=======
    <div id="iltest1">
        <h2>Level 1</h2>
        <v-flex xs12 class="table">
            <v-data-table :items="a" class="elevation-1">
                <template v-slot:items="props">
                    <td>{{props.item.name}}</td>
                    <td>{{props.item.type}}</td>
                    <td>{{props.item.average}}</td>

                    <td>
                        <v-btn @click="Open2(props.item)" fab dark small
                               color="primary">
                            <v-icon dark>edit</v-icon>
                        </v-btn>
                        <v-btn @click="deleteLog(props.item.id)" fab dark small color="cyan">
                            <v-icon dark>delete</v-icon>
                        </v-btn>
                        <v-btn :to="{path:'iltest1'}" fab dark small color="cyan">
                            <v-icon dark>T</v-icon>
                        </v-btn>
                        <v-btn :to="{path:'ILTest2', params: {testId: props.item.id}}" fab dark small color="cyan">
                            <v-icon dark>Q</v-icon>
                        </v-btn>
                    </td>
                </template>
            </v-data-table>
        </v-flex>


        <v-dialog max-width="600px" v-model="dialog">


            <v-btn flat slot="activator" class="sucess">Add Log</v-btn>
            <v-btn flat slot="activator" class="sucess">Add Question</v-btn>
            <v-card>
                <v-card-title>
                    <h2>Add project</h2>
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3">
                        <v-select
                                v-model="editingObj.type"

                                :items="items"
                                item-text="state"
                                item-value="state"
                                label="Select Type"
                                persistent-hint
                                single-line
                        ></v-select>
                        <v-select
                                v-model="editingObj.average"

                                :items="items2"
                                item-text="state"
                                item-value="state"
                                label="Select Level"
                                persistent-hint
                                single-line
                        ></v-select>
                        <v-text-field
                                v-model="editingObj.name"
                                label="Name"
                                :counter="50"
                        >Average</v-text-field>

                        <v-btn color="success" @click="addLog()">Save</v-btn>
                        <v-btn color="error" @click="reset()">Clear</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog max-width="600px" v-model="dialog2">
            <v-btn flat slot="activator" class="sucess">Save</v-btn>
            <v-card>
                <v-card-title>
                    <h2>Add project</h2>
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3">
                        <v-text-field v-model="editingObj.name" label="Name">Name</v-text-field>
                        <v-text-field v-model="editingObj.type" label="Todo">Type</v-text-field>
                        <v-text-field v-model="editingObj.average" label="average">Average</v-text-field>
                        <v-btn color="primary" @click="editTruyen()">Save</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>

>>>>>>> Stashed changes:src/components/view admin/listening level/ILlv1.vue
    </div>
</template>
<script>
<<<<<<< Updated upstream:src/components/TestList.vue
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
      a: [],
      dialog: false,
      headers: [
        {
          text: "Title",
          align: "left",
          sortable: false,
          value: "title"
        },
        // { text: "Full Name", value: "fullname" },
        // { text: "Email", value: "email" },
        // { text: "Carbs (g)", value: "carbs" },
        // { text: "Protein (g)", value: "protein" },
        { text: "Actions", value: "name", sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        username: "",
        fullname: "",
        email: ""
        // carbs: 0,
        // protein: 0
      },
      defaultItem: {
        username: "",
        fullname: "",
        email: ""
        // carbs: 0,
        // protein: 0
      }
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
    async getList() {
=======
    import axios from "axios";


    export default {
        data() {
            return {
                select: '',
                select2: '',
                editingObj: {
                    name: '',
                    type: '',
                    average: '',
                },

                a: [],
                dialog: false,
                dialog2: false,
                headers: [
                    {
                        text: "Title",
                        align: "left",
                        sortable: false,
                        value: "title"
                    },

                ],

            };
        },

        created(){
          this.initialize();
        },
        async mounted(){
            await  this.getList();
        }


        ,
        methods: {

            Open2(truyen) {
                this.editingObj = truyen;
                this.dialog2 = true;
            },
            async editTruyen() {
                const response = await axios.put(
                    `http://localhost:8086/IlogData/${this.editingObj.id}`,
                    {
                        id: this.editingObj.id,
                        name: this.editingObj.name,
                        type: this.editingObj.type,
                        average: this.editingObj.average
                    }
                );
                this.a = response.data;
                console.log(" data from database", response, response.data);
            },
            async getList() {
>>>>>>> Stashed changes:src/components/view admin/listening level/ILlv1.vue
                const response = await axios.get("http://localhost:8086/IeltsTest/list");
                this.a = response.data;
                console.log("data from database", response, response.data);
            },
            async addLog() {
                const response = await axios.post("http://localhost:8086/IeltsTest", this.editingObj);
                this.a = response.data;
                console.log(" data from database", response, response.data);
            },

            async deleteLog(id) {
                const response = await axios.delete('http://localhost:8086/IeltsTest/${id}');
                if (response) {
                    console.log(' loi ', response.error);
                }
                await this.getList();
            },

            initialize() {
                (this.select = {state: "", abbr: ""}),
                    (this.items = [
                        {state: "Listening", abbr: "L"},
                        {state: "Reading", abbr: "R"},
                        {state: "Speaking", abbr: "S"},
                        {state: "Writing", abbr: "W"}
                    ]);
                (this.select2 = {state: "", abbr: ""}),
                    (this.items2 = [
                        {state: "4.0-5.5", abbr: "lv1"},
                        {state: "5.5-6.5", abbr: "lv2"},
                        {state: "6.5-7.5", abbr: "lv3"}
                    ]);
            }
        }
    };
</script>