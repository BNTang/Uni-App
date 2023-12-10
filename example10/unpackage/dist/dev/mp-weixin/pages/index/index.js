"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("首页 onLoad");
    });
    common_vendor.onShow(() => {
      console.log("首页 onShow");
    });
    common_vendor.onReady(() => {
      console.log("首页 onReady");
    });
    common_vendor.onHide(() => {
      console.log("首页 onHide");
    });
    common_vendor.onPullDownRefresh(() => {
      console.log("首页 onPullDownRefresh");
    });
    common_vendor.onReachBottom(() => {
      console.log("首页 onReachBottom");
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/IdeaPro/HBuilderProjects/example10/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
