import { animate, motion, useMotionValue } from 'framer-motion'
import { excoData } from '../../excoData'
import InfiniteExcoCards from '../features/InfiniteExcoCards'
import useMeasure from 'react-use-measure'
import { useEffect, useState } from 'react'

const InfiniteMovingCards = () => {
  const FAST_DURATION = 25
  const SLOW_DURATION = 75

  const [duration, setDuration] = useState(FAST_DURATION)

  let [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 7

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }

    return () => {
      if (controls && typeof controls.stop === 'function') {
        controls.stop()
      }
    }
  }, [xTranslation, width, duration, rerender])

  return (
    <main className='py-8 hidden md:flex'>
      <motion.div
        className='absolute left-0 flex gap-4'
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(SLOW_DURATION)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(FAST_DURATION)
        }}
      >
        {Array.from({ length: 2 }).map((_, index) =>
          excoData.map((card, innerIndex) => (
            <InfiniteExcoCards
              {...card}
              key={index * excoData.length + innerIndex}
            />
          ))
        )}
      </motion.div>
    </main>
  )
}
export default InfiniteMovingCards
