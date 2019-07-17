<template>
    <v-flex xs12>
        <div id="illv">
            <center>
                <h2> Question List </h2>
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
                                <v-icon dark>delete</v-icon>
                            </v-btn>
                            <v-btn :to="{path:`/admin/iltest/${props.item.id}`}" fab dark small color="cyan">
                                <v-icon dark>insert_drive_file</v-icon>
                            </v-btn>
                            <v-btn :to="{path:`/admin/ilquestion/${props.item.id}`}" fab dark small color="primary">
                                <v-icon dark>add</v-icon>
                            </v-btn>
                        </td>
                    </template>
                </v-data-table>
            </v-flex>

            <v-dialog max-width="600px" v-model="dialog1">
                <v-btn flat slot="activator" class="sucess" @Click="Open1">Add Log</v-btn>
                <v-card>
                    <v-card-title>
                        <h2>Edit</h2>
                    </v-card-title>
                    <v-card-title>
                       Type :
                    </v-card-title>
                    <v-card-title>
                       Average :
                    </v-card-title>


                    <v-card-text>
                        <v-form class="px-3">
                            <v-text-field
                                    v-model="questionObj.name"
                                    label="Name"
                                    :counter="10"

                                    required
                            >Name</v-text-field>
                            <v-text-field
                                    v-model="questionObj.question"
                                    label="Question"
                                    :counter="50"

                            >To do</v-text-field>
                            <v-text-field
                                    v-model="questionObj.ans"
                                    label="Ans"
                                    :counter="50"

                            >IdTest</v-text-field>
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
                const response = await axios.delete("http://localhost:8086/IeltsQuestion/${id}");
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