<template>
    <div id="writing">
        <h1>List test Writing</h1>
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
                {text: 'Wtest1'},
                {text: 'Wtest2'},
                {text: 'Wtest3'}
            ]
        }
    }
}
</script>
