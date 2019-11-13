import Vue from "vue";
import Dev from "./Dev";
import AddFace from "./components/AddFace.vue";

Vue.config.productionTip = false;
new Vue({
    //render: h => h(ComponentTest)
    render(h) {
        return h("div", [h(Dev), h(AddFace)]);
    }
}).$mount("#app");
