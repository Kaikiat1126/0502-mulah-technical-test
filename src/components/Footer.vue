<template>
    <div>
        <span>Powered by </span>
        <a href="https://www.mulahrewards.com/">MulahRewards.com</a>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    methods: {
        hello() {
            console.log('hello footer');
        }
    }
}
</script>
<style scoped>
div {
    font-weight: 600;
}

a {
    text-decoration: none;
    color: #1864ab;
}

span {
    color: gray;
}
</style>