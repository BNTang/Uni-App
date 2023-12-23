"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.type)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/IdeaPro/HBuilderProjects/example18/components/ITButton/ITButton.vue"]]);
wx.createComponent(Component);
