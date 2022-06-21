/** @packages */
import { CssBaseline } from "@nextui-org/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Children } from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: Children.toArray([initialProps.styles]),
  };
};
