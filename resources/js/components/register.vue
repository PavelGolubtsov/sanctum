<template>
    <div class="container">
        <input v-model="name" type="name" placeholder="name" class="form-control">
        <input v-model="email" type="email" placeholder="email" class="form-control">
        <input v-model="password" type="password" placeholder="password" class="form-control">
        <input v-model="password_confirmation" type="password" placeholder="password_confirmation" class="form-control">
        <input @click.prevent="login" type="submit" value="login" class="btn btn-primary">
    </div>
</template>

<script>
export default {
    name: "register"
}
</script>
