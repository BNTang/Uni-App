"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "one",
  setup(__props) {
    function onGoBackClick() {
      common_vendor.index.navigateBack({
        delta: 1
      });
      common_vendor.index.$emit("test", {
        data: "通过$emit直接传递数据"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGoBackClick)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/IdeaPro/HBuilderProjects/example14/pages/one/one.vue"]]);
wx.createPage(MiniProgramPage);
