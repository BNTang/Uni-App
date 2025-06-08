"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props, { expose: __expose }) {
    const title = common_vendor.ref("首页");
    const scrollTop = common_vendor.ref(0);
    const oldScrollTop = common_vendor.ref(0);
    const scrollItems = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      generateScrollItems();
    });
    const generateScrollItems = () => {
      for (let i = 1; i <= 50; i++) {
        scrollItems.value.push({
          title: `内容项 ${i}`,
          content: `这是第 ${i} 个内容项，用于演示滚动效果和箭头切换功能。当页面滚动超过一屏时，首页图标会变成向上箭头。`
        });
      }
    };
    const currentMode = common_vendor.computed(() => {
      var _a, _b;
      const hasCustomIndicator = (_a = document == null ? void 0 : document.querySelector) == null ? void 0 : _a.call(document, ".custom-tabbar-indicator");
      const hasCustomTabbar = (_b = document == null ? void 0 : document.querySelector) == null ? void 0 : _b.call(document, ".custom-tabbar");
      if (hasCustomIndicator && hasCustomTabbar) {
        return "🎯 自定义TabBar (custom: true)";
      } else {
        return "🏠 原生TabBar (custom: false)";
      }
    });
    const onPageScroll = (event) => {
      const currentScrollTop = event.detail.scrollTop;
      oldScrollTop.value = currentScrollTop;
      common_vendor.index.$emit("pageScroll", currentScrollTop);
    };
    const scrollToTop = () => {
      scrollTop.value = oldScrollTop.value;
      common_vendor.nextTick$1(() => {
        scrollTop.value = 0;
      });
    };
    __expose({
      scrollToTop
    });
    const testSetBadge = () => {
      common_vendor.index.setTabBarBadge({
        index: 2,
        // 购物车
        text: "5"
      }).then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:134", "设置角标成功:", res);
        common_vendor.index.showToast({
          title: "设置角标成功",
          icon: "success"
        });
      }).catch((err) => {
        common_vendor.index.__f__("error", "at pages/index/index.vue:140", "设置角标失败:", err);
      });
    };
    const testRemoveBadge = () => {
      common_vendor.index.removeTabBarBadge({
        index: 2
        // 购物车
      }).then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:149", "移除角标成功:", res);
        common_vendor.index.showToast({
          title: "移除角标成功",
          icon: "success"
        });
      }).catch((err) => {
        common_vendor.index.__f__("error", "at pages/index/index.vue:155", "移除角标失败:", err);
      });
    };
    const testShowRedDot = () => {
      common_vendor.index.showTabBarRedDot({
        index: 1
        // 分类
      }).then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:164", "显示红点成功:", res);
        common_vendor.index.showToast({
          title: "显示红点成功",
          icon: "success"
        });
      }).catch((err) => {
        common_vendor.index.__f__("error", "at pages/index/index.vue:170", "显示红点失败:", err);
      });
    };
    const testHideRedDot = () => {
      common_vendor.index.hideTabBarRedDot({
        index: 1
        // 分类
      }).then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:179", "隐藏红点成功:", res);
        common_vendor.index.showToast({
          title: "隐藏红点成功",
          icon: "success"
        });
      }).catch((err) => {
        common_vendor.index.__f__("error", "at pages/index/index.vue:185", "隐藏红点失败:", err);
      });
    };
    const verifyCustomTabbar = () => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:191", "=== 🔍 自定义TabBar验证 ===");
      common_vendor.index.__f__("log", "at pages/index/index.vue:192", "1. 如果你看到这条消息，说明页面JavaScript正常运行");
      common_vendor.index.__f__("log", "at pages/index/index.vue:193", "2. 请检查页面底部是否有TabBar");
      common_vendor.index.__f__("log", "at pages/index/index.vue:194", "3. 请检查TabBar右上角是否有🎯标识");
      common_vendor.index.__f__("log", "at pages/index/index.vue:195", '4. 请检查pages.json中是否设置了"custom": true');
      common_vendor.index.showModal({
        title: "自定义TabBar验证",
        content: "✅ 验证完成！\n\n如果你看到：\n1. TabBar底部导航栏\n2. 右上角🎯标识\n3. 控制台日志\n\n说明自定义TabBar正在正常工作！",
        showCancel: false
      });
    };
    const inspectTabbarInfo = () => {
      const tabbarInfo = {
        "组件类型": "自定义TabBar组件",
        "Vue版本": "Vue3 (script setup)",
        "文件位置": "components/custom-tabbar/custom-tabbar.vue",
        "配置文件": "pages.json (custom: true)",
        "API兼容": "utils/tabbar.js",
        "当前页面": "pages/index/index.vue"
      };
      common_vendor.index.__f__("log", "at pages/index/index.vue:215", "=== 📊 TabBar详细信息 ===");
      console.table(tabbarInfo);
      common_vendor.index.showModal({
        title: "TabBar详细信息",
        content: `📊 组件信息：
		
✅ 类型：自定义TabBar组件
🎯 框架：Vue3 (script setup)
📁 位置：components/custom-tabbar/
⚙️ 配置：pages.json (custom: true)
🔧 API：utils/tabbar.js兼容层

更多信息请查看控制台！`,
        showCancel: false
      });
    };
    const showComparison = () => {
      const isCustom = currentMode.value.includes("自定义");
      const comparisonText = `📊 TabBar模式对比
	
🔍 当前状态: ${currentMode.value}

${isCustom ? "🎯 自定义TabBar特点:" : "🏠 原生TabBar特点:"}
${isCustom ? `✅ 右上角有🎯标识
✅ 支持深度样式定制  
✅ Vue3 script setup语法
✅ 自定义动画效果
✅ 复杂交互功能
⚠️ 需要更多代码维护` : `✅ 系统原生组件，性能最优
✅ 无需额外代码维护
✅ 完美平台兼容性
❌ 样式定制能力有限
❌ 无法实现复杂交互
❌ 无🎯自定义标识`}

💡 切换方法:
1. 修改 pages.json 中的 "custom" 值
2. custom: true → 自定义TabBar  
3. custom: false → 原生TabBar
4. 重启项目查看效果`;
      common_vendor.index.showModal({
        title: "TabBar模式对比",
        content: comparisonText,
        showCancel: false
      });
      common_vendor.index.__f__("log", "at pages/index/index.vue:268", "=== 📊 TabBar模式详细对比 ===");
      common_vendor.index.__f__("log", "at pages/index/index.vue:269", "当前模式:", currentMode.value);
      common_vendor.index.__f__("log", "at pages/index/index.vue:270", "自定义TabBar优势: 高度定制、Vue3支持、复杂交互");
      common_vendor.index.__f__("log", "at pages/index/index.vue:271", "原生TabBar优势: 性能最优、兼容性好、维护简单");
      common_vendor.index.__f__("log", "at pages/index/index.vue:272", "切换方法: 修改pages.json中的custom值");
    };
    const testRippleEffect = () => {
      common_vendor.index.showModal({
        title: "🌊 水波纹效果说明",
        content: `水波纹效果已添加到TabBar中！

🎯 使用方法:
1. 点击任意TabBar项
2. 观察从点击位置扩散的水波纹
3. 不同状态有不同颜色效果

✨ 特性:
• H5端: 从点击位置扩散
• 小程序端: 居中扩散
• 选中项有特殊效果
• 支持主题色适配

现在就去点击TabBar体验吧！`,
        showCancel: false
      });
      common_vendor.index.__f__("log", "at pages/index/index.vue:296", "🌊 水波纹效果说明:");
      common_vendor.index.__f__("log", "at pages/index/index.vue:297", "- H5端支持精确点击位置水波纹");
      common_vendor.index.__f__("log", "at pages/index/index.vue:298", "- 小程序端支持居中水波纹效果");
      common_vendor.index.__f__("log", "at pages/index/index.vue:299", "- 选中项和普通项有不同的视觉效果");
      common_vendor.index.__f__("log", "at pages/index/index.vue:300", "- 动画时长600ms，使用CSS3硬件加速");
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title.value),
        c: common_vendor.t(currentMode.value),
        d: common_vendor.o(showComparison),
        e: common_vendor.o(verifyCustomTabbar),
        f: common_vendor.o(testRippleEffect),
        g: common_vendor.o(testSetBadge),
        h: common_vendor.o(testRemoveBadge),
        i: common_vendor.o(testShowRedDot),
        j: common_vendor.o(testHideRedDot),
        k: common_vendor.o(inspectTabbarInfo),
        l: common_vendor.f(scrollItems.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.content),
            c: index
          };
        }),
        m: scrollTop.value,
        n: common_vendor.o(onPageScroll)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 1;
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/index.js.map
