// A *.d.ts file contains type declarations exclusively

export type RootState = {
  currentStroke: Stroke; // Array of points corresponding to stroke being drawn
  strokes: Stroke[]; // Array of strokes already drawn
  historyIndex: number; // How many strokes to undo
};

export type Stroke = {
  points: Point[]; // List of xy coordinates
  color: string; // hex string
};

export type Point = {
  x: number;
  y: number;
};
