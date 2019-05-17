<template>
  <div class="menu">
      <div ref="mask" class="menu-mask menu-hidden" @c></div>
      <div ref="content" class="menu-content menu-content-hidden">
        <slot name="content"></slot>
      </div>

  </div>
</template>

<script>
export default {
  components: {},
  model: {
    prop: 'show',
    event: 'showHandle'
  },
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    hasMask: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
    }
  },
  watch: {
    show: function (newV, oldV) {
      if (newV) {
        this.$refs['mask'].className = 'menu-mask menu-show'
        this.$refs['content'].className = 'menu-content menu-content-show'
      } else {
        this.$refs['mask'].className = 'menu-mask menu-hidden'
        this.$refs['content'].className = 'menu-content menu-content-hidden'
      }
    }
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.menu{
    &-mask {
      position: fixed;
      left:0;
      right:0;
      top:0;
      bottom:0;
      transition-property:opacity;
      transition-duration: 0.2s;
      transition-timing-function:linear;
      transition-delay:0;
      background-color:#000;
    }
    &-show {
      display: block;
      opacity:0.3;
    }
    &-hidden {
      display: none;
      opacity:0;
    }

    &-content {
      margin: 0 auto;
      background-color: white;
      position:fixed;
      left:0;
      right:0;
      bottom:0;
      transition-property:transform;
      transition-duration: 0.2s;
      transition-timing-function:linear;
      transition-delay:0;

      &-hidden {
        transform: translateY(100%);

      }
      &-show {
        transform: translateY(0);
      }

    }

}
</style>
