import { GridData, Range } from "@/types";

export const copyToClipboard = (data: GridData, range: Range): void => {
  if (!range.start || !range.end) return;

  const rows = data.slice(range.start!.row, range.end!.row + 1);
  const text = rows
    .map((row) => row.slice(range.start!.col, range.end!.col + 1).join("\t"))
    .join("\n");
  navigator.clipboard.writeText(text);
};

export const pasteFromClipboard = async (): Promise<GridData> => {
  const text = await navigator.clipboard.readText();
  return text.split("\n").map((row) => row.split("\t"));
};
