import { useAppDispatch, useAppSelector } from "state/store";
import { toggleUnit } from "state/temp-unit.slice";

const MeticToggle = () => {
  const { isImperial } = useAppSelector((state) => state.tempUnit);
  const dispatch = useAppDispatch();

  return (
    <label className="label cursor-pointer">
      <span className="label-text">&deg;C</span>
      <input
        type="checkbox"
        className="toggle"
        checked={isImperial}
        onChange={() => dispatch(toggleUnit())}
      />
      <span className="label-text">&deg;F</span>
    </label>
  );
};

export default MeticToggle;
