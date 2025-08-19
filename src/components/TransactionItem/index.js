// Write your code here
import './index.css'
import {Component} from 'react'

class TransactionItem extends Component {
  render() {
    const {details, onDelete} = this.props
    const {id, title, amount, type} = details

    const deleted = () => {
      onDelete(id)
    }
    return (
      <li className="text-box">
        <p className="para">{title}</p>
        <p className="para">{amount}</p>
        <p className="para">{type}</p>
        <button type="button" className="button-1" data-testid="delete">
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            onClick={deleted}
          />
        </button>
      </li>
    )
  }
}

export default TransactionItem
