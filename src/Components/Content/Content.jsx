import React from 'react'
import './Content.css'
import boy from '../../img/IMG-20230215-WA0312.jpg'
const Content = () => {
  return (
    <div className="content">
        <div className="cleft">
            <img src={boy} alt="" />
        </div>
        <div className="cright">
            <span>
                <h1>What your BMI result means</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Omnis accusamus quis quisquam sit, reiciendis esse culpa <br />
                    maiores quibusdam eius ipsa, cum accusantium est nam asperiores <br />
                    ducimus. Optio beatae iure similique? <br />
                </p>
            </span>
        </div>
    </div>
  )
}

export default Content