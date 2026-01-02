import { FilePathOptions } from "./filepath";
declare function read(option?: FilePathOptions): {
    success: boolean;
    error: null | Error;
    data: null | any;
};
export default read;
