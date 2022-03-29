const service = {
    install(Vue) {
        this.event = new Vue();
        const modalService = {
            $active: null,
            $availableModals: [],
            $payload: null,
            $event: this.event,
            show: (modalName, payload=null, save=true) => {
                if (modalName === modalService.$active) return;
                if (save && modalService.$active) {
                    modalService._queue.push(modalService.$active);
                    modalService.hide(modalService.$active, false);
                }
                service.event.$emit("show", modalName, payload);
                modalService.$active = modalName;
                modalService.$payload = payload;
            },
            hide: (modalName, showLast = true) => {
                service.event.$emit("hide", modalName);
                modalService.$active = null;
                modalService.$payload = null;
                if (showLast && modalService._queue.length) {
                    modalService.show(modalService._queue.pop());
                }
            },
            _registration: (modalName) => {
                if (!modalService.$availableModals.includes(modalName))
                    modalService.$availableModals.push(modalName);
            },
            _unregistration: (modalName) => {
                if (modalService.$availableModals.includes(modalName))
                    modalService.$availableModals.splice(modalService.$availableModals.indexOf(modalName, 1));
            },
            _queue: [],
        }
        Vue.prototype.$modal = modalService;
    }
}

export default service;