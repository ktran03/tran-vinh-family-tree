import './globals.css'; // Ensure this import exists
import ScriptLoader from "./components/ScriptLoader"; // Import the new component

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body>
                <ScriptLoader /> {/* Dynamically loads the script */}
                {children}
            </body>
                </html>
  );
}