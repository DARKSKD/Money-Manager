// Write your code here
import './index.css'
import {Component} from 'react'

class MoneyDetails extends Component {
  render() {
    const {moneyDet} = this.props
    const {bal, income, expense} = moneyDet
    return (
      <div className="displayBoxContainer">
        <div className="box balance">
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div>
            <p className="paragraph-1">Your Balance</p>
            <p className="amount" data-testid="balanceAmount">
              Rs {bal}
            </p>
          </div>
        </div>

        <div className="box income">
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div className="text">
            <p className="paragraph-1">Your Income</p>
            <p className="amount" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>

        <div className="box expense">
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
          </div>
          <div className="text">
            <p className="paragraph-1">Your Expenses</p>
            <p className="amount" data-testid="expensesAmount">
              Rs {expense}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
