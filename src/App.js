import Nav from './components/Nav'
import Card from './components/Card'
import data from './data';

function App() {
  const cardsTorender = data.map(item=>{
    return (
      <Card {...item} />
    )
  })

  return (
    <>
    <Nav/>
    <div className='container'>
      {cardsTorender}
    </div>
    
    </>
    
  )
}

export default App;
