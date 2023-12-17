"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "one",
  setup(__props) {
    const $instance = common_vendor.ref(common_vendor.getCurrentInstance().proxy);
    common_vendor.onLoad((option) => {
      const eventChannel = $instance.value.getOpenerEventChannel();
      eventChannel.on("acceptDataFromOpenerPage", function(data) {
        console.log(data);
      });
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/IdeaPro/HBuilderProjects/example12/pages/one/one.vue"]]);
wx.createPage(MiniProgramPage);
