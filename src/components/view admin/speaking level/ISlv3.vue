<template>
  <v-flex xs12>
    <div id="istest3">
      <center>
        <h2>Level 3 Speaking List Test</h2>
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
              <v-btn fab dark small color="cyan">
                <v-icon dark>remove</v-icon>
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
                :rules="todoRules"
              >Average</v-text-field>

              <v-btn color="success" @click="addLog()">Save</v-btn>
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
    const response = await axios.get("http://localhost:8086/IeltsTest/list");
    this.a = response.data;
    console.log("data from database", response, response.data);
  },

  methods: {
    async addLog() {
      const response = await axios.post(
        "http://localhost:8086/IeltsTest",
        this.editingObj
      );
      this.a = response.data;
      console.log(" data from database", response, response.data);
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
      this.desserts = [
        {
          title: "Test 1"
          //   username: "user01",
          //   fullname: "Nguyen Manh Huy",
          //   email: "huymanh1812@gmail.com"
          //   carbs: 24,
          //   protein: 4.0
        },
        {
          title: "Test 2"
          //   fullname: "Anh Kiet",
          //   email: "anhkiet@gmail.com"
          //   carbs: 24,
          //   protein: 4.0
        }
      ];
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