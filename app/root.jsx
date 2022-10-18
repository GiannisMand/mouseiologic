import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ServerStyleContext, ClientStyleContext } from "./context";

import Navbar from "app/components/Navbar";
import theme from "app/theme";

export const meta = () => ({
  charset: "utf-8",
  title: "MouseioLogic",
  viewport: "width=device-width,initial-scale=1",
});

const Document = withEmotionCache(({ children }, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);

  useEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData?.reset();
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body style={{ overflow: "overlay", backgroundColor: "#F5F5F5" }}>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});

export default function App() {
  return (
    <Document>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar>
          <Outlet />
        </Navbar>
      </ThemeProvider>
    </Document>
  );
}

// // How NextUIProvider should be used on ErrorBoundary
// export function ErrorBoundary({ error }: { error: Error }) {
//   return (
//     <Document title="Error!">

//     </Document>
//   );
// }
