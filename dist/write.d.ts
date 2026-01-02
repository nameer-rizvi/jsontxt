import { FilePathOptions } from "./filepath";
declare function write(input?: unknown, option?: FilePathOptions): {
    success: boolean;
    error: null | Error;
};
export default write;
