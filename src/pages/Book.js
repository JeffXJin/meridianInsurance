import React, { useState, useEffect, useRef } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import {firestore} from "../firebase/firebaseConfig";
import { addDoc, getDocs, collection } from "firebase/firestore";

const Book = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [timeDisabled, setTimeDisabled] = useState([]);
  const [docs, setDocs] = useState([]);


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;

  const maximumDate = {
    year: (new Date().getFullYear()),
    month: (new Date().getMonth() + 2),
    day: 28
  }

  let disableddays = [];
  let disableddaysFirebase = [];
  function getDays1() {
    var d = new Date(),
        month = d.getMonth() + 1,
        days = [];

    d.setDate(1);

    // Get the first Friday in the month
    while (d.getDay() !== 5) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other days in the month
    while (d.getMonth() + 1 === month) {
        days.push(new Date(d.getTime()));
        let friday = {year: d.getFullYear(), month:d.getMonth() + 1, day: d.getDate()}
        disableddays.push(friday);

        var lastDay = new Date(d.getFullYear(), month, 0);
        if (friday.day != lastDay.getDate()) {
            let saturday = {year: d.getFullYear(), month:d.getMonth() + 1, day: d.getDate() + 1}
            disableddays.push(saturday);

        } else {
            let saturday = {year: d.getFullYear(), month:d.getMonth() + 2, day: 1}
            disableddays.push(saturday);
        }

        d.setDate(d.getDate() + 7);

    }
    return disableddays;
  }

  function getDays2() {
    var d = new Date(),
        month = d.getMonth() + 2,
        days = [];
    
    d.setMonth(d.getMonth() + 1)
    d.setDate(1);
    
    // Get the first Saturday in the month
    while (d.getDay() !== 5) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other days in the month
    while (d.getMonth() + 1 === month) {
        days.push(new Date(d.getTime()));
        let friday = {year: d.getFullYear(), month:d.getMonth() + 1, day: d.getDate()}
        disableddays.push(friday);

        var lastDay = new Date(d.getFullYear(), month, 0);
        if (friday.day != lastDay.getDate()) {
            let saturday = {year: d.getFullYear(), month:d.getMonth() + 1, day: d.getDate() + 1}
            disableddays.push(saturday);

        } else {
            let saturday = {year: d.getFullYear(), month:d.getMonth() + 2, day: 1}
            disableddays.push(saturday);
        }

        d.setDate(d.getDate() + 7);

    }
    disableddays = disableddays.concat(bookings);
    
    return disableddays;
  }

  const handleDisabledSelect = disabledDay => {
    console.log('Tried selecting a disabled day', disabledDay);
  };
  
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
      date: selectedDay.month + "/" + selectedDay.day + "/" + selectedDay.year,
      dateTime: new Date(+selectedDay.year, +selectedDay.month - 1, +selectedDay.day, +time, 0, 0),
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

  const bookRef = collection(firestore, "bookings");
  const bookingsArray = [];

  function reloadCalender() {
    bookingsArray.sort(function(a,b) {
      return new Date(b.dateTime.seconds) - new Date(a.dateTime.seconds);
    })
    
    let counter = 0;

    bookingsArray.forEach(function(item, index) {
      let ts = item.dateTime.seconds;
      let dt = new Date(ts*1000);

      let timeSelect = 
      <select class="form-select" id="validationCustom04" value={time} onChange={handleChangeTimeDropdown}>
        <option selected disabled>Select time:</option>
      </select>;

      for (let i = 0; i < 9; i++) {
        let hr = dt.getHours();
        
        if (hr == (i + 9)) {
          timeSelect += <option value={i + 9} disabled>{i + 9}:00AM</option>;
        } else {
          timeSelect += <option value={i + 9}>{i + 9}:00AM</option>;
        }
      }

      if (index == 0 ) {
        counter++;
      }

      if (index > 0) {
        let tempDt = new Date(bookingsArray[index - 1].dateTime.seconds*1000);
        console.log(dt.toDateString());
        if (tempDt.toDateString() == dt.toDateString()) {
          counter++;
          if (counter == 2) {
            
            let dd = {year: dt.getFullYear(), month: dt.getMonth() + 1, day: dt.getDate()}
            console.log(dd.month+ "/" + dd.day + "/" + dd.year + " full")
            disableddays.push(dd);
            disableddaysFirebase.push(dd);
            
            counter = 0;
          }
        }
      }
    })
    setBookings(disableddaysFirebase);
  }
  
  useEffect(() => {
    const getBookings = async () => {
        const data = await getDocs(bookRef);
        data.docs.forEach(element => {
            // console.log(element.data());
            // console.log(element.id);
            bookingsArray.push(element.data());
        });
        setDocs(bookingsArray);
    }
    getBookings().then(() => {
        reloadCalender();
    });
  },[]);
  
  let timeSelect = [<option value="0" disabled>Select Time</option>];
  function onDateChange(event) {
    console.log(event);
    setSelectedDay(event);

    console.log(docs);

    // For days with no appointments
    for (let i = 0; i < 9; i++) {
        if ((i + 9) < 12 ) {
          timeSelect.push(<option value={i + 9}>{i + 9}:00AM</option>);
        } else {
          timeSelect.push(<option value={i + 9}>{(i + 9) - 12}:00PM</option>);
        }
    }

    // For days with appointments
    docs.forEach(function(item, index) {
      let ts = item.dateTime.seconds;
      let dt = new Date(ts*1000);
      let sd = new Date(event.year, event.month - 1, event.day);
      
      // console.log(selectedDay.month + "/" + selectedDay.day + "/" + selectedDay.year);
      console.log(sd.toDateString() + ":" + dt.toDateString());
      if (sd.toDateString() == dt.toDateString()) {
        
        for (let i = 0; i < 9; i++) {
          let hr = dt.getHours();
          if (hr == (i + 9)) {
            if ((i + 9) < 12 ) {
              timeSelect.push(<option value={i + 9} disabled>{i + 9}:00AM</option>);
            } else {
              timeSelect.push(<option value={i + 9} disabled>{(i + 9) - 12}:00PM</option>);
            }
          } else {
            if ((i + 9) < 12 ) {
              timeSelect.push(<option value={i + 9}>{i + 9}:00AM</option>);
            } else {
              timeSelect.push(<option value={i + 9}>{(i + 9) - 12}:00PM</option>);
            }
          }
        }
      }
    });
    console.log()
    setTimeDisabled(timeSelect);
    getDays1();
    getDays2();
  }
  getDays1();
  getDays2();
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
        <DatePicker
          value={selectedDay}
          onChange={e => onDateChange(e)}
          inputPlaceholder={today}
          minimumDate={utils().getToday()}
          maximumDate={maximumDate}
          disabledDays={disableddays}
          onDisabledDayError={handleDisabledSelect}
          shouldHighlightWeekends
        />
        <select class="form-select" id="validationCustom04" value={time} onChange={handleChangeTimeDropdown}>
        <option selected disabled>Select time:</option>
          {timeDisabled}
        </select>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">Options</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01" value={insurance} onChange={handleChangeInsuranceDropdown}>
            <option selected>Select coverage:</option>
            <option value="Travel">Travel</option>
            <option value="Business">Business</option>
            <option value="Automobile">Home</option>
            <option value="Home">Home</option>
            <option value="Life">Life</option>
          </select>
          <select class="form-select" id="validationCustom04" value={time} onChange={handleChangeTimeDropdown}>
            <option selected disabled>Select time:</option>
            <option value="9">9:00AM</option>
            <option value="10">10:00AM</option>
            <option value="11">11:00AM</option>
            <option value="12" disabled>12:00PM</option>
            <option value="13">1:00PM</option>
            <option value="14">2:00PM</option>
            <option value="15">3:00PM</option>
            <option value="16">4:00PM</option>
            <option value="17">3:00PM</option>
          </select>
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

export default Book;