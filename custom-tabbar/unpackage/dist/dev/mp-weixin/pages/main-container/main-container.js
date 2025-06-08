"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (IndexPage + CategoryPage + CartPage + UserPage)();
}
const IndexPage = () => "../index/index2.js";
const CategoryPage = () => "../category/index2.js";
const CartPage = () => "../cart/index2.js";
const UserPage = () => "../user/index2.js";
const _sfc_main = {
  __name: "main-container",
  setup(__props) {
    const selectedIndex = common_vendor.ref(0);
    const gifPlayStatus = common_vendor.ref({});
    const tabConfig = [
      {
        iconPath: "/static/tabbar/ai.png",
        selectedIconPath: "/static/icons/ai-robot.gif",
        // AI使用GIF
        text: "Ai我",
        init: true,
        isSpecial: true
        // 标记为特殊图标
      },
      {
        iconPath: "/static/tabbar/hotspot.png",
        selectedIconPath: "/static/icons/hotspot.gif",
        // 恢复使用GIF，确保显示正常
        selectedIconEndFrame: "/static/icons/hotspot-end.png",
        // 最后一帧静态图
        text: "热点",
        init: false,
        gifDuration: 240
      },
      {
        iconPath: "/static/tabbar/chat.png",
        selectedIconPath: "/static/icons/chat.gif",
        // 恢复使用GIF，确保显示正常
        selectedIconEndFrame: "/static/icons/chat-end.png",
        // 最后一帧静态图
        text: "聊天",
        init: false,
        gifDuration: 240
      },
      {
        iconPath: "/static/tabbar/user.png",
        selectedIconPath: "/static/icons/user.gif",
        // 恢复使用GIF，确保显示正常
        selectedIconEndFrame: "/static/icons/user-end.png",
        // 最后一帧静态图
        text: "我的",
        init: false,
        gifDuration: 240
      }
    ];
    const tabList = common_vendor.ref(tabConfig);
    const getIconSrc = (item, index) => {
      if (selectedIndex.value !== index) {
        return item.iconPath;
      }
      if (index === 0) {
        return item.selectedIconPath;
      }
      const playStatus = gifPlayStatus.value[index];
      if (playStatus === "playing") {
        return item.selectedIconPath;
      } else if (playStatus === "ended") {
        return item.selectedIconEndFrame || item.selectedIconPath;
      } else {
        return item.selectedIconPath;
      }
    };
    const handleGifPlayback = (index) => {
      const config = tabConfig[index];
      gifPlayStatus.value[index] = "playing";
      const duration = config.gifDuration || 1e3;
      common_vendor.index.__f__("log", "at pages/main-container/main-container.vue:208", `🎬 ${config.text} GIF开始播放，时长: ${duration}ms`);
      if (config.selectedIconEndFrame) {
        setTimeout(() => {
          gifPlayStatus.value[index] = "ended";
          common_vendor.index.__f__("log", "at pages/main-container/main-container.vue:215", `🎯 ${config.text} GIF播放完成，显示最后一帧`);
        }, duration);
      }
    };
    common_vendor.onMounted(() => {
    });
    common_vendor.onUnmounted(() => {
    });
    const onTabClick = (index) => {
      common_vendor.index.__f__("log", "at pages/main-container/main-container.vue:241", `🔄 点击Tab: ${index}`);
      if (selectedIndex.value === index) {
        return;
      }
      const previousIndex = selectedIndex.value;
      if (previousIndex !== 0 && tabConfig[previousIndex].selectedIconPath.includes(".gif")) {
        delete gifPlayStatus.value[previousIndex];
      }
      if (!tabList.value[index].init) {
        tabList.value[index].init = true;
      }
      selectedIndex.value = index;
      if (index !== 0 && tabConfig[index].selectedIconPath.includes(".gif")) {
        handleGifPlayback(index);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: tabList.value[0].init
      }, tabList.value[0].init ? {
        b: common_vendor.sr("tab-0", "8fc075b2-0"),
        c: selectedIndex.value === 0 ? "visible" : "hidden"
      } : {}, {
        d: tabList.value[1].init
      }, tabList.value[1].init ? {
        e: common_vendor.sr("tab-1", "8fc075b2-1"),
        f: selectedIndex.value === 1 ? "visible" : "hidden"
      } : {}, {
        g: tabList.value[2].init
      }, tabList.value[2].init ? {
        h: common_vendor.sr("tab-2", "8fc075b2-2"),
        i: selectedIndex.value === 2 ? "visible" : "hidden"
      } : {}, {
        j: tabList.value[3].init
      }, tabList.value[3].init ? {
        k: common_vendor.sr("tab-3", "8fc075b2-3"),
        l: selectedIndex.value === 3 ? "visible" : "hidden"
      } : {}, {
        m: common_vendor.f(tabConfig, (item, index, i0) => {
          return common_vendor.e({
            a: index === 0 && item.isSpecial
          }, index === 0 && item.isSpecial ? common_vendor.e({
            b: selectedIndex.value === index
          }, selectedIndex.value === index ? {
            c: item.selectedIconPath
          } : {
            d: item.iconPath
          }, {
            e: selectedIndex.value === index ? 1 : "",
            f: selectedIndex.value !== index
          }, selectedIndex.value !== index ? {
            g: common_vendor.t(item.text),
            h: selectedIndex.value === index ? 1 : ""
          } : {}) : {
            i: getIconSrc(item, index),
            j: selectedIndex.value === index ? 1 : "",
            k: `icon-${index}-${gifPlayStatus.value[index] || "static"}`,
            l: common_vendor.t(item.text),
            m: selectedIndex.value === index ? 1 : ""
          }, {
            n: index,
            o: selectedIndex.value === index ? 1 : "",
            p: common_vendor.o(($event) => onTabClick(index), index)
          });
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8fc075b2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/main-container/main-container.js.map
