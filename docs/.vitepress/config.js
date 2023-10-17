module.exports = {
  siteTitle: "const_",
  base: '/',
  lang: 'zh-CH', //语言
  title: "const", // 网站标题
  head: [['link', { rel: 'icon', href: 'https://oss.justin3go.com/justin3goAvatar.ico', },]],// 改变 title 的图标
  themeConfig: {
    // nav
    nav: [ // 头部导航
      { text: '首页', link: '/index' },
      { text: '算法学习', link: '/note/算法/index' },
      {
        text: '计算机基础', items: [
          { text: '计算机操作系统', link: '/note/计算机基础/计算机操作系统/index' },
          { text: '计算机组成原理', link: '/note/计算机基础/计算机组成原理/index' },
          { text: '计算机网络', link: '/note/计算机基础/计算机网络/index' },
          { text: '数据结构', link: '/note/计算机基础/数据结构/index' },
        ],
      },
      {
        text: '工具', items: [
          { text: 'vim', link: '/note/工具/vim/index' },
          { text: 'cmake', link: '/note/工具/cmake/index' },
          { text: 'makefile', link: '/note/工具/makefile/index' },
          { text: 'gcc', link: '/note/工具/gcc/index' },
          { text: 'git', link: '/note/工具/git/index' },
        ],
      },
    ],
    // aside 目录
    outline: [1, 5],      // 识别 <h1>-<h5> 的标题
    outlineTitle: '大纲', // aside 第一行显示的文本
    // sidebar 左侧
    sidebar: {

      // 计算机基础
      '/note/计算机基础/计算机操作系统': [ // 根据不同的路径前缀显示不同的侧边栏
        {
          text: '计算机操作系统',
          link: '/note/计算机基础/计算机操作系统/index',
          collapsible: true,  // 可折叠
          items: [
            { text: '线程与进程', link: '/note/计算机基础/计算机操作系统/线程与进程' },
            { text: '锁机制', link: '/note/计算机基础/计算机操作系统/锁机制' },
          ]
        }
      ],
      '/note/计算机基础/计算机组成原理': [ // 根据不同的路径前缀显示不同的侧边栏
        {
          text: '计算机组成原理',
          link: '/note/计算机基础/计算机组成原理/index',
          collapsible: true,  // 可折叠
          items: [
          ]
        }
      ],
      '/note/计算机基础/计算机网络': [ // 根据不同的路径前缀显示不同的侧边栏
        {
          text: '计算机网络',
          link: '/note/计算机基础/计算机网络/index',
          collapsible: true,  // 可折叠
          items: [
          ]
        }
      ],
      '/note/计算机基础/数据结构': [ // 根据不同的路径前缀显示不同的侧边栏
        {
          text: '数据结构',
          link: '/note/计算机基础/数据结构/index',
          collapsible: true,  // 可折叠
          items: [
          ]
        }
      ],

      // 算法学习
      '/note/算法/': [
        {
          text: '二分',
          link: '/note/算法/二分/index',
          collapsible: true,
          items: [
            { text: '2594. 修车的最少时间', link: '/note/算法/二分/2594. 修车的最少时间' },
          ]
        },
        {
          text: '前缀和',
          link: '/note/算法/前缀和/index',
          collapsible: true,
          items: [
            { text: '2845. 统计趣味子数组的数目', link: '/note/算法/前缀和/2845. 统计趣味子数组的数目' },
          ]
        },
        {
          text: '拓扑排序',
          link: '/note/算法/拓扑排序/index',
          collapsible: true,
          items: [
            { text: '2594. 修车的最少时间', link: '/note/算法/二分/2594. 修车的最少时间' },
          ]
        },
        {
          text: '动态规划',
          link: '/note/算法/动态规划/index',
          collapsible: true,
          items: [
            { text: '状态机dp', link: '/note/算法/动态规划/状态机dp' },
          ]
        },
      ],

      // 工具
      '/note/工具/vim/': [
        {
          text: 'vim',
          link: '/note/工具/vim/index',
          collapsible: true,
          items: [
            { text: 'vim', link: '/note/工具/vim/vim' },
          ]
        },
      ],
      '/note/工具/makefile/': [
        {
          text: 'makefile',
          link: '/note/工具/makefile/index',
          collapsible: true,
          items: [
          ]
        },
      ],
      '/note/工具/git/': [
        {
          text: 'git',
          link: '/note/工具/git/index',
          collapsible: true,
          items: [
            { text: 'git基础', link: '/note/工具/git/git' },
          ]
        },
      ],
      '/note/工具/cmake/': [
        {
          text: 'cmake',
          link: '/note/工具/cmake/index',
          collapsible: true,
          items: [
          ]
        },
      ],
    },
  },
  // mathjax
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
}

import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];
