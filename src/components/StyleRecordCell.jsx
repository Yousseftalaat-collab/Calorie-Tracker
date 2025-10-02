import Styles from "./StyleRecordCell.module.css";

function StyleRecordCell(props) {
  return <div className={Styles["styled-record-cell"]}>{props.children}</div>;
}

export default StyleRecordCell;
