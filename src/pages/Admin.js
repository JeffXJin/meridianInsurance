import React, {PureComponent} from 'react';
import { useState, useEffect } from 'react';
import {firestore} from '../firebase/firebaseConfig';
import { collection, getDoc, getDocs, doc } from 'firebase/firestore';

const Admin = () => {

    const bookRef = collection(firestore, "bookings");
    const [bookings, setBookings] = useState([]);
    const bookingsArray = [];
    
    useEffect(() => {
        const getBookings = async () => {
            const data = await getDocs(bookRef);
            data.docs.forEach(element => {
                // console.log(element.data());
                // console.log(element.id);
                bookingsArray.push(element.data());
                // console.log(element.data().dateTime);
            });
            
            // setBookings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        
        getBookings().then(() => {
            bookingsArray.sort(function(a,b) {
                return new Date(b.dateTime.seconds) - new Date(a.dateTime.seconds);
            })
            
            setBookings(bookingsArray.map((doc) => ({...doc, id: doc.dateTime})))

            console.log(bookingsArray);
        });
    },[]);
    
    const getDate = (timestamp) => {
        let bookedDate = new Date(timestamp.seconds*1000);
        return bookedDate.toDateString();
    }

    const getTime = (timestamp) => {
        let bookedDate = new Date(timestamp.seconds*1000);
        let hr = bookedDate.getHours();
        if (hr < 12) {
            return hr + ":00AM";
        } else {
            return (hr-12) + ":00PM";
        }
    }

    return (
        <div>
            <div>
                <div>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item"><h2>Name</h2></li>
                        <li class="list-group-item"><h2>Email</h2></li>
                        <li class="list-group-item"><h2>Date</h2></li>
                        <li class="list-group-item"><h2>Time</h2></li>
                        <li class="list-group-item"><h2>Insurance</h2></li>
                        <li class="list-group-item"><h2>Note</h2></li>
                    </ul>
                    {bookings.map((booking) => {
                        return (
                            <form>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item"><p>{booking.firstName + " " + booking.lastName}</p></li>
                                    <li class="list-group-item"><p>{booking.email}</p></li>
                                    <li class="list-group-item"><p>{getDate(booking.dateTime)}</p></li>
                                    <li class="list-group-item"><p>{getTime(booking.dateTime)}</p></li>
                                    <li class="list-group-item"><p>{booking.insurance}</p></li>
                                    <li class="list-group-item"><p>{booking.note}</p></li>
                                </ul>
                                {/* <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <label for="validationCustom01">First name</label>
                                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value={booking.firstName}/>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label for="validationCustom02">Last name</label>
                                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value={booking.lastName}/>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                    <label for="validationCustomUsername">Email</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        </div>
                                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Email" aria-describedby="inputGroupPrepend" value = {booking.email}/>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                    <label for="validationCustom03">Date</label>
                                    <input type="text" className="form-control" id="validationCustom03" placeholder="Date" value={booking.date}/>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                    <label for="validationCustom04">Time</label>
                                    <input type="text" className="form-control" id="validationCustom04" placeholder="Time" value={booking.time}/>
                
                                    </div>
                                    <div className="col-md-3 mb-3">
                                    <label for="validationCustom05">Insurance</label>
                                    <input type="text" className="form-control" id="validationCustom05" placeholder="Insurance" value={booking.insurance}/>
                                    </div>
                                </div> */}
                            </form>)
                        })}
                </div>
            </div>
        </div>
    );
};
export default Admin;