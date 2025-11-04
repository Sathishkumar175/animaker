import { useState } from "react";
import { Position, Range } from "@/types";

export const useSelection = () => {
  const [selection, setSelection] = useState<Range>({ start: null, end: null });

  const handleMouseDown = (row: number, col: number) => {
    setSelection({ start: { row, col }, end: { row, col } });
  };

  const handleMouseOver = (row: number, col: number) => {
    if (selection.start) {
      setSelection({ ...selection, end: { row, col } });
    }
  };

  const clearSelection = () => {
    setSelection({ start: null, end: null });
  };

  return { selection, handleMouseDown, handleMouseOver, clearSelection };
};
