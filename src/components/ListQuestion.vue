<template>
<v-flex xs12>
    <div>
        <center><h2>Questions</h2></center>
        <v-container>
            <v-layout column>
                <v-flex xs12 v-for="(question,i) in questions" :key="i">
                {{question.text}}
                <v-layout>
                <v-flex xs3 v-for="(ans,i) in anss" :key="i">
                    <v-checkbox v-model="ans[i]" :label="ans.text"></v-checkbox>            
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
                {text: 'manhhuy'},
                {text: 'anhkiet'},
            ],
            anss: [
                {text: 'A.'},
                {text: 'B.'},
                {text: 'C.'},
            ]
        }
    }
}
</script>
