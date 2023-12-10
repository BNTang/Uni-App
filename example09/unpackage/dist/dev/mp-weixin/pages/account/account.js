"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad() {
    console.log("账号 onLoad");
  },
  onShow() {
    console.log("账号 onShow");
  },
  onReady() {
    console.log("账号 onReady");
  },
  onHide() {
    console.log("账号 onHide");
  },
  onPullDownRefresh() {
    console.log("账号 onPullDownRefresh");
  },
  onReachBottom() {
    console.log("账号 onReachBottom");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/IdeaPro/HBuilderProjects/example09/pages/account/account.vue"]]);
wx.createPage(MiniProgramPage);
