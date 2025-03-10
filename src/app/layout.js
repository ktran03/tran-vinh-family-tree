import "./globals.css"; // ✅ Ensure this import exists
import ScriptLoader from "./components/ScriptLoader"; // ✅ Import script loader

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Remove this line: <link rel="stylesheet" href="/globals.css" /> */}
      </head>
      <body>
        <ScriptLoader /> {/* ✅ Dynamically loads the script */}
        {children}
      </body>
    </html>
  );
}