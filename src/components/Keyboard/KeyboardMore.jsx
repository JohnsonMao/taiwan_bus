import { keyboard_more } from "../../utils/keyboard_config";

export default function KeyboardMore() {
  return (
    <div className="keyboard bg-gray p-6">
      {keyboard_more.map((item) => (
        <button
          key={item}
          type="button"
          className="btn btn-primary fs-3 p-0"
          aria-label={item}
          data-route={item}
        >
          {item}
        </button>
      ))}
      <label
        htmlFor="baseKeyboard"
        className="btn btn-primary fs-3 goBack-btn"
        aria-label="回上一頁"
      >
        回上一頁
      </label>
    </div>
  );
}
