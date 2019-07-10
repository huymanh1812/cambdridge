<template>
    <div id="writing">
        <h1>List test Writting</h1>
        <ul>
            <li v-for="test in tests">
                {{ test.text }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            tests: [
                {text: 'test1'},
                {text: 'test2'},
                {text: 'test3'}
            ]
        }
    }
}
</script>
