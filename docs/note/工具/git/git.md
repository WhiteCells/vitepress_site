## git 下载与配置

### Linux 版本安装 git

```sh
# Debian、Ubuntu
sudo apt-get update
sudo apt-get install git

# Fedora、CentOS、RHEL
sudo yum install git

# Fedora 22
sudo dnf install git

# Arch Linux、Manjaro
sudo pacman -S git

# openSUSE、SUSE Linux Enterprise
sudo zypper install git
```

### Windows 版本安装 git

Windows 安装 [git 下载](https://git-scm.com/)

### git 配置

在使用 git 前配置 git

```sh
# 配置用户名，用来辨识是谁提交的内容
git config --global user.name "UserName" 
# UserName : 用户名，如果没有空格可以不加双引号
# 省略（Local）: 本地配置，只对本地仓库有效
# --global : 全局配置，所有仓库生效
# --system : 系统配置，对所有用户生效

# 配置邮箱
git config --global user.email 123456@gmail.com
# 邮箱中间是没有空格的所以可以不加引号

# 保存用户配置将 Git 的凭证缓存设置为 store。这个命令会在用户的 home 目录下创建一个名为 .git-credentials 的文件，并将 Git 的访问凭证保存到这个文件中。下次 Git 在访问同一个远程仓库时，就会从这个文件中获取访问凭证，而不是要求用户输入用户名和密码
git config --global credential.helper store

# 删除 credential.helper 配置
git config --global --unset credential.helper store

# 查看配置用户信息
git config --global --list

# 编辑配置
git config --global core.editor [editor] # 设置默认编辑器
# [editor] vim nano notepad 等
git config --global --edit

# 生成密钥
ssh-keygen -t rsa -C “xxxxxxxxxx@163.com” # 需要权限

# Linux 查看公钥
cat ~/.ssh/id_rsa.pub
# 复制公钥，保存到 github setting -> SSH and GPG keys

# Windows 查看公钥
notepad.exe C:/Users/[Username]/.ssh/id_rsa.pub
# [Username] 用户名

# 检查通信
ssh -T git@github.com
# 会提示确认连接（yes），显示 Hi UserName You've successfully authenticated, but GitHub does not provide shell access. 表示成功
```

## git 初始化仓库

### 本地仓库

```sh
git init # 初始化一个空 git 仓库

git init --bare # 初始化一个裸 git 仓库，当前文件价成了一个 .git 仓库，这个仓库只保存 git 历史提交的版本信息
```

### 克隆仓库

```sh
git clone git@github.com:[UserName]/[Repo] # 克隆远程仓库到当前目录
# [UserName] github username
# [Repo] github repostiory name

git clone git@github.com:[UserName]/[Repo] [Directory] # 克隆远程仓库到指定目录
# [Directory] 相对路径 or 绝对路径
```

## git 区域和文件状态

- 区域
  1. 工作区（Working Directory）
     当前正在进行开发工作的目录，其中包含实际的项目文件
  2. 暂存区（Staging Area/Index）
     暂存区是一个中间区域，用于存储将要提交到版本控制系统的文件更改。通过 `git add` 命令将工作区的更改添加到暂存区
  3. 本地仓库区（Local Repository）
     本地仓库区是存储项目完整历史记录的地方。使用 `git commit` 命令将暂存区的更改保存到本地仓库区
  4. 远程仓库（Remote Repository）
     托管在远程服务器上的仓库

- 文件状态
  1. 未跟踪（Untracked）
     未追踪的文件是指 Git 尚未开始跟踪的文件。这些文件存在于工作区中，但不在暂存区和本地仓库区中
  2. 已修改（Modified）
     已修改的文件是指在上次提交后对文件进行了更改，但尚未添加到暂存区。这些更改只存在于工作区中
  3. 已暂存（Staged）
     已暂存的文件是指使用 `git add` 命令将修改过的文件添加到暂存区
  4. 已提交（Committed）
     暂存区文件提交到本地仓库

### git 查看仓库状态

```sh
git status    # 查看仓库状态
git status -s # 简略查看仓库状态
# ?? 未跟踪
# M  已修改
# A  已添加暂存
# D  已删除
# R  重命名
# U  已更新未合并
git status --ignored # 列出被忽略的文件
```

## git 追踪文件

将工作区的改动提交到暂存区

空文件夹不会纳入版本控制中

```sh
# 仅跟踪 file 文件
git add [file]
# [file] 文件名

# 监控工作区的状态树，把工作时的所有修改提交到暂存区，不包括被删除文件
git add . 

# 监控已被 add 的文件，将被修改的文件提交到暂存区，不会提交新文件
git add -u

# 提交所有变化
git add -A

git add *.txt # 添加后缀为 txt 的文件到暂存区
```

## git 提交文件

将暂存区的改动提交到本地仓库。

```sh
# 提交到本地版本库，并指定提交信息
git commit -m "message"

# -a 参数表示可以将已经追踪的文件中的执行修改或删除操作的文件都提交到本地仓库，即使没有执行 git add . 添加到暂存区
git commit -a -m "message"
# or
git commit -am "message"

# 追加提交，在不增加一个新的 commit-id 的情况下将新修改的代码追加到前一次的 commit-id 中
git commit --amend
```

### 提交信息格式

- feat: 新增 feature
- fix: 修复 bug
- docs: 仅仅修改了文档
- style: 仅仅修改了空格、格式缩进等等，不改变代码逻辑
- refactor: 代码重构，没有加新功能或者修复 bug
- perf: 优化相关，比如提升性能、体验
- test: 测试用例，包括单元测试、集成测试等
- chore: 改变构建流程、或者增加依赖库、工具等
- revert: 回滚到上一个版本

## git 暂存

当前分支进行修改，需要切换分支时，需要进行暂存，否则无法切换

```sh
git stash save "message"   # 将当前未提交的修改保存到暂存区，并添加一个说明信息。
git stash list             # 列出所有的 stash 记录。
git stash apply [stash_id] # 应用某个 stash 记录，并将其从栈中删除。如果不指定 stash_id，则默认应用最新的 stash 记录。
git stash pop [stash_id]   # 应用某个 stash 记录，并将其从栈中删除。与 apply 的区别是，pop 操作会将栈顶 stash 记录弹出。
git stash drop [stash_id]  # 删除指定的 stash 记录。
git stash clear            # 清空所有的 stash 记录。
git stash branch [branch_name] [stash_id] # 创建一个新分支，并应用某个 stash 记录到该分支上。如果不指定 stash_id，则默认应用最新的 stash 记录。
```

## git 提交历史

```sh
git log           # 查看 git 提交记录
git log file      # 查看文件 file 的提交记录
git log --graph   # 以简单的图像输出 log
git log --oneline # 简短输出 log，查看提交 hash
```

清除线上仓库 git 提交记录
```sh
git checkout --orphan [latest-branch] # 这里只能用 checkout，用 switch 会创建一个没有文件的 latest-branch 分支
# [latest-branch] 自定义新的分支名

git add .               # 暂存所有文件

git commit -m "message" # 提交跟踪过的文件

git branch -D main      # 删除 main 分支

git branch -m main      # 当前分支重命名为 main

git push -f origin main # 提交远程 main 分支
```

```sh
git switch --orphan [fasde]
# [fasde] 自定义新分支

git checkout --orphan [fasde] # 在原分支的的基础上暂存所有文件
# 得到空分支需要删除所有文件
git rm rf .
```

修改提交信息
修改最近一次提交的 commit 信息
```sh
git commit --amend # 进入命令模式
git commit --amend --only # 修改最近的提交信息而不修改提交内容
git push --force main # 推送到远程仓库
```

## git 推送

```sh
git push -u [RemoteRepoName] [mian]
# [RemoteRepoName] 远程仓库别名
# [mian] 当前分支
```

## git 拉取

```sh
git pull [RemoteRepoName] [RemoteRepoBranch]
# [RemoteRepoName] 远程仓库别名
# [RemoteRepoBranch] 远程仓库分支

git fetch [RemoteRepoName] [RemoteRepoBranch]
```


## git 回退版本

```sh
git reset [CommitHash] --soft 
# 回退到某一个版本，保留工作区和暂存区的所有修改内容
# [CommitHash] 提交哈希

git reset [CommitHash] --hard
# 回退到某一个版本，丢弃工作区和暂存区的所有修改内容

git reset [CommitHash] --mixed
# 回退到某一个版本，保存工作区修改内容，丢弃暂存区修改内容

git reflog 
# 查看之前的所有命令，查看所有版本号
```

## git 撤销对已修改文件的修改

```sh
# 修改或者使用 rm 删除的文件
git checkout -- [file] # 撤销对单个文件的修改
# [file] 文件路路径
git checkout -- .      # 撤销对所有已修改文件的修改

# 修改或者使用 git rm 删除的文件
git reset [CommitHash] --hard

git revert HEAD # 撤销对已提交的修改
git revert [CommitHash] # 撤销对历史提交的修改
```

## git 查看差异

```sh
# 工作区和暂存区
git diff

# 工作区和上一个本地仓库的区别
git diff HEAD^

# 工作区和本地仓库的区别
git diff HEAD

# 暂存区和本地仓库的区别
git diff --cached

# 比较两个版本之间的差异
git diff [CommitHash] [CommitHash]
# [CommitHash] 为版本号，也可以是用 HEAD

# 比较分支之间的差异
git diff [branch_name] [branch_name] 

git diff HEAD~ HEAD [file]
# [file] 需要查看的文件的差异

git HEAD~ HEAD
```

```sh
HEAD~  # 表示上一个版本
HEAD^  # 表示上一个版本
HEAD~2 # 表示 HEAD 之前的两个版本
HEAD   # 表示当前分支的最新提交
```


## git 删除文件

工作区删除文件，更新文件到暂存区，再从暂存区提交

```sh
rm [file] # 删除工作区文件
# [file] 文件名

git ls-files # 查看暂存区内容，发现有 file1 文件

git status # 仓库状态，仓库中 file1 文件显示被删除

git add [file] # 更新暂存区 file 文件

git ls-files # 查看暂存区内容，发现没有 file1 文件
```

直接使用 `git rm` 命令

```sh
git rm file1 # 工作区和暂存区同时删除

# 记得提交
git commit -m "file1 delete"
```

如果不想删除工作区文件，只想删除仓库区文件

```sh
git rm --cached file1
```

## git 忽略文件

.gitignore 文件

应该忽略的文件

1. 系统或软件自动生成的文件
2. 编译产生的中间文件和结果文件 
3. 运行时生成日志文件、缓存文件、临时文件
4. 涉及身份、密码、口令、密钥等敏感信息文件

**.gitignore 生效需要一个前提，规则中的文件不能被添加到版本库中，如果已经在仓库区中，则该文件不受规则影响，不会被忽略**

```sh
# 想重新将在存在本地仓库的文件进行忽略
git rm -r --cached . # 本地缓存删除
git add .
git commit -m 'update .gitignore'
```

匹配示例

```sh
img # 忽略 img 文件 或 img 目录

!img # 不忽略 img 文件 或 img 目录

img/ # 只忽略 img 文件 或 img 目录

!img/ # 不忽略 img 文件 或 img 目录

/img # 只忽略当前目录下的 img 文件 或 img 目录

img/*.png # 只忽略 img 子目录下的 *.png 文件

img/**/*.png # 忽略 img 目录下所有 *.png 文件

[abc] # 忽略 *.a *.b *.c 文件

[a-c] # 忽略 *.a *.b *.c 文件
```

你想添加一个文件到 Git，但发现添加不了，原因是这个文件被 .gitignore 忽略了，如果你确实想添加该文件，可以用 -f 强制添加到 Git

```sh
git add -f file
```

文档

- [github/gitignore](https://github.com/github/gitignore)

- [gitignore/docs](https://git-scm.com/docs/gitignore/)

## git 连接远程仓库

有本地仓库

```sh
# 本地仓库连接远程仓库
git remote add [origin] git@github.com:[Username]/[Repository]
# [origin]     自定义远程仓库别名
# [Username]   github username
# [Repository] github repository

git remote -v # 查看当前仓库所对应的远程仓库的别名和地址

# 设置分支 为 main
git branch -m main

# 推送分支，将本地的 main 分支和远程 origin main 分支关联
git push -u origin main
# 全称 git push -u origin main:main
# -u 相当于执行了
#git push origin main
# 和
#git branch --set-upstream main origin/main
```

没有本地仓库

```sh
git clone git@github.com:[UserName]/[repository]
```

远程仓库的修改拉取到本地

```sh
git pull <远程仓库名> <远程仓库分支名>:<本地仓库分支名>
git pull <远程仓库名> <远程仓库分支名>
```

`git pull`之后，git 会自动为我们执行一次合并操作。

如果远程仓库中的修改内容和本地仓库中的修改内容没有冲突，合并成功，否则，合并操作就会因为冲突而失败，需要手动来解决冲突。

从远程仓库拉取也可以使用 `git fetch` ，但是他只是获取远程仓库中的修改，并不会自动合并到本地仓库中。

删除远程仓库

```sh
git remote rm [Remotename]
# [Remotename] 远程仓库别名
```

查看远程仓库

```sh
git remote -v
```

重新命名远程仓库

```sh
git remote rename [old-name] [new-name]
```

## git 分支

### 分支说明
Branch，分支适合团队协作和开发管理，多个开发人员可以在自己的分支上进行开发工作，之后在合并到主线分支，可以在一个分支上进行新功能开发，或者建立一个问题修复的分支来处理一些bug和缺陷。可以让主线代码仓库处于一个随时可用的且稳定的状态，而不会影响其他功能的开发和测试。

### 分支类型
- **master**/**main** 主分支，用于版本持续发布
- **develop**  开发分支，用于日常开发持续集成
- **feature**  特性分支，用于日常开发时切出来的分支进行单功能开发
- **bugfix**   故障修补分支，用于修复故障
- **release**  发布分支，适用于产品发布、产品迭代
- **hotfix**   热修分支，用于产品发布后修复缺陷
- **custom**   自定义分支，用户可以自定义需要的分支类型


### 分支命名规范

单项目情况：分支类型-功能标签-人员
多项目情况：项目名称-分支类型-功能标签-人员

### 提交规则

```sh
git branch # 查看当前仓库的所有分支
git branch -r
# 在运行 git branch dev 命令之前，应先进行一次提交，或者确保当前分支存在至少一个有效的提交
git branch dev # 创建一个新的分支 dev
git checkout dev # 切换到 dev 分支
# git checkout dev 也可以用来恢复 dev 到修改之前的状态，
# 如果分支名和文件名相同就会出现歧义，
# 这个命令会进行切换分支，不会恢复文件，
# 为了避免起义，git 提供一个新的命令。
git switch dev # 切换到 dev 分支
```

合并不同的分支

```sh
git merge dev # 当前所在的分支就是合并后的目标分支
```

分支图

```sh
git log --graph --oneline --decorate --all
```

删除分支

```sh
git branch -d dev # 删除已经被合并的分支，没有被合并是无法使用的


git branch -D dev # 强制删除 dev 分支
```

删除远程分支
```sh
git push [RemoteName] --delete [BranchName] # 删除远程 dev 分支
```

重命名当前分支
```sh
git branch -m master # 重命名当前分支为 master
```

### git 分支冲突

如果两个分支，修了同一个文件的同一行代码，此时就会出现分支冲突。需要手动的修改冲突文件。修改完之后记得提交。

```sh
git merge --abort # 终止合并
```



Rebase（变基），也可以将不同的分支整合到一起。

两者合并之后中间的顺序会有区别。

```sh
git switch main # 切换到 main 分支
git merge dev # 合并 dev 分支
# dev 分支合并到 main 分支
```

```sh
git switch dev # 切换到 switch 分支
git rebase main # dev 分支上的提交记录变基到 main 分支上

git switch main # 切换到 main 分支
git rebase dev # main 分支上的提交记录变基到 dev 分支上
```

```sh
git checkout -b dev xxxxxxx # 回退到分支 dev xxxxxxx 状态
```

Merge

- 优点：不会破坏原分支的提交历史，方便回溯和查看
- 缺点：会产生额外的提交结点，分支图比较复杂。

rebase

- 优点：不需要新增额外的提交记录，形成线性历史，比较直观和干净。
- 缺点：会改变提交历史，改变了当前分支 branch out 的结点。避免在共享分支使用。

### git 分支管理和工作流模型

**GitFlow** 模型（适用于技术水平适中，有一定开发流程和规范的团队）

5 种分支

1. 主线 / 基线分支（main）（主分支）

   包含项目的稳定版本代码，应该随时保证主线分支的代码是可发布的。主线分支的代码会被部署到生产环境中，该分支中的代码是不允许直接修改的，只能通过合并分支的方式来修改，每次合并分支建议生成一个新的版本号方便追踪和回溯

   ```sh
   git tag 标签名 版本号 # 标记版本号
   # 版本号规则
   # 主版本（major version）：主要功能变化或重大更新
   # 此版本（minor version）：一些新的功能、改进和更新，通常不会影响现有功能
   # 修订版本（patch version）：一些小的 bug 修复，安全漏洞补丁等，通常不会更改现有的功能和接口
   ```

2. 问题修复分支（hotfix）（辅助分支）

   包含项目某个问题修复的源码，从主线分支中分离出来的。修复问题后并合并分支后，一般删除该分支。

3. 开发分支（develop）（主分支）

   包含项目的最新开发版本的代码，从主线分支中分离出来的。该分支是核心分支，和 main 分支一样是一个长期存在的分支。

4. 功能分支（feature）（辅助分支）
   包含项目某个新功能的代码，从开发分支中分离出来的。该分支代码稳定后，会以某种方式合并回开发分支中。

5. 版本发布分支（release）（辅助分支）

   包含项目最新预发版本的代码，用于发布前的测试和验证，从开发分支中分离出来的。该分支代码稳定后，合并到主分支和开发分支中，最后将该分支删除。



**GitHubFlow** 模型（技术水平较高的团队）

分支命名：使用带有意义的描述性名称来命名分支

- 版本发布分支/tag 示例：v1.0.0

- 功能分支示例：feature-login-page

- 修复分支示例：hotfix-#issueid-desc（问题编号命名）

分支管理

- 定期合并已经成功验证的分支，及时删除已经合并的分支
- 保持合适的分支数量
- 为分支设置合适的管理权限



## git problem

### Using 'master' as the name for the initial branch. This default branch name

问题描述：

初始化仓库时出现以下错误：
```sh
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
```

解决方法：

需要配置默认仓库分支

```sh
git config --global init.defaultBranch main # 直接全局修改默认初始化分支为 main

# 也可以在该仓库中单独设置分支
git branch -m main
```

### ssh: connect to host github.com port 22: Connection refused

问题描述:

配置好 ssh 后测试

```sh
eorys@LAPTOP-0BO597K6:~$ ssh -T git@github.com
ssh: connect to host github.com port 22: Connection refused
```

Linux 解决方法：

```sh
vim ~/.ssh/config
```

写入以下内容，修改 ssh 连接时使用的端口

```
Host github.com
  Hostname ssh.github.com
  Port 443
```

Windows 解决方法：

在 `C:\Users\User\.ssh` 中添加以下内容：

```
Host github.com
User [email]
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```



### fatal: not a git repository (or any of the parent directories): .git

问题描述:

在初始化过本地仓库，有远程仓库的前提下，且配置好了 ssh，连接远程仓库出现报错

```sh
fatal: not a git repository (or any of the parent directories): .git
```

解决方法:

重新初始化仓库

```sh
git init
```

### The authenticity of host 'ssh.github.com (20.205.243.160)' can't be established.
ECDSA key fingerprint is SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM.
Are you sure you want to continue connecting (yes/no/[fingerprint])?

直接输入 yes 回车即可