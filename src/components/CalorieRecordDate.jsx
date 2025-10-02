import Styles from "./CalorieRecordDate.module.css";
import StyleRecordCell from "./StyleRecordCell";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function CalorieRecordDate(props) {
  const month = MONTHS[props.date.getUTCMonth()];
  const day = props.date.getUTCDate();
  const year = props.date.getUTCFullYear();

  return (
    <StyleRecordCell>
      <div className={Styles["record-date-month"]}>{month}</div>
      <div className={Styles["record-date-day"]}>{day}</div>
      <div className={Styles["record-date-year"]}>{year}</div>
    </StyleRecordCell>
  );
}

export default CalorieRecordDate;
