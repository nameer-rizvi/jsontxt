import { FilePathOptions, filepath } from "./filepath";
import fs from "fs";

interface FileSizeResult {
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

const UNITS = {
  kb: 1e3,
  mb: 1e6,
  gb: 1e9,
  tb: 1e12,
};

function filesize(option?: FilePathOptions): FileSizeResult | undefined {
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
  } catch {}
}

export default filesize;
