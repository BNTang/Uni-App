好的，以下是一份**兼容原生Tabbar的uni-app自定义Tabbar组件PRD（产品需求文档）**，采用Markdown格式，适合团队评审和开发使用。

---

# uni-app 自定义 Tabbar 组件 PRD

## 1. 项目背景

为满足客户对底部导航栏（Tabbar）高度定制化的需求，需开发一套兼容原生Tabbar的自定义Tabbar组件。该组件需支持Vue3语法，适配H5、小程序、App等主流平台，并兼容uni-app原生Tabbar的配置和API，便于后续维护和升级。

---

## 2. 目标与范围

- 实现一套可高度自定义的Tabbar组件，支持个性化样式和交互。
- 兼容uni-app原生Tabbar配置（如`pages.json`中的tabBar字段）。
- 支持Vue3 `<script setup>`语法。
- 适配H5、小程序、App端。
- 支持后续扩展，如动画、消息红点、角标等。

---

## 3. 功能需求

### 3.1 Tabbar基础功能

- 支持自定义Tab项数量、图标、文字、跳转路径。
- 支持高亮显示当前选中项。
- 支持点击Tab项进行页面跳转（`uni.switchTab`）。
- 支持自定义选中与未选中图标。
- 支持Tab项显示红点、角标等消息提示。

### 3.2 兼容原生Tabbar

- Tabbar项配置可直接读取`pages.json`中的`tabBar.list`，无需重复维护。
- 支持原生Tabbar的API（如`uni.setTabBarBadge`、`uni.removeTabBarBadge`、`uni.showTabBarRedDot`、`uni.hideTabBarRedDot`等）。
- 支持`pages.json`中`tabBar`的部分样式配置（如背景色、字体颜色等）。

### 3.3 交互与样式

- 支持自定义Tabbar整体样式（如背景色、边框、阴影等）。
- 支持自定义Tab项样式（如字体、图标大小、间距等）。
- 支持自定义选中项样式（如高亮色、动画等）。
- 支持横向、纵向布局切换（如H5端顶部导航）。

### 3.4 兼容性与扩展

- 兼容H5、小程序、App端。
- 支持Vue3 `<script setup>`语法。
- 组件结构清晰，便于后续扩展和维护。

---

## 4. 技术实现

### 4.1 组件设计

- 组件名称：`CustomTabbar.vue`
- Props参数：
  - `tabs`：Array，Tabbar项配置（可从`pages.json`读取）
  - `selected`：Number，当前选中项索引
  - `showIcon`：Boolean，是否显示图标
  - `direction`：String，布局方向（horizontal/vertical）
- Emits事件：
  - `tabChange`：Tab切换事件，返回当前索引和Tab项信息

### 4.2 原生兼容方案

- 通过`uni.getTabBar`、`uni.setTabBarBadge`等API实现与原生Tabbar一致的功能。
- 组件内部自动同步`pages.json`中的`tabBar`配置。
- 通过props允许外部覆盖部分配置，实现更灵活的定制。

### 4.3 使用方式

- 在`App.vue`或各页面底部引入并使用该组件。
- 通过props传递Tabbar配置和当前选中项。
- 通过事件监听Tab切换，执行页面跳转。

### 4.4 配置示例

```js
// pages.json
{
  "tabBar": {
    "custom": true,
    "color": "#999",
    "selectedColor": "#007aff",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/home.png",
        "selectedIconPath": "static/home-active.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/user/index",
        "iconPath": "static/user.png",
        "selectedIconPath": "static/user-active.png",
        "text": "我的"
      }
    ]
  }
}
```

---

## 5. 非功能需求

- 组件代码需结构清晰，注释完整，便于后期维护。
- 样式需支持灵活扩展，便于后续个性化定制。
- 组件需通过props和事件与外部通信，避免直接操作全局状态。
- 需在`pages.json`中设置 `"tabBar": { "custom": true }`，隐藏原生Tabbar。

---

## 6. 交付内容

✅ **已完成的交付物：**

- [x] `CustomTabbar.vue`组件源码 - 位于 `components/custom-tabbar/custom-tabbar.vue`
- [x] 使用示例及文档 - 详见 `components/custom-tabbar/README.md`
- [x] 必要的静态资源（如图标） - 位于 `static/tabbar/` 目录
- [x] 相关API兼容说明 - 通过 `utils/tabbar.js` 实现兼容层
- [x] 快速入门指南 - 详见 `QUICK_START.md`

## 📚 文档导航

| 文档类型 | 文件路径 | 适用场景 |
|----------|----------|----------|
| 🚀 **快速入门** | [`QUICK_START.md`](./QUICK_START.md) | 5分钟快速上手，适合急于使用的开发者 |
| 📖 **完整手册** | [`components/custom-tabbar/README.md`](./components/custom-tabbar/README.md) | 详细API文档，适合深度定制和客户交付 |
| 🔍 **验证指南** | [`VERIFICATION_GUIDE.md`](./VERIFICATION_GUIDE.md) | 如何验证自定义TabBar是否正常工作 |
| 🆚 **对比分析** | [`NATIVE_VS_CUSTOM_COMPARISON.md`](./NATIVE_VS_CUSTOM_COMPARISON.md) | 原生vs自定义TabBar详细对比，选型参考 |
| 🌊 **水波纹效果** | [`RIPPLE_EFFECT_GUIDE.md`](./RIPPLE_EFFECT_GUIDE.md) | 水波纹交互效果的技术实现和使用指南 |
| 📋 **项目说明** | [`README.md`](./README.md) | 项目概述和PRD需求说明 |

## 📦 项目结构

```
custom-tabbar/
├── components/custom-tabbar/
│   ├── custom-tabbar.vue     # 🎯 核心TabBar组件
│   └── README.md             # 📖 组件使用文档
├── utils/
│   └── tabbar.js             # 🔧 API兼容工具类
├── pages/                    # 📄 示例页面
│   ├── index/index.vue       # 首页（含测试功能）
│   ├── category/index.vue    # 分类页
│   ├── cart/index.vue        # 购物车页
│   └── user/index.vue        # 用户页
├── static/tabbar/            # 🖼️ TabBar图标
│   ├── *.png                 # 各种图标文件
├── pages.json                # ⚙️ 页面配置（已设置custom:true）
├── App.vue                   # 🏠 应用入口（已集成TabBar）
└── main.js                   # 🚀 项目入口（已导入工具类）
```

## ✨ 核心功能演示

### 🎯 兼容原生API
```js
// 设置角标
uni.setTabBarBadge({ index: 2, text: '5' })

// 显示红点
uni.showTabBarRedDot({ index: 1 })

// 隐藏红点
uni.hideTabBarRedDot({ index: 1 })

// 移除角标
uni.removeTabBarBadge({ index: 2 })
```

### 🔄 Vue3语法支持
```vue
<script setup>
import { ref } from 'vue'
// 支持Vue3 Composition API
</script>
```

### 📱 多端兼容
- ✅ H5端：支持横向/纵向布局
- ✅ 小程序：完美适配各种小程序平台
- ✅ App端：支持原生App

### 🎨 高度自定义
```vue
<custom-tabbar 
  :selected="0"
  :show-icon="true"
  direction="horizontal"
  :custom-style="{ backgroundColor: '#f5f5f5' }"
  @tabChange="onTabChange"
/>
```

### 🌊 水波纹交互效果
- ✨ Material Design风格水波纹
- 🎯 H5端支持精确点击位置扩散
- 📱 小程序端优化的居中效果
- 🎨 支持主题色自适应
- ⚡ 硬件加速，流畅动画

---

## 7. 参考资料

- [uni-app官方custom-tab-bar文档](https://en.uniapp.dcloud.io/component/custom-tab-bar.html)
- [uni-app tabBar配置说明](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)

---

如需补充具体UI设计稿、动画效果或特殊交互，请补充说明。  
如有其他需求，也可随时补充！