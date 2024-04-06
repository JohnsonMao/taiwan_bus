import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Timer({ refetch }) {
  const CD = 30; /* 幾秒更新 */
  const [count, setCount] = useState(CD);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount((count) => count - 1);
      } else {
        refetch();
        setCount(CD);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count, setCount, refetch]);

  return <span className="fs-4 text-primary"> {count} 秒後更新</span>;
}

Timer.propTypes = {
  refetch: PropTypes.func.isRequired,
};
