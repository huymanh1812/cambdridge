<template>
  <v-flex xs12>
    <div id="illv">
      <center>
        <h2>Level {{$route.params.id}} Listening List Test</h2>
      </center>
      <v-flex xs12 class="table">
        <v-data-table :items="list" class="elevation-1">
          <template v-slot:items="props" v-if="`${props.item.type}===`">
            <td>{{props.item.name}}</td>
            <td>{{props.item.type}}</td>
            <td>{{props.item.average}}</td>

            <td>
              <v-btn @click="Open2(props.item)" fab dark small color="primary">
                <v-icon dark>edit</v-icon>
              </v-btn>
              <v-btn @click="deleteLog(props.item.id)" fab dark small color="cyan">
                <v-icon dark>delete</v-icon>
              </v-btn>
              <v-dialog v-model="dialogTest" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">
          Test
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialogTest = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Test</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialogTest = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!-- <v-list three-line subheader>
          <v-subheader>User Controls</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Content filtering</v-list-tile-title>
              <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Password</v-list-tile-title>
              <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Auto-add widgets</v-list-tile-title>
              <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list> -->
        <v-container>
            <v-layout column>
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
      </v-card>
    </v-dialog>
              <v-btn :to="{name: ilquestion, params:{ questionId: props.item.id }}" fab dark small color="primary">
                <v-icon dark>add</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>

      <!-- <v-dialog max-width="600px" v-model="dialog1"> -->
      <v-dialog max-width="600px">
      <v-card>
      <v-card-title>
      <h2>Edit</h2>
      </v-card-title>
      <v-card-text>
      <v-form class="px-3">
      <v-text-field
      v-model="editingObj.name"
      label="Name"
      :counter="10"

      required
      >Name</v-text-field>
      <v-text-field
      v-model="editingObj.type"
      label="Type"
      :counter="50"

      >To do</v-text-field>
      <v-text-field
      v-model="editingObj.average"
      label="average"
      :counter="50"

      >IdTest</v-text-field>
      <v-btn color="success" @click="addLog()">Save</v-btn>
      <v-btn color="error" @click="reset()">Clear</v-btn>
      </v-form>
      </v-card-text>
      </v-card>
      </v-dialog>

      <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat slot="activator" class="sucess" @Click="Open1">Add Log</v-btn>
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
    </div>
    <router-view></router-view>
  </v-flex>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      a: [],
            b: [],
            c: [],
            d: [],
            questionList : [],
      dialogTest: false,
        notifications: false,
        sound: true,
        widgets: false,
      select: "",
      select2: "",
      editingObj: {
        name: "",
        type: "",
        average: ""
      },
      list: [],
      dialog: false,
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
      // RendertoTest() {
      //   this.$router.push({ name : "iltest", params : {testId: "1"}})
      // },

      Open1() {
          this.editingObj = {};
          this.dialog = true;
      },

      Open2(truyen) {
          this.editingObj = truyen;
          // this.dialog1 = true;
      },
    async getList() {
                const response = await axios.get("http://localhost:8086/IeltsTest/list");
                this.list = response.data;
                const response1 = await axios.get("http://localhost:8086/IeltsQuestion/list");
                console.log("data from database", response1, response1.data);
                this.questionList = response1.data.map(
                    elm => ({
                        question: elm.question,
                        a: elm.a,
                        b: elm.b,
                        c: elm.c,
                        d: elm.d
                    })
                );
            },
            async addLog() {
                const response = await axios.post("http://localhost:8086/IeltsTest", this.editingObj);
                this.a = response.data;
                console.log(" data from database", response, response.data);
            },
            async deleteLog(id){
              console.log(id);
                const response = await axios.delete(`http://localhost:8086/IeltsTest/${id}`)
                
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
  editItem(item) {
    this.editedIndex = this.desserts.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  },
  deleteItem(item) {
    const index = this.desserts.indexOf(item);
    confirm("Are you sure you want to delete this item?") &&
      this.desserts.splice(index, 1);
  },
  close() {
    this.dialog = false;
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    }, 300);
  },

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.desserts[this.editedIndex], this.editedItem);
    } else {
      this.desserts.push(this.editedItem);
    }
    this.close();
  }
};
</script>