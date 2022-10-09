import React, { useState, useRef } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import {firestore} from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Quote = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  
  const fnameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const noteRef = useRef();

  const BookError = () => (
    <div className="alert alert-danger" role="alert">
        <b>Error: </b>Please fill out neseccary information (*).
    </div>
  );

  const BookSuccess = () => (
      <div className="alert alert-success" role="alert">
          <b>Success: </b>Your appointment has been booked!
      </div>
  );

  const [insurance, setInsurance] = useState(null);
  const [time, setTime] = useState(null);

  const handleChangeInsuranceDropdown = (e) => {
    setInsurance(e.target.value);
  };

  const handleChangeTimeDropdown = (e) => {
    setTime(e.target.value);
  };

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const ref = collection(firestore, "bookings");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(insurance);
    console.log(selectedDay);
    let data = {
      firstName: fnameRef.current.value,
      lastName: lNameRef.current.value,
      email: emailRef.current.value,
      note: noteRef.current.value,
      date: today,
      insurance: insurance,
      time: time,
    };

    if (!fnameRef.current.value || !lNameRef.current.value || !emailRef.current.value || !selectedDay) {
      setShowError(true);
      setShowSuccess(false);
    } else {
      setShowError(false);
      setShowSuccess(true);
      try {
        console.log("Appointment booked for: " + fnameRef.current.value);
        addDoc(ref,data);
        console.log(selectedDay);
      } catch (e) {
        console.log(e);
      }
    }    
  }
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className="input-group mb-3">
          *<input type="text" ref={fnameRef} className="form-control" placeholder="First Name" aria-label="FirstName"/>
          <input type="text" ref={lNameRef} className="form-control" placeholder="Last Name" aria-label="LastName"/>
        </div>
        <div className="input-group mb-3">
          *<span className="input-group-text">@</span>
          <input type="text" ref={emailRef} className="form-control" placeholder="Email" aria-label="Email"/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">Options</label>
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-text">Add Note:</span>
          <textarea className="form-control" ref={noteRef} aria-label="With textarea"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Book</button>
        { showError ? <BookError /> : null }
        { showSuccess ? <BookSuccess /> : null }
      </form>
    </div>
  );
};

export default Quote;