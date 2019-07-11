<template>
    <div id="speaking">
        <h1>List test Speaking</h1>
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
                {text: 'Stest1'},
                {text: 'Stest2'},
                {text: 'Stest3'}
            ]
        }
    }
}
</script>
