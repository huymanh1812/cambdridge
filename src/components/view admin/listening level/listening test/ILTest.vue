<template>
<v-flex xs12>
    <div id="iltest">
        <center><h2>Listening Test {{$route.params.id}}</h2></center>
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
    </div>
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
            anss: [
                {text: 'A.'},
                {text: 'B.'},
                {text: 'C.'},
            ]
        }
    },
    methods: {
        async getList() {
                const response = await axios.get("http://localhost:8086/IeltsQuestion/list");
                this.questionList = response.data.map(
                    elm => ({
                        question: elm.question,
                        a: elm.a,
                        b: elm.b,
                        c: elm.c,
                        d: elm.d
                    })
                );
               
            },
    },
    async mounted() {
            await this.getList();
    }
}
</script>
