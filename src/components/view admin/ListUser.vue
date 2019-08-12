<template>
  <v-layout column>
    <v-flex xs12>
      <div>
        <center>
          <h2>User List</h2>
        </center>
        <v-flex xs12 class="table">
          <v-data-table :headers="headers" :items="filteredUserList" class="elevation-1">
            <template v-slot:items="props">
              <td>{{props.item.id}}</td>
              <td>{{props.item.name}}</td>
              <td>{{props.item.email}}</td>
              <td>{{props.item.password}}</td>
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
          <v-btn color="primary" @click="AddUser()">Add New User</v-btn>
        </v-flex>
        <!--  -->
        <!-- Dialog Add User -->
        <!--  -->
        <v-dialog max-width="600px" v-model="dialogAddUser">
          <v-card>
            <v-card-title>
              <h2>ADD USER</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3">
                <v-text-field
                  v-model="addObj.name"
                  label="Enter Your Name"
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-text-field
                  v-model="addObj.email"
                  label="Enter Your Email"
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-text-field
                  v-model="addObj.password"
                  label="Enter Your Password"
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-btn color="success" @click="addLog(),reset()">Add</v-btn>
                <v-btn color="error" @click="reset()">Reset</v-btn>
                <v-btn color="success" @click="dialogAddUser=false">Close</v-btn>
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
        <!-- Dialog Edit User -->
        <!--  -->
        <v-dialog max-width="600px" v-model="dialogEditUser">
          <v-card>
            <v-card-title>
              <h2>EDIT USER</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3">
                <v-text-field
                  v-model="addObj.name"
                  :label="`${editObj.name}`"
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-text-field
                  v-model="addObj.email"
                  :label="`${editObj.email}`"
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-text-field
                  v-model="addObj.password"
                  :label="`${editObj.password}`"
                  persistent-hint
                  single-line
                ></v-text-field>
                <v-btn color="success" @click="UpdateUser()">Edit</v-btn>
                <v-btn color="success" @click="dialogEditUser=false">Close</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!--  -->
      </div>
    </v-flex>
  </v-layout>
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
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Password", value: "password" },
        { text: "Action" }
      ],
      editObj: {
          id: "",
        name: "",
        email: "",
        password: ""
      },
      addObj: {
        name: "",
        email: "",
        password: ""
      },
      filteredUserList: [],
      dialogAddUser: false,
      dialogEditUser: false,
      success: false,
    };
  },
  async mounted() {
    await this.getUser();
  },    
  methods: {
    async getUser() {
      const response = await axios.get(`http://localhost:8086/IeltsUser/list`);
      this.filteredUserList = response.data;
    },
    AddUser() {
      this.dialogAddUser = true;
    },
    async addLog() {
      await axios.post(
        `http://localhost:8086/IeltsUser`,
        this.addObj
      );
      this.success = true;
      await this.getUser();
    },
    reset() {
      setTimeout(() => {
        this.addObj.name = "";
        this.addObj.email = "";
        this.addObj.password = "";
      }, 1000);
    },
    async EditObj(obj) {
      this.dialogEditUser = true;
    this.editObj.email = obj.email;
      this.editObj.password = obj.password;
      this.editObj.name = obj.name;
      this.editObj.id = obj.id; 
    },
    async UpdateUser() {
        if (this.addObj.name == "") {
            this.addObj.name = this.editObj.name;
        }
        if (this.addObj.email == "") {
            this.addObj.email = this.editObj.email;
        }
        if (this.addObj.password == "") {
            this.addObj.password = this.editObj.password;
        }
        await axios.put(
        `http://localhost:8086/IeltsUser/${this.editObj.id}`,
        this.addObj
      );
      this.success = true;
      await this.getUser();
    },
    async deleteLog(id) {
      await axios.delete(`http://localhost:8086/IeltsUser/${id}`);
      await this.getUser();
      alert("Delete User Successful");
    }
  }
};
</script>
