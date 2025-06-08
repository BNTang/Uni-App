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
    const showArrow = common_vendor.ref(false);
    const tabViewHeight = common_vendor.ref(0);
    const lastScrollTop = common_vendor.ref(0);
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
      common_vendor.index.__f__("log", "at pages/main-container/main-container.vue:223", `🎬 ${config.text} GIF开始播放，时长: ${duration}ms`);
      if (config.selectedIconEndFrame) {
        setTimeout(() => {
          gifPlayStatus.value[index] = "ended";
          common_vendor.index.__f__("log", "at pages/main-container/main-container.vue:230", `🎯 ${config.text} GIF播放完成，显示最后一帧`);
        }, duration);
      }
    };
    common_vendor.onMounted(() => {
      initContainer();
      common_vendor.index.$on("pageScroll", onPageScrollEvent);
    });
    common_vendor.onUnmounted(() => {
      common_vendor.index.$off("pageScroll", onPageScrollEvent);
    });
    const initContainer = async () => {
      await common_vendor.nextTick$1();
      common_vendor.index.createSelectorQuery().in(this).select(".tab-view").boundingClientRect((data) => {
        if (data) {
          tabViewHeight.value = data.height;
        }
      }).exec();
    };
    const onTabClick = (index) => {
      common_vendor.index.__f__("log", "at pages/main-container/main-container.vue:267", `🔄 点击Tab: ${index}`);
      if (selectedIndex.value === index && index === 0 && showArrow.value) {
        scrollToTop();
        return;
      }
      if (selectedIndex.value === index) {
        return;
      }
      const previousIndex = selectedIndex.value;
      if (index !== 0) {
        showArrow.value = false;
      } else if (index === 0 && selectedIndex.value !== 0) {
        showArrow.value = lastScrollTop.value > tabViewHeight.value;
      }
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
    const onPageScrollEvent = (scrollTop) => {
      if (selectedIndex.value === 0) {
        showArrow.value = scrollTop > tabViewHeight.value;
        lastScrollTop.value = scrollTop;
      }
    };
    const scrollToTop = () => {
      showArrow.value = false;
      const tab0 = this.$refs["tab-0"];
      if (tab0 && tab0[0] && typeof tab0[0].scrollToTop === "function") {
        tab0[0].scrollToTop();
      }
    };
    const onPageScroll = (event) => {
      var _a;
      if (selectedIndex.value === 0) {
        onPageScrollEvent(((_a = event.detail) == null ? void 0 : _a.scrollTop) || 0);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: tabList.value[0].init
      }, tabList.value[0].init ? {
        b: common_vendor.sr("tab-0", "8fc075b2-0"),
        c: common_vendor.o(onPageScroll),
        d: selectedIndex.value === 0 ? "visible" : "hidden"
      } : {}, {
        e: tabList.value[1].init
      }, tabList.value[1].init ? {
        f: common_vendor.sr("tab-1", "8fc075b2-1"),
        g: common_vendor.o(onPageScroll),
        h: selectedIndex.value === 1 ? "visible" : "hidden"
      } : {}, {
        i: tabList.value[2].init
      }, tabList.value[2].init ? {
        j: common_vendor.sr("tab-2", "8fc075b2-2"),
        k: common_vendor.o(onPageScroll),
        l: selectedIndex.value === 2 ? "visible" : "hidden"
      } : {}, {
        m: tabList.value[3].init
      }, tabList.value[3].init ? {
        n: common_vendor.sr("tab-3", "8fc075b2-3"),
        o: common_vendor.o(onPageScroll),
        p: selectedIndex.value === 3 ? "visible" : "hidden"
      } : {}, {
        q: common_vendor.f(tabConfig, (item, index, i0) => {
          return common_vendor.e({
            a: index === 0 && item.isSpecial
          }, index === 0 && item.isSpecial ? common_vendor.e({
            b: showArrow.value
          }, showArrow.value ? {
            c: selectedIndex.value === index ? 1 : ""
          } : common_vendor.e({
            d: selectedIndex.value === index
          }, selectedIndex.value === index ? {
            e: item.selectedIconPath
          } : {
            f: item.iconPath
          }, {
            g: selectedIndex.value === index ? 1 : ""
          }), {
            h: !showArrow.value && selectedIndex.value !== index
          }, !showArrow.value && selectedIndex.value !== index ? {
            i: common_vendor.t(item.text),
            j: selectedIndex.value === index ? 1 : ""
          } : {}) : {
            k: getIconSrc(item, index),
            l: selectedIndex.value === index ? 1 : "",
            m: `icon-${index}-${gifPlayStatus.value[index] || "static"}`,
            n: common_vendor.t(item.text),
            o: selectedIndex.value === index ? 1 : ""
          }, {
            p: index,
            q: selectedIndex.value === index ? 1 : "",
            r: common_vendor.o(($event) => onTabClick(index), index)
          });
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8fc075b2"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/main-container/main-container.js.map
