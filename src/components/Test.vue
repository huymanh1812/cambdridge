<template>
  <v-layout>
    <v-flex xs12>
      <v-btn :to="`${$route.path}/questions`">Abc</v-btn>
    </v-flex>
  </v-layout>
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
    await this.getList();
  },
  methods: {
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
                const response = await axios.delete("http://localhost:8086/IeltsTest/${id}");
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