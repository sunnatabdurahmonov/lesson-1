import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="container">
            <div className="hero-list">
                <div className="left">
                    <h1>Take your business to the next level take out</h1>
                    <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                     Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                    </p>
                    <button className='btn-1'>Learn more</button>
                </div>
                <div className="right">
                <iframe width="1424" height="595" src="https://www.youtube.com/embed/whJy8NmfsC4" title="ВЕНЕЦИЯ ТАРИХИ" frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero