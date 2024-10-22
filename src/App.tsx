import './App.scss'
import { Heading } from './components/Heading'
import { Ingredients } from './components/Ingredients'
import { Instructions } from './components/Instructions'
import { Nutritions } from './components/Nutritions'
import { Preparation } from './components/Preparation'
import OmeletteImage from "./assets/image-omelette.jpeg";

function App() {

  return (
    <div className='App'>
      <main>
        <section className='imageWrapper'>
      <img src={OmeletteImage} alt="Omelette Image"/>
      </section>
      <section className="wrapper" aria-label='container'>
        <Heading />
        <Preparation />
      <Ingredients />
    <Instructions />
    <Nutritions />
    </section>
</main>
    </div>
  )
}

export default App
