import React from "react";

// Section 컴포넌트: children을 감싸는 레이아웃용 컴포넌트입니다.
const Section = ({ children }: { children: any }) => {
  return <section>{children}</section>;
};

export default Section;

export {};