import { ButtonHTMLAttributes } from "react"

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string,
    style: string,
}

export const Button = ({name,style, ...rest}: buttonProps) => {
    return(
        <button
        className={`py-1 px-6 bg-transparent text-md border rounded-full w-fit ${style}`}
        {...rest}
        >
            {name}
        </button>
    )
}