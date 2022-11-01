/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  learnSidebar: [
    {
    Intro: [
      'intro',
      'faqs/faq',
    ],
  },
  {
    'Noox Protocol': [
      'learn/protocol',
      'learn/design',
    ],
  },
  // {
  //   'Protocol Design': [
  //     'learn/interesting',
  //     'learn/design',
  //   ],
  // },
  {
    'Noox Badge': [
      'learn/badge',
      'learn/miup',
    ],
  },
  // {
  //   Ecosystem: [
  //     'learn/products',
  //     'learn/networks',
  //   ],
  // },
  'learn/hiring',
  ],
  // faqSidebar: [
  //   {
  //     FAQ: [
  //     'faqs/general',
  //     'faqs/access',
  //     'faqs/badge',
  //     'faqs/rewards',
  //     ],
  //   },
  // ],
  // faqSidebar: 
  //   ['faqs/faq'],
  devSidebar:
    ['devs/contracts'],
};

module.exports = sidebars;