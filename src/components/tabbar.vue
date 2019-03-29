<template>
<div class="tab-ctl">
  <div class="item-ctl">
    <router-link class="item" v-for="(item,index) of items" :key="index" :to="item.path" >
      <span :class="'icon'+index"></span>
      <div>{{item.name}}</div>
      </router-link>
  </div>
</div>
</template>
<script>
export default {
  name: 'tabbar',
  props: ['items'],
  data: () => {
    return {
    }
  },
  methods: {
    isActive (idx) {
      var path = this.items[idx].path
      console.log(this.$router.currentRoute.path, path)
      return path === this.$router.currentRoute.path
    }
  },
  mounted: function () {
    console.log(this.$router.currentRoute)
  }
}
</script>
<style scoped lang="less">
 .tab-ctl {
   position:fixed;
   bottom:0;
   left:0;
   right:0;
   height:4.4rem;
   border-top: 1px solid #ccc;
 }
 .item-ctl {
   display: flex;
   height:100%;
 }

 .item {
   display: block;
   flex:1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   span {
     width:1.6rem;
     height:1.6rem;
     display:block;
     margin-bottom:.5rem;
   }
   .icon0 {
     background-image:url('../assets/images/find.png');
     background-size:100% auto;
     background-position:center;
     background-repeat: no-repeat;
     }
     .icon1 {
       background-image:url('../assets/images/video.png');
     background-size:100% auto;
     background-position:center;
     background-repeat: no-repeat;
     }
     .icon2 {
       background-image:url('../assets/images/music.png');
     background-size:100% auto;
     background-position:center;
     background-repeat: no-repeat;
     }
     .icon3 {
       background-image:url('../assets/images/friend.png');
     background-size:100% auto;
     background-position:center;
     background-repeat: no-repeat;
     }
     .icon4 {
       background-image:url('../assets/images/account.png');
     background-size:100% auto;
     background-position:center;
     background-repeat: no-repeat;
     }

 }

 .router-link-active {
     div{
       color:#cc1225;
     }
     .icon0 {
     background-image:url('../assets/images/find-s.png');
     }
     .icon1 {
       background-image:url('../assets/images/video-s.png');
     }
     .icon2 {
       background-image:url('../assets/images/music-s.png');
     }
     .icon3 {
       background-image:url('../assets/images/friend-s.png');
     }
     .icon4 {
       background-image:url('../assets/images/account-s.png');
     }
   }
</style>
