"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      curFontSize: "180rpx",
      showValue: 0,
      firstValue: "",
      secondValue: "",
      operatorType: "",
      isCaculate: false,
      buttons: [
        {
          text: "AC",
          class: "ft-color bg-gray ml-zero",
          func: "operator",
          params: "clear"
        },
        {
          text: "+/-",
          class: "ft-color bg-gray",
          func: "operator",
          params: "opposite"
        },
        {
          text: "%",
          class: "ft-color bg-gray",
          func: "operator",
          params: "percent"
        },
        {
          text: "÷",
          class: "bg-orange",
          func: "operator",
          params: "divide"
        },
        {
          text: "7",
          class: "bg-darkgray ml-zero",
          func: "inputText",
          params: "7"
        },
        {
          text: "8",
          class: "bg-darkgray",
          func: "inputText",
          params: "8"
        },
        {
          text: "9",
          class: "bg-darkgray",
          func: "inputText",
          params: "9"
        },
        {
          text: "×",
          class: "bg-orange",
          func: "operator",
          params: "multiply"
        },
        {
          text: "4",
          class: "bg-darkgray ml-zero",
          func: "inputText",
          params: "4"
        },
        {
          text: "5",
          class: "bg-darkgray",
          func: "inputText",
          params: "5"
        },
        {
          text: "6",
          class: "bg-darkgray",
          func: "inputText",
          params: "6"
        },
        {
          text: "-",
          class: "bg-orange",
          func: "operator",
          params: "minus"
        },
        {
          text: "1",
          class: "bg-darkgray ml-zero",
          func: "inputText",
          params: "1"
        },
        {
          text: "2",
          class: " bg-darkgray",
          func: "inputText",
          params: "2"
        },
        {
          text: "3",
          class: " bg-darkgray",
          func: "inputText",
          params: "3"
        },
        {
          text: "+",
          class: "bg-orange",
          func: "operator",
          params: "plus"
        },
        {
          text: "0",
          class: "btn-size2 bg-darkgray ml-zero",
          func: "inputText",
          params: "0"
        },
        {
          text: ".",
          class: "bg-darkgray",
          func: "inputText",
          params: "."
        },
        {
          text: "=",
          class: "bg-orange",
          func: "operator",
          params: "result"
        }
      ]
    };
  },
  watch: {
    showValue(newVal, oldVal) {
      newVal += "";
      switch (newVal.length) {
        case 8:
          this.curFontSize = "160rpx";
          break;
        case 9:
          this.curFontSize = "150rpx";
          break;
        case 10:
          this.curFontSize = "130rpx";
          break;
        case 11:
          this.curFontSize = "120rpx";
          break;
        default:
          this.curFontSize = "180rpx";
          break;
      }
    }
  },
  onLoad() {
  },
  methods: {
    operate(item) {
      const func = item.func;
      const params = item.params;
      switch (func) {
        case "operator":
          this.operator(params);
          break;
        case "inputText":
          this.inputText(params);
          break;
      }
    },
    caculate() {
      switch (this.operatorType) {
        case "plus":
          this.showValue = common_vendor.calc(`${this.firstValue} + ${this.showValue}`);
          break;
        case "minus":
          this.showValue = common_vendor.calc(`${this.firstValue} - ${this.showValue}`);
          break;
        case "multiply":
          this.showValue = common_vendor.calc(`${this.firstValue} * ${this.showValue}`);
          break;
        case "divide":
          this.showValue = common_vendor.calc(`${this.firstValue} / ${this.showValue}`);
          break;
      }
    },
    operator(params) {
      console.log("计算操作");
      switch (params) {
        case "clear":
          this.showValue = "0";
          break;
        case "opposite":
          this.showValue = -this.showValue;
          break;
        case "percent":
          this.showValue = common_vendor.calc(`${this.showValue} / 100`);
          break;
        case "result":
          this.caculate();
          break;
        default:
          this.operatorType = params;
          if (this.firstValue != "") {
            this.caculate();
          }
          break;
      }
      this.isCaculate = true;
    },
    inputText(params) {
      console.log("输入操作");
      if (this.isCaculate) {
        this.firstValue = this.showValue;
        this.showValue = "0";
        this.isCaculate = false;
      }
      if (params == "." && this.showValue.indexOf(".") > -1)
        return;
      if (this.showValue.length >= 11)
        return;
      if (params != "." && this.showValue == "0") {
        this.showValue = params + "";
      } else {
        this.showValue += params + "";
      }
      if (params != "." && this.showValue.indexOf(".") == -1) {
        let num = parseInt(this.showValue.replaceAll(",", ""));
        this.showValue = num.toLocaleString();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.curFontSize,
    b: $data.showValue,
    c: common_vendor.o(($event) => $data.showValue = $event.detail.value),
    d: common_vendor.f($data.buttons, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.text,
        c: common_vendor.n(item.class),
        d: common_vendor.o(($event) => $options.operate(item), item.text)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
