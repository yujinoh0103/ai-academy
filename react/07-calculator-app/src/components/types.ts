export type OperationType = '+' | '-' | '×' | '÷' | '';

export interface DisplayProps {
  previousOperand: string;
  currentOperand: string;
  operation: OperationType;
}

export interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: OperationType;
}
