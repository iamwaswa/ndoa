import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { ReactElement } from 'react';
import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({
    renderPage,
  }: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();

    const page: RenderPageResult = renderPage((App) => {
      return (props) => {
        return sheet.collectStyles(<App {...props} />);
      };
    }) as RenderPageResult;

    const styles: Array<ReactElement> = sheet.getStyleElement();

    return Promise.resolve<DocumentInitialProps>({
      ...page,
      styles,
    });
  }

  render(): JSX.Element {
    return (
      <Html lang="en-CA">
        <Head>
          {this.props.styles}
          <link href="/logo.svg" rel="apple-touch-icon" type="image/svg" />
          <link href="/logo.svg" rel="shortcut icon" type="image/svg" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Playfair+Display:ital@1&display=swap"
            rel="stylesheet"
          />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
