# 🚀 uni-app自定义TabBar - 5分钟快速入门

## 📋 第一步：检查配置

确保你的 `pages.json` 文件中包含以下配置：

```json
{
  "tabBar": {
    "custom": true,  // 👈 这个必须设置为true
    "color": "#999999",
    "selectedColor": "#007aff",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "/static/tabbar/home.png",
        "selectedIconPath": "/static/tabbar/home-active.png",
        "text": "首页"
      }
      // ... 更多Tab项
    ]
  }
}
```

## 📁 第二步：放置文件

确保以下文件已正确放置：

```
你的项目/
├── components/custom-tabbar/
│   └── custom-tabbar.vue        # 主组件
├── utils/
│   └── tabbar.js                # API兼容工具
└── static/tabbar/
    ├── home.png                 # Tab图标
    ├── home-active.png
    └── ...
```

## 🔧 第三步：在App.vue中使用

```vue
<template>
  <view id="app">
    <custom-tabbar 
      ref="customTabbar"
      :selected="selectedIndex"
      @tabChange="onTabChange"
    />
  </view>
</template>

<script>
import CustomTabbar from './components/custom-tabbar/custom-tabbar.vue'

export default {
  components: { CustomTabbar },
  data() {
    return {
      selectedIndex: 0
    }
  },
  methods: {
    onTabChange(index, item) {
      this.selectedIndex = index
      console.log('切换到:', item.text)
    }
  }
}
</script>
```

## 🎯 第四步：测试功能

在任意页面中测试原生API：

```javascript
// 设置角标
uni.setTabBarBadge({
  index: 2,
  text: '99+'
})

// 显示红点
uni.showTabBarRedDot({
  index: 1
})
```

## ✅ 完成！

现在你就有一个功能完整的自定义TabBar了！

📖 需要更详细的文档？查看 [完整使用手册](./components/custom-tabbar/README.md)

🐛 遇到问题？查看 [常见问题解决方案](./components/custom-tabbar/README.md#常见错误及解决方案) 