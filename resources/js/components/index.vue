<template>
    <div class="container">
        <router-link :to="{name: 'get.index'}">Get</router-link>
        <router-link :to="{name: 'user.login'}">Login</router-link>
        <router-link :to="{name: 'user.register'}">Register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
</script>
