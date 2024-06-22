import { TMessage } from "../utils/types"

const Alert = ({ message, type = "alert" }: TMessage) => {
    const textColor = {
        alert: "text-yellow-900",
        success: "text-green-900",
        error: "text-red-900"
    }
    const bgColor = {
        alert: "bg-yellow-200",
        success: "bg-green-200",
        error: "bg-red-200"
    }
    return (
        <div className={`alert fixed shadow-black p-3 text-center w-full text-[17px]
                        max-w-[400px] rounded-md ${textColor[type]} ${bgColor[type]}`}>
            {message}
        </div>
    )
}

export default Alert