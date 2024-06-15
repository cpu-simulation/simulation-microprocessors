import { Fragment } from "react/jsx-runtime"
import { useEffect, useState } from "react"

const Memory = ({ data }: { data: any }) => {
    const [memoryList, setMemoryList] = useState<{ address: string, value: string }[]>(data)
    const [memorySearch, setMemorySearch] = useState<string>("")

    useEffect(() => {
        if (memorySearch === "")
            setMemoryList(data)
        else
            setMemoryList(data.filter((cell: any) => cell.address.startsWith(memorySearch)))
    }, [memorySearch, data])

    return (
        <div className="memory h-[500px] w-full max-w-[360px] flex gap-2 flex-col">
            <h1 className="section-header">Memory</h1>
            <div className="memory-list overflow-scroll flex flex-1 flex-col gap-[6px] bg-[--background] text-[--on-background] border-2 border-[--outline] rounded-[20px] h-full">
                {memorySearch === ""
                    ? <>
                        <ListHeader>Code Cells</ListHeader>
                        <MemoryList list={memoryList.slice(0, 1)} />
                        <ListHeader>Memory Cells</ListHeader>
                        <MemoryList list={memoryList.slice(1)} />
                    </>
                    : <>
                        <ListHeader>Search Result</ListHeader>
                        <MemoryList list={memoryList} />
                    </>
                }
            </div>
            <div className="flex items-center justify-end gap-2">
                <input type="text" placeholder="search for address ..." value={memorySearch}
                    onChange={(e) => setMemorySearch(e.target.value)}
                    className="text-sm outline-none h-10 w-full rounded-full pl-4 pr-6 bg-[--surface-container-low] border border-[--outline-variant]"
                />
                <button className="rounded-full bg-[--primary] px-3 pt-2 pb-1">
                    <i className="icon-search text-2xl text-[--on-primary]" />
                </button>
            </div>
        </div>
    )
}

const ListHeader = ({ children }: { children: any }) => {
    return <div className="head bg-[--secondary-container] text-[--on-secondary-container] py-3 px-6">
        {children}
    </div>
}

const MemoryList = ({ list }: { list: { address: string, value: string }[] }) => {
    return (
        <div className="list py-4 pl-4 pr-6">
            {list.map((cell) => {
                return (
                    <Fragment key={cell.address}>
                        <div className="memory-cell flex gap-[2px] py-1 items-center">
                            <span className="address text-sm text-gray-400">{cell.address}</span>
                            <span className="value flex-1 text-center text-[--on-background]">{cell.value}</span>
                        </div>
                        <hr className="w-full border-[--outline-variant]" />
                    </Fragment>
                )
            })}

        </div>
    )
}

export default Memory