import Image from "next/image"
import logo from "./logo.png"

export const Aside = () => {
    return(<aside className="rounded-lg bg-[#171D1F] py-10 px-4"> 
        <Image src={logo} alt="imagem da logo"/>
    </aside>)
} 