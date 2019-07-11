<template>
    <div id="listening">
        <h1>List test listening</h1>
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
                {text: 'Ltest1'},
                {text: 'Ltest2'},
                {text: 'Ltest3'}
            ]
        }
    }
}
</script>
