import { useState, useEffect } from "react";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";
import ListingSection from "./components/ListingSection";
import Modal from "react-modal";
import Styles from "./App.module.css";
import { GetDateFromString } from "../utils";
import ThemeToggle from "./components/ThemeToggle";
import SplashScreen from "./components/SplashScreen";
import CalorieBg from "./assets/CalorieBg.mp4";

Modal.setAppElement("#root");

const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(2023, 2, 1),
    meal: "Breakfast",
    content: "eggs",
    calories: "200",
  },
  {
    id: 2,
    date: new Date(2023, 2, 2),
    meal: "Lunch",
    content: "Chicken",
    calories: "450",
  },
  {
    id: 3,
    date: new Date(2023, 2, 3),
    meal: "Dinner",
    content: "Cheese",
    calories: "250",
  },
  {
    id: 4,
    date: new Date(2023, 2, 4),
    meal: "Snacks",
    content: "Chocolate",
    calories: "500",
  },
];

function App() {
  const [records, SetRecords] = useState(() => {
    const stored = localStorage.getItem("calorieRecords");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return parsed.map((r) => ({
          ...r,
          date: r.date ? new Date(r.date) : null,
        }));
      } catch {
        return INITIAL_RECORDS;
      }
    }
    return INITIAL_RECORDS;
  });

  const [NextId, SetNextId] = useState(
    records.length > 0 ? Math.max(...records.map((r) => r.id)) + 1 : 1
  );

  const [IsModalOpen, SetIsModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("calorieRecords", JSON.stringify(records));
  }, [records]);

  const HandleOpenModal = () => SetIsModalOpen(true);
  const HandleCloseModal = () => SetIsModalOpen(false);

  const ForSubmitHandler = (record) => {
    const FormattedRecord = {
      ...record,
      date: record.date ? GetDateFromString(record.date) : null,
      calories: Number(record.calories) || 0,
      id: NextId,
    };

    SetNextId((LastVal) => LastVal + 1);
    SetRecords((prev) => [FormattedRecord, ...prev]);

    setSuccessMessage("Record Added Successfully ✅");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
    HandleCloseModal();
  };

  const handleDeleteRecord = (id) => {
    SetRecords((prev) => prev.filter((r) => r.id !== id));
  };

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <div className="App">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={Styles["background-video"]}
      >
        <source src={CalorieBg} type="video/mp4" />
      </video>
      <div className={Styles["video-overlay"]}></div>

      <div className={Styles.content}>
        <div className={Styles.toggleWrapper}>
          <span className={Styles.toggleLabel}>Switch Theme</span>
          <ThemeToggle />
        </div>

        <h1 className={Styles.title}>CALORIE TRACKER</h1>
        <p className={Styles.subtitle}>Track your meals and calories daily</p>
        {/* ✅ success message */}
        {successMessage && (
          <div className={Styles.successMessage}>{successMessage}</div>
        )}
        <Modal
          isOpen={IsModalOpen}
          onRequestClose={HandleCloseModal}
          contentLabel="Modal"
          className={Styles.modalContent}
          overlayClassName={Styles.modalOverlay}
        >
          <CaloriesRecordEdit
            onFormSubmit={ForSubmitHandler}
            onCancel={HandleCloseModal}
          />
        </Modal>

        <ListingSection
          AllRecords={records}
          onDeleteRecord={handleDeleteRecord}
        />

        <button className={Styles["open-modal-btn"]} onClick={HandleOpenModal}>
          TRACK FOOD
        </button>
      </div>
    </div>
  );
}

export default App;
