import React from 'react'

function Num({ number, word, i, setState, state }) {


  const [popup, setPopup] = React.useState(false)
  const [enterNum, setEnterNum] = React.useState('')

  function handleClick() {
    setPopup(!popup)
  }
  function handleChenge(e) {

    setEnterNum(e.target.value)
  }
  function hendleInputInsert() {

    setPopup(!popup)
    state[word][i] = +enterNum
    setState({ ...state })
    setEnterNum('')
  }

  return (
    <>
      <td className='some' onClick={handleClick}>{number}</td>
      <div className={popup ? 'popup-body' : 'popup-body disabled'}>
        <div className='wrap'>
          <input onChange={handleChenge} value={enterNum} />
          <button onClick={hendleInputInsert}>add</button>
        </div>

      </div>
    </>
  )
}

export default Num

