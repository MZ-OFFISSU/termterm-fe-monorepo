import React from "react";
import "./button.scss";

interface ButtonProps {
  /**
   * 버튼 내용
   */
  title: string;
}

/**
 * 테스트용 임시 버튼
 */
const Button = ({ title }: ButtonProps) => {
  return <button className="temp">{title}</button>;
};

export default Button;
