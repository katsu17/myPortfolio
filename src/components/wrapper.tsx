import React, { FC } from 'react'

const Wrapper: FC = ($props) => {
  return (
    <div className="py-12 px-4 md:py-24">
      <div className="m-auto max-w-5xl">{$props.children}</div>
    </div>
  )
}

export default Wrapper
