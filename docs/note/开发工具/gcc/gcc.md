### gcc 安装

```sh
sudo apt install gcc
sudo apt install g++
```

### gcc 使用

```sh
gcc 源文件名.c -o 可执行文件名

# gcc 编译选项
-E # 预处理指定的源文件
-S # 编译指定的源文
-c # 编译、汇编指定的文件
-o file1 file2
-g # 在程序编译时，生成调试信息，该程序可以被调试器调试
-D # 在程序编译时，指定一个宏
-W # 不生成任何警告信息
-Wall # 生成所有警告信息
-On # n 的取值范围: 0~3，编译器的优化选项的 4 个级别，-O0 表示没有优化，-O1 表示缺省值，-O
-I  # 指定编译时指定使用的库
-L  # 指定编译时搜索的库的路径
-fPIC # 生成与位置无关的代码
-fpic # 生成与位置无关的代码
-std  # 指定 c 方言，-std=c99，gcc 默认 GNU C
-lm   # 链接时检索并使用数学库函数
```

### man

```sh
man [] <function> # 查看 <function> 的文档

# 在帮助文档下 输入 /
/RETURN VAL # 搜索该文档下的包含返回值的内容

使用 man 命令的基本语法如下：
man [section] command/function_name
其中：
    section：可选参数，表示手册页的章节号。如果省略该参数，man 命令将按照默认的顺序搜索所有章节，并显示找到的第一个匹配的手册页。常见的章节号包括：
        Section 1：用户命令 (User Commands)
        Section 2：系统调用 (System Calls)
        Section 3：C 库函数 (Library Functions)
        Section 4：设备文件 (Special Files)
        Section 5：文件格式和协议 (File Formats and Protocols)
        Section 6：游戏和屏幕保护程序 (Games and Screensavers)
        Section 7：杂项 (Miscellaneous)
        Section 8：系统管理命令 (System Administration Commands)
    command/function_name：要查询手册页的命令或函数名称。
```



### gdb 调试

#### gdb 指令

```sh
gdb -v # 查看当前 gdb 版本
```



#### 多线程调试

gdb program

gdb 默认跟踪父进程

```sh
show follow-fork-mode # 显示 follow-fork-mode
show detach-nofork # 查看调试模式
set follow-fork-mode [parent(默认) | child] # 设置调试父进程或子进程
set detach-no-fork [no(默认) | off] # 设置调试模式，no 表示调试当前进程时，其他进程继续运行，脱离 gdb 调试，off 表示其他进程被 gdb 挂起在 fork 函数位置

info inferiors # 查看调试的进度
i i

inferior id # 切换当前调试的进度
detach inferiors id # 使进程脱离 gdb 调试
```



```sh
run 			#运行程序，可简写为r
next 			#(可简写为n)单步跟踪，函数调用当作一条简单语句执行
step 			#(可简写为s)单步跟踪，函数调进入被调用函数体内
finish 			#退出进入的函数，若是你的函数里有断点，是不能退出的
until 			#(可简写为u)在一个循环体内单步跟踪时，这个命令可以运行程序直到退出循环体，即跳出当前(for)循环
continue 		#(可简写为c)继续运行程序
p j				#(print)查看j变量的值
ptype arr		#查看arr变量的类型
display j		#在循环中，每循环一次，就会把变量j的值打印出来，前提是j存在
i display		#查看你追踪变量的编号
undisplay 1		#取消编号为1的变量打印
set var i=10	#在运行时，设置变量i=10，就是设置变量的值
quit / q		#退出gdb调试
```

