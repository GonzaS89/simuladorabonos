import { useEffect, useState } from "react"

export const useHeight = () => {

        const height = window.innerHeight;

        console.log(height)

        const [hMd, setHMd] = useState(false)
        const [hLg, setHLg] = useState(false)

        useEffect(() => {
                if(height >= 700){setHLg(true)}
                else if(height < 700 && height >= 600){setHMd(true)}
        },[height])
return {hMd,hLg}
}
