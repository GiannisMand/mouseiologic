//Imports
import { useContext } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { withEmotionCache } from "@emotion/react";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material";
import theme from "./src/theme";
import ClientStyleContext from "./src/ClientStyleContext";

import { Navbar } from "~/components/Navbar.jsx";

export const meta = () => ({
  charset: "utf-8",
  title: "MouseioLogic",
  viewport: "width=device-width,initial-scale=1",
});

export const App = () => {
  return (
    <Document>
      <Navbar>
        <Outlet />
      </Navbar>
    </Document>
  );
};

const Document = withEmotionCache(({ children, title }, emotionCache) => {
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEnhancedEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      // eslint-disable-next-line no-underscore-dangle
      emotionCache.sheet._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});

export function ErrorBoundary({ error }) {
  console.error(error);

  return (
    <Document title="Error!">
      {/* <Layout> */}
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
      {/* </Layout> */}
    </Document>
  );
}

export default App;
