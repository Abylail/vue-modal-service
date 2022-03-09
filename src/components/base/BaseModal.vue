<template>
  <Fade>
    <div class="modal" v-if="visible" @click.self="close">

      <div class="modal__content" :class="`modal__content--${size}`">
        <button v-if="closeButton" class="modal__close" @click="close">Закрыть<base-icon class="ic-16 ml-4">close</base-icon></button>
        <slot/>
      </div>

    </div>
  </Fade>
</template>

<script>
import Fade from "../transitions/Fade";
export default {
  name: "BaseModal",
  components: {Fade},
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
        ["big", "middle", "small"].includes(size)
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
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $z_modal;
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

    &--big {max-width: $max-width}
    &--middle {max-width: 1000px}
    &--small {max-width: 500px}
  }

  &__close {
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
