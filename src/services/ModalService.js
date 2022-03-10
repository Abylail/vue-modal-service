const service = {
    install(Vue) {
        this.event = new Vue();

        Vue.prototype.$modal = {
            $active: null,
            $availableModals: [],
            $payload: null,
            $event: this.event,
            show(modalName, payload=null, save=true) {
                if (modalName === this.$active) return;
                if (save && this.$active) {
                    this._queue.push(this.$active);
                    this.hide(this.$active, false);
                }
                service.event.$emit("show", modalName, payload);
                this.$active = modalName;
                this.$payload = payload;
            },
            hide(modalName, showLast = true) {
                service.event.$emit("hide", modalName);
                this.$active = null;
                this.$payload = null;
                if (showLast && this._queue.length) {
                    this.show(this._queue.pop());
                }
            },
            _registration(modalName) {
                if (!this.$availableModals.includes(modalName))
                    this.$availableModals.push(modalName);
            },
            _unregistration(modalName) {
                if (this.$availableModals.includes(modalName))
                    this.$availableModals.splice(this.$availableModals.indexOf(modalName, 1));
            },
            _queue: [],
        }
    }
}

export default service;