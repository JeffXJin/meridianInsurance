import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import AutoImage from '../imgs/auto.jpg'
import '../styles/auto.css'

class Auto extends PureComponent {
  render () {
    return (
      <div className={'container'}>
        
        <div class="imageContainer">
          <div>
            <img className="autoImage" src={AutoImage}/>
          </div>
          <div className="centered"><h1 className='imageText'>Automobile</h1></div>
        </div>
        <div className={'row'}>
          <div className={'col-xs-12'}>
            <p>
              All vehicle owners in British Columbia are legally required to carry basic automobile insurance as provided by The Insurance Corporation of BC (ICBC). This "basic" insurance insures against property damage and bodily injury caused by negligent vehicle operation.
            </p>
            <h3>
              Basic Autoplan Package Coverages:
            </h3>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Third Party Legal Liability
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>info here</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accident Benefits
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>info here</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Underinsured Motorist Protection
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  info here
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  Protection against hit-and-run and uninsured motorists
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  info here
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                  <p className='optionText'><strong>Optional Coverages</strong></p>
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ○ Higher Third Party Legal Liability limits up to $5 million
                  <br/>○ <strong>Collision</strong> coverage which insures against damage to your vehicle due to collision with another vehicle, person or object on the road even if you were at fault.
                  <br/>○ <strong>Comprehensive</strong> coverage which insures against damages from perils such as fire, theft, vandalism, lightning or windstorm.
                  <br/>○ <strong>Loss of Use</strong> coverage for temporary substitute vehicles in the event of your own vehicle being stolen or suffering a claim that makes it unable to be driven.
                  <br/>○ <strong>Replacement</strong> Cost coverage, which provides you from losing money due to depreciation.
                  <br/>○ The <strong>Roadside Plus</strong> program can assist with with loss of use coverage, travel protection, rental vehicel coverage, lock re-keying, & emergency roadside expense.
                  <br/>○ <strong>Replacement Cost</strong> coverage, which provides you from losing money due to depreciation.
                  <br/>○ <strong>Roadstar Package</strong> is available for vehicle owners who have had no at-fault claims in the past 9 years and are entitled to extra savings.
                  <br/>○ <strong>Excess Under Insured Motoraist Protection</strong> protects you against injury caused by an underinsured driver.
                </div>
              </div>
            </div>
          </div>
          <div className='contactSection'>
            <h3>Contact us for more information</h3>
            <br/>3268 Coast Meridian Road
            <br/>Port Coquitlam, BC V3B 3N4
            <br/>Tel  (604) 941-8544
            <br/>Fax (604) 944-6500
            <li>poco@meridian-ins.com</li>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {user} = state;
  return {user};
};

export default connect(mapStateToProps)(Auto);