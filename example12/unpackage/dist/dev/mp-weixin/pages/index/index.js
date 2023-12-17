"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function onJumpOne() {
      common_vendor.index.navigateTo({
        url: "/pages/one/one",
        success(res) {
          res.eventChannel.emit("acceptDataFromOpenerPage", {
            data: "通过事件通道传递的数据"
          });
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onJumpOne)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/IdeaPro/HBuilderProjects/example12/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
