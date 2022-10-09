import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import HomeImage from '../imgs/property.jpg'
import '../styles/property.css'

class Property extends PureComponent {
  render () {
    return (
      <div className={'container'}>
        
        <div class="imageContainer">
          <div>
            <img className="homeImage" src={HomeImage}/>
          </div>
          <div className="centered"><h1 className='imageText'>Home</h1></div>
        </div>
        <div className={'row'}>
          <div className={'col-xs-12'}>
            <p>
                With our superior packages at comprehensive premiums, Meridian Insurance Agencies Ltd. can handle all your residential insurance needs.            </p>
            <h3>
                Home Insurance Coverages:
            </h3>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Homeowner's Policy
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    Your home is one of the largest purchases you may make in your lifetime. Make certain that it is adequately covered in the event of a loss.

                    A homeowner's policy will cover you for any losses or damage to your building, personal property, additional living expenses and any liability claims brought against you in the event of an accident while on the premises. 
                    
                    <br/><br/>The two main types of policies include:
                  </p>
                  <div class="list-group">
                        <a class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1"></h5>
                            <small></small>
                            </div>
                            <p class="mb-1">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Broad Form:</strong> All risks are covered on dwelling and named perils are covered on personal property.</li>
                                    <li class="list-group-item"><strong>Saturday: </strong> All risks are covered on both dwelling and personal property.</li>
                                </ul>
                            </p>
                            <small>
                                (Both policies subject to exclusions)
                            </small>
                        </a>    
                    </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Condominuim Policy
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Where the Homeowner's policy insures the building and all the contents of your home the Condominium policy insures only your personal property, any improvements and betterments that you may have made to the unit, and personal liability against any claims against you in the event of an accident on the premises.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Tenant's Policy
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    If you are renting an apartment or suite, you still must protect your personal property even though you do not own the building or unit. Much like a Condominium policy, this policy insures all your personal belongings, any improvements you have made to your unit, and protects you from any liability claims that may arise.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Seasonal Dwellings
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    If you have a secondary dwelling or condominium that you use for only a percentage of this year, you will still want to protect yourself from the same losses that may occur to your primary residence. For these reasons, insurance for seasonal or secondary dwelling is available.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Rented Dwellings
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Much like seasonal dwellings, if you own a home or condominium that you intend to rent out, there are still risks of losses or damages to the property. As the landlord, you must take the responsibility of protecting yourself against these losses or any liability claims that can arise in these situations.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Scheduled Items
                </button>
              </h2>
              <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    As items such as expensive jewelry, computer equipment, musical instruments, cameras, bicycles are subject to special limits on insurance policies, you may consider "scheduling" your higher value belongings in order to ensure that you are covered adequately.                </div>
                </div>
            </div>
        </div>
        <div className='contactSection'>
            <h3>For more information:</h3>
            <p>Contact Us or Book an appointment today and our qualified staff can assist you in calculating the current rebuilding cost of your home and help you to choose the type of policy that best suits your needs.</p>
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

export default connect(mapStateToProps)(Property);