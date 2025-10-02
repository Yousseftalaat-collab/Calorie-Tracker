import { useState } from "react";
import Styles from "./CaloriesRecordEdit.module.css";

function CaloriesRecordEdit(props) {
  const DEAFULT_VALUE = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: "",
  };

  const [mealRecord, SetMealRecord] = useState(DEAFULT_VALUE);

  const onDateChangeHandler = (event) => {
    SetMealRecord({ ...mealRecord, date: event.target.value });
  };

  const onMealChangeHandler = (event) => {
    SetMealRecord({ ...mealRecord, meal: event.target.value });
  };
  const onContentChangeHandler = (event) => {
    SetMealRecord({ ...mealRecord, content: event.target.value });
  };
  const onCaloriesChangeHandler = (event) => {
    SetMealRecord({ ...mealRecord, calories: event.target.value });
  };
  const OnSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    SetMealRecord(DEAFULT_VALUE);
  };

  const OnCancelHandler = () => {
    SetMealRecord(DEAFULT_VALUE);
    props.onCancel();
  };

  return (
    <form className={Styles.form} onSubmit={OnSubmitHandler}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={mealRecord.date}
          onChange={onDateChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="meal">Meal:</label>
        <select
          id="meal"
          value={mealRecord.meal}
          onChange={onMealChangeHandler}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          id="content"
          value={mealRecord.content}
          onChange={onContentChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          value={mealRecord.calories}
          onChange={onCaloriesChangeHandler}
          className={`${Styles["calories-input"]} ${
            mealRecord.calories < 0 ? Styles.error : ""
          }`}
        />
      </div>
      <div className={Styles.footer}>
        <button>Add Record</button>
        <button
          type="button"
          className={Styles["secondary"]}
          onClick={OnCancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CaloriesRecordEdit;
