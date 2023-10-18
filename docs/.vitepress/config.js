import mathjax3 from 'markdown-it-mathjax3';
import nav from "./nav/";
import { 算法基础 } from "./sidebar/算法基础";
import { 算法 } from "./sidebar/算法";
import { 数据库 } from "./sidebar/数据库";
import { 书籍 } from "./sidebar/书籍";
import { 数据结构, 计算机组成原理, 计算机网络, 计算机操作系统 } from "./sidebar/计算机基础";
import { vim, makefile, gcc, git, cmake, docker } from "./sidebar/开发工具";

export default {
  lang: 'zh-CH',
  title: "🍙const", // 网站左上角
  head: [['link', { rel: 'icon', href: '/logo.png', },]], // 改变 title 的图标
  titleTemplate: false,
  themeConfig: {
    socialLinks: [ // 社交链接
      { icon: 'github', link: 'https://github.com/WhiteCells' },
      {
        icon: {
          svg: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>'
        }, link: 'https://space.bilibili.com/'
      },
    ],

    nav: nav, // nav

    outline: [1, 5],      // aside 目录识别 <h1>-<h5> 的标题
    outlineTitle: '大纲', // aside 第一行显示的文本

    sidebar: { // sidebar 左侧
      "/note/计算机基础/数据结构": 数据结构,
      "/note/计算机基础/计算机网络": 计算机网络,
      "/note/计算机基础/计算机操作系统": 计算机操作系统,
      "/note/计算机基础/计算机组成原理": 计算机组成原理,
      
      "/note/开发工具/git": git,
      "/note/开发工具/gcc": gcc,
      "/note/开发工具/cmake": cmake,
      "/note/开发工具/makefile": makefile,
      "/note/开发工具/docker": docker,
      "/note/开发工具/vim": vim,

      "/note/书籍/": 书籍,

      "/note/数据库/": 数据库,

      "/note/算法/": 算法,

      "/note/算法基础/": 算法基础,
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
