import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'

const config: DocsThemeConfig = {
  logo:<Logo />,
  primaryHue: { dark: 170, light: 160 },
  project: {
    link: 'https://gitlab.com/ovrhd',
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256">
        <path
          fill="currentColor"
          d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
        ></path>
      </svg>
    )
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'fr', text: 'Français' },
    { locale: 'de', text: 'Deutsch' },
  ],
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  toc: {
    title: <span>Op deze pagina</span>
  },
  footer: {
    text: (
      <span>
        EUPL {new Date().getFullYear()} ©{' '}
        <a href="https://ovrhd..nl" target="_blank">
          ovrhd
        </a>
        .
      </span>
    )
  }
}

export default config
