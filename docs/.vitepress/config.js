export default {
  base: '/', // docs
  lang: 'zh-CH',
  title: "const", // 网站左上角
  head: [['link', { rel: 'icon', href: '/logo.png', },]],// 改变 title 的图标
  themeConfig: {

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WhiteCells' },
      {
        icon: {
          svg: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>'
        }, link: 'https://space.bilibili.com/'
      },
    ],

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
      { text: '关于', link: '/note/关于/' },
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

      // 计算机基础
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
