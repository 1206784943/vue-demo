<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
    import { Button, Select } from 'element-ui'
    export default {
        name: 'App',
        components: [ Button]
    }
</script>
<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>
