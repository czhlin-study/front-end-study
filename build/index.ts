import { resolve } from "node:path";
export const pathDir = (dir: string) => resolve(process.cwd(), dir);
