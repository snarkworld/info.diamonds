export default {
  github: 'https://github.com/gweiworld',
  docsRepositoryBase: 'https://github.com/gweiworld/info.diamonds',
  titleSuffix: ' – 💎',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Info.Diamonds</span>
      <span className="text-gray-600 font-normal hidden md:inline">
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="info.diamonds: guide to diamond contracts" />
      <meta name="og:description" content="info.diamonds: guide to diamond contracts" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://info.diamonds" />
      <meta name="twitter:site:domain" content="info.diamonds" />
      <meta name="twitter:url" content="https:/info.diamonds" />
      <meta name="og:title" content="info.diamonds: guide to diamond contracts" />
      <meta name="og:image" content="https://info.diamonds" />
      <meta name="apple-mobile-web-app-title" content="info.diamonds" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerText: <> MIT {new Date().getFullYear()} © info.diamonds.</>,
  unstable_faviconGlyph: '💎',
}
