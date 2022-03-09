<template>
  <svg v-on="$listeners">
    <use
      :xlink:href="require(`@/assets/icons/${repo}.svg`) + `#${$slots.default[0].text}`"
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
