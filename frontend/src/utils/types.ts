export type TRegisters = {
    [name: string]: string
}

export type TMemory = {
    address: string,
    value: string
}

export type MessageType = "alert" | "success" | "error"

export type TMessage = {
    type?: MessageType,
    message: string
}
