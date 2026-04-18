import { _delete } from "./delete.js";
import * as filepath from "./filepath.js";
import * as filesize from "./filesize.js";
import * as read from "./read.js";
import * as write from "./write.js";

export default { delete: _delete, ...filepath, ...filesize, ...read, ...write };
