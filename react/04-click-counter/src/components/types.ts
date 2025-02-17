export interface CountDisplayProps {
  count: number;
}

export interface MessageDisplayProps {
  message: string;
}

export interface CounterButtonProps {
  onClick: () => void;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}
