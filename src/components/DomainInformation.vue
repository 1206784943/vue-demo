<template>
    <div id="domaininformation">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button @click="startHacking">Start</el-button>
    </div>
</template>

<script>
    export default {
        name: 'DomainInformation',
        data() {
            return {
                input: ''
            }
        },
        methods:{
            startHacking () {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: this.input,
                    duration: 5000
                })
            }
        }
    }
</script>