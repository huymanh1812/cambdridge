<template>
    <div id="iltest1">
        <h2>Level 1</h2>
        <v-flex xs12 class="table">
            <v-data-table :items="a" class="elevation-1">
                <template v-slot:items="props">
                    <td title="Name">{{props.item.name}}</td>
                    <td>{{props.item.type}}</td>
                    <td>{{props.item.average}}</td>

                    <td>
                        <v-btn @click="Open2(props.item)" fab dark small
                               color="primary">
                            <v-icon dark>edit</v-icon>
                        </v-btn>
                        <v-btn fab dark small color="cyan">
                            <v-icon dark>remove</v-icon>
                        </v-btn>
                    </td>
                </template>
            </v-data-table>
        </v-flex>






        <v-dialog max-width="600px" v-model="dialog">


            <v-btn flat slot="activator" class="sucess">Add Log</v-btn>
            <v-card>
                <v-card-title>
                    <h2>Add project</h2>
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3">
                        <v-select
                            v-model="select"
                            :hint="`${select.state}, ${select.abbr}`"
                            :items="items"
                            item-text="state"
                            item-value="abbr"
                            label="Select Type"
                            persistent-hint
                            return-object
                            single-line
                        ></v-select>
                        <v-select
                            v-model="select2"
                            :hint="`${select2.state}, ${select2.abbr}`"
                            :items="items2"
                            item-text="state"
                            item-value="abbr"
                            label="Select Level"
                            persistent-hint
                            return-object
                            single-line
                        ></v-select>
                        <v-text-field
                                v-model="editingObj.average"
                                label="average"
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
</template>
<script>
    import axios from "axios";


    export default {
        data() {
            return {
                select: '',
                editingObj: {
                    name: "",
                    type: "",
                    average: "",
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
                    {text: "Actions", value: "name", sortable: false}
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
        // async mounted() {
        //     const response = await axios.get("http://localhost:8086/IeltsTest/list");
        //     this.a = response.data;
        //     console.log("data from database", response, response.data);
        // },

        methods: {
            initialize() {
                this.select = {state: '', abbr: ''},
                    this.items = [
                        {state: 'Listening', abbr: 'L'},
                        {state: 'Reading', abbr: 'R'},
                        {state: 'Speaking', abbr: 'S'},
                        {state: 'Writing', abbr: 'W'}
                    ]
                this.select2 = {state: '', abbr: ''},
                    this.items2 = [
                        {state: '4.0-5.5', abbr: 'lv1'},
                        {state: '5.5-6.5', abbr: 'lv2'},
                        {state: '6.5-7.5', abbr: 'lv3'}
                    ]
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
                        title: "Test 2",
                        //   fullname: "Anh Kiet",
                        //   email: "anhkiet@gmail.com"
                        //   carbs: 24,
                        //   protein: 4.0
                    },
                    // {
                    //   name: "Ice cream sandwich",
                    //   calories: 237,
                    //   fat: 9.0,
                    //   carbs: 37,
                    //   protein: 4.3
                    // },
                    // {
                    //   name: "Eclair",
                    //   calories: 262,
                    //   fat: 16.0,
                    //   carbs: 23,
                    //   protein: 6.0
                    // },
                    // {
                    //   name: "Cupcake",
                    //   calories: 305,
                    //   fat: 3.7,
                    //   carbs: 67,
                    //   protein: 4.3
                    // },
                    // {
                    //   name: "Gingerbread",
                    //   calories: 356,
                    //   fat: 16.0,
                    //   carbs: 49,
                    //   protein: 3.9
                    // },
                    // {
                    //   name: "Jelly bean",
                    //   calories: 375,
                    //   fat: 0.0,
                    //   carbs: 94,
                    //   protein: 0.0
                    // },
                    // {
                    //   name: "Lollipop",
                    //   calories: 392,
                    //   fat: 0.2,
                    //   carbs: 98,
                    //   protein: 0
                    // },
                    // {
                    //   name: "Honeycomb",
                    //   calories: 408,
                    //   fat: 3.2,
                    //   carbs: 87,
                    //   protein: 6.5
                    // },
                    // {
                    //   name: "Donut",
                    //   calories: 452,
                    //   fat: 25.0,
                    //   carbs: 51,
                    //   protein: 4.9
                    // },
                    // {
                    //   name: "KitKat",
                    //   calories: 518,
                    //   fat: 26.0,
                    //   carbs: 65,
                    //   protein: 7
                    // }
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

