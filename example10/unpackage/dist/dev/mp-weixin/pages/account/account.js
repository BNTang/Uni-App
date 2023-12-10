"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "account",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("账号 onLoad");
    });
    common_vendor.onShow(() => {
      console.log("账号 onShow");
    });
    common_vendor.onReady(() => {
      console.log("账号 onReady");
    });
    common_vendor.onHide(() => {
      console.log("账号 onHide");
    });
    common_vendor.onPullDownRefresh(() => {
      console.log("账号 onPullDownRefresh");
    });
    common_vendor.onReachBottom(() => {
      console.log("账号 onReachBottom");
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/IdeaPro/HBuilderProjects/example10/pages/account/account.vue"]]);
wx.createPage(MiniProgramPage);
