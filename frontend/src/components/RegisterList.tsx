import Register from "./Register"

const RegisterList = ({ data }: { data: any }) => {
    return (
        <div className="col-start-1 col-end-3 flex gap-2 flex-col self-baseline w-full">
            <h1 className="text-lg text-[--on-background]">Registers</h1>
            <hr />
            <div className="registers-list flex flex-wrap gap-y-3 gap-x-2 items-start">
                {Object.keys(data).map((name) => {
                    return <Register key={name} name={name} value={data[name]} />
                })}
            </div>
        </div>
    )
}

export default RegisterList