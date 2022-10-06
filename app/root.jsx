//Imports
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Navbar } from "~/components/Navbar/Navbar.jsx";

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

const Document = ({ children }) => {
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
};

export default App;
