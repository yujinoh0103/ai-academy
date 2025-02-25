interface TodoTemplateProps {
  children: React.ReactNode;
}

export function TodoTemplate({ children }: TodoTemplateProps) {
  return <div>{children}</div>;
}
