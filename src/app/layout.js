export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}