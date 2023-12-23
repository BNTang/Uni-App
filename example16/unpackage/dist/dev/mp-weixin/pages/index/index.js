"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_counter = require("../../stores/counter.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const counterStore = stores_counter.useCounterStore();
    const {
      count
    } = common_vendor.storeToRefs(counterStore);
    function myIncrement() {
      counterStore.increment();
    }
    function myDecrement() {
      counterStore.decrement();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(count)),
        b: common_vendor.o(myIncrement),
        c: common_vendor.o(myDecrement)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/IdeaPro/HBuilderProjects/example16/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
