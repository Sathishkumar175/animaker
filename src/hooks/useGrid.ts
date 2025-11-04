import { useState, useEffect } from "react";
import { CellValue, GridData } from "@/types";
import { loadGridData, saveGridData } from "@/utils/storage";

export const useGrid = () => {
  const [rows, setRows] = useState<number>(4);
  const [cols, setCols] = useState<number>(4);
  const [data, setData] = useState<GridData>(Array(rows).fill(Array(cols).fill("")));

  useEffect(() => {
    const savedData = loadGridData();
    if (savedData) setData(savedData);
  }, []);

  useEffect(() => {
    saveGridData(data);
  }, [data]);

  const addRow = () => {
    setRows(rows + 1);
    setData([...data, Array(cols).fill("")]);
  };

  const addCol = () => {
    setCols(cols + 1);
    setData(data.map((row) => [...row, ""]));
  };

  const updateCell = (row: number, col: number, value: CellValue) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  return { rows, cols, data, setData, addRow, addCol, updateCell };
};
