import { AppWrapper } from "@/context/state";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppWrapper>{children}</AppWrapper>
      <ToastContainer position="top-right" theme="light" />
    </>
  );
}
