import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="left">
            <h1>Body Mass <br />
                Index Calculator
            </h1>

            <p>
                Better understand your weight
                in relation to your height using <br />
                our body mass index (BM) calculator.
                While BMI is not the <br /> sole determinant
                of a healthy weight, it offfers a valuable <br />
                startingpoint to evaluate your overall
                health and well-being.
            </p>
        </div>
        <div className="right">
            <form className='form'>
                    <h3>Enter your details below</h3>
                    <input type="radio" name='radioMertic' id='radioMetric' value="Metric"/>
                    <label htmlFor="Metric"  name='radio' id='radio' className='radio'>Metric</label>
                    <input type="radio" name='radio' id='radio' value="Imperial" disabled/>
                    <label htmlFor="imp" name='radioImp' id='radioImp' className='radio'>Imperial</label>
                    <br />
                    <div className="poids">
                        <label htmlFor="height" name='height' id='height'>Height</label>
                        <input type="number" name='height' id='height' min={0} placeholder='0        cm' />
                        <label htmlFor="Weight" name='Weight' id='Weight'>Weight</label>
                        <input type="number" name='Weight' id='Weight' min={0} placeholder='0        Kg' />
                    </div>
                    <h4>Welcome!</h4>
                    <p>Enter your height and weight and you'll see your BMI result here</p>
                    
            </form>
        </div>
    </div>
  )
}

export default Navbar