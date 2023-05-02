<template>

    <div id="welcome-container">
        <div id="welcome-above">
            <div id="img-container">
                <img src="/name.webp" alt="mulah">
            </div>
            <div class="welcome-word">Hello,</div>
            <div class="welcome-word">Welcome !</div>
            <div id="target-word">Check Your Loyalty Points & Rewards</div>
        </div>
        <div id="input-phone-area">
            <el-select 
                id="mobile-header"
                v-model="value" 
                class="m-2" 
                placeholder="Select"
            >
                <el-option 
                    v-for="item in options" 
                    :key="item.value" 
                    :label="item.label" 
                    :value="item.value" 
                />
            </el-select>
            <el-input 
                id="mobile-input"
                @input="onInput"
                placeholder="Enter your mobile number" 
                v-model="inputMobile"
            >
            </el-input>
        </div>
        <el-button 
            class="mulah-orange-btn" 
            type="primary" round
            @click="valid"
        >
            Check Loyalty Points
        </el-button>
    </div>
</template>

<script>
export default {
    methods: {
        next() {
            this.$router.push('/registration');
        },
        valid() {
            if(this.inputMobile.length >= 9) {
                // TODOs
                this.$router.push('/registration');
                console.log('valid');
            }
            else {
                // TODOs
                window.alert('Please enter a valid mobile number');
            }
        },
        onInput() {
            this.inputMobile = this.inputMobile.replace(/[^0-9]/g, '');

            if (this.inputMobile.length === 1) {
                if (this.inputMobile[0] !== '1') {
                    this.inputMobile = '';
                }
            }

            if (this.inputMobile.length > 10) {
                this.inputMobile = this.inputMobile.slice(0, 10);
            }
            
        }
    },
    data() {
        return {
            inputMobile: '',
            value: '+60',
            options: [
                {
                    value: '+60',
                    label: '+60',
                },
                {
                    value: '+61',
                    label: '+61',
                }
            ]
        }
    }
}
</script>
<style>

#welcome-container{
    width: 640px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    place-items: center;
}

#welcome-above{
    margin-top: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* text-align: center; */
}

#img-container
{
    display: flex;
    justify-content: center;
}

#welcome-above img{
    margin: 40px 0;
}

.welcome-word
{
    font-size: 48px;
    font-weight: 600;
    color: #7b7b7b;
}

#target-word{
    font-size: 18px;
    font-weight: 600;
    color: #ff7d00;
    margin-top: 20px;
}

#input-phone-area
{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    row-gap: 20px;
    padding: 0 20px;
    margin-top: 30px;
}

#mobile-input{
    width: 220px;
    font-size: 16px;
    font-weight: 500;
    color: grey;
    padding-left: 15px;
}

#mobile-header
{
    width: 30px;
    font-size: 16px;
    font-weight: 500;
    color: grey;
    text-align: center;
}
</style>