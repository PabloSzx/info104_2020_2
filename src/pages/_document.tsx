import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";
import { extractCritical } from "emotion-server";
export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    };
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
