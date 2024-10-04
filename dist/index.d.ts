import deleteFile from "./delete";
import { filepath } from "./filepath";
import filesize from "./filesize";
import read from "./read";
import write from "./write";
declare const jsontxt: {
    delete: typeof deleteFile;
    filepath: typeof filepath;
    filesize: typeof filesize;
    read: typeof read;
    write: typeof write;
};
export = jsontxt;
