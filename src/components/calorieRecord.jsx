import React from "react";
import Styles from "./CalorieRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyleRecordCell from "./StyleRecordCell";

function CalorieRecord({ id, date, meal, content, calories, onDelete }) {
  const handleDelete = () => {
    if (typeof onDelete !== "function") return;
    const confirmed = window.confirm(
      "Delete this record? This action cannot be undone."
    );
    if (confirmed) onDelete(id);
  };

  return (
    <div className={Styles.recordRow}>
      <div className={Styles.colDate}>
        <CalorieRecordDate date={date} />
      </div>

      <div className={Styles.colMeal}>{meal}</div>

      <div className={Styles.colContent}>{content}</div>

      <div className={Styles.colCalories}>
        <StyleRecordCell>{calories}</StyleRecordCell>
      </div>
      <div className={Styles.Action}>
        <button
          className={Styles["delete-btn"]}
          onClick={handleDelete}
          aria-label="Delete record"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default CalorieRecord;
