<template>
<v-flex xs12>
    <div id="iltest1">
        <center><h2>Listening Test 1</h2></center>
        <v-container>
            <v-layout column>
                <v-flex xs12 v-for="(question,i) in questions" :key="i">
                {{question.text}}
                <v-layout>
                <v-flex xs3 v-for="(ans,i) in anss" :key="i">
                    <v-checkbox v-model="ans[i]" :label="ans.text"></v-checkbox>
                    <!-- <h1> ok </h1> -->
                </v-flex>
                </v-layout>
                </v-flex>
                


            </v-layout>
        </v-container>
    </div>
</v-flex>
</template>
<script>
    export default {
        data() {
            return {
                questions: [
                    {text: "manh huy"},
                    {text: "anh kiet"}
                ],
                anss: [
                    {text: "A. ..."},
                    {text: "B. ..."},
                    {text: "C. ..."},
                    {text: "D. ..."}
                ]
            }
        }
    }
</script>
