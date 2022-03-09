<template>
  <transition
      name="fade"
      mode="out-in"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
