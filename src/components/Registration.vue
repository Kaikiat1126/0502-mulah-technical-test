<template>
    <div class="regitser-container">
        <div class="img-con">
            <img src="/name.webp" alt="mulah">
        </div>
        <h1 class="title">Registration</h1>
        <div class="fill-detials">Please fil up your details</div>
        <div class="input-group">
            <div class="input-title">Name</div>
            <el-input v-model="name" placeholder="Enter Name" class="name-input" @input="validName" ref="nameInput" />
            <div v-show="!name" class="notify">
                *Please insert a name
            </div>
        </div>
        <div class="input-group">
            <div class="input-title">Birthday</div>
            <div class="el-input-group">
                <el-input v-model="day" placeholder="DD" class="el-input" @input="validDay" ref="dayInput" />
                <el-input v-model="month" placeholder="MM" class="el-input" @input="validMonth" ref="monthInput" />
                <el-input v-model="year" placeholder="YYYY" class="el-input" @input="validYear" ref="yearInput" />
            </div>
            <div class="notify" v-show="(day && month && year) === ''">
                *Please insert your birthday
            </div>
        </div>
        <div class="input-group">
            <div class="input-title">Email</div>
            <el-input v-model="email" placeholder="Enter Email" class="email-input" @input="validEmail" ref="emailInput" />
            <div class="notify" v-if="!email && !checked">
                *Please insert a valid email address
            </div>
            <el-checkbox v-model="checked" label="No email address" size="large" />
        </div>
        <el-button type="primary" round @click="goToInfo" class="mulah-orange-btn">
            Continue
        </el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            year: '',
            month: '',
            day: '',
            email: '',
            checked: false
        }
    },
    methods: {
        submit() {
            console.log('submit');
        },
        goToInfo() {
            if (this.name && this.year && this.month && this.day && this.email) {
                if (this.validName && this.validDay && this.validMonth && this.validYear && this.validEmail) {
                    this.storeInfo();
                    return this.$router.push('/info');
                }
            }

            if (this.name && this.year && this.month && this.day && this.checked) {
                if (this.validName && this.validDay && this.validMonth && this.validYear) {
                    this.storeInfo();
                    return this.$router.push('/info');
                }
            }

            else {
                window.alert('Please fill up the form');
                return;
            }
        },

        validName() {
            // only allow letters, spaces and hyphens
            this.name = this.name.replace(/[^a-zA-Z\s-]/g, '');
        },
        validDay() {
            //only allow 2 digits, from 1 to 31
            this.day = this.day.replace(/[^0-9]/g, '').slice(0, 2);
            //only day 1 to 31
            if (this.day > 31) this.day = 31;
        },
        validMonth() {
            //only allow 2 digits, from 1 to 12
            this.month = this.month.replace(/[^0-9]/g, '').slice(0, 2);
            //only month 1 to 12
            if (this.month > 12) this.month = 12;
        },
        validYear() {
            //only allow 4 digits, from 1900 to 2020
            this.year = this.year.replace(/[^0-9]/g, '').slice(0, 4);
            //if not enough 4 digits, then return
            if (this.year.length < 4) return;
        },
        validEmail() {
            // only allow letters, numbers, dots, hyphens and underscores
            this.email = this.email.replace(/[^a-zA-Z0-9._-]/g, '');

        },
        storeInfo() {
            localStorage.setItem('mulah-info',
                JSON.stringify({
                    name: this.name,
                    email: this.email,
                    birthday: `${this.day}/${this.month}/${this.year}`
                })
            );
        }
    },
    mounted() {
        localStorage.removeItem('mulah-info');
    }
}
</script>
<style scoped>
.img-con {
    width: 100%;
    text-align: center;
    margin-top: 50px;
}

img {
    margin: 0 auto;
}

.regitser-container {
    width: 640px;
    margin: 0 auto;
}

.title {
    color: #7c7c7c;
}

.fill-detials {
    color: #7c7c7c;
    font-style: italic;
    margin-bottom: 20px;
}

.notify {
    color: red;
    font-style: italic;
    font-size: 14px;
}

.input-group {
    margin-top: 20px;
}


.input-title {
    color: #7c7c7c;
    margin-bottom: 10px;
    font-weight: bold;
}

.el-input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.el-input {
    width: 30%;
}

.name-input,
.email-input {
    width: 100%;
}

.con-btn {
    color: white !important;
    width: 100%;
}
</style>