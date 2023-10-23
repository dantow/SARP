import { useEffect, useState } from 'react'

function TextChanger () {
  const words = ['Search...', 'Plan...', 'Travel...']
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [writing, setWriting] = useState(true)

  useEffect(() => {
    const changeText = () => {
      let newText = ''

      if (writing) {
        newText = words[wordIndex].slice(0, charIndex + 1)
        setCharIndex(charIndex + 1)

        if (charIndex >= words[wordIndex].length) {
          setWriting(false)
        }
      } else {
        newText = words[wordIndex].slice(0, charIndex - 1)
        setCharIndex(charIndex - 1)

        if (charIndex <= 1) {
          setWordIndex((wordIndex + 1) % words.length)
          setWriting(true)
        }
      }
      document.getElementById('changing-text').textContent = newText
    }
    const timer = setTimeout(changeText, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [wordIndex, charIndex, writing])

  return (
    <div>
      <h1 id="changing-text"></h1>
    </div>
  )
}

export default TextChanger
