import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import HomeData from '../components/textContent/homeTextData'; 
import Logo from '../components/images/merlogo.jpg';
import '../styles/home.css';

import Lottie from 'lottie-react';
import TravelLottie from '../lottie/travel.json';
import BusinessLottie from '../lottie/business.json';
import CarLottie from '../lottie/car.json';
import FamilyLottie from '../lottie/family.json';
import HomeLottie from '../lottie/property.json';
import LifeLottie from '../lottie/health.json';
import Typical from 'react-typical';

class Home extends PureComponent {
  render () {
    return (
      <div className="homeContainer">
        <div>
          <div>
            {/* Header */}
            <div className='bodyHeader'>
              {/* <img className='logo' src={Logo}></img> */}
              {/* <div className='headerLeft'> */}
                <h1 className='welcomeText headerText'>{HomeData.welcome}</h1>
                <h2 className='mottoText headerText'>{HomeData.motto}</h2>
                <h1 className="headerTypical headerText">
                  <Typical
                      steps={[
                        'Travel',
                        1000,
                        'Business',
                        1000,
                        'Automobile',
                        1000,
                        'Home',
                        1000,
                        'Life',
                        1000,
                      ]}
                      wrapper="p"
                      loop={Infinity}
                  />
                </h1>
                <Link to="/book">
              <button type="bookBtn" class="btn btn-light">Book Appointment</button>
            </Link>
              {/* </div>
              <div className='headerRight'>
                <Lottie className="lottieHeader" animationData={FamilyLottie} loop={true} />
              </div> */}
            </div>
            
            <div>
              {HomeData.info}
              {/* Services */}
              <div className="gridContainer">
                <div className="gridItem">
                  <Link className="user" to="/travel">
                    <button className='serviceBtn'><Lottie className="lottie" animationData={TravelLottie} loop={true} /> <p className='serviceType'>Travel</p></button>
                  </Link>
                </div>
                <div className="gridItem">
                  <Link className="user" to="/business">
                    <button className='serviceBtn'><Lottie className="lottie" animationData={BusinessLottie} loop={true} /> <p className='serviceType'>Business</p></button>
                  </Link>
                </div>
                <div className="gridItem">
                  <Link className="user" to="/auto">
                    <button className='serviceBtn'><Lottie className="lottie" animationData={CarLottie} loop={true} /> <p className='serviceType'>Automobile</p></button>
                  </Link>
                </div>  
                <div className="gridItem">
                  <Link className="user" to="/property">
                    <button className='serviceBtn'><Lottie className="lottie" animationData={HomeLottie} loop={true} /> <p className='serviceType'>Home</p></button>
                  </Link>
                </div>
                <div className="gridItem">
                  <p className='serviceType'>Life</p>
                  <Link className="user" to="/life">
                    <button className='serviceBtn'><Lottie className="lottie" animationData={LifeLottie} loop={true} /> </button>
                  </Link>
                </div>
                <div className="gridItem"></div>  
              </div>
            </div>
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

export default connect(mapStateToProps)(Home);