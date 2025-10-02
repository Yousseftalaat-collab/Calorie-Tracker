import RecordList from "./RecordList";
import Styles from "./ListingSection.module.css";
import { useState } from "react";
import { GetDateFromString } from "../../utils";

function ListingSection({ AllRecords, onDeleteRecord }) {
  const [CurrentDate, SetCurrentDate] = useState(new Date());

  const dateChangeHandler = (event) => {
    SetCurrentDate(GetDateFromString(event.target.value));
  };

  const dateFilter = (record) =>
    record.date.getDate() === CurrentDate.getDate() &&
    record.date.getMonth() === CurrentDate.getMonth() &&
    record.date.getFullYear() === CurrentDate.getFullYear();

  return (
    <>
      <label className={Styles["listing-picker-label"]} htmlFor="listingDate">
        Select Date:
      </label>
      <input
        type="date"
        id="listingDate"
        className={Styles["listing-picker-input"]}
        value={CurrentDate.toISOString().split("T")[0]}
        onChange={dateChangeHandler}
      />
      <RecordList
        records={AllRecords.filter(dateFilter)}
        onDeleteRecord={onDeleteRecord}
      />
    </>
  );
}
export default ListingSection;
