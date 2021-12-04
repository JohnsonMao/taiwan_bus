import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export default function Timer({ control, setControl }) {
  const CD = 30; /* 幾秒更新 */
  const [count, setCount] = useState(CD)

  const toggleControl = useCallback(() => {
    setControl(!control);
  }, [control, setControl])
  useEffect(() => {
    const timer = setInterval(() => {
      if (count !== 0) {
        setCount((count) => count - 1);
      } else {
        toggleControl();
        setCount(CD);
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [count, setCount, toggleControl])
  return (<span className="fs-4 text-primary"> {count} 秒後更新</span>)
}

Timer.propTypes = {
  setControl: PropTypes.func.isRequired,
  control: PropTypes.bool.isRequired,
}