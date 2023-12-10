"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad() {
    console.log("首页 onLoad");
  },
  onShow() {
    console.log("首页 onShow");
  },
  onReady() {
    console.log("首页 onReady");
  },
  onHide() {
    console.log("首页 onHide");
  },
  onPullDownRefresh() {
    console.log("首页 onPullDownRefresh");
  },
  onReachBottom() {
    console.log("首页 onReachBottom");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/IdeaPro/HBuilderProjects/example09/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
