import Image from "next/image"
import logo from "./logo.png"

export const Aside = () => {
    return(<aside className="rounded-lg bg-[#171D1F] py-10 px-8 w-[200px] shrink-0 flex flex-col items-center">
        <Image src={logo} alt="imagem da logo" width={200} height={80} style={{ width: '70%', height: 'auto' }}/>
    </aside>)
} 