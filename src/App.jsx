import { useState } from 'react'
import menu from './data'
import Item from './Item'

const App = () => {
  const [Items, setItems] = useState(menu)

  const itemsFilter = (category) => {
    if (category === 'all') {
      setItems(menu)
    } else {
      setItems(menu.filter((item) => item.category == category))
    }
  }

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => itemsFilter('all')}>
            All
          </button>
          <button className="btn" onClick={() => itemsFilter('breakfast')}>
            Breakfast
          </button>
          <button className="btn" onClick={() => itemsFilter('lunch')}>
            Lunch
          </button>
          <button className="btn" onClick={() => itemsFilter('shakes')}>
            shakes
          </button>
        </div>
        <div className="section-center">
          {Items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}
export default App
