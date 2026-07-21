// An array of links for navigation bar
const navBarLinks = [
  { name: '首页', url: '/' },
  { name: '认识我', url: '/about' },
  { name: '产品', url: '/products' },
  { name: '博客', url: '/blog' },
];
// An array of links for footer
const footerLinks = [
  {
    section: '内容',
    links: [
      { name: '博客', url: '/blog' },
      { name: '关于我', url: '/about' },
    ],
  },
  {
    section: '链接',
    links: [
      { name: 'GitHub', url: 'https://github.com/rexwang-ai' },
      { name: 'X (Twitter)', url: 'https://x.com/rexwang_ai' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  x: 'https://x.com/rexwang_ai',
  github: 'https://github.com/rexwang-ai',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
