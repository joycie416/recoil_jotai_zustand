"use client";

import IncreaseButton from "@/components/IncreaseButton";
import ResetButton from "@/components/ResetButton";
import counterState, { isEven as isEvenState, resetCounter } from "@/jotai/counterStore";
import { useAtom, useAtomValue, useSetAtom, useStore } from "jotai";

const JotaiPage = () => {
  // useAtom는 useState와 비슷하게 사용 가능
  // const [count, setCount] = useAtom(counterState);

  // useAtom는 아래와 같이 나누어 사용 가능
  const count = useAtomValue(counterState); // read-only
  const setCount = useSetAtom(counterState);


  // 파생 상태는 useAtomValue로 사용
  const isEven = useAtomValue(isEvenState);

  // recoil과 달리 reset 함수가 없음
  // setter만 반환한 atom 가져와 사용
  // setter만 있으므로 두 번째 인자만 사용
  const [, resetCount] = useAtom(resetCounter);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };


  // Provider에 등록된 store 가져오기
  // const store = useStore();
  // console.log(counterState.toString());

  return (
    <div className="w-full flex flex-col">
      <p>Jotai Page</p>
      <p>
        {count} : {isEven ? "짝수" : "홀수"}
      </p>
      <IncreaseButton onClick={handleIncrease} />
      <ResetButton onClick={resetCount} />
    </div>
  );
};

export default JotaiPage;
