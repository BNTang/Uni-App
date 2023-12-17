"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    onGoBackClick() {
      common_vendor.index.navigateBack({
        delta: 1
      });
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.emit("acceptDataFromOpenerPage", {
        data: "通过事件通道返回时传递数据"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.onGoBackClick && $options.onGoBackClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/IdeaPro/HBuilderProjects/example11/pages/one/one.vue"]]);
wx.createPage(MiniProgramPage);
