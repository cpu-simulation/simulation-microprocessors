import Memory from "./components/Memory"
import TextEditor from "./components/TextEditor"
import RegisterList from "./components/RegisterList"
import { useEffect, useState } from "react"
import * as lib from './lib'
import { TMemory, TMessage, TRegisters, MessageType } from "./utils/types"
import Alert from "./components/Alert"

enum State {
  idle,
  compiling,
  executing,
  initialError
}

enum Editor {
  instruction,
  memory
}

function App() {
  const [instructions, setInstructions] = useState<string>("")
  const [memoryDict, setMemoryDict] = useState<string>("{\n  \n}")
  const [editor, setEditor] = useState(Editor.instruction)
  const [memory, setMemory] = useState<TMemory[]>([])
  const [state, setState] = useState<State>(State.idle)
  const [message, setMessage] = useState<TMessage | null>()
  const [registers, setRegisters] = useState<TRegisters>({
    "PC": "0x0000",
    "TR": "0x0000",
    "AR": "0x0000",
    "IR": "0x0000",
    "DR": "0x0000",
    "AC": "0x0000",
    "E": "0"
  })

  const compile = () => {
    setState(State.compiling)
    lib.compile(instructions)
      .then(lib.loadMemory).then(setMemory)
      .then(() => alert("compiled succesfully", "success"))
      .catch(() => alert("failed to compile instuctions", "error"))
  }
  const excute = () => {
    lib.excute()
      .then(lib.loadMemory).then(setMemory)
      .then(lib.loadRegisters).then(setRegisters)
      .then(() => alert("executed succesfully", "success"))
      .catch(() => alert("failed to execute instuctions", "error"))
  }

  const saveMemory = () => {
    let mem: { [key: string]: string } = {}
    try {
      mem = JSON.parse(memoryDict)
    } catch (e: any) {
      alert(e.message, "error")
      return
    }
    const memArray = Object.keys(mem).map(key => {
      return {
        "address": key,
        "value": mem[key]
      }
    })
    lib.saveMemory(memArray)
      .then(lib.loadMemory).then(setMemory)
      .then(() => setMemoryDict("{\n  \n}"))
      .then(() => alert("Saved to memory successfully", "success"))
      .catch(() => alert("Failed to save to memory", "error"))
  }

  const alert = (message: string, type?: MessageType) => {
    setMessage({
      message,
      type
    })
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  useEffect(() => {
    lib.loadMemory().then(setMemory)
      .then(lib.loadRegisters).then(setRegisters)
      .catch(() => {
        setState(State.initialError)
      })
  }, [])

  const toggleEditor = () => {
    setEditor(editor == Editor.instruction ? Editor.memory : Editor.instruction)
  }

  return (
    state == State.initialError
      ? <div>
        <h1 className="text-3xl">Unexpected Error !</h1>
        <div>Failed to load memory and registers</div>
      </div>
      : <main className="w-full py-4 md:py-1 max-w-[850px] flex flex-col md:grid md:grid-cols-2 gap-y-2 justify-items-center items-center px-2" >
        {message &&
          <Alert message={message.message} type={message.type} />
        }
        {editor === Editor.instruction ?
          <div className="instruction-editor w-full max-w-[360px] h-[500px] max-h-[500px] flex gap-2 flex-col">
            <h1 className="section-header cursor-pointer select-none" onClick={toggleEditor}>Instruction Editor</h1>
            <div className="h-full overflow-scroll flex-1 bg-[--primary-container] rounded-[20px]">
              <TextEditor instructions={instructions} setInstrunctions={setInstructions} />
            </div>
            <div className="buttons flex items-center justify-end gap-2">
              <button className="bg-[--secondary-container] text-[--on-secondary-container]" onClick={() => compile()}>
                <i className="icon-compile text-xl text-[--on-secondary-container]"></i>
                <span className="text-[--on-secondary-container]">Compile</span>
              </button>
              <button className="bg-[--primary] text-[--on-primary]" onClick={() => excute()}>
                <i className="icon-execute text-xl text-[--on-primary]"></i>
                <span className="text-[--on-primary]">Execute</span>
              </button>
            </div>
          </div>
          : <div className="instruction-editor w-full max-w-[360px] h-[500px] max-h-[500px] flex gap-2 flex-col">
            <h1 className="section-header cursor-pointer select-none" onClick={toggleEditor}>Memory Editor</h1>
            <div className="h-full overflow-scroll flex-1 bg-[--primary-container] rounded-[20px]">
              <TextEditor instructions={memoryDict} setInstrunctions={setMemoryDict} />
            </div>
            <div className="buttons flex items-center justify-end gap-2">
              <button className="bg-[--secondary-container] text-[--on-secondary-container]" onClick={saveMemory}>
                <i className="icon-save text-xl text-[--on-secondary-container]"></i>
                <span className="text-[--on-secondary-container]">Save</span>
              </button>
            </div>
          </div>}
        <Memory data={memory} />
        <RegisterList data={registers} />
      </main >
  )
}

export default App
