import styles from "../styles/Toolbar.module.css";

type ToolbarProps = {
  addRow: () => void;
  addCol: () => void;
};

export const Toolbar = ({ addRow, addCol }: ToolbarProps) => (
  <div className={styles.toolbar}>
    <button onClick={addRow} className={styles.button}>
      Add Row
    </button>
    <button onClick={addCol} className={styles.button}>
      Add Column
    </button>
  </div>
);
