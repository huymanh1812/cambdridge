<template>
    <v-layout column>
        <v-layout>
            <!--<v-flex xs4>-->
                <!--<v-flex xs9>-->
                    <!--<v-select :items="levels" label="Choose Level" v-model="level"></v-select>-->
                <!--</v-flex>-->
            <!--</v-flex>-->
            <v-flex xs4>
                <v-flex xs9>
                    <v-select
                            :items="fullTestList"
                            item-text="name"
                            return-object
                            label="Choose Test"
                            v-model="test"
                    >
                    </v-select>
                </v-flex>
            </v-flex>
            <v-flex xs4>
                <p> {{test.type}} and {{test.average}} </p>
            </v-flex>

        </v-layout>
        <v-flex xs12>
            <div id="ilquestion">
                <center>
                    <h2> Question List </h2>
                </center>
                <v-flex xs12 class="table">

                    <v-data-table :headers="headers" :items="filteredQuestionList" class="elevation-1">
                        <template v-slot:items="props">
                            <td>{{props.item.id}}</td>
                            <td>{{props.item.name}}</td>
                            <td>{{props.item.type}}</td>
                            <td>{{props.item.average}}</td>
                            <td>{{props.item.question}}</td>
                        </template>
                    </v-data-table>
                </v-flex>


            </div>
        </v-flex>
    </v-layout>
</template>
<script>
    import axios from "axios";

    export default {
        props: {
            testId: Number,
        },
        data() {
            return {
                headers: [
                    {
                      text: 'id'
                    },
                    {
                        text: 'Question',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    {text: 'Type', value: 'type'},
                    {text: 'Level', value: 'average'},
                    {text: 'Content', value: 'question'},
                    {text: 'Action'}
                ],
                editingObj: {
                    name: "",
                    type: "",
                    average: "",
                    question: ""
                },
                questionObj: {
                    name: "",
                    type: "",
                    average: "",
                    question: "",
                    result: "",
                    a: "",
                    b: "",
                    c: "",
                    d: ""
                },
                editingTestId: null,
                levels: [{text: 'level 4.0-5.5', value: 1},
                    {text: 'level 5.5-6.5', value: 2},
                    {text: 'level 6.5-7.5', value: 3},
                ],
                level: 0,
                filteredTestList: [],
                fullTestList: [],
                fullQuestionList: [],
                filteredQuestionList: [],
                test: {},
            };
        },


        async mounted() {
            await this.getTestListByType();
            await this.getQuestions();
        },

        watch: {
            level(val) {
                if (val && val > 0) {
                    this.getTestListByLevel();
                }
            },

            test(value) {
                console.log(' test value', value);
                if (value && value > 0) {
                    this.getQuestionByTestId();
                }
            }
        },

        methods: {
            findList() {

            },
            async getQuestions() {
                // const type = this.$route.params.typeId;
                // const average = this.test.avege;
                const response = await axios.get(`http://localhost:8086/IeltsQuestion/list`);
                
                this.fullQuestionList = response.data;
                
            },

            getQuestionByTestId() {
                this.filteredQuestionList
                    = this.fullQuestionList.filter(question => question.idTest === this.test.id);
                    
            },

            async getTestListByType() {
                // const type = this.$route.params.typeId;
                // const response = await axios.get(http://localhost:8086/IeltsTest/type/${type});
                const response = await axios.get(`http://localhost:8086/IeltsTest/list`);
                this.fullTestList = response.data;
            },
            //
            // getTestListByLevel() {
            //     this.filteredTestList = this.fullTestList.filter(test => test.average === this.level);
            // }
        },


    };
</script>