<template>
    <div class="container">
        <h2>Get</h2>
    </div>
</template>

<script>
import { assertExpressionStatement } from '@babel/types';

export default {
    name: "get",
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            axios.get('/api/get')
            .then( res => {
                console.log(res)
            })
        }
    },
}
</script>
