<template>
  <div class="example">

    <div class="example__title">Размеры</div>
    <div class="example__buttons">
      <button @click="showSizeModal('large')">show large</button>
      <button @click="showSizeModal('big')">show big</button>
      <button @click="showSizeModal('middle')">show middle</button>
      <button @click="showSizeModal('small')">show small</button>
    </div>

    <div class="example__title">Последовательные вызовы</div>
    <div class="example__description">
      Если во время открытой модалки вызвать другую модалку,
      первая закроется и откроется после закрытия последней
    </div>
    <div class="example__buttons">
      <button @click="showSequenceModal('first')">Открыть первый</button>
      <button @click="showSequenceModal('second')">Открыть вторую</button>
    </div>

    <div class="example__title">Дебаг</div>
    <div>Активная модалка => $modal.$active</div>
    <div>Очередь вызова закрытых модалок => $modal._queue</div>
    <div>Список доступных модалок => $modal.$availableList</div>



    <!-- MODALS SIZES -->
    <base-modal name="large-modal" close-button size="large"><div class="example__title">size="large"</div></base-modal>
    <base-modal name="big-modal" close-button size="big"><div class="example__title">size="big"</div></base-modal>
    <base-modal name="middle-modal" close-button size="middle"><div class="example__title">size="middle"</div></base-modal>
    <base-modal name="small-modal" close-button size="small"><div class="example__title">size="small"</div></base-modal>

    <!-- MODALS sequence -->
    <base-modal name="first-modal" close-button>
      <div class="example__title">первая модалка</div>
      <button @click="showSequenceModal('second')">Открыть вторую</button>
    </base-modal>

    <base-modal name="second-modal" close-button>
      <div class="example__title">вторая модалка</div>
      <button @click="showSequenceModal('third')">Открыть треью</button>
    </base-modal>

    <base-modal name="third-modal" close-button>
      <div class="example__title">третья модалка</div>
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "./components/base/BaseModal";
export default {
  name: "Example",
  components: {BaseModal},
  methods: {
    showSizeModal(size) {
      this.$modal.show(`${size}-modal`);
    },
    showSequenceModal(name) {
      this.$modal.show(`${name}-modal`);
    },
  }
}
</script>

<style lang="scss" scoped>
.example {

  &__title {
    font-size: 24px;
    font-weight: bolder;
    margin-left: 10px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 18px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.74);
  }

  button {
    border: none;
    background: cornflowerblue;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  &__buttons {
    &>button {margin-right: 10px}
  }

}
</style>