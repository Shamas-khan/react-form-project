import React from 'react'

const Input = ({label,id,name,value,onchange,error}) => {
  return (
    <>
        <div className="input-container">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            name={name}
            value={value}
            onChange={onchange}
          />
          {error && <p className="error">{error}</p>}
        </div>
    </>
  )
}

export default Input