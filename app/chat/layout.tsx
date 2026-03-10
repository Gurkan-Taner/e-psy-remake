import { ToastProvider, ToastContainer } from "@/components/toast/index";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ToastProvider>
        {children}
        <ToastContainer />
      </ToastProvider>
    </>
  );
}
