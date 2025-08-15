import "./globals.css";
import ScriptLoader from "./components/ScriptLoader";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Remove this line: <link rel="stylesheet" href="/globals.css" /> */}
      </head>
      <body>
        <LanguageProvider>
          <ScriptLoader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}