const defaultConfig = {
  defaultTitle: 'Chris Lott',
  titleTemplate: '%s | Chris Lott',
  description: "Software Engineer and Product Manager based in Austin, Texas. Have an app idea? Let's build it!",
  twitter: {
    handle: '@chrisnlott',
    site: '@chrisnlott',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    url: 'https://lott.io',
    title: 'Chris Lott',
    description: "Software Engineer and Product Manager based in Austin, Texas. Have an app idea? Let's build it!",
    images: [
      {
        url: '/lott.eth.png',
        width: 1380,
        height: 470,
        alt: 'Lott.eth',
      },
    ],
  },
  dangerouslySetAllPagesToNoIndex: process.env.NODE_ENV === 'production' ? false : true,
  dangerouslySetAllPagesToNoFollow: process.env.NODE_ENV === 'production' ? false : true,
};

export default defaultConfig;
