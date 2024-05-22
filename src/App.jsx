import Accordian from "./components/accordian/Accordian";
import SearchAbleList from "./components/Searchable/SearchAbleList";


import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./Places";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];


function App() {
  return (
    <>
    <main>
      <section>
        <h2>Why work with Us</h2>
       
          <Accordian className="accordion">
<Accordian.Item  title="We got 20 years experience">
  <Accordian.Title className="accordion-item-title" id="AccoOne">
  We got 20 years experience
  </Accordian.Title>
  <Accordian.Content id="AccoOne" className="accordion-item-content" >
  <article>
    <p>
      You can&apos;t go wrong with us.
    </p>
    <p>
      We are in the business of planning highly individualize vacation trips for more than 20 years
    </p>
  </article>

  </Accordian.Content>
 

</Accordian.Item>
<Accordian.Item   className="accordion-item-title" >
  <Accordian.Title id="AccoTwo"  className="accordion-item-title">
  We're working with local guides
  </Accordian.Title>
 <Accordian.Content id="AccoTwo" className="accordion-item-content">
 <article>
    <p>
      Everything is Hassle free with Us.
    </p>
    <p>
     Providing the kind of experience that you would come back again to us to hire Us.
    </p>
  </article>
 </Accordian.Content>

</Accordian.Item>
<Accordian.Item    className="accordion-item-title">
  <Accordian.Title id="AccoThree"   className="accordion-item-title">
  Have all the newly featured accessories with Us
  </Accordian.Title>
 <Accordian.Content id="AccoThree" className="accordion-item-content">
 <article>
    <p>
      Just Give Us a chance to serve you
    </p>
    <p>
    Providing the kind of experience that you would come back again to us to hire Us.
    </p>
  </article>
 </Accordian.Content>

</Accordian.Item>
          </Accordian>
      </section>
      <section>
        <SearchAbleList items={PLACES} itemKeyFn={(item)=>item.id} >
          {(item)=> <Place item={item}/>}
          </SearchAbleList>
        <SearchAbleList items={['item1' ,'item2']} itemKeyFn={(item)=>item}>
          {(item)=>item}
          </SearchAbleList>
      </section>
    </main>
    </>
  )
}

export default App;
