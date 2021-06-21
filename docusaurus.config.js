/** @type {import('@docusaurus/types').DocusaurusConfig} */

const isDev = process.env.NODE_ENV === 'development';
const appUrl = isDev ? 'http://localhost:3003' : 'https://app.sfpy.co'

module.exports = {
  title: 'SFPY',
  tagline: 'The payments protocol for the future of money',
  url: 'https://sfpy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SfpyHub', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  customFields: {
    appUrl,
    githubUrl: 'https://github.com/sfpyhub',
    twitterUrl: 'https://twitter.com/safepayhq',
    discordUrl: 'https://discord.gg/PQffzU78Fx'
  },
  themeConfig: {
    prism: {
      additionalLanguages: ["solidity"],
    },
    navbar: {
      title: '',
      logo: {
        alt: 'SFPY',
        src: 'img/sfpy-logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Introduction',
          position: 'left',
        },
        {
          to: 'docs/01-protocol/01-how-sfpy-works',
          activeBasePath: 'docs/01-protocol',
          label: 'Protocol Overview',
          position: 'left',
        },
        {
          to: 'docs/02-core/01-payments',
          activeBasePath: 'docs/02-core',
          label: 'Core Concepts',
          position: 'left',
        },
        {
          to: 'docs/05-api/01-introduction',
          activeBasePath: 'docs/05-api',
          label: 'API',
          position: 'left',
        },
        {
          to: 'docs/06-references/01-deployment-addresses',
          activeBasePath: 'docs/06-references',
          label: 'References',
          position: 'left',
        },
        {
          to: 'docs/faq/index',
          activeBasePath: 'docs/faq',
          label: 'FAQs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sfpyhub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'How SFPY Works',
              to: 'docs/01-protocol/01-how-sfpy-works',
            },
            {
              label: 'Smart Contract References',
              to: 'docs/06-references/01-deployment-addresses',
            },
          ],
        },
        {
          title: "API",
          items: [
            {
              label: 'API Reference',
              to: 'docs/05-api/01-introduction',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/PQffzU78Fx',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/safepayhq',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sfpyhub',
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: 'Terms & Conditions',
              to: 'docs/07-legal/03-terms',
            },
            {
              label: 'Disclaimer',
              to: 'docs/07-legal/01-disclaimer',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SFPY.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SfpyHub/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SfpyHub/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
