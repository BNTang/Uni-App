/**
 * 自定义TabBar工具类
 * 提供兼容uni-app原生TabBar API的方法
 */

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
					throw new Error('TabBar实例未初始化');
				}
				
				const { index, text } = options;
				this.tabBarInstance.setTabBarBadge(index, text);
				
				resolve({
					errMsg: 'setTabBarBadge:ok'
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
					throw new Error('TabBar实例未初始化');
				}
				
				const { index } = options;
				this.tabBarInstance.removeTabBarBadge(index);
				
				resolve({
					errMsg: 'removeTabBarBadge:ok'
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
					throw new Error('TabBar实例未初始化');
				}
				
				const { index } = options;
				this.tabBarInstance.showTabBarRedDot(index);
				
				resolve({
					errMsg: 'showTabBarRedDot:ok'
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
					throw new Error('TabBar实例未初始化');
				}
				
				const { index } = options;
				this.tabBarInstance.hideTabBarRedDot(index);
				
				resolve({
					errMsg: 'hideTabBarRedDot:ok'
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
				// 这里可以扩展更多样式设置功能
				console.log('setTabBarStyle:', options);
				
				resolve({
					errMsg: 'setTabBarStyle:ok'
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
					throw new Error('TabBar实例未初始化');
				}
				
				const { index, text, iconPath, selectedIconPath } = options;
				
				if (this.tabBarInstance.tabList && this.tabBarInstance.tabList[index]) {
					if (text !== undefined) {
						this.tabBarInstance.tabList[index].text = text;
					}
					if (iconPath !== undefined) {
						this.tabBarInstance.tabList[index].iconPath = iconPath;
					}
					if (selectedIconPath !== undefined) {
						this.tabBarInstance.tabList[index].selectedIconPath = selectedIconPath;
					}
				}
				
				resolve({
					errMsg: 'setTabBarItem:ok'
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
				// 实现显示TabBar的逻辑
				if (this.tabBarInstance && this.tabBarInstance.$el) {
					this.tabBarInstance.$el.style.display = 'flex';
				}
				
				resolve({
					errMsg: 'showTabBar:ok'
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
				// 实现隐藏TabBar的逻辑
				if (this.tabBarInstance && this.tabBarInstance.$el) {
					this.tabBarInstance.$el.style.display = 'none';
				}
				
				resolve({
					errMsg: 'hideTabBar:ok'
				});
			} catch (error) {
				reject({
					errMsg: `hideTabBar:fail ${error.message}`
				});
			}
		});
	}
}

// 创建单例实例
const customTabBar = new CustomTabBar();

// 扩展uni对象，添加自定义TabBar API
if (typeof uni !== 'undefined') {
	// 覆盖原生方法，使其使用自定义TabBar
	const originalSetTabBarBadge = uni.setTabBarBadge;
	const originalRemoveTabBarBadge = uni.removeTabBarBadge;
	const originalShowTabBarRedDot = uni.showTabBarRedDot;
	const originalHideTabBarRedDot = uni.hideTabBarRedDot;
	const originalSetTabBarStyle = uni.setTabBarStyle;
	const originalSetTabBarItem = uni.setTabBarItem;
	const originalShowTabBar = uni.showTabBar;
	const originalHideTabBar = uni.hideTabBar;
	
	// 重写API方法
	uni.setTabBarBadge = function(options) {
		// 如果有自定义TabBar实例，使用自定义方法
		if (customTabBar.tabBarInstance) {
			return customTabBar.setTabBarBadge(options);
		}
		// 否则使用原生方法
		return originalSetTabBarBadge.call(this, options);
	};
	
	uni.removeTabBarBadge = function(options) {
		if (customTabBar.tabBarInstance) {
			return customTabBar.removeTabBarBadge(options);
		}
		return originalRemoveTabBarBadge.call(this, options);
	};
	
	uni.showTabBarRedDot = function(options) {
		if (customTabBar.tabBarInstance) {
			return customTabBar.showTabBarRedDot(options);
		}
		return originalShowTabBarRedDot.call(this, options);
	};
	
	uni.hideTabBarRedDot = function(options) {
		if (customTabBar.tabBarInstance) {
			return customTabBar.hideTabBarRedDot(options);
		}
		return originalHideTabBarRedDot.call(this, options);
	};
	
	uni.setTabBarStyle = function(options) {
		if (customTabBar.tabBarInstance) {
			return customTabBar.setTabBarStyle(options);
		}
		return originalSetTabBarStyle.call(this, options);
	};
	
	uni.setTabBarItem = function(options) {
		if (customTabBar.tabBarInstance) {
			return customTabBar.setTabBarItem(options);
		}
		return originalSetTabBarItem.call(this, options);
	};
	
	uni.showTabBar = function(options) {
		if (customTabBar.tabBarInstance) {
			return customTabBar.showTabBar(options);
		}
		return originalShowTabBar.call(this, options);
	};
	
	uni.hideTabBar = function(options) {
		if (customTabBar.tabBarInstance) {
			return customTabBar.hideTabBar(options);
		}
		return originalHideTabBar.call(this, options);
	};
}

export default customTabBar; 