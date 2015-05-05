 android开源项目和框架


http://www.androidviews.net/

http://www.theultimateandroidlibrary.com/

常用效果：

1. https://github.com/novoda/ImageLoader  异步加载图片，缓存，生成缩略图， 基本上每个应用都会需要这个lib。
    android-query框架
2. https://github.com/chrisbanes/Android-PullToRefresh   类似新浪微博，twitter，下拉刷新列表， 更牛的是还支持上拉加载更多。 不仅仅是ListView，而且GridView也支持。

3. https://github.com/jfeinstein10/SlidingMenu 和 https://github.com/dmitry-zaitsev/AndroidSideMenu 导航抽屉 

   https://github.com/SimonVT/android-menudrawer 导航抽屉 

4. http://actionbarsherlock.com/  与https://github.com/JakeWharton/ActionBarSherlock    actionbar.

5  https://github.com/TonicArtos/StickyGridHeaders  与 https://github.com/emilsjolander/StickyListHeaders  ListView导航特效

6 https://github.com/TheLevelUp/android-left-locked-gallery gallery抽奖效果

7 https://github.com/huewu/PinterestLikeAdapterView  GridView错位效果https://github.com/youxiachai/pinterest-like-adapter-view

8 https://github.com/47deg/android-swipelistview  实现了自定义ListView单元格，可通过滑动来显示扩展面板。

9 https://github.com/siyamed/android-satellite-menu  有一连串的按钮弹出

10 https://github.com/maurycyw/StaggeredGridView 交错排列的GridView

https://github.com/dodola/android_waterfall  https://github.com/youxilua/waterfall4android

https://github.com/dodola/WaterFallExt 瀑布流

11 https://github.com/daizhenjun/ImageFilterForAndroid  图片处理效果

12 https://github.com/nostra13/Android-Universal-Image-Loader 异步加载图片，万能图片加载 ListView GridView ImagePage ImageGaller

实例：http://blog.csdn.net/banketree/article/details/8004475

13 https://github.com/JakeWharton/Android-ViewPagerIndicator 有标题页面滑动效果

14 https://github.com/pakerfeldt/android-viewflow ViewFlow图片滑动

13 https://code.google.com/p/android-wheel/ 滚轮效果

效果图  

14 http://www.apkbus.com/android-2-1.html

104628dd3y638lqlbylbx6.png

框架：

1. https://github.com/excilys/androidannotations  一个很好的快速开发的框架， 大量使用annotation来代替，类似于RoboGuice

2 ormlite sqlite的orm框架 /GreenDAO

3 汉字转拼音 pinyin4j 与 hanziTopinyin

4 AACPlayer

5 GSON json框架 fastjson

6 Otto 是Android系统的一个Event Bus模式类库。用来简化应用组件间的通信。

7 afinal框架是一个开源的android的orm和ioc应用开发框架

8 xUtils 源于Afinal框架 对Afinal进行了大量重构，使得xUtils支持大文件上传，更全面的http请求协议支持

9 dom4j  XML解析器

10 VTD-XML 一种无提取的XML解析方法 http://my.oschina.net/u/1171837/blog/147544 下载

11 android XMPP推送 下载

12 jsoup网络爬虫

13 acra 定制化Android crash上报库及后台系统

14 VLC 视频聊天

16 SPydroid http://blog.csdn.net/xiaoliouc/article/details/8493161

//--------------------------------------------------------
1、volley 

项目地址 https://github.com/smanikandan14/Volley-demo
 (1)  JSON，图像等的异步下载；
 (2)  网络请求的排序（scheduling）
 (3)  网络请求的优先级处理
 (4)  缓存
 (5)  多级别取消请求
 (6)  和Activity和生命周期的联动（Activity结束时同时取消所有网络请求）
2、android-async-http  

项目地址：https://github.com/loopj/android-async-http
文档介绍：http://loopj.com/android-async-http/ 
 (1) 在匿名回调中处理请求结果
 (2) 在UI线程外进行http请求
 (3) 文件断点上传
 (4) 智能重试
 (5) 默认gzip压缩
 (6) 支持解析成Json格式
 (7) 可将Cookies持久化到SharedPreferences
3、Afinal框架

项目地址：https://github.com/yangfuhai/afinal
主要有四大模块：
 (1) 数据库模块：android中的orm框架，使用了线程池对sqlite进行操作。
 (2) 注解模块：android中的ioc框架，完全注解方式就可以进行UI绑定和事件绑定。无需findViewById和setClickListener等。
 (3) 网络模块：通过httpclient进行封装http数据请求，支持ajax方式加载，支持下载、上传文件功能。
 (4) 图片缓存模块：通过FinalBitmap，imageview加载bitmap的时候无需考虑bitmap加载过程中出现的oom和android容器快速滑动时候出现的图片错位等现象。
             FinalBitmap可以配置线程加载线程数量，缓存大小，缓存路径，加载显示动画等。FinalBitmap的内存管理使用lru算法，
             没有使用弱引用（android2.3以后google已经不建议使用弱引用，android2.3后强行回收软引用和弱引用，详情查看android官方文档），
             更好的管理bitmap内存。FinalBitmap可以自定义下载器，用来扩展其他协议显示网络图片，比如ftp等。同时可以自定义bitmap显示器，
             在imageview显示图片的时候播放动画等（默认是渐变动画显示）。
4、xUtils框架

项目地址：https://github.com/wyouflf/xUtils
主要有四大模块：
  (1) 数据库模块：android中的orm框架，一行代码就可以进行增删改查；
            支持事务，默认关闭；
            可通过注解自定义表名，列名，外键，唯一性约束，NOT NULL约束，CHECK约束等（需要混淆的时候请注解表名和列名）；
            支持绑定外键，保存实体时外键关联实体自动保存或更新；
            自动加载外键关联实体，支持延时加载；
            支持链式表达查询，更直观的查询语义，参考下面的介绍或sample中的例子。          
  (2) 注解模块：android中的ioc框架，完全注解方式就可以进行UI，资源和事件绑定；
            新的事件绑定方式，使用混淆工具混淆后仍可正常工作；
            目前支持常用的20种事件绑定，参见ViewCommonEventListener类和包com.lidroid.xutils.view.annotation.event。
  (3) 网络模块：支持同步，异步方式的请求；
            支持大文件上传，上传大文件不会oom；
            支持GET，POST，PUT，MOVE，COPY，DELETE，HEAD，OPTIONS，TRACE，CONNECT请求；
            下载支持301/302重定向，支持设置是否根据Content-Disposition重命名下载的文件；
            返回文本内容的请求(默认只启用了GET请求)支持缓存，可设置默认过期时间和针对当前请求的过期时间。            
  (4) 图片缓存模块：加载bitmap的时候无需考虑bitmap加载过程中出现的oom和android容器快速滑动时候出现的图片错位等现象；
            支持加载网络图片和本地图片；
            内存管理使用lru算法，更好的管理bitmap内存；
            可配置线程加载线程数量，缓存大小，缓存路径，加载显示动画等...
5、ThinkAndroid

项目地址：https://github.com/white-cat/ThinkAndroid
主要有以下模块：
  (1)  MVC模块：实现视图与模型的分离。
  (2)  ioc模块：android中的ioc模块，完全注解方式就可以进行UI绑定、res中的资源的读取、以及对象的初始化。 
  (3)  数据库模块：android中的orm框架，使用了线程池对sqlite进行操作。  
  (4)  http模块：通过httpclient进行封装http数据请求，支持异步及同步方式加载。
  (5)  缓存模块：通过简单的配置及设计可以很好的实现缓存，对缓存可以随意的配置
  (6)  图片缓存模块：imageview加载图片的时候无需考虑图片加载过程中出现的oom和android容器快速滑动时候出现的图片错位等现象。
  (7)  配置器模块：可以对简易的实现配对配置的操作，目前配置文件可以支持Preference、Properties对配置进行存取。
  (8)  日志打印模块：可以较快的轻易的是实现日志打印，支持日志打印的扩展，目前支持对sdcard写入本地打印、以及控制台打印
  (9)  下载器模块:可以简单的实现多线程下载、后台下载、断点续传、对下载进行控制、如开始、暂停、删除等等。
  (10) 网络状态检测模块：当网络状态改变时，对其进行检
6、LoonAndroid 

项目地址：https://github.com/gdpancheng/LoonAndroid
主要有以下模块：
  (1)  自动注入框架（只需要继承框架内的application既可）
  (2)  图片加载框架（多重缓存，自动回收，最大限度保证内存的安全性）
  (3)  网络请求模块（继承了基本上现在所有的http请求）
  (4)  eventbus（集成一个开源的框架）
  (5)  验证框架（集成开源框架）
  (6)  json解析（支持解析成集合或者对象）
  (7)  数据库（不知道是哪位写的 忘记了）
  (8)  多线程断点下载（自动判断是否支持多线程，判断是否是重定向）
  (9)  自动更新模块
  (10) 一系列工具类
其中的 volley ，13 年有研究过，扩展性非常好，个人比较喜欢的风格。其他如 android-async-http、Afinal 也相当不错。


项目篇：
Apollo音乐播放器：就一个播放器，但是实现的很好
oschina客户端：oschina网站的客户端哦，wp版，iOS版都有开源
xabber实时聊天工具（基于xmpp协议）：不评价了，反正算是同类中比较好的了
四次元新浪微博客户端：今天才知道是开源的，赶紧收藏
Google IO：谷歌开发者大会应用，虽然有点难懂，还是很有参考价值（比如其中的图片加载）
eoe客户端：eoe网站Android客户端也开源咯
组件篇：
Android-Flip：可以实现类似FlipBoard那种华丽丽的翻页
Drag-Sort-Listview：可以拖动item重新排序的listview，效果非常赞
HoloEveryWhere：咳咳，有些同学非常喜欢Android的holo风格，这个项目绝对让你happy
Universal-ImageLoader：这个经典的异步图片加载，不多说了
JazzyViewPager：这玩意可以让ViewPager翻起来更酷，谁用谁知道~~
SlidingMenu：这个是抽屉界面（就是facebook那种）的各种实现版本中，最好的，木有之一！
StickyListHeaders：iPhone上经常有这个，就是listview的……不知道怎么解释，自己下载看看吧
Android-PullToRefresh：下拉刷新，挺常用的一个组件
StaggeredGridView：这是一个瀑布流布局的实现，还不是很完善，但作为学习的案例或者在其基础上扩展还是不错的
android-async-http：android的异步请求组件，我个人习惯使用asynctask，不过这个实现还是很优秀的，也推荐给大家
ActionBarSherlock：大家熟知的ActionBar在2.x上的兼容性方案；类似的兼容性组件还有许多，有时间为大家一一列出；
facebook-android-sdk：不止是一个SDK那么简单哦，比某浪和某人的SDK强几个数量级；
NineOldAndroids：想在2.xSDK上使用Android 3.0新增的动画API，那就是它了；没用过的同学一定要试试哦，非常方便~
android-swipelistview：让listview的item可以向右滑动，新版Gmail和Pocket里面有用到哦~
DataDroid：Android的RESTful封装，没听过RESTful？你去死吧
EventBus：和上面的DataDroid同样属于美化底层代码的，这个lib简化了不同组件之间的事件传递
android-switch-backport：Android3.0以上才有的switch，有好心人给迁移到2.x上了，哈
PagerSlidingTabStrip：最新版的GooglePlay的那个tab效果，可炫可炫了
chromeview：我们都知道webview，也知道Android的chrome又自己的内核，这个项目就是把chrome的内核给导出来做成一个chromeview了，大家可以在自己的项目里用，有兴趣的可以玩玩
picasso：来自square的图片异步加载，好像是最近才开源的，API风格很独特
网站篇：



