import { FilePathOptions } from "./filepath";
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
declare function filesize(option?: FilePathOptions): FileSizeResult | undefined;
export default filesize;
