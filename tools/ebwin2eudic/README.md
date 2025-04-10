# 下载地址

你可以通过下面的2种方式，下载名为`ebwin2eudic.zip`的文件。其他文件可以不下载。

[Gitee](https://gitee.com/NoHeartPen/awesome_japanese_study_tools/tree/master/tools/ebwin2eudic/dist)，由于政策原因，这种方式下载需要扫码注册登录

[GitHub](https://github.com/NoHeartPen/awesome_japanese_study_tools/tree/master/tools/ebwin2eudic/dist)，如果你不能访问Google主页，推荐使用上面的下载方式

# 使用方法

## 基本设置

如果你是第一次使用，请先登录[欧路词典官网](https://my.eudic.net/OpenAPI/Authorization)获取下图红框部分的内容

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220714111636.png" width="500">

启动EBWin软件，点击`文件`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220822202758.png" width="500">


点击`设置`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220822203555.png" width="500">

点击`应用程序目录`


<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220822203647.png" width="500">

复制这个文件夹的路径，注意这个文件夹一定会有一个`history.dat`的文件

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220822203829.png" width="500">

右键点击下载的`setting.json`，通过`打开方式`，选择用记事本打开它

将之前在[欧路词典官网](https://my.eudic.net/OpenAPI/Authorization)获取的内容替换下面的红框的部分的`1234567890`，注意不要删掉附近的英文双引号。

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220811202233.png" width="500">

然后我们替换下面的`HistoryFilePath`的部分，注意路径一定用2个`\\`，不够的补上

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com/20220822211909.png" width="500">

完成后，我们可以把`history.dat`用记事本打开，看看有没有查词记录，如果没有的话，随便查一个单词，然后我们关闭EBWin，再打开`history`，确认里面有单词之后，就可以关了。

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220811203716.png" width="500">

当然，你也可以通过文件大小来判断，只要不是`0KB`，你都可以直接直接进入下一步。

我们在资源管理的地址栏输入`cmd`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220811203102.png" width="500">

会有个黑漆漆的命令行的弹窗，我们把`ebwin2eudic.exe`拖进去，然后按下回车键

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220811203204.png" width="500">

看到`单词导入成功，导入数量：`这样的提示，恭喜你！已经完成了基本设置，以后可以直接双击运行这个脚本了:)

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220811204056.png" width="500">

如果在上一步你看到了其他提示，很抱歉，你似乎遇到了一些问题。

你可以先休息一下，然后再看一遍这个教程，看看有没有遗漏的地方，然后你可以参考[遇到了问题](# 遇到了问题？)部分

你可以右键把快捷方式放到桌面，这样你以后每次只需轻轻一点，就可以同步了:)

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220811204922.png" width="500">

## 高级设置

如果你不想每次都自己双击脚本，你可以借助Windows的计划任务程序，每隔5分钟自动同步一次。

### 通过Win11自带的计划任务程序自动同步

右键点击屏幕左下角的Win徽标，选择`计算机管理`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com/20220822194038.png" width="500">

双击`任务计划程序`，

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821145156.png" width="500">

选择`创建任务`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821145240.png" width="500">

名称和样例随意，但是请将用户账户设置为SYSTEM，不然脚本每次执行都会有弹窗，打开`更改用户或组`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com/20220821143329.png" width="500">

点击`高级`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821143555.png" width="500">

点击`立即查找`（如果搜索结果是空白的话）

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821143704.png" width="500">

下划，找到`SYSTEM`，点击选择，然后点击`确定`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821144429.png" width="500">

就会发现`SYSTEM`，出现在下列位置，然后我们点击`确定`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821144522.png" width="500">

然后我们选择`触发器`，新建

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821145507.png" width="500">

选择`一次`，`重复任务间隔5分钟`，`持续时间无限期`，这个脚本就会以每5分钟一次频率永远自动执行。

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821144806.png" width="500">

设置完成后，我们点击`确定`，然后点击`操作`，点击左下角的`新建`

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821145719.png" width="500">

点击`浏览`，找到下载的脚本文件，也就是下载的`ebwin2eudic.exe`文件

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821145758.png" width="500">

你可把它和[goldendic2eudic.exe](https://github.com/NoHeartPen/awesome_japanese_study_tools/tree/master/tools/golden2eudic)放在同一个文件夹，但注意`setting.json`文件一定要用这里下载的，因为这个脚本的`setting.json`多了`HistoryFilePath`这一行，同时`"AutoDelete":"on",`后面多了一个半角的英文逗号，找到之后（直接跑源代码和exe文件的操作都是一样的，我是直接跑的缝合版，请忽略文件名），选择`打开`，注意，如果你是用的Windows提供的`复制文件地址功能`，请删除首尾的`""`双引号，这里不用添加1个反斜杠

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821145913.png" width="500">

然后在`添加参数`里面输入`ebwin2eudic.exe`所在的文件夹，示例：`D:\GoldenDic\portable`（不要双引号，不要2个反斜杠）

<img src="https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com//Pasted_image_20220821145943.png" width="500">

设置就完成了，点击确定返回即可，之后就不用操心同步的问题了。

你也可以通过其他方式来快速执行这个脚本，比如[MyKeymap](https://xianyukang.com/MyKeymap.html#mykeymap-%E7%AE%80%E4%BB%8B)、[Quiker](https://getquicker.net/)等工具，这里就不展开了，欢迎大家分享自己的经验。

使用Quicker的注意事项：注意红框的位置填入上面提到的文件夹路径，前面还要加一个空格
![](https://markdoen-1304943362.cos.ap-nanjing.myqcloud.com/20220824103434.png)

# 遇到了问题

如果你确定自己的每一步都是按照教程执行，但还是遇到问题，你可以通过我的邮箱NoHeartPen@outlook.com向我寻求帮助。

如果你能按照[《提问的智慧》](https://zhuanlan.zhihu.com/p/19761517)中的方法向我提问，我会非常高兴地回答你的问题。

通常，我会在3天之内回复邮件。

如果你没有收到任何回复，你应该认认真真把我说的这本[《提问的智慧》](https://zhuanlan.zhihu.com/p/19761517)看一遍，然后模仿其中的例子向我提问，这样能节省大家的时间。

# Todo

如果你有什么建议，欢迎提出来，我非常愿意让这个项目帮助到更多人:)。

注：本文是[ebwin2eudic](https://github.com/NoHeartPen/awesome_japanese_study_tools/tree/master/tools/ebwin2eudic)项目的说明文档。