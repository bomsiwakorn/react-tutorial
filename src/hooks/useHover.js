import {useState} from "react"
const useHover = () => {

    const [hover, setHover] = useState(false)

    const mouseOver = () => {
        setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }

    return [hover, mouseOver, mouseOut]
}
export default useHover