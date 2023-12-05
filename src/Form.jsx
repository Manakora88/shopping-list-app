import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) {
      toast.error('please provide value')
      return
    }
    addItem(newItemName)
    setNewItemName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Lista zakupów</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="wpisz produkt"
        />
        <button type="submit" className="btn">
          Dodaj
        </button>
      </div>
    </form>
  )
}
export default Form
