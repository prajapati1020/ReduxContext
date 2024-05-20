import Accordian from "./components/accordian/Accordian";


function App() {
  return (
    <>
    <main>
      <section>
        <h2>Why work with Us</h2>
       
          <Accordian className="accordion">
<Accordian.Item id="AccoOne" title="We got 20 years experience">
  <article>
    <p>
      You can&apos;t go wrong with us.
    </p>
    <p>
      We are in the business of planning highly individualize vacation trips for more than 20 years
    </p>
  </article>

</Accordian.Item>
<Accordian.Item id="AccoTwo" title="We're working with local guides">
  <article>
    <p>
      Everything is Hassle free with Us.
    </p>
    <p>
     Providing the kind of experience that you would come back again to us to hire Us.
    </p>
  </article>

</Accordian.Item>
<Accordian.Item id="AccoThree" title="Have all the newly featured accessories with Us">
  <article>
    <p>
      Just Give Us a chance to serve you
    </p>
    <p>
    Providing the kind of experience that you would come back again to us to hire Us.
    </p>
  </article>

</Accordian.Item>
          </Accordian>
      </section>
    </main>
    </>
  )
}

export default App;
