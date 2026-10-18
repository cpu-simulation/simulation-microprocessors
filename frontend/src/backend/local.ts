// Runs the Python CPU in the browser with Pyodide, so the simulator works on a static host
// such as GitHub Pages. The `cpu` package is bundled from ../../../cpu as plain source text.
import bridge from "./bridge.py?raw"

const PYODIDE_VERSION = "0.26.4"
const PYODIDE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`

type Pyodide = {
    FS: {
        mkdirTree: (path: string) => void
        writeFile: (path: string, data: string) => void
    }
    runPython: (code: string) => unknown
    globals: { get: (name: string) => Call }
}

type Call = (route: string, payload?: string) => string

const cpuSources = import.meta.glob("../../../cpu/**/*.py", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>

let runtime: Promise<Call> | null = null

const start = async () => {
    const { loadPyodide } = await import(/* @vite-ignore */ `${PYODIDE_URL}pyodide.mjs`)
    const py: Pyodide = await loadPyodide({ indexURL: PYODIDE_URL })

    for (const [path, source] of Object.entries(cpuSources)) {
        const target = "/app/" + path.replace(/^(\.\.\/)+/, "")
        py.FS.mkdirTree(target.slice(0, target.lastIndexOf("/")))
        py.FS.writeFile(target, source)
    }
    py.runPython("import sys; sys.path.insert(0, '/app')")
    py.runPython(bridge)
    return py.globals.get("call")
}

const call = async (route: string, body?: unknown) => {
    runtime ??= start()
    const run = await runtime
    return JSON.parse(run(route, JSON.stringify(body ?? null)))
}

export const loadMemory = () => call("memory/read")
export const loadRegisters = () => call("register/read")
export const compile = (instructions_str: string) => {
    const instructions = instructions_str.split("\n")
    return call("core/compile", { instructions, count: instructions.length })
}
export const excute = () => call("core/instruction")
export const saveMemory = (memory: object[]) => call("memory/write", memory)
