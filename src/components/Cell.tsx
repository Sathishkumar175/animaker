import { useState } from "react";
import styles from "../styles/Cell.module.css";
import { CellValue } from "@/types";

type CellProps = {
  value: CellValue;
  isSelected: boolean;
  onChange: (value: CellValue) => void;
  onMouseDown: () => void;
  onMouseOver: () => void;
};

export const Cell = ({ value, isSelected, onChange, onMouseDown, onMouseOver }: CellProps) => {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onChange(editValue);
      setEditing(false);
    } else if (e.key === "Escape") {
      setEditing(false);
    }
  };

  return editing ? (
    <input
      autoFocus
      value={editValue}
      onChange={(e) => setEditValue(e.target.value)}
      onBlur={() => {
        onChange(editValue);
        setEditing(false);
      }}
      onKeyDown={handleKeyDown}
      className={styles.input}
    />
  ) : (
    <div
      onClick={() => setEditing(true)}
      onMouseDown={onMouseDown}
      onMouseOver={onMouseOver}
      className={`${styles.cell} ${isSelected ? styles.selected : ""}`}
    >
      {value}
    </div>
  );
};
