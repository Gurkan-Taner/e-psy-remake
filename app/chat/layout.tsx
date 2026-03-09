import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ToastContainer position="top-right" theme="light" />
    </>
  );
}
