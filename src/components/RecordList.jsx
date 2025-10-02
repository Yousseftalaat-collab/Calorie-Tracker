import CalorieRecord from "./calorieRecord";

import Styles from "./RecordList.module.css";

function RecordList({ records, onDeleteRecord }) {
  return records?.length ? (
    <div>
      <div className={Styles["record-header"]}>
        <span className={Styles.date}>Date</span>
        <span className={Styles.meal}>Meal</span>
        <span className={Styles.content}>Content</span>
        <span className={Styles.calories}>Calories</span>
        <span className={Styles.action}>Action</span>
      </div>

      <ul className={Styles["record-list"]}>
        {records.map((record) => (
          <li className={Styles["list-Item"]} key={record.id}>
            <CalorieRecord
              id={record.id}
              date={record.date}
              meal={record.meal}
              content={record.content}
              calories={record.calories}
              onDelete={onDeleteRecord}
            />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className={Styles.placeholder}> No records for this date </div>
  );
}

export default RecordList;
