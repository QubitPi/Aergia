/**
 * Copyright 2025 Paion Data
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'hashistack',
  tagline: 'Unifying CI/CD practices within Paion Data',
  favicon: 'img/favicon.ico',

  url: 'https://hashistack.paion-data.dev',
  baseUrl: '/',
  organizationName: 'paion-data',
  projectName: 'hashistack',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/paion-data/hashistack/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/paion-data/hashistack/tree/master/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'hashistack',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentations',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/paion-data/hashistack',
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
              label: 'Documentations',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/hashistack',
              },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/paion-data/hashistack',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jiaqi Liu. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java", "bash", "json"]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
