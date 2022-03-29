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
---
```
import Vue from 'vue';
import ModalService from 'vue-modal-service';

Vue.use(ModalService);
```

## How to use
Creating modal
```
<modal name="some-modal-name" size="middle" close-button>
    <div>hey</div>
</modal>
```
---
Show modal
```
this.$modal.show('some-modal-name');
```
---
Set data in modal
```
How open modal with some data
-> payload is any that you need
this.$modal.show('some-modal-name', payload); <-

You can get it in props->payload
```
---
Hide modal
```
this.$modal.hide('some-modal-name');
```
---
Emits
```
<modal @onShow="someMethod" ...
<modal @onHide="someMethod" ...
```

## How to debug
Available modals
```
this.$modal.$availableModals
```
---
Active modal name
```
this.$modal.$active
```
---
Queue of hidden modal
```
this.$modal._queue
```