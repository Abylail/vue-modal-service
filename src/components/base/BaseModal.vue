<template>
  <Fade>
    <div class="modal" v-if="visible" @click.self="close">

      <div class="modal__content" :class="`modal__content--${size}`">
        <button v-if="closeButton" class="modal__close" @click="close">
          <base-icon class="ic-16 ml-4">close</base-icon>
        </button>
        <slot/>
      </div>

    </div>
  </Fade>
</template>

<script>
import Fade from "../transitions/Fade";
import BaseIcon from "./BaseIcon";

export default {
  name: "BaseModal",
  components: {Fade, BaseIcon},
  props: {
    title: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    closeButton: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "middle",
      validator: size =>
        ["large", "big", "middle", "small"].includes(size)
    },
  },
  data: () => ({
    visible: false,
    payload: null
  }),
  methods: {
    close() {
      this.$modal.hide(this.name);
    },
    initModalService() {
      this.$modal._registration(this.name);
      this.$modal.$event.$on("show", (name, payload) => {
        if (this.name === name) {
          this.payload = payload;
          this.visible = true;
          document.body.style.overflow = "hidden";
          this.$emit("onShow", payload);
        }
      });
      this.$modal.$event.$on("hide", name => {
        if (this.name === name) {
          this.visible = false;
          this.payload = {};
          document.body.style.overflow = null;
          this.$emit("onHide");
        }
      });
    }
  },
  beforeMount() {
    this.initModalService();
  },
  beforeDestroy() {
    this.$modal._unregistration(this.name);
  },
}
</script>

<style lang="scss" scoped>
$modal--index: 100; // z-index

$modal--border-radius--middle: 12px;
$modal--border-radius--mini: 6px;

$modal--max-width--large: 1800px;
$modal--max-width--big: 1300px;
$modal--max-width--middle: 1000px;
$modal--max-width--small: 500px;

$z-index: 100;
$border-radius__middle: 12px;
$border-radius__little: 6px;
$max-width: 1300px;

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $z-index;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    position: relative;
    border-radius: $border-radius__middle;
    background: white;
    padding: 24px;
    max-height: 90vh;
    min-height: 100px;
    width: calc(95% - 48px);

    &--large {max-width: $modal--max-width--large}
    &--big {max-width: $modal--max-width--big}
    &--middle {max-width: $modal--max-width--middle}
    &--small {max-width: $modal--max-width--small}
  }

  &__close {
    border: none;
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    padding: 12px 20px;
    background: #F9F9F9;
    border-radius: $border-radius__little;
    transition: .15s;
    display: flex;
    align-items: center;
    &:active {opacity: .7}
  }

}
</style>
