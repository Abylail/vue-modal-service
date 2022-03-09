<template>
  <svg v-on="$listeners">
    <use
      :xlink:href="require(`../../assets/icons/${repo}.svg`) + `#${$slots.default[0].text}`"
    ></use>
  </svg>
</template>
<script>
export default {
  props: {
    repo: {
      type: String,
      default: "sprite"
    },
  }
}
</script>
<style lang="scss" scoped>
.ic {

  // AUTO SIZE EX:(class="ic-16")
  @for $size from 1 through 200 {
    &-#{$size} {
      width: #{$size}px;
      min-width: #{$size}px;
      height: #{$size}px;
    }
  }

}
</style>