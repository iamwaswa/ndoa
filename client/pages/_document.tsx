import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    // * Instantiate server stylesheets
    const materialUISheets = new ServerStyleSheets();
    const styledComponentsSheets = new ServerStyleSheet();

    const originalRenderPage = context.renderPage;

    try {
      // * Collect all styles from components
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheets.collectStyles(
              materialUISheets.collect(<App {...props} />)
            ),
        });

      const initialProps = await Document.getInitialProps(context);

      // * Create style tag from styles and pass to HTML template styles
      return {
        ...initialProps,
        styles: [
          <Fragment key="styles">
            {initialProps.styles}
            {materialUISheets.getStyleElement()}
            {styledComponentsSheets.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      styledComponentsSheets.seal();
    }
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
            href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Playfair+Display:ital@1&display=swap"
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
