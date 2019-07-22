<template>
    <div id="reading">
        <h1>List test Reading</h1>
        <ul>
            <li v-for="(test,i) in tests" :key="i">
                <router-link :to='{ name : test.text}'>{{test.text}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            tests: [
                {text: 'Rtest1'},
                {text: 'Rtest2'},
                {text: 'Rtest3'}
            ]
        }
    }
}
</script>
