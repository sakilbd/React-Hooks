import React from 'react'

function MemoComp({name}) {
 console.log('Rendering Memo componenet') ;
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)