import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    bal: 0,
    income: 0,
    expense: 0,
    arr: [],
    title: '',
    amount: '',
    type: 'INCOME',
  }

  submit = event => {
    const {title, amount, type, arr} = this.state
    let x = 0
    let y = 0
    let z = 0
    event.preventDefault()
    const element = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (type === 'INCOME') {
      x = amount
      z = amount
    }

    if (type === 'EXPENSES') {
      y = amount
      z = -amount
    }

    this.setState(prevState => ({
      arr: [...prevState.arr, element],
      bal: prevState.bal + z,
      income: prevState.income + x,
      expense: prevState.expense + y,
      title: '',
      amount: '',
    }))
    console.log(arr)
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  typeChange = event => {
    this.setState({type: event.target.value})
  }

  onDelete = id => {
    const {arr} = this.state
    const deletedItem = arr.find(each => each.id === id)
    const filteredList = arr.filter(each => each.id !== id)
    let x = 0
    let y = 0
    let z = 0
    if (deletedItem.type === 'INCOME') {
      x = deletedItem.amount
      z = x
    }
    if (deletedItem.type === 'EXPENSES') {
      y = deletedItem.amount
      z = -y
    }

    this.setState(prevState => ({
      arr: filteredList,
      bal: prevState.bal - z,
      income: prevState.income - x,
      expense: prevState.expense - y,
    }))
  }

  render() {
    const {title, amount, arr} = this.state
    return (
      <div className="container">
        <div className="head-box">
          <h1 className="heading">Hi, Suraj</h1>
          <p className="paragraph">
            Welcome back to your
            <span className="head-link"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails moneyDet={this.state} />

        <div className="boxes">
          <div className="box-1">
            <form className="form-box" onSubmit={this.submit}>
              <h1 className="heading-1">Add Transaction</h1>
              <label className="label-text" htmlFor="title">
                TITLE
              </label>
              <input
                id="title"
                className="input"
                placeholder="TITLE"
                onChange={this.titleChange}
                value={title}
              />
              <label className="label-text" htmlFor="amount">
                AMOUNT
              </label>
              <input
                id="amount"
                className="input"
                placeholder="AMOUNT"
                onChange={this.amountChange}
                value={amount}
              />
              <label className="label-text" htmlFor="type">
                TYPE
              </label>
              <select className="input" id="type" onChange={this.typeChange}>
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>

          <div className="box-2">
            <h1 className="heading-1">History</h1>
            <ul className="small-box">
              <div className="heading-box">
                <p className="head">Title</p>
                <p className="head">Amount</p>
                <p className="head">Type</p>
              </div>

              {arr.map(each => (
                <TransactionItem
                  key={each.id}
                  details={each}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
