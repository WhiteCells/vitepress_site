export default {
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: "twitter", link: "..." },
      { icon: "youtube", link: "..." },
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
      //   },
      //   link: "...",
      // },
    ],
    siteTitle: "const",
    title: 'const', // 站点标题
    // description: 'note', // 用于搜索引擎抓取摘要
    logo: "/logo.png",
    nav: [
      // { text: "", link: "/" },
      {
        text: "算法",
        items: [
          { text: "1", link: '' },
        ],
      },
      {
        text: "计算机基础",
        items: [
          { text: '数据结构', link: '/article/计算机基础/数据结构/index' },
          { text: '计算机网络', link: '/article/计算机基础/计算机网络/index' },
          { text: '计算机操作系统', link: '/article/计算机基础/计算机操作系统/index' },
          { text: '计算机组成原理', link: '/article/计算机基础/计算机组成原理/index' },
        ],
      },
      
      // { text: "github", link: "https://github.com/WhiteCells" },
    ],
  },
  // 侧边栏
  sidebar: {
    "/article/": [
      {
        text: "算法",
        items: [
          { text: "1", link: "/articles/组件库环境搭建" },
        ],
      },
      {
        text: "计算机基础",
        items: [
          { text: '数据结构', link: '/article/计算机基础/数据结构/index' },
          { text: '计算机网络', link: '/article/计算机基础/计算机网络/index' },
          { text: '计算机操作系统', link: '/article/计算机基础/计算机操作系统/index' },
          { text: '计算机组成原理', link: '/article/计算机基础/计算机组成原理/index' },
        ],
      },
    ],
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
