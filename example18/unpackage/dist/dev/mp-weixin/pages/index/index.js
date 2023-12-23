"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_ITButton2 = common_vendor.resolveComponent("ITButton");
  _easycom_ITButton2();
}
const _easycom_ITButton = () => "../../components/ITButton/ITButton.js";
if (!Math) {
  _easycom_ITButton();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "primary"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/IdeaPro/HBuilderProjects/example18/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
