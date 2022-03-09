const service = {
    install(Vue) {
        this.event = new Vue();

        Vue.prototype.$modal = {
            $active: null,
            $availableModals: [],
            $event: this.event,
            show(modalName, params=null, savePrev=true) {
                if (modalName === this.$active) return;
                if (savePrev && this.$active) {
                    this._queue.push(this.$active);
                    this.hide(this.$active, false);
                }
                service.event.$emit("show", modalName, params);
                this.$active = modalName;
            },
            hide(modalName, showLast = true) {
                service.event.$emit("hide", modalName);
                this.$active = null;
                if (showLast && this._queue.length) {
                    this.show(this._queue.pop());
                }
            },
            _registration(modalName) {
                if (!this.$availableList.includes(modalName))
                    this.$availableList.push(modalName);
            },
            _unregistration(modalName) {
                if (this.$availableList.includes(modalName))
                    this.$availableList.splice(this.$availableList.indexOf(modalName, 1));
            },
            _queue: [],
        }
    }
}

export default service;