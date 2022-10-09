import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import TravelImage from '../imgs/TravelWorld.jpg'
import '../styles/travel.css'

class Travel extends PureComponent {
  render () {
    return (
      <div className={'container'}>
        
        <div class="imageContainer">
          <div>
            <img className="travelImage" src={TravelImage}/>
          </div>
          <div className="centered imageText"><h1>Travel</h1></div>
        </div>
        <div className={'row'}>
          <div className={'col-xs-12'}>
            <p>Travelling can be exciting and carefree. Unfortunately, unforeseen circumstances can strike at any moment. No one expects an accident or sudden illness. Furthermore, medical coverage outside Canada can add up to thousands of dollars a day. Money you would be responsible for.
            <br/><br/>
            Make sure you have a backup plan for such emergenices. Call Meridian Insurance Agencies Ltd. for a free travel quote. Protect yourself and your loved ones and travel with peace of mind.
            <br/><br/>
            </p>
            <h3>
            Travel Insurance Plans:
            </h3>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Emergency Hospital and Medical
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Meridian Insurance will arrange for payment of your medical emergency expenses to the provider directly. If you are travelling outside of BC but within Canada (except Quebec) and need emergency medical care, present your BC CareCard/BC Services Card and the health-care provider will bill BC’s Medical Services Plan. If you are travelling in Quebec, you will probably be required to pay for your medical services and seek reimbursement later from MSP. You can also contact Allianz Global Assistance if you require help.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Annual Multi-Trip Plans
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  If you travel two or more times a year, the Annual Medical Plan can save you money on insurance by providing medical coverage for unlimited trips within one year from purchase.

                  <br/><br/>Travellers can select between a 10-Day Annual Medical Plan, which covers unlimited trips lasting up to 10 days each, or a 30-Day plan, for unlimited trips lasting up to 30 days each. These day limits can be extended for any single trip during the year by calling Allianz Global Assistance for an extension.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                All-Inclusive Package Plans
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
                  Visitors to Canada
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
                  Plans for International Students
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                  <p className='optionText'><strong>Optional Plans</strong></p>
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ○ Accidental Death and Dismemberment
                  <br/>○ Flight Accident
                  <br/>○ Trip Interruption
                  <br/>○ Rental Car Collision Protection
                  <br/>○ Trip Cancellation
                </div>
              </div>
            </div>
          </div>
          <div>
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

export default connect(mapStateToProps)(Travel);