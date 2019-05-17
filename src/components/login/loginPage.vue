<template>
  <div class="root">
    <mt-header title="登录"></mt-header>
    <div class="input-ctl">
      <mt-field label="手机号" placeholder="请输入手机号" v-model="loginForm.phone"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginForm.password"></mt-field>
    </div>
    <mt-button class="login-btn" type="primary" @click.prevent="login">登录</mt-button>
    <modal-menu v-model="isShow">
      <div slot="content" class="content">
        123
      </div>
    </modal-menu>
  </div>
</template>

<script>
import menu from '@/components/common/menu.vue'
import { setTimeout } from 'timers'
export default {
  name: 'loginPage',
  components: {
    'modal-menu': menu
  },
  data () {
    return {
      loginForm: {
        phone: '',
        password: ''
      },
      isShow: false

    }
  },
  methods: {
    login () {
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 3000)
      this.get('/login/cellphone', {phone: this.loginForm.phone, password: this.loginForm.password}, (isOk, responseData) => {
        console.log(responseData)
      })
    }
  },
  mounted: function () {
    this.changeFoot(false)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .root {
    background: linear-gradient(to bottom, #2261E0 0%, #247CF0 100%);
    height: 100%;

    .input-ctl {
      margin: 0 auto;
      margin-top: 10rem;
      border-radius: 1rem;
      width: 80%;
    }

    .login-btn {
      margin-top: 20px;
      width: 80%;
    }
  }

  .content {
    height:300px;
  }
</style>
