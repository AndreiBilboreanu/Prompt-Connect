import "@styles/global.css";

export const metadata = {
  title: "Prompt Connect",
  description: "Discover & Share AI prompts",
};
export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};
