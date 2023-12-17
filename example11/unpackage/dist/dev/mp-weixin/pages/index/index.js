"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    onJumpOne() {
      common_vendor.index.navigateTo({
        url: "/pages/one/one",
        events: {
          acceptDataFromOpenerPage(data) {
            console.log(data);
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.onJumpOne && $options.onJumpOne(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/IdeaPro/HBuilderProjects/example11/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
