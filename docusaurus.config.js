// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Free Web3 resources",
  tagline: "A list of resources to learn Web3",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-blue.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "FrancescoXX", // Usually your GitHub org/user name.
  projectName: "free-web3-resources", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/FrancescoXX/free-Web3-resources/edit/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/FrancescoXX/free-Web3-resources/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "TK013U555M",
        apiKey: "868e35b771ee2f9116e289cf1ba63d96",
        indexName: "-free-web3-resources",
        searchParameters: {},
        searchPagePath: 'search',
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Free Web3 resources",
          src: "img/fw3-blue-logo-squared.png",
        },
        items: [
          {
            type: "doc",
            docId: "roadmap/introduction",
            position: "left",
            label: "Resources",
          },
          {
            href: "https://github.com/FrancescoXX/free-Web3-resources",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/roadmap/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/JZ2btyTfzQ",
              },
              {
                label: "X",
                href: "https://twitter.com/4ccommunityhq",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/FrancescoXX/free-Web3-resources",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} By Francesco Ciulla, 4C Founder`,
      },

      announcementBar: {
        id: "Join us",
        content:
          'Are you a Content Creator? <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/JZ2btyTfzQ">Join the Community</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
