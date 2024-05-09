import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
// import Provider from "@component/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI prompts.",
};

// name of this function & which name also has
// to be exported is RootLayout no this.

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
