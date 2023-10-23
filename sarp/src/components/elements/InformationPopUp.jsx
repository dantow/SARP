import { useEffect, useState } from 'react'

function InformationPopUp ({ information }) {
  const [isHidden, setIsHidden] = useState(true)

  function changeHiddenState () {
    setIsHidden(!isHidden)
  }

  useEffect(() => {
  }, [isHidden])

  return (
    <button
      onMouseEnter={changeHiddenState}
    >
        ?
      <div
        className='popup'
        style={{ display: isHidden ? 'none' : 'block' }}>
        <div>{information}</div>
      </div>
    </button>
  )
}

export default InformationPopUp
