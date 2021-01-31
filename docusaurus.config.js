module.exports = {
  title: 'recap.dev',
  tagline: 'Open-source tracing for modern JavaScript backends',
  url: 'https://recap.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'Infinite Cat', // Usually your GitHub org/user name.
  projectName: 'recap.dev', // Usually your repo name.
  themeConfig: {
    image: 'img/logo.png',
    googleAnalytics: {
      trackingID: 'UA-180958941-1',
    },
    navbar: {
      title: 'recap.dev',
      logo: {
        alt: 'recap.dev',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'https://demo.recap.dev', label: 'Demo', position: 'left' },
        {
          to: 'contact-us',
          label: 'Contact Us',
          position: 'right',
        },
        {
          href: 'https://hub.docker.com/repository/docker/recapdev/server',
          label: 'Docker Hub',
          position: 'right',
        },
        {
          href: 'https://github.com/infinite-cat/',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/qSZZ9HN',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/recapdev/shared_invite/zt-i5tq580i-TVvjpHsu35qVVSfbUL1V3Q',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/recap_dev',
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
              label: 'Contact Us',
              to: 'contact-us',
            },
            {
              label: 'Docker Hub',
              href: 'https://hub.docker.com/repository/docker/recapdev/server',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/infinite-cat',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} recap.dev`,
    },
  },
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Quicksand:100,100i,300,300i,400,400i,500,500i,700,700i',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/infinite-cat/recap.dev-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/infinite-cat/recap.dev-website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom'
  ],
}
