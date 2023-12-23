"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function reqGetFn() {
      common_vendor.index.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
          text: "BNTang"
        },
        method: "GET",
        header: {
          // 自定义请求头信息
          "custom-header": "hello"
        },
        success: (res) => {
          console.log(res);
          console.log(res.data);
        }
      });
    }
    function reqPostFn() {
      common_vendor.index.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
          text: "BNTang"
        },
        method: "POST",
        header: {
          // 自定义请求头信息
          "custom-header": "hello"
        },
        success: (res) => {
          console.log(res);
          console.log(res.data);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(reqGetFn),
        b: common_vendor.o(reqPostFn)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/IdeaPro/HBuilderProjects/example17/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
