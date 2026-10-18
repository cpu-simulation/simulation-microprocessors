import * as http from "./backend/http"
import * as local from "./backend/local"

// `vite --mode static` and `npm run build:static` run the CPU in the browser instead of
// talking to the Django API.
export const isStatic = import.meta.env.MODE === "static"

const backend = isStatic ? local : http

export const loadMemory = () => backend.loadMemory()
export const loadRegisters = () => backend.loadRegisters()
export const compile = (instructions_str: string) => backend.compile(instructions_str)
export const excute = () => backend.excute()
export const saveMemory = (memory: object[]) => backend.saveMemory(memory)
