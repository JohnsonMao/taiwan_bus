import { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  // 設置更新的 Callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [savedCallback, callback]);

  // 設置計時器
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}