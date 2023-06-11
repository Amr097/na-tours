import "./styles/globals.scss";
import "./styles/base/icon-font.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
