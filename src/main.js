import Vue from "vue";
import Dev from "./Dev";
import TestComponent from "./components/TestComponent.vue";

Vue.config.productionTip = false;
new Vue({
    //render: h => h(ComponentTest)
    render(h) {
        return h("div", [h(Dev), h(TestComponent)]);
    }
}).$mount("#app");
