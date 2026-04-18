import { type FilePathOptions, filepath } from "./filepath.js";
import fs from "fs";

export interface FileSizeResult {
  b: number;
  kb: number;
  mb: number;
  gb: number;
  tb: number;
  bytes: string;
  kilobytes: string;
  megabytes: string;
  gigabytes: string;
  terabytes: string;
}

export const UNITS = {
  kb: 1e3,
  mb: 1e6,
  gb: 1e9,
  tb: 1e12,
} as const;

/**
 * Returns the size of a `.txt` file in multiple units.
 * Returns `undefined` if the file does not exist or cannot be read.
 * @example
 * // Given a file at "/app/json_development.txt" with 1500 bytes:
 * filesize()
 * // {
 * //   b: 1500,
 * //   kb: 1.5,
 * //   mb: 0.0015,
 * //   gb: 0.0000015,
 * //   tb: 0.0000000015,
 * //   bytes: "1,500 bytes",
 * //   kilobytes: "1.5kb",
 * //   megabytes: "0.0015mb",
 * //   gigabytes: "0.0000015gb",
 * //   terabytes: "0.0000000015tb",
 * // }
 * filesize({ filepath: "/data", filename: "store" }) // FileSizeResult | undefined
 * filesize({ filepath: "/nonexistent" })             // undefined
 */
export function filesize(option?: FilePathOptions): FileSizeResult | undefined {
  try {
    const stat = fs.statSync(filepath(option));
    return {
      b: stat.size,
      kb: stat.size / UNITS.kb,
      mb: stat.size / UNITS.mb,
      gb: stat.size / UNITS.gb,
      tb: stat.size / UNITS.tb,
      bytes: `${stat.size.toLocaleString()} bytes`,
      kilobytes: `${(stat.size / UNITS.kb).toLocaleString()}kb`,
      megabytes: `${(stat.size / UNITS.mb).toLocaleString()}mb`,
      gigabytes: `${(stat.size / UNITS.gb).toLocaleString()}gb`,
      terabytes: `${(stat.size / UNITS.tb).toLocaleString()}tb`,
    };
  } catch {
    // File does not exist or cannot be read; return undefined.
  }
}
