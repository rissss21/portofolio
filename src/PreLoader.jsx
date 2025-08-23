import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"
import CountUp from "./CountUp/CountUp"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)

  useEffect(() => {
    if (countDone) {
      // Fade teks
      const fadeTextTimer = setTimeout(() => setFadeText(true), 3000)

      // Fade seluruh screen
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 2000)

      // Unmount preloader setelah animasi fade selesai
      const hideTimer = setTimeout(() => setLoading(false), 3000)

      return () => {
        clearTimeout(fadeTextTimer)
        clearTimeout(fadeScreenTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [countDone])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-1000 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div
          className={`absolute text-white text-6xl font-bold transition-all duration-1000 ${
            fadeText ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
            onEnd={() => setCountDone(true)}
          />
        </div>
      </div>
    )
  )
}

export default PreLoader
