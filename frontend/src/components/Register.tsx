const Register = ({ name, value }: { name: string, value: string }) => {
    return (
        <div className="register flex gap-2 items-center w-[200px] p-2 pr-4 bg-[--secondary-container] rounded-full">
            <span className="name rounded-full py-1 px-[6px] bg-[--tertiary] text-[--on-tertiary]">{name}</span>
            <span className="value text-center flex-1 text-lg text-[--on-secondary-container]">{value}</span>
        </div>
    )
}

export default Register