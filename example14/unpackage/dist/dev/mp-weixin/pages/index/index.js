"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function onJumpOne() {
      common_vendor.index.navigateTo({
        url: "/pages/one/one"
      });
    }
    common_vendor.onLoad(() => {
      common_vendor.index.$on("test", (data) => {
        console.log(data);
      });
    });
    common_vendor.onUnload(() => {
      common_vendor.index.$off("test");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onJumpOne)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/IdeaPro/HBuilderProjects/example14/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
