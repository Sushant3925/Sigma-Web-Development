
import Navbar from './Camponents/Navbar'
import Footer from './Camponents/Footer'
import Card from './Camponents/card.jsx'
function App() {

  return (
    <div>
      <Navbar />
      <div className="cards">
        <Card title="Card1" description="card 2 desc" />
        <Card title="Card2" description="card 2 desc" />
        <Card title="Card3" description="card 3 desc" />
        <Card title="Card4" description="card 4 desc" />
      </div>
      <Footer />
    </div>
  )
}

export default App
