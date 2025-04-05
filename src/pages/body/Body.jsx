import './Body.css'
import CardsContainer from './components/cards_container/CardsContainer'
import AsideContainer from './components/aside_container/AsideContainer'

function Body() {

  return (
    <main className="body">
      <div className="container">
        <CardsContainer />
        <AsideContainer />
      </div>
    </main>
  )
}

export default Body
