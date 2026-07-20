import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'Rex Wang | 老板AI化',
  tagline: '老板AI化 · 高维盈利体系',
  description:
    '王鹏辉（Rex Wang）| 18年品牌定位战略顾问 × AI商业全链路操盘手。锻造老板第二大脑，让AI成为你的放大器。',
  description_short:
    '18年品牌定位战略顾问 × AI商业全链路操盘手，锻造老板第二大脑。',
  url: 'https://rexwang.cloud',
  author: 'Rex Wang',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'zh-CN',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'zh_CN',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title} — 老板AI化·高维盈利体系`,
  description:
    'AI是放大器，老板才是发动机。18年品牌定位咨询经验，帮你打造AI时代的老板第二大脑。',
  image: ogImageSrc,
};
