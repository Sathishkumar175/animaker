import { GridData } from "@/types";

export const saveGridData = (data: GridData): void => {
  localStorage.setItem("gridData", JSON.stringify(data));
};

export const loadGridData = (): GridData | null => {
  const data = localStorage.getItem("gridData");
  return data ? JSON.parse(data) : null;
};
