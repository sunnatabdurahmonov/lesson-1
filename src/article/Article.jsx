import React from 'react'
import '../article/article.css'
import photo from'../assest/img1.png'
import photo1 from'../assest/img2.png'
import photo2 from'../assest/img3.png'
import Text  from './Text'

const Article = () => {
  return (
    <div>
        <article>
            <div className="container">
                <h2 className="section-title">
                  How do we work?</h2>
                  <p className='article-text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                    Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. 
                    Vivamus mattis eros at sem pulvinar</p>

                    <div className="article-menu">
                      <img src={photo} alt="photo" />
                      <Text/>
                    </div>
                    <div className="article-menu a-menu2">
                    <Text/>
                      <img src={photo1} alt="photo" />
                    </div>
                    <div className="article-menu">
                      <img src={photo2} alt="photo" />
                      <Text/>
                    </div>

                    <h2 className='section-title a-title2'>Leave your number and we'll call you back</h2>
                    <p className='article-text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex,
                       eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>

                       <div className="form-menu">

                       <form className='form'  action="#">
                        <input type="text" placeholder='Name' />
                        <input type="number" placeholder='Number'/>
                        <select name="" id="select">
                          <option value="">Description</option>
                          <option value="">Description</option>
                          <option value="">Description</option>
                        </select>
                        <button className='btn-1'>Send</button>
                        <span className='span-2'>We call back in 10-30 minutes, guaranteed!</span>

                       </form>
                       </div>
            </div>

        </article>
      
    </div>
  )
}

export default Article
