import { getBookings } from "../services/BookingService";
import { useState, useEffect } from "react";
import BookingsList from "./BookingsList";
import AddBookingForm from "./AddBookingForm";

const HotelManager = () => {

    const [allBookings, setAllBookings] = useState([]);
    const [displayForm, setDisplayForm] = useState(false);

    useEffect(() => {
        getBookings().then((result) => {
            setAllBookings(result)
        });
    }, [])

    const showHideBookingForm = () => {
        setDisplayForm(!displayForm);
    }

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <>
        <header className="flex-row">
            <h1>Best booking management service ever</h1>
        </header>
        <div>
            <button id="booking-form-toggle" onClick={showHideBookingForm}>Show/Hide new booking form</button>
            {displayForm && <AddBookingForm allBookings={allBookings} setAllBookings={setAllBookings}/>}
            <BookingsList allBookings={allBookings} setAllBookings={setAllBookings}/>
            <button id="scroll-button" onClick={scrollToTop}>&uarr;</button>
        </div>
        <footer className="flex-row">Douglas and Graeme rulez</footer>
        </>
    )
}

export default HotelManager;