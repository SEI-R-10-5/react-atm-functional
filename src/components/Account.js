import React, { useState } from 'react'

const Account = (props) => {
  let [amount, setAmount] = useState(0)
  let [balance, setBalance] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isNaN(amount)) {
      console.log('Not a number')
      return
    }
    const actionType = e.target.value
    switch (actionType) {
      case 'Withdraw':
        amount > balance
          ? console.log('Nah')
          : setBalance(balance - Math.abs(Number(amount)))
        return setAmount(0)
      case 'Deposit':
        setBalance(balance + Math.abs(Number(amount)))
        return setAmount(0)
      default:
        return
    }
  }

  let balanceClass = 'balance'
  if (balance <= 0) {
    balanceClass += ' zero'
  }

  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className={balanceClass}>${balance}</div>
      <form>
        <input
          type="text"
          placeholder="enter an amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input type="submit" value="Deposit" onClick={handleSubmit} />
        <input type="submit" value="Withdraw" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default Account
