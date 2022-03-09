# vue-modal-service

## Install
```
npm i vue-modal-service
```

## Quick Start
```
import it to global css

@import "~vue-modal-service/dist/modal-service.css";

OR

(for NUXT)
css: [
    "vue-modal-service/dist/modal-service.css",
  ],
```
```
import Vue from 'vue';
import ModalService from 'vue-modal-service';

Vue.use(ModalService);
```

## How to use
```
<modal name="some-modal-name" size="middle" close-button>
    <div>hey</div>
</modal>
```
```
this.$modal.show('some-modal-name');
```