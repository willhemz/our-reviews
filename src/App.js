import React from 'react'
import Review from './Review'

function App() {
  return <>
    <main>
      <section className="container">
        <article className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </article>
        <Review />
      </section>
    </main>
  </>
}

export default App

