import "./styles/globals.scss";
import "./styles/base/icon-font.css";

export const metadata = {
  title: "NA Tours",
  description: "...",
  icons: {
    icon: "./img/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
