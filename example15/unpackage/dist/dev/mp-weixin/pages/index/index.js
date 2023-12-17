"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      name: "BNTang"
    };
  },
  onLoad() {
  },
  methods: {
    add() {
      common_vendor.index.setStorage({
        key: "name",
        data: "hello BNTang",
        success: function() {
          console.log("success");
        }
      });
    },
    get() {
      const that = this;
      common_vendor.index.getStorage({
        key: "name",
        success: function(res) {
          that.name = res.data;
        }
      });
    },
    del() {
      try {
        common_vendor.index.removeStorageSync("name");
      } catch (e) {
      }
    },
    clear() {
      try {
        common_vendor.index.clearStorageSync();
      } catch (e) {
      }
    },
    getStorageInfoFn() {
      try {
        const res = common_vendor.index.getStorageInfoSync();
        console.log(res);
        console.log(res.keys);
        console.log(res.currentSize);
        console.log(res.limitSize);
      } catch (e) {
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.name),
    b: common_vendor.o((...args) => $options.add && $options.add(...args)),
    c: common_vendor.o((...args) => $options.get && $options.get(...args)),
    d: common_vendor.o((...args) => $options.del && $options.del(...args)),
    e: common_vendor.o((...args) => $options.clear && $options.clear(...args)),
    f: common_vendor.o((...args) => $options.getStorageInfoFn && $options.getStorageInfoFn(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/IdeaPro/HBuilderProjects/example15/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
