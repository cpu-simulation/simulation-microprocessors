const api = "http://localhost:3000/api"

export const loadMemory = async () => {
    try {
        console.log(`${api}/memory/bulk_read`)
        const res = await fetch(`${api}/memory/bulk_read`)
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
            method: "POST",
        })
        const data = await res.json()
        return data
    } catch (err: any) {
        throw new Error(err)
    }
}