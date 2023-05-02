<template>
    <div class="con">
        <div class="img-con">
            <img src="/name.webp" alt="mulah">
        </div>
        <h1 class="title">Info</h1>
        <div class="info-group">
            <span>Phone number: </span>
            <span>{{ number }}</span>
        </div>
        <div class="info-group">
            <span>Name: </span>
            <span>{{ name }}</span>
        </div>
        <div class="info-group">
            <span>Email: </span>
            <span>{{ email }}</span>
        </div>
        <div class="info-group">
            <span>Birthday: </span>
            <span>{{ birthday }}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            number: '+60173527250',
            email: '',
            birthday: ''
        }
    },
    mounted() {
        let info = localStorage.getItem('mulah-info');
        if (info) {
            info = JSON.parse(info);
            this.name = info.name;
            this.email = info.email;
            this.birthday = info.birthday;
        }
    }
}
</script>
<style scoped>
.con {
    width: 640px;
    margin: 0 auto;
}

.img-con {
    width: 100%;
    text-align: center;
    margin-top: 50px;
}

img {
    margin: 0 auto;
}

.title {
    color: #7c7c7c;
}

.info-group {
    margin: 20px 0;
}

.info-group span:first-child {
    color: #7c7c7c;
    font-weight: bold;
}
</style>