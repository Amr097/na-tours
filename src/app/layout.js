import "./styles/globals.scss";
import "./styles/base/icon-font.css";

export const metadata = {
  title: "NA Tours",
  description: "...",
  icons: {
    icon: "./img/vecteezy_letter-n-alphabet-natural-green-icons-leaf-logo_.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
