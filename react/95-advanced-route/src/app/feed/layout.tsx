export default function FeedLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      <h2>Feed Layout</h2>
      <div>{children}</div>
      {modal}
    </div>
  );
}
