const api = "http://127.0.0.1:8000"

export const loadMemory = async () => {
    try {
        console.log(`${api}/memory/read`)
        const res = await fetch(`${api}/memory/read`)
        const memory = await res.json()
        return memory
    } catch (err: any) {
        console.log(err)
        throw new Error(err)
    }
}

export const loadRegisters = async () => {
    try {
        const res = await fetch(`${api}/register/read`)
        const registers = await res.json()
        return registers
    } catch (err: any) {
        throw new Error(err)
    }
}

export const compile = async (instructions_str: string) => {
    try {
        const instructions = instructions_str.split("\n")
        const count = instructions.length
        const res = await fetch(`${api}/core/compile`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ instructions, count }),
        })
        const data = await res.json()
        return data
    } catch (err: any) {
        throw new Error(err)
    }
}

export const excute = async () => {
    try {
        const res = await fetch(`${api}/core/instruction`, {
            method: "GET",
        })
        const data = await res.json()
        return data
    } catch (err: any) {
        throw new Error(err)
    }
}

export const saveMemory = async (memory: Array<Object>) => {
    try {
        const res = await fetch(`${api}/memory/write`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memory),
        })
        const data = await res.json()
        return data
    } catch (err: any) {
        throw new Error(err)
    }
}