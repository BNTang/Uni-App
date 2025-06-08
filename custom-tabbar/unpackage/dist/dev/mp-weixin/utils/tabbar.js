"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("../common/vendor.js");
class CustomTabBar {
  constructor() {
    this.tabBarInstance = null;
    this.currentSelected = 0;
  }
  // 设置TabBar实例引用
  setInstance(instance) {
    this.tabBarInstance = instance;
  }
  // 获取当前选中的TabBar项
  getCurrentSelected() {
    return this.currentSelected;
  }
  // 设置当前选中项
  setCurrentSelected(index) {
    this.currentSelected = index;
  }
  // 设置TabBar某一项的徽标
  setTabBarBadge(options) {
    return new Promise((resolve, reject) => {
      try {
        if (!this.tabBarInstance) {
          throw new Error("TabBar实例未初始化");
        }
        const { index, text } = options;
        this.tabBarInstance.setTabBarBadge(index, text);
        resolve({
          errMsg: "setTabBarBadge:ok"
        });
      } catch (error) {
        reject({
          errMsg: `setTabBarBadge:fail ${error.message}`
        });
      }
    });
  }
  // 移除TabBar某一项的徽标
  removeTabBarBadge(options) {
    return new Promise((resolve, reject) => {
      try {
        if (!this.tabBarInstance) {
          throw new Error("TabBar实例未初始化");
        }
        const { index } = options;
        this.tabBarInstance.removeTabBarBadge(index);
        resolve({
          errMsg: "removeTabBarBadge:ok"
        });
      } catch (error) {
        reject({
          errMsg: `removeTabBarBadge:fail ${error.message}`
        });
      }
    });
  }
  // 显示TabBar某一项的右上角红点
  showTabBarRedDot(options) {
    return new Promise((resolve, reject) => {
      try {
        if (!this.tabBarInstance) {
          throw new Error("TabBar实例未初始化");
        }
        const { index } = options;
        this.tabBarInstance.showTabBarRedDot(index);
        resolve({
          errMsg: "showTabBarRedDot:ok"
        });
      } catch (error) {
        reject({
          errMsg: `showTabBarRedDot:fail ${error.message}`
        });
      }
    });
  }
  // 隐藏TabBar某一项的右上角红点
  hideTabBarRedDot(options) {
    return new Promise((resolve, reject) => {
      try {
        if (!this.tabBarInstance) {
          throw new Error("TabBar实例未初始化");
        }
        const { index } = options;
        this.tabBarInstance.hideTabBarRedDot(index);
        resolve({
          errMsg: "hideTabBarRedDot:ok"
        });
      } catch (error) {
        reject({
          errMsg: `hideTabBarRedDot:fail ${error.message}`
        });
      }
    });
  }
  // 动态设置TabBar的整体样式
  setTabBarStyle(options) {
    return new Promise((resolve, reject) => {
      try {
        common_vendor.index.__f__("log", "at utils/tabbar.js:120", "setTabBarStyle:", options);
        resolve({
          errMsg: "setTabBarStyle:ok"
        });
      } catch (error) {
        reject({
          errMsg: `setTabBarStyle:fail ${error.message}`
        });
      }
    });
  }
  // 动态设置TabBar某一项的内容
  setTabBarItem(options) {
    return new Promise((resolve, reject) => {
      try {
        if (!this.tabBarInstance) {
          throw new Error("TabBar实例未初始化");
        }
        const { index, text, iconPath, selectedIconPath } = options;
        if (this.tabBarInstance.tabList && this.tabBarInstance.tabList[index]) {
          if (text !== void 0) {
            this.tabBarInstance.tabList[index].text = text;
          }
          if (iconPath !== void 0) {
            this.tabBarInstance.tabList[index].iconPath = iconPath;
          }
          if (selectedIconPath !== void 0) {
            this.tabBarInstance.tabList[index].selectedIconPath = selectedIconPath;
          }
        }
        resolve({
          errMsg: "setTabBarItem:ok"
        });
      } catch (error) {
        reject({
          errMsg: `setTabBarItem:fail ${error.message}`
        });
      }
    });
  }
  // 显示TabBar
  showTabBar(options = {}) {
    return new Promise((resolve, reject) => {
      try {
        if (this.tabBarInstance && this.tabBarInstance.$el) {
          this.tabBarInstance.$el.style.display = "flex";
        }
        resolve({
          errMsg: "showTabBar:ok"
        });
      } catch (error) {
        reject({
          errMsg: `showTabBar:fail ${error.message}`
        });
      }
    });
  }
  // 隐藏TabBar
  hideTabBar(options = {}) {
    return new Promise((resolve, reject) => {
      try {
        if (this.tabBarInstance && this.tabBarInstance.$el) {
          this.tabBarInstance.$el.style.display = "none";
        }
        resolve({
          errMsg: "hideTabBar:ok"
        });
      } catch (error) {
        reject({
          errMsg: `hideTabBar:fail ${error.message}`
        });
      }
    });
  }
}
const customTabBar = new CustomTabBar();
if (typeof common_vendor.index !== "undefined") {
  const originalSetTabBarBadge = common_vendor.index.setTabBarBadge;
  const originalRemoveTabBarBadge = common_vendor.index.removeTabBarBadge;
  const originalShowTabBarRedDot = common_vendor.index.showTabBarRedDot;
  const originalHideTabBarRedDot = common_vendor.index.hideTabBarRedDot;
  const originalSetTabBarStyle = common_vendor.index.setTabBarStyle;
  const originalSetTabBarItem = common_vendor.index.setTabBarItem;
  const originalShowTabBar = common_vendor.index.showTabBar;
  const originalHideTabBar = common_vendor.index.hideTabBar;
  common_vendor.index.setTabBarBadge = function(options) {
    if (customTabBar.tabBarInstance) {
      return customTabBar.setTabBarBadge(options);
    }
    return originalSetTabBarBadge.call(this, options);
  };
  common_vendor.index.removeTabBarBadge = function(options) {
    if (customTabBar.tabBarInstance) {
      return customTabBar.removeTabBarBadge(options);
    }
    return originalRemoveTabBarBadge.call(this, options);
  };
  common_vendor.index.showTabBarRedDot = function(options) {
    if (customTabBar.tabBarInstance) {
      return customTabBar.showTabBarRedDot(options);
    }
    return originalShowTabBarRedDot.call(this, options);
  };
  common_vendor.index.hideTabBarRedDot = function(options) {
    if (customTabBar.tabBarInstance) {
      return customTabBar.hideTabBarRedDot(options);
    }
    return originalHideTabBarRedDot.call(this, options);
  };
  common_vendor.index.setTabBarStyle = function(options) {
    if (customTabBar.tabBarInstance) {
      return customTabBar.setTabBarStyle(options);
    }
    return originalSetTabBarStyle.call(this, options);
  };
  common_vendor.index.setTabBarItem = function(options) {
    if (customTabBar.tabBarInstance) {
      return customTabBar.setTabBarItem(options);
    }
    return originalSetTabBarItem.call(this, options);
  };
  common_vendor.index.showTabBar = function(options) {
    if (customTabBar.tabBarInstance) {
      return customTabBar.showTabBar(options);
    }
    return originalShowTabBar.call(this, options);
  };
  common_vendor.index.hideTabBar = function(options) {
    if (customTabBar.tabBarInstance) {
      return customTabBar.hideTabBar(options);
    }
    return originalHideTabBar.call(this, options);
  };
}
exports.default = customTabBar;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/tabbar.js.map
