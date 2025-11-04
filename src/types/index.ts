export type CellValue = string;
export type GridData = CellValue[][];
export type Position = { row: number; col: number } | null;
export type Range = { start: Position; end: Position };
