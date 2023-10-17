export default {
  siteTitle: "const_",
  base: '/', // docs
  lang: 'zh-CH', //语言
  title: "const", // 网站标题
  head: [['link', { rel: 'icon', href: '/logo.png', },]],// 改变 title 的图标
  themeConfig: {
    // nav
    nav: [ // 头部导航
      { text: '首页', link: '/' },
      { text: '算法基础', link: '/note/算法基础/' },
      { text: '算法学习', link: '/note/算法/' },
      {
        text: '计算机基础', items: [
          { text: '计算机操作系统', link: '/note/计算机基础/计算机操作系统/' },
          { text: '计算机组成原理', link: '/note/计算机基础/计算机组成原理/' },
          { text: '计算机网络', link: '/note/计算机基础/计算机网络/' },
          { text: '数据结构', link: '/note/计算机基础/数据结构/' },
        ],
      },
      {
        text: '开发工具', items: [
          { text: 'vim', link: '/note/开发工具/vim/' },
          { text: 'cmake', link: '/note/开发工具/cmake/' },
          { text: 'makefile', link: '/note/开发工具/makefile/' },
          { text: 'gcc', link: '/note/开发工具/gcc/' },
          { text: 'git', link: '/note/开发工具/git/' },
          { text: 'docker', link: '/note/开发工具/docker/' },
        ],
      },
      { text: 'MyXLog', link: 'https://030215.link' },
    ],
    // aside 目录
    outline: [1, 5],      // 识别 <h1>-<h5> 的标题
    outlineTitle: '大纲', // aside 第一行显示的文本
    // sidebar 左侧
    sidebar: {

      // 算法基础
      "/note/算法基础/": [
        {
          text: '双指针',
          items: [
            { text: '相向双指针-两数之和II', link: '/note/算法基础/双指针/相向双指针/两数之和II' },
            { text: '相向双指针-三数之和', link: '/note/算法基础/双指针/相向双指针/三数之和' },
            { text: '同向双指针-滑动窗口-', link: '/note/算法基础/双指针/相向双指针/三数之和' },
          ]
        },
        {
          text: '二分查找',
          items: [
            { text: '二分查找-修车的最少时间', link: '/note/算法基础/二分查找/2594. 修车的最少时间' },

          ]
        }
      ],

      '/note/计算机基础/计算机组成原理/': [ // 根据不同的路径前缀显示不同的侧边栏
        {
          text: '计算机组成原理',
          link: '/note/计算机基础/计算机组成原理/',
          collapsible: true,  // 可折叠
          items: [
          ]
        }
      ],
      '/note/计算机基础/计算机操作系统/': [ // 根据不同的路径前缀显示不同的侧边栏
        {
          text: '计算机操作系统',
          link: '/note/计算机基础/计算机操作系统/',
          collapsible: true,  // 可折叠
          items: [
          ]
        }
      ],
      '/note/计算机基础/计算机网络/': [ // 根据不同的路径前缀显示不同的侧边栏
        {
          text: '计算机网络',
          link: '/note/计算机基础/计算机网络/',
          collapsible: true,  // 可折叠
          items: [
          ]
        }
      ],
      '/note/计算机基础/数据结构/': [ // 根据不同的路径前缀显示不同的侧边栏
        {
          text: '数据结构',
          link: '/note/计算机基础/数据结构/',
          collapsible: true,  // 可折叠
          items: [
          ]
        }
      ],

      // 算法学习
      '/note/算法/': [
        {
          text: '二分',
          link: '/note/算法/二分/',
          collapsible: true,
          items: [
            { text: '2594. 修车的最少时间', link: '/note/算法/二分/2594. 修车的最少时间' },
          ]
        },
        {
          text: '前缀和',
          link: '/note/算法/前缀和/',
          collapsible: true,
          items: [
            { text: '2845. 统计趣味子数组的数目', link: '/note/算法/前缀和/2845. 统计趣味子数组的数目' },
          ]
        },
        {
          text: '拓扑排序',
          link: '/note/算法/拓扑排序/',
          collapsible: true,
          items: [
            { text: '2594. 修车的最少时间', link: '/note/算法/二分/2594. 修车的最少时间' },
          ]
        },
        {
          text: '动态规划',
          link: '/note/算法/动态规划/',
          collapsible: true,
          items: [
            { text: '状态机dp', link: '/note/算法/动态规划/状态机dp' },
          ]
        },
      ],

      // 开发工具
      '/note/开发工具/vim/': [
        {
          text: 'vim',
          link: '/note/开发工具/vim/',
          collapsible: true,
          items: [
            { text: 'vim', link: '/note/开发工具/vim/vim' },
          ]
        },
      ],
      '/note/开发工具/makefile/': [
        {
          text: 'makefile',
          link: '/note/开发工具/makefile/',
          collapsible: true,
          items: [
          ]
        },
      ],
      '/note/开发工具/git/': [
        {
          text: 'git',
          link: '/note/开发工具/git/',
          collapsible: true,
          items: [
            { text: 'git基础', link: '/note/开发工具/git/git' },
          ]
        },
      ],
      '/note/开发工具/cmake/': [
        {
          text: 'cmake',
          link: '/note/开发工具/cmake/',
          collapsible: true,
          items: [
          ]
        },
      ],
      '/note/开发工具/gcc/': [
        {
          text: 'gcc',
          link: '/note/开发工具/gcc/',
          collapsible: true,
          items: [
          ]
        },
      ],
      '/note/开发工具/docker/': [
        {
          text: 'docker',
          link: '/note/工具/docker/',
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
