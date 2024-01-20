# 简介

## HOOKUI
### 是什么
是一款xposed插件,必须依赖xposed框架环境,root机环境有xposed framework,edposed,LSxposed,非root有virtual app,以及类似多开平行空间的一些软件 ,基于app直接修改植入xposed framework的有太极,还有我开发的神之手.[goodhand文档](http://goodhand.robot.top)
它能快速跟踪一些行为从而找到破解的思路,就像window破解一样,也有类似的 如hook window api 的某些函数,hook io文件打开,注册表行为.而这个hookui也类似,对一些敏感行为可进行追踪拦截,可追踪调用堆栈

![Screenshot_2023-02-25-22-02-29-358_lozn.hookui.jpg](https://upload-images.jianshu.io/upload_images/2815884-85b290b1580b5c66.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### HOOKUI作者本人喜欢拿来做什么
> 1.作者曾经通过HOOKUI做了很多不可告人的事情,作者本人常用的爆破策略是追踪点击,布局事件,和敏感字符串的源头来针对性的做hook功能.

> 2.作者也曾经通过HOOKUI随性破解破解一些没什么验证的收费SE直播,倒计时自动关闭视频直接拦截对方法进行屏蔽的操作.也通过它直接改手机余额,来告诉那些拜金女小心骗子.

> 3.作者因为对某些共享wifi软件没有记忆功能从而导致下次连接需要网络才能连接,还针对性的研发了wifi密码记忆功能.这样连一个记住一个还能看到密码


### 支持的功能
#### hook和字段编辑
支持自定义填写要hook的类,支持方法参数调用,支持批量修改列表数据,支持修改字段,实例,内存漫游字段修改,支持字符串,触摸事件,窗口创建,布局设置堆栈追踪打印.
支持开启web服务,下载任意应用内数据,支持web端做一些hook操作(此功能是移植inspect,不过兼容没有root的手机)
#### 其它功能
支持webview注入,显示webview hook菜单(调用js,查看源码)
支持activity序列化保存,

### 愿景

1. 没有js插件功能,不能动态写逻辑了,不过现在发展这几年,应该有人早就做了,我这东西也是几年前的东西了,现在来说很多东西过时了,或者说人人皆知这些技巧,常识.

2. 在线网页操作读取下载对应app所有类信息,方法信息等,在线网页提交控制.

3. 特别是还有frida这样的东西,肯定也有人集成到手机端并支持js代码了吧.我这边的frida只是支持加载so启动服务,后面因为版本过大,没有集成到app里面了.
# 常见问题
## 其它应用中没有彩色渐变图标
> 如果没有这个东西,![imagae](https://upload-images.jianshu.io/upload_images/2815884-946579098788098f.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/191/format/jpg) 这基本代表你在hookui界面所进行的一些功能都是无法正常生效的,可能你用logcat也看不到hookui关键词的一些堆栈调用 等数据.

1. 其它应用中没有图标,确保是最新版,目前最新版至少是1.8.6以上

2. 确保在hookui中勾选开启了总开关,在激活应用选项卡中确保勾选了 该应用

3. 确保你会使用hook框架以及如何正确的激活一个xposed插件,毕竟hookui也是一个xposed插件

4. 上面确保的情况下,可以 把hookui界面的其它选项勾选全部关闭.再试试是否正常
## 彩色图标长什么样?
在hookui界面最下面点击测试弹出就能就看到了,当然也能看到里面很多的功能,但是你在hookui里面点击通常情况可能会出现一些列崩溃问题.
## 非常卡顿
还是上面的第4点,不要随意开启一些功能,比如延迟启动,这个主要是用于调试用的,比如你需要断点调试so,那么这个时机就很重要
字符串调用更不要随意开启,这是非常非常频繁的功能.


## 图标内菜单界面功能展示
![image.png](https://upload-images.jianshu.io/upload_images/2815884-64d6a94fa71924c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![Screenshot_2023-02-25-22-07-05-462_lozn.hookui.jpg](https://upload-images.jianshu.io/upload_images/2815884-29895ea4fb76f901.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![Screenshot_2023-02-25-22-06-47-906_lozn.hookui.jpg](https://upload-images.jianshu.io/upload_images/2815884-bd780998ab36cb9f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![Screenshot_2023-02-25-22-06-41-740_lozn.hookui.jpg](https://upload-images.jianshu.io/upload_images/2815884-685075dfb7574103.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![Screenshot_2023-02-25-22-06-37-039_lozn.hookui.jpg](https://upload-images.jianshu.io/upload_images/2815884-a24a257ae32fc1d1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![Screenshot_2023-02-25-22-06-24-102_lozn.hookui.jpg](https://upload-images.jianshu.io/upload_images/2815884-f66a2495457d7f9f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
参考视频
下面视频需要科学上网,需要下载telegram
https://t.me/loznChanel/33
https://t.me/loznChanel/31
https://t.me/loznChanel/29
https://t.me/loznChanel/95
# 愿景
## 界面完善
这些事情没多大意义我已经不弄了

# 案例教程
电报有一些使用的视频教程,而简书有一些图文的教程,其它的只能问问群里人了
https://www.jianshu.com/nb/15035584
https://www.jianshu.com/p/474a60fe194a
https://www.jianshu.com/p/7aac940caf97

# 下载升级

,常见的更新地址如下：
qq群(不稳定容易被封)， telegram(需要翻墙)

*不可使用本软件进行诈骗从事违法行为等行为，仅供学习使用！触发法律后果自负！本人不承担任何责任，软件使用的时候协议上也一再强调禁止用于违法用途！切记切记*

群主非本人
[qq群 659119840]群若提示不存在,请加入电报群以便获得新群,请悉知


qq 35068264的qq空间可以翻找说说，我有时会会把加群图片放在QQ空间

电报 : https://t.me/qssq666
简书 https://www.jianshu.com/nb/24436393
博客 http://lozn.top

## 联系我

qq:35068264

email:qssq521@gmail.com

电报 : https://t.me/qssq666



![qq35068264](pic/wechat.png)

![qq35068264](pic/qq.png)



# 打赏赞助

alipay:qssq521@gmail.com

qq:35068264
https://lozn.top/about
 

