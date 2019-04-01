<template>
  <div class="root">
      <mt-header title="登录"></mt-header>
      <div class="input-ctl">
          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <mt-field label="密码" placeholder="请输入邮箱" type="password" v-model="email"></mt-field>
      </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data () {
    return {
      email: '',
      username: ''
    }
  },
  method: {

  },
  mounted: function () {
    this.changeFoot(false)
    this.jsonp('/banner', {}, (isOk, resposneData) => {
      console.log('请求结果' + isOk + 'DATA' + resposneData)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.root {
    background: linear-gradient(to bottom, #2261E0 0%,#247CF0 100%);
    height:100%;
    .input-ctl {
        margin:0 auto;
        margin-top:10rem;
        border-radius: 1rem;
        width:80%;
    }
}
</style>
