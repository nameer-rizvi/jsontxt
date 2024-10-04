import deleteFile from "./delete";
import { filepath } from "./filepath";
import filesize from "./filesize";
import read from "./read";
import write from "./write";

const jsontxt = {
  delete: deleteFile,
  filepath,
  filesize,
  read,
  write,
};

export = jsontxt;
