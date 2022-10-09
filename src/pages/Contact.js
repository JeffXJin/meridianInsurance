import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Map from './Map';
import '../styles/contact.css';

class Contact extends PureComponent {
  render () {
    const location1 = {lat: 49.27236298453759, lng: -122.75564818835106};
    const location2 = {lat: 49.14883831603117, lng: -123.13601628650525};
    return (
      <div className={'container'}>
        <div className='locationContainer'>
            <div className='locationPoco'>
                <h3 className='officeLocation'>Port Coquitlam Office</h3>
                <p>3268 Coast Meridian Road
                    <br/>Port Coquitlam, BC V3B 3N4
                </p>
                <p><strong>Phone:</strong> (604)-941-8544
                    <br/><strong>Fax:</strong> (604)-944-6500
                </p>
                <p><strong>Email:</strong> poco@meridian-ins.com</p>
                <div class="list-group">
                    <a class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Hours</h5>
                        <small>Open 7 days a week</small>
                        </div>
                        <p class="mb-1">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Monday - Friday:</strong> 9:00AM - 7:00PM</li>
                                <li class="list-group-item"><strong>Saturday:</strong> 9:00AM - 5:30PM</li>
                                <li class="list-group-item"><strong>Sunday: </strong> 10:00AM - 5:00PM</li>
                            </ul>
                        </p>
                        <small>
                            <div class="alert alert-primary" role="alert">
                                Closed on statutory holidays.
                            </div>
                        </small>
                    </a>    
                </div>
                <Map location={location1}/>
            </div>
            
            <div className='locationRichmond'>
                <h3 className='officeLocation'>Richmond Office</h3>
                <p>#115 - 8980 No. 3 Road
                    <br/>Richmond, BC V6Y 2E8
                </p>
                <p><strong>Phone:</strong> (604)-272-0700
                    <br/><strong>Fax:</strong> (604)-272-2830
                </p>
                <p><strong>Email:</strong> richmond@meridian-ins.com</p>
                <div class="list-group">
                    <a class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Hours</h5>
                        <small>Open 6 days a week</small>
                        </div>
                        <p class="mb-1">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Monday - Friday:</strong> 9:00AM - 5:30PM</li>
                                <li class="list-group-item"><strong>Saturday: </strong> 9:00AM - 5:30PM</li>
                                <li class="list-group-item"><strong>Sunday: </strong> Closed</li>
                            </ul>
                        </p>
                        <small>
                            <div class="alert alert-primary" role="alert">
                                Closed on statutory holidays.
                            </div>
                        </small>
                    </a>    
                </div>
                <Map location={location2}/>
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

export default connect(mapStateToProps)(Contact);