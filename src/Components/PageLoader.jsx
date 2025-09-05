import { useState , useEffect , useRef } from "react"
import { useLocation } from "react-router-dom"
import { ThreeDot } from "react-loading-indicators"
export default function PageLoader({children}) {
    const [loading , setLoading ] = useState(false)
    let location = useLocation()
    const prevPathName = useRef(location.pathname)
    let timer;
    useEffect(() => {
      if (prevPathName.current !== location.pathname) {
        setLoading(true)
    
      timer = setTimeout(() => {
        return setLoading(false)
      },2000)
      }
      prevPathName.current = location.pathname
      return () => clearTimeout(timer)
    }, [location])
    return (
        <>
            
                {loading ? (<ThreeDot variant="bounce" color="#ffa800" size="medium" text="" textColor="" />) : (children)}
            
        </>
    )
}