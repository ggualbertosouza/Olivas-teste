import { ButtonHTMLAttributes, ReactNode } from "react"

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    name?: string,
    style?: string,
    icon?: ReactNode,
}

export const Button = ({name,style,icon, ...rest}: buttonProps) => {
    return(
        <button
        className={`${style} py-1 px-2 bg-transparent text-md border rounded-full w-fit whitespace-nowrap`}
        {...rest}
        >
            {icon}
            {name}
        </button>
    )
}