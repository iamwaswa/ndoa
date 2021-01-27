import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {
      ...page,
      styleTags,
    };
  }

  render() {
    return (
      <Html lang="en-CA">
        <Head>
          {this.props.styleTags}
          <link href="/logo.svg" rel="apple-touch-icon" type="image/svg" />
          <link href="/logo.svg" rel="shortcut icon" type="image/svg" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
