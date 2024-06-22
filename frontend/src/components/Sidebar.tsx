const Sidebar = ({ theme, setTheme }: { theme: string, setTheme: Function }) => {
    return (
        <div className='text-[--on-secondary] py-2 md:py-4 px-2 text-center w-full h-full bg-[--secondary] flex md:flex-col items-center justify-center'>
            <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                className="bg-[--secondary-container] p-2 rounded-full text-[--on-secondary-container] flex items-center">
                <i className="icon-theme text-xl px-1 text-[--on-secondary-container]" />
            </button>
            <span
                className="md:[writing-mode:vertical-lr] md:scale-[-1] text-[--on-secondary] flex-1 font-serif tracking-[8px] md:tracking-[16px]">
                MICROPROCESSER
            </span>
        </div>
    )
}

export default Sidebar