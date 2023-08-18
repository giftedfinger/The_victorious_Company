import React from 'react'
import './BibleVerse.css'

import Glassmorphism from '../../UI/glassmorphism/glassmorphism'

function BibleVerse() {
 const BibleVerseText =`     <h3>Bible verse for today</h3>
      <p>The same God yesterday, today and for ever</p>`
  return (
    <div className='Bibleverse' >


      <Glassmorphism className='quotes_stYle' children={BibleVerseText} >
        
            <h3>Bible verse for today</h3>
      <p>The same God yesterday, today and for ever</p>
    
      </Glassmorphism>
    </div>
  )
}

export default BibleVerse
