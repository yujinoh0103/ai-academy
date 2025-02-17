import React, { useState } from 'react';
import { Display } from './Display';
import { Button } from './Button';
import { CalculatorState, OperationType } from './types';
import { roundResult } from './utils';
import './styles.css';

export const CalculatorApp: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    currentOperand: '0',
    previousOperand: '',
    operation: '',
  });

  const clear = () => {
    setState({
      currentOperand: '0',
      previousOperand: '',
      operation: '',
    });
  };

  const appendNumber = (number: string) => {
    if (number === '.' && state.currentOperand.includes('.')) return;
    if (state.currentOperand === '0' && number !== '.') {
      setState(prev => ({ ...prev, currentOperand: number }));
    } else {
      setState(prev => ({
        ...prev,
        currentOperand: prev.currentOperand.toString() + number,
      }));
    }
  };

  const deleteNumber = () => {
    if (state.currentOperand === '0') return;
    setState(prev => {
      const nextValue = prev.currentOperand.toString().slice(0, -1);
      return {
        ...prev,
        currentOperand: nextValue === '' || nextValue === '-' ? '0' : nextValue,
      };
    });
  };

  const toggleSign = () => {
    const current = parseFloat(state.currentOperand);
    if (isNaN(current)) return;
    setState(prev => ({
      ...prev,
      currentOperand: (-current).toString(),
    }));
  };

  const chooseOperation = (operation: OperationType) => {
    if (state.currentOperand === '0') return;

    if (state.previousOperand !== '') {
      compute();
    }

    setState(prev => ({
      operation,
      previousOperand: prev.currentOperand,
      currentOperand: '0',
    }));
  };

  const compute = () => {
    const prev = parseFloat(state.previousOperand);
    const current = parseFloat(state.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    let result: number;

    switch (state.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        if (current === 0) {
          alert('0으로 나눌 수 없어요!');
          clear();
          return;
        }
        result = prev / current;
        break;
      default:
        return;
    }

    setState({
      currentOperand: roundResult(result).toString(),
      previousOperand: '',
      operation: '',
    });
  };

  return (
    <div className="calculator">
      <Display
        previousOperand={state.previousOperand}
        currentOperand={state.currentOperand}
        operation={state.operation}
      />
      <div className="buttons">
        <Button className="operator" onClick={clear}>
          C
        </Button>
        <Button className="operator" onClick={deleteNumber}>
          DEL
        </Button>
        <Button className="operator" onClick={toggleSign}>
          +/-
        </Button>
        <Button className="operator" onClick={() => chooseOperation('÷')}>
          ÷
        </Button>

        <Button onClick={() => appendNumber('7')}>7</Button>
        <Button onClick={() => appendNumber('8')}>8</Button>
        <Button onClick={() => appendNumber('9')}>9</Button>
        <Button className="operator" onClick={() => chooseOperation('×')}>
          ×
        </Button>

        <Button onClick={() => appendNumber('4')}>4</Button>
        <Button onClick={() => appendNumber('5')}>5</Button>
        <Button onClick={() => appendNumber('6')}>6</Button>
        <Button className="operator" onClick={() => chooseOperation('-')}>
          -
        </Button>

        <Button onClick={() => appendNumber('1')}>1</Button>
        <Button onClick={() => appendNumber('2')}>2</Button>
        <Button onClick={() => appendNumber('3')}>3</Button>
        <Button className="operator" onClick={() => chooseOperation('+')}>
          +
        </Button>

        <Button className="zero" onClick={() => appendNumber('0')}>
          0
        </Button>
        <Button onClick={() => appendNumber('.')}>.</Button>
        <Button
          className="operator"
          data-action="equals"
          onClick={compute}
        >
          =
        </Button>
      </div>
    </div>
  );
};
