import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type Props = {
  number: number;
  setNumber: (number: number) => void;
  max: number;
  unit?: string;
};

const NumberInput = ({ number, setNumber, max, unit = "px" }: Props) => {
  const [inputValue, setInputValue] = useState(number); // 新增的state變量

  function incrementNumber() {
    if (number >= max) return;

    const calcNumber = Math.min(number + 1, max);
    setNumber(calcNumber);
    setInputValue(calcNumber);
  }

  function descrementNumber() {
    if (number <= 0) return;
    const calcNumber = Math.max(number - 1, 1);

    setNumber(calcNumber);
    setInputValue(calcNumber);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue <= 0 || typeof inputValue !== "number") {
        setNumber(0);
        setInputValue(0); // 立刻顯示輸入值
      } else if (inputValue > max) {
        setNumber(max);
        setInputValue(max);
      } else if (!isNaN(inputValue)) {
        setNumber(inputValue);
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const number = parseInt(event.target.value);
    if (!number) return;
    setInputValue(number); // 立刻顯示輸入值
  }

  // ...剩餘部分代碼保持不變
  return (
    <div style={{ textAlign: "center", width: "150px" }} className="text-black">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #767676",
          borderRadius: "10px",
          height: "30px",
          padding: "0 10px",
        }}
      >
        <AiOutlineMinus
          onClick={descrementNumber}
          style={
            number > 1
              ? { cursor: "pointer", color: "black" }
              : { cursor: "not-allowed", color: "#767676" }
          }
          fontSize="20px"
        />
        <div className="w-[40px] items-center flex justify-center">
          <input
            className="w-[30px] text-[14px] font-medium bg-transparent text-center text-black border-0"
            value={inputValue} // 將value改為實時輸入值
            onChange={handleInputChange}
          />
          <p>{unit}</p>
        </div>
        <AiOutlinePlus
          onClick={incrementNumber}
          style={
            number < max
              ? { cursor: "pointer", color: "black" }
              : { cursor: "not-allowed", color: "#767676" }
          }
          fontSize="20px"
        />
      </div>
      <p className="text-[12px] font-semibold">
        最大： {max}
        {unit}
      </p>
    </div>
  );
};

export default NumberInput;
