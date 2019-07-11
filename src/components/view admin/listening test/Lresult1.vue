<template>
  <div id="lresult1">
    <h2>Result of listening test 1</h2>
    <br />
    <v-app id="inspire">
      <div>
        <v-data-table :headers="headers" :items="desserts">
          <template v-slot:items="props">
            <td>
              <v-edit-dialog
                :return-value.sync="props.item.name"
                lazy
                @save="save"
                @cancel="cancel"
                @open="open"
                @close="close"
              >
                {{ props.item.email }}
                <template v-slot:input>
                  <v-text-field
                    v-model="props.item.email"
                    :rules="[max25chars]"
                    label="Edit"
                    single-line
                    counter
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </td>
            <td class="text-xs-right">{{ props.item.fullname }}</td>
            <td class="text-xs-right">{{ props.item.phonenumber }}</td>
            <td class="text-xs-right">{{ props.item.mark }}</td>
            <!-- <td class="text-xs-right"> -->
              <!-- <v-edit-dialog
                :return-value.sync="props.item.iron"
                large
                lazy
                persistent
                @save="save"
                @cancel="cancel"
                @open="open"
                @close="close"
              >
                <div>{{ props.item.iron }}</div>
                <template v-slot:input>
                  <div class="mt-3 title">Update Iron</div>
                </template>
                <template v-slot:input>
                  <v-text-field
                    v-model="props.item.iron"
                    :rules="[max25chars]"
                    label="Edit"
                    single-line
                    counter
                    autofocus
                  ></v-text-field>
                </template>
              </v-edit-dialog> -->
            <!-- </td> -->
          </template>
        </v-data-table>

        <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
          {{ snackText }}
          <v-btn flat @click="snack = false">Close</v-btn>
        </v-snackbar>
      </div>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snack: false,
      snackColor: "",
      snackText: "",
      max25chars: v => v.length <= 25 || "Input too long!",
      pagination: {},
      headers: [
        {
          text: "Email",
          align: "left",
          sortable: false,
          value: "email"
        },
        { text: "Full Name", value: "fullname" },
        { text: "Your Phone Number", value: "phonenumber" },
        { text: "Mark", value: "mark" },
      ],
      desserts: [
        {
          email: "huymanh1812@gmail.com",
          fullname: "Nguyen Manh Huy",
          phonenumber: "0935330229",
          mark: "70/100"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  methods: {
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      console.log("Dialog closed");
    }
  }
};
</script>

