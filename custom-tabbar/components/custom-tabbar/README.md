# uni-app 自定义TabBar组件 - 使用手册

## 📋 项目概述

本组件是一个高度兼容uni-app原生TabBar的自定义底部导航组件，支持Vue3语法，完美适配H5、小程序、App等全平台。提供了原生TabBar的所有功能，同时支持更多自定义特性。

## ✨ 核心特性

| 特性 | 描述 | 支持平台 |
|------|------|----------|
| 🔧 **原生API兼容** | 完全兼容 `uni.setTabBarBadge`、`uni.removeTabBarBadge` 等原生API | H5/小程序/App |
| 🎨 **高度自定义** | 支持自定义颜色、布局、动画等样式 | 全平台 |
| 📱 **多端适配** | 自动适配不同平台的安全区域和样式 | H5/小程序/App |
| 🔴 **消息提示** | 支持红点、数字角标等消息提示功能 | 全平台 |
| 📐 **灵活布局** | 支持横向、纵向布局，适配PC端顶部导航 | 全平台 |
| ⚡ **Vue3优化** | 使用Composition API，性能更优 | 全平台 |

## 📦 版本信息

- **组件版本**: v1.0.0
- **uni-app版本**: 3.0.0+
- **Vue版本**: 3.0.0+
- **支持平台**: H5、微信小程序、支付宝小程序、App

## 快速开始

### 1. 配置pages.json

```json
{
  "tabBar": {
    "custom": true,
    "color": "#999999",
    "selectedColor": "#007aff",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/tabbar/home.png",
        "selectedIconPath": "static/tabbar/home-active.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/category/index",
        "iconPath": "static/tabbar/category.png",
        "selectedIconPath": "static/tabbar/category-active.png",
        "text": "分类"
      }
    ]
  }
}
```

### 2. 在App.vue中使用

```vue
<template>
  <view id="app">
    <custom-tabbar 
      ref="customTabbar"
      :selected="selectedTabIndex"
      :show-icon="true"
      direction="horizontal"
      @tabChange="onTabChange"
    />
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CustomTabbar from '@/components/custom-tabbar/custom-tabbar.vue'
import customTabBar from '@/utils/tabbar.js'

const selectedTabIndex = ref(0)
const customTabbar = ref(null)

const onTabChange = (index, item) => {
  selectedTabIndex.value = index
  customTabBar.setCurrentSelected(index)
}

onMounted(() => {
  if (customTabbar.value) {
    customTabBar.setInstance(customTabbar.value)
  }
})
</script>
```

### 3. 在main.js中导入工具类

```js
import './utils/tabbar.js'
```

## 📚 详细API文档

### 🔧 组件Props参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 | 示例值 |
|--------|------|--------|------|------|--------|
| `selected` | Number | `0` | ❌ | 当前选中的Tab项索引（从0开始） | `0`、`1`、`2` |
| `showIcon` | Boolean | `true` | ❌ | 是否显示Tab项图标 | `true`、`false` |
| `direction` | String | `'horizontal'` | ❌ | TabBar布局方向 | `'horizontal'`、`'vertical'` |
| `tabs` | Array | `[]` | ❌ | 自定义Tab项数据数组 | 见下方tabs参数详情 |
| `customStyle` | Object | `{}` | ❌ | 自定义TabBar容器样式 | `{ backgroundColor: '#f5f5f5' }` |

#### tabs参数详情

当需要手动传入Tab项数据时，tabs数组中每个对象的结构：

| 字段名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| `pagePath` | String | ✅ | 页面路径 | `'pages/index/index'` |
| `text` | String | ✅ | Tab项显示文字 | `'首页'` |
| `iconPath` | String | ❌ | 未选中时的图标路径 | `'/static/tabbar/home.png'` |
| `selectedIconPath` | String | ❌ | 选中时的图标路径 | `'/static/tabbar/home-active.png'` |

```javascript
// tabs参数示例
const tabs = [
  {
    pagePath: 'pages/index/index',
    text: '首页',
    iconPath: '/static/tabbar/home.png',
    selectedIconPath: '/static/tabbar/home-active.png'
  },
  {
    pagePath: 'pages/category/index',
    text: '分类',
    iconPath: '/static/tabbar/category.png',
    selectedIconPath: '/static/tabbar/category-active.png'
  }
]
```

### 📡 组件Events事件

| 事件名 | 触发时机 | 参数说明 | 参数类型 | 示例 |
|--------|----------|----------|----------|------|
| `tabChange` | Tab项切换时触发 | `(index, item)` | `Number, Object` | `tabChange(0, {pagePath: '...', text: '首页'})` |
| `onTabItemTap` | Tab项被点击时触发 | `{index, pagePath, text}` | `Object` | `{index: 0, pagePath: 'pages/index/index', text: '首页'}` |

### 🛠️ 兼容的uni-app原生API

组件完全兼容以下uni-app原生TabBar API，无需修改现有代码：

| API方法 | 功能说明 | 参数格式 | 返回值 | 使用示例 |
|---------|----------|----------|--------|----------|
| `uni.setTabBarBadge()` | 设置Tab项右上角数字角标 | `{index: Number, text: String}` | `Promise` | `uni.setTabBarBadge({index: 2, text: '5'})` |
| `uni.removeTabBarBadge()` | 移除Tab项数字角标 | `{index: Number}` | `Promise` | `uni.removeTabBarBadge({index: 2})` |
| `uni.showTabBarRedDot()` | 显示Tab项右上角红点 | `{index: Number}` | `Promise` | `uni.showTabBarRedDot({index: 1})` |
| `uni.hideTabBarRedDot()` | 隐藏Tab项红点 | `{index: Number}` | `Promise` | `uni.hideTabBarRedDot({index: 1})` |
| `uni.setTabBarItem()` | 动态设置Tab项内容 | `{index, text?, iconPath?, selectedIconPath?}` | `Promise` | 见下方示例 |
| `uni.setTabBarStyle()` | 设置TabBar整体样式 | `{color?, selectedColor?, backgroundColor?}` | `Promise` | 见下方示例 |
| `uni.showTabBar()` | 显示TabBar | `{}` | `Promise` | `uni.showTabBar()` |
| `uni.hideTabBar()` | 隐藏TabBar | `{}` | `Promise` | `uni.hideTabBar()` |

#### API使用示例

```javascript
// 设置购物车角标
await uni.setTabBarBadge({
  index: 2,
  text: '99+'
})

// 显示消息红点
await uni.showTabBarRedDot({
  index: 1
})

// 动态修改Tab项
await uni.setTabBarItem({
  index: 0,
  text: '新首页',
  iconPath: '/static/new-home.png',
  selectedIconPath: '/static/new-home-active.png'
})

// 修改TabBar样式
await uni.setTabBarStyle({
  color: '#666666',
  selectedColor: '#ff6600',
  backgroundColor: '#fafafa'
})
```

## 🚀 完整使用示例

### 📱 基础使用示例

#### 1. 标准横向TabBar（推荐）

```vue
<template>
  <view class="container">
    <!-- 页面内容 -->
    <view class="content">
      <!-- 你的页面内容 -->
    </view>
    
    <!-- 自定义TabBar -->
    <custom-tabbar 
      ref="tabbarRef"
      :selected="currentIndex"
      :show-icon="true"
      direction="horizontal"
      @tabChange="handleTabChange"
      @onTabItemTap="handleTabTap"
    />
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CustomTabbar from '@/components/custom-tabbar/custom-tabbar.vue'

const currentIndex = ref(0)
const tabbarRef = ref(null)

// Tab切换处理
const handleTabChange = (index, item) => {
  currentIndex.value = index
  console.log(`切换到Tab: ${item.text}`)
}

// Tab点击处理
const handleTabTap = (data) => {
  console.log('Tab被点击:', data)
}

// 页面加载完成后的操作
onMounted(() => {
  // 可以在这里进行一些初始化操作
  console.log('TabBar初始化完成')
})
</script>

<style>
.container {
  height: 100vh;
}

.content {
  padding-bottom: 60px; /* 为TabBar预留空间 */
}
</style>
```

#### 2. 自定义Tab数据

```vue
<template>
  <custom-tabbar 
    :tabs="customTabs"
    :selected="selectedIndex"
    @tabChange="onTabChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const selectedIndex = ref(0)

// 自定义Tab配置
const customTabs = ref([
  {
    pagePath: 'pages/home/index',
    text: '主页',
    iconPath: '/static/icons/home.png',
    selectedIconPath: '/static/icons/home-active.png'
  },
  {
    pagePath: 'pages/discover/index',
    text: '发现',
    iconPath: '/static/icons/discover.png',
    selectedIconPath: '/static/icons/discover-active.png'
  },
  {
    pagePath: 'pages/mine/index',
    text: '我的',
    iconPath: '/static/icons/mine.png',
    selectedIconPath: '/static/icons/mine-active.png'
  }
])

const onTabChange = (index, item) => {
  selectedIndex.value = index
}
</script>
```

#### 3. PC端垂直布局示例

```vue
<template>
  <view class="pc-layout">
    <!-- 侧边TabBar -->
    <custom-tabbar 
      direction="vertical"
      :show-icon="true"
      :selected="activeTab"
      :custom-style="verticalStyle"
      @tabChange="handleVerticalTabChange"
    />
    
    <!-- 主内容区域 -->
    <view class="main-content">
      <!-- 页面内容 -->
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref(0)

// 垂直TabBar样式
const verticalStyle = computed(() => ({
  width: '200px',
  height: '100vh',
  backgroundColor: '#f8f9fa',
  borderRight: '1px solid #e5e5e5'
}))

const handleVerticalTabChange = (index, item) => {
  activeTab.value = index
}
</script>

<style>
.pc-layout {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
```

### 🎨 样式自定义示例

#### 1. 主题色彩定制

```vue
<template>
  <custom-tabbar 
    :custom-style="darkTheme"
    @tabChange="onTabChange"
  />
</template>

<script setup>
import { computed } from 'vue'

// 深色主题
const darkTheme = computed(() => ({
  backgroundColor: '#1a1a1a',
  borderTop: '1px solid #333333',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)'
}))
</script>
```

#### 2. 渐变背景TabBar

```vue
<template>
  <custom-tabbar 
    :custom-style="gradientStyle"
  />
</template>

<script setup>
import { computed } from 'vue'

const gradientStyle = computed(() => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderTop: 'none',
  color: '#ffffff'
}))
</script>
```

### 📊 角标和红点管理示例

```vue
<template>
  <view class="demo-container">
    <!-- 操作按钮区域 -->
    <view class="action-buttons">
      <button @click="setBadge" type="primary">设置购物车角标(5)</button>
      <button @click="removeBadge" type="default">移除角标</button>
      <button @click="showRedDot" type="warn">显示消息红点</button>
      <button @click="hideRedDot" type="default">隐藏红点</button>
      <button @click="updateTabItem" type="primary">更新Tab项</button>
    </view>
    
    <!-- TabBar -->
    <custom-tabbar 
      :selected="currentTab"
      @tabChange="onTabChange"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'

const currentTab = ref(0)

// 设置角标
const setBadge = async () => {
  try {
    await uni.setTabBarBadge({
      index: 2, // 购物车Tab
      text: '5'
    })
    uni.showToast({ title: '角标设置成功' })
  } catch (error) {
    console.error('设置角标失败:', error)
  }
}

// 移除角标
const removeBadge = async () => {
  try {
    await uni.removeTabBarBadge({
      index: 2
    })
    uni.showToast({ title: '角标移除成功' })
  } catch (error) {
    console.error('移除角标失败:', error)
  }
}

// 显示红点
const showRedDot = async () => {
  try {
    await uni.showTabBarRedDot({
      index: 1 // 分类Tab
    })
    uni.showToast({ title: '红点显示成功' })
  } catch (error) {
    console.error('显示红点失败:', error)
  }
}

// 隐藏红点
const hideRedDot = async () => {
  try {
    await uni.hideTabBarRedDot({
      index: 1
    })
    uni.showToast({ title: '红点隐藏成功' })
  } catch (error) {
    console.error('隐藏红点失败:', error)
  }
}

// 动态更新Tab项
const updateTabItem = async () => {
  try {
    await uni.setTabBarItem({
      index: 0,
      text: '新首页',
      iconPath: '/static/tabbar/new-home.png',
      selectedIconPath: '/static/tabbar/new-home-active.png'
    })
    uni.showToast({ title: 'Tab项更新成功' })
  } catch (error) {
    console.error('更新Tab项失败:', error)
  }
}

const onTabChange = (index, item) => {
  currentTab.value = index
  console.log(`切换到: ${item.text}`)
}
</script>

<style scoped>
.demo-container {
  padding: 20px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.action-buttons button {
  margin: 0;
}
</style>
```

### 🔄 动态控制TabBar显示/隐藏

```vue
<template>
  <view>
    <button @click="toggleTabBar">
      {{ isTabBarVisible ? '隐藏' : '显示' }} TabBar
    </button>
    
    <custom-tabbar 
      v-if="isTabBarVisible"
      :selected="currentTab"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'

const isTabBarVisible = ref(true)
const currentTab = ref(0)

const toggleTabBar = async () => {
  try {
    if (isTabBarVisible.value) {
      await uni.hideTabBar()
      isTabBarVisible.value = false
    } else {
      await uni.showTabBar()
      isTabBarVisible.value = true
    }
  } catch (error) {
    console.error('TabBar显示/隐藏失败:', error)
  }
}
</script>
```

## ⚠️ 重要注意事项

### 🔧 配置要求

| 项目 | 要求 | 说明 |
|------|------|------|
| **pages.json配置** | 必须设置 `"custom": true` | 禁用原生TabBar，启用自定义模式 |
| **图标路径** | 使用绝对路径 | 如 `/static/tabbar/home.png`，不要使用相对路径 |
| **组件位置** | 建议放在 `App.vue` 中 | 确保所有TabBar页面都能显示TabBar |
| **安全区域** | 自动处理 | 组件已自动适配各平台安全区域 |

### 📱 平台兼容性

| 平台 | 兼容性 | 特殊说明 |
|------|--------|----------|
| **H5** | ✅ 完全支持 | 支持横向/纵向布局，适合PC端 |
| **微信小程序** | ✅ 完全支持 | 自动适配小程序安全区域 |
| **支付宝小程序** | ✅ 完全支持 | 完全兼容原生API |
| **App** | ✅ 完全支持 | 支持iOS和Android平台 |
| **百度小程序** | ⚠️ 部分支持 | 基础功能正常，部分API需测试 |
| **字节跳动小程序** | ⚠️ 部分支持 | 基础功能正常，部分API需测试 |

### 🚫 常见错误及解决方案

#### 1. TabBar不显示

**问题**: TabBar组件不显示或显示异常

**解决方案**:
```json
// 确保pages.json中设置了custom: true
{
  "tabBar": {
    "custom": true,  // ← 这个必须设置
    "list": [...]
  }
}
```

#### 2. 图标不显示

**问题**: Tab项图标无法显示

**解决方案**:
```javascript
// ❌ 错误：使用相对路径
iconPath: "static/tabbar/home.png"

// ✅ 正确：使用绝对路径
iconPath: "/static/tabbar/home.png"
```

#### 3. 页面跳转失败

**问题**: 点击Tab项无法正确跳转页面

**解决方案**:
```json
// 确保pages.json中正确配置了页面路径
{
  "pages": [
    {
      "path": "pages/index/index"  // ← 路径必须正确
    }
  ],
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index"  // ← 必须与pages中的路径一致
      }
    ]
  }
}
```

#### 4. API调用失败

**问题**: uni.setTabBarBadge等API调用无效

**解决方案**:
```javascript
// 确保在App.vue中正确初始化
import customTabBar from '@/utils/tabbar.js'

onMounted(() => {
  // 注册TabBar实例
  if (customTabbar.value) {
    customTabBar.setInstance(customTabbar.value)
  }
})
```

### 📊 性能优化建议

1. **图标优化**: 使用压缩过的PNG图标，建议大小为48x48px
2. **按需加载**: 对于非TabBar页面，可以考虑按需加载
3. **缓存策略**: 合理使用Vue的缓存机制，避免重复渲染

### 🔄 版本更新日志

| 版本 | 更新日期 | 更新内容 |
|------|----------|----------|
| v1.0.0 | 2024-01-01 | 初始版本，支持基础TabBar功能 |
| v1.0.1 | 2024-01-15 | 修复H5端样式兼容性问题 |
| v1.0.2 | 2024-02-01 | 新增垂直布局支持 |

## 📁 项目文件结构

```
📦 custom-tabbar/
├── 📂 components/
│   └── 📂 custom-tabbar/
│       ├── 📄 custom-tabbar.vue    # 🎯 主组件文件
│       └── 📄 README.md           # 📖 本使用手册
├── 📂 utils/
│   └── 📄 tabbar.js               # 🔧 API兼容工具类
├── 📂 static/
│   └── 📂 tabbar/                 # 🖼️ TabBar图标目录
│       ├── 🖼️ home.png            # 首页图标（未选中）
│       ├── 🖼️ home-active.png     # 首页图标（选中）
│       ├── 🖼️ category.png        # 分类图标（未选中）
│       ├── 🖼️ category-active.png # 分类图标（选中）
│       ├── 🖼️ cart.png            # 购物车图标（未选中）
│       ├── 🖼️ cart-active.png     # 购物车图标（选中）
│       ├── 🖼️ user.png            # 用户图标（未选中）
│       └── 🖼️ user-active.png     # 用户图标（选中）
├── 📂 pages/                      # 📄 示例页面
│   ├── 📂 index/                  # 首页（含功能演示）
│   ├── 📂 category/               # 分类页
│   ├── 📂 cart/                   # 购物车页
│   └── 📂 user/                   # 用户页
├── 📄 App.vue                     # 🏠 应用入口（已集成TabBar）
├── 📄 pages.json                  # ⚙️ 页面配置（已设置custom:true）
├── 📄 main.js                     # 🚀 项目入口（已导入工具类）
└── 📄 README.md                   # 📋 项目说明文档
```

## 📞 技术支持

如在使用过程中遇到问题，请按以下步骤排查：

1. **检查配置**: 确认 `pages.json` 配置正确
2. **查看控制台**: 检查浏览器/开发者工具控制台错误信息
3. **对比示例**: 参考本文档中的完整示例代码
4. **版本兼容**: 确认uni-app和Vue版本符合要求

---

**© 2024 自定义TabBar组件 | 版本 v1.0.0** 