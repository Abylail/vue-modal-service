"use strict"

import Modal from "./components/base/BaseModal";
import ModalService from "./services/ModalService";


const install = (Vue) => {
    Vue.component("modal", Modal);
    Vue.use(ModalService);
}

// Automatic installation if Vue has been added to the global scope.
(()=>{
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use({install});
    }
})();


export default {
    Modal,
    install,
};