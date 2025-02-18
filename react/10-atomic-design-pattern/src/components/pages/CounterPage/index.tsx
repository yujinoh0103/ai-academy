import React from "react";
import { MainTemplate } from "../../templates/MainTemplate";
import { ClickCounter } from "../../organisms/ClickCounter";

export const CounterPage: React.FC = () => {
  return (
    <MainTemplate title="클릭 카운터">
      <ClickCounter />
    </MainTemplate>
  );
};
