<template>
  <!-- <v-card style="width:100%"> -->
  <v-layout column>
    <v-flex xs12>
      <div>
        <center>
          <h2>Test List</h2>
        </center>
        <v-flex xs12 class="table">
          <v-data-table :headers="headers" :items="filteredTestList" class="elevation-1">
            <template v-slot:items="props">
              <td>{{props.item.id}}</td>
              <td v-if="props.item.average==1">Level 4.0 - 5.5</td>
              <td v-if="props.item.average==2">Level 5.5 - 6.5</td>
              <td v-if="props.item.average==3">Level 6.5 - 7.5</td>
              <td>{{props.item.name}}</td>
              <td>{{props.item.type}}</td>
              <td>
                <v-btn @click="EditObj(props.item)" fab dark small color="primary">
                  <v-icon dark>edit</v-icon>
                </v-btn>
                <v-btn @click="deleteLog(props.item.id)" fab dark small color="cyan">
                  <v-icon dark>delete</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
          <v-btn color="primary" @click="AddTest()">Add New Test</v-btn>
        </v-flex>
        <!--  -->
        <!-- Dialog Add Test -->
        <!--  -->
        <v-dialog max-width="600px" v-model="dialogAddTest">
          <v-card>
            <v-card-title>
              <h2>ADD TEST</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3">
                <v-select
                  v-model="addObj.average"
                  :items="levels"
                  label="Select Level"
                  persistent-hint
                  single-line
                ></v-select>
                <v-select
                  v-model="addObj.type"
                  :items="types"
                  label="Select Type"
                  persistent-hint
                  single-line
                ></v-select>
                <v-text-field
                  v-model="addObj.name"
                  label="Name of Test"
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-btn color="success" @click="addLog(),reset()">Add</v-btn>
                <v-btn color="error" @click="reset()">Reset</v-btn>
                <v-btn color="success" @click="dialogAddTest=false">Close</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!--  -->
        <!-- Dialog Announcement Success -->
        <!--  -->
        <v-dialog max-width="600px" v-model="success">
          <v-card>
            <v-card-title>
              <h2>Successful</h2>
            </v-card-title>
            <center>
              <v-btn right color="primary" @click="success=false">Close</v-btn>
            </center>
          </v-card>
        </v-dialog>
        <!--  -->
        <!-- Dialog Edit Test -->
        <!--  -->
        <v-dialog max-width="600px" v-model="dialogEditTest">
          <v-card>
            <v-card-title>
              <h2>EDIT TEST</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3">
                <v-select
                  v-model="addObj.average"
                  :items="levels"
                  :label="`${editObj.level}`"
                  persistent-hint
                  single-line
                ></v-select>
                <v-select
                  v-model="addObj.type"
                  :items="types"
                  :label="`${editObj.type}`"
                  persistent-hint
                  single-line
                ></v-select>
                <v-text-field
                  v-model="addObj.name"
                  :label="`${editObj.name}`"
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-btn color="success" @click="UpdateTest()">Edit</v-btn>
                <v-btn color="success" @click="dialogEditTest=false">Close</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!--  -->
      </div>
    </v-flex>
  </v-layout>
  <!-- </v-card> -->
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Level", value: "average" },
        { text: "Name", value: "name" },
        { text: "Type", value: "type" },
        { text: "Action" }
      ],
      editObj: {
          id: "",
        name: "",
        type: "",
        level: ""
      },
      addObj: {
        name: "",
        type: "",
        average: ""
      },
      editingTestId: null,
      levels: [
        { text: "Level 4.0 - 5.5", value: 1 },
        { text: "Level 5.5 - 6.5", value: 2 },
        { text: "Level 6.5 - 7.5", value: 3 }
      ],
      types: [
        { text: "Listening", value: "listening" },
        { text: "Reading", value: "reading" },
        { text: "Speaking", value: "speaking" },
        { text: "Writing", value: "writing" }
      ],
      filteredTestList: [],
      test: {},
      dialogAddTest: false,
      dialogEditTest: false,
      success: false,
    };
  },
  async mounted() {
    await this.getTest();
  },
  methods: {
    async getTest() {
      const response = await axios.get(`http://localhost:8086/IeltsTest/list`);
      this.filteredTestList = response.data;
    },
    AddTest() {
      this.dialogAddTest = true;
    },
    async addLog() {
      await axios.post(
        `http://localhost:8086/IeltsTest`,
        this.addObj
      );
      this.success = true;
      await this.getTest();
    },
    reset() {
      setTimeout(() => {
        this.addObj.name = "";
      }, 1000);
    },
    async EditObj(obj) {
      this.dialogEditTest = true;
      if (obj.average == 1) {
        this.editObj.level = "Level 4.0 - 5.5";
      } else if (obj.average == 2) {
        this.editObj.level = "Level 5.5 - 6.5";
      } else {
        this.editObj.level = "Level 6.5 - 7.5";
      }
      this.editObj.type = obj.type;
      this.editObj.name = obj.name;
      this.editObj.id = obj.id; 
    },
    async UpdateTest() {
        if (this.addObj.average == "") {
            if (this.editObj.level == "Level 4.0 - 5.5")
                this.addObj.average = 1
            if (this.editObj.level == "Level 5.5 - 6.5")
                this.addObj.average = 2
            if (this.editObj.level == "Level 6.5 - 7.5")
                this.addObj.average = 3
        }
        if (this.addObj.type == "") {
            this.addObj.type = this.editObj.type;
        }
        if (this.addObj.name == "") {
            this.addObj.name = this.editObj.name;
        }
        await axios.put(
        `http://localhost:8086/IeltsTest/${this.editObj.id}`,
        this.addObj
      );
      this.success = true;
      await this.getTest();
    },
    async deleteLog(id) {
      await axios.delete(`http://localhost:8086/IeltsTest/${id}`);
      await this.getTest();
      alert("Delete Test Successful");
    }
  }
};
</script>
