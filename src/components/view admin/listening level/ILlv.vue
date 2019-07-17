<template>
  <v-flex xs12>
    <div id="illv">
      <center>
        <h2>Level {{$route.params.id}} Listening List Test</h2>
      </center>
      <v-flex xs12 class="table">
        <v-data-table :items="a" class="elevation-1">
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
              <v-btn :to="{path:`/admin/type/listening/iltest/${props.item.id}`}" fab dark small color="cyan">
                <v-icon dark>insert_drive_file</v-icon>
              </v-btn>
              <v-btn :to="{path:`/admin/type/listening/ilquestion/${props.item.id}`}" fab dark small color="primary">
                <v-icon dark>add</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>

      <v-dialog max-width="600px" v-model="dialog1">

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
                const response = await axios.get("http://localhost:8086/IeltsTest/list");
                this.a = response.data;
                console.log("data from database", response, response.data);
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