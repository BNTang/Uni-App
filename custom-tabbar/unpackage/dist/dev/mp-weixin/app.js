"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./utils/tabbar.js");
if (!Math) {
  "./pages/main-container/main-container.js";
  "./pages/index/index.js";
  "./pages/category/index.js";
  "./pages/cart/index.js";
  "./pages/user/index.js";
}
const _sfc_main$1 = {
  __name: "custom-tabbar",
  props: {
    // tabbar项数据
    tabs: {
      type: Array,
      default: () => [],
      required: true
    },
    // 当前选中项索引
    selected: {
      type: Number,
      default: 0
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: true
    },
    // 排列方向
    direction: {
      type: String,
      default: "horizontal",
      // horizontal | vertical
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    // 默认颜色
    color: {
      type: String,
      default: "#999999"
    },
    // 选中颜色
    selectedColor: {
      type: String,
      default: "#007aff"
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["tabChange", "onTabItemTap"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tabList = common_vendor.ref([]);
    const tabbarStyle = common_vendor.computed(() => {
      return {
        backgroundColor: "#ffffff",
        ...props.customStyle
      };
    });
    const initTabBarData = () => {
      if (props.tabs && props.tabs.length > 0) {
        tabList.value = props.tabs.map((item) => ({
          ...item,
          showRedDot: false,
          badge: ""
        }));
        common_vendor.index.__f__("log", "at components/custom-tabbar/custom-tabbar.vue:119", "✅ 自定义TabBar初始化完成:", tabList.value);
      } else {
        common_vendor.index.__f__("warn", "at components/custom-tabbar/custom-tabbar.vue:121", "⚠️ 自定义TabBar需要传入tabs参数");
      }
    };
    const createMiniProgramRipple = (index) => {
      const rippleContainers = document.querySelectorAll(".ripple-container");
      const container = rippleContainers[index];
      if (container) {
        const ripple = document.createElement("view");
        ripple.classList.add("ripple", "ripple-center");
        container.appendChild(ripple);
        setTimeout(() => {
          ripple.classList.add("ripple-animate");
        }, 10);
        setTimeout(() => {
          if (ripple && ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600);
      }
    };
    const onTouchStart = (event, index) => {
      createMiniProgramRipple(index);
    };
    const onTabItemTap = (index) => {
      const item = tabList.value[index];
      if (!item)
        return;
      if (props.selected === index) {
        triggerBounceAnimation(index);
        return;
      }
      common_vendor.index.__f__("log", "at components/custom-tabbar/custom-tabbar.vue:211", `🔄 自定义TabBar点击: ${item.text} (索引: ${index}) 🌊`);
      triggerSwitchAnimation(props.selected, index);
      emit("tabChange", index, item);
      emit("onTabItemTap", {
        index,
        pagePath: item.pagePath,
        text: item.text
      });
      common_vendor.index.switchTab({
        url: `/${item.pagePath}`,
        fail: (err) => {
          common_vendor.index.__f__("error", "at components/custom-tabbar/custom-tabbar.vue:228", "页面跳转失败:", err);
        }
      });
    };
    const triggerBounceAnimation = (index) => {
      common_vendor.index.__f__("log", "at components/custom-tabbar/custom-tabbar.vue:235", `🎯 当前项弹跳动画: ${index}`);
    };
    const triggerSwitchAnimation = (fromIndex, toIndex) => {
      common_vendor.index.__f__("log", "at components/custom-tabbar/custom-tabbar.vue:241", `🔄 切换动画: ${fromIndex} -> ${toIndex}`);
    };
    const setTabBarBadge = (index, text) => {
      if (tabList.value[index]) {
        tabList.value[index].badge = text;
        tabList.value[index].showRedDot = false;
      }
    };
    const removeTabBarBadge = (index) => {
      if (tabList.value[index]) {
        tabList.value[index].badge = "";
      }
    };
    const showTabBarRedDot = (index) => {
      if (tabList.value[index]) {
        tabList.value[index].showRedDot = true;
        tabList.value[index].badge = "";
      }
    };
    const hideTabBarRedDot = (index) => {
      if (tabList.value[index]) {
        tabList.value[index].showRedDot = false;
      }
    };
    __expose({
      setTabBarBadge,
      removeTabBarBadge,
      showTabBarRedDot,
      hideTabBarRedDot,
      tabList
    });
    common_vendor.onMounted(() => {
      initTabBarData();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabList.value, (item, index, i0) => {
          return common_vendor.e({
            a: `ripple-${index}`
          }, __props.showIcon ? common_vendor.e({
            b: __props.selected === index ? item.selectedIconPath : item.iconPath,
            c: item.showRedDot && !item.badge
          }, item.showRedDot && !item.badge ? {} : {}, {
            d: item.badge && !item.showRedDot
          }, item.badge && !item.showRedDot ? {
            e: common_vendor.t(item.badge)
          } : {}) : {}, {
            f: common_vendor.t(item.text),
            g: __props.selected === index ? props.selectedColor : props.color,
            h: index,
            i: __props.selected === index ? 1 : "",
            j: common_vendor.o(($event) => onTabItemTap(index), index),
            k: common_vendor.o(($event) => onTouchStart($event, index), index)
          });
        }),
        b: __props.showIcon,
        c: common_vendor.n(__props.direction),
        d: common_vendor.s(tabbarStyle.value)
      };
    };
  }
};
const _easycom_custom_tabbar = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["__scopeId", "data-v-51c48e3c"]]);
const _sfc_main = {
  components: {
    CustomTabbar: _easycom_custom_tabbar
  },
  setup() {
    const selectedTabIndex = common_vendor.ref(0);
    const customTabbar = common_vendor.ref(null);
    const onTabChange = (index, item) => {
      selectedTabIndex.value = index;
      common_vendor.index.__f__("log", "at App.vue:30", "Tab切换:", index, item);
    };
    common_vendor.onMounted(async () => {
      const { default: customTabBar } = await "./utils/tabbar.js";
      if (customTabbar.value) {
        customTabBar.setInstance(customTabbar.value);
      }
      common_vendor.index.__f__("log", "at App.vue:43", "App启动，TabBar初始化完成");
    });
    return {
      selectedTabIndex,
      customTabbar,
      onTabChange
    };
  },
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:54", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:57", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:60", "App Hide");
  }
};
if (!Array) {
  const _easycom_custom_tabbar2 = common_vendor.resolveComponent("custom-tabbar");
  _easycom_custom_tabbar2();
}
if (!Math) {
  _easycom_custom_tabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("customTabbar", "0036c3c4-0"),
    b: common_vendor.o($setup.onTabChange),
    c: common_vendor.p({
      selected: $setup.selectedTabIndex,
      ["show-icon"]: true,
      direction: "horizontal"
    })
  };
}
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
