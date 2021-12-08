import { useState } from "react";
import { postBooking } from "../services/BookingService";

const AddBookingForm = ({allBookings, setAllBookings}) => {

    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        formData["checked_in"] = false
        postBooking(formData)
        .then((res) => setAllBookings([...allBookings, res]))
        e.target.reset()
    }

    const onChange = (e) => {
        formData[e.target.name] = e.target.value;
        setFormData(formData)
    };

    return (
        <>
        <h2>Add new booking</h2>
        <form id="booking-form" className="flex-row" onSubmit={handleSubmit}>
            <div id="name-section">
                <label htmlFor="name">Name: </label>
                <input name="name" type="text" onChange={onChange} required></input>
            </div>
            <div id="email-section">
                <label htmlFor="email">Email: </label>
                <input name="email" type="text" onChange={onChange} required></input>
            </div>
            <input type="submit" value="Create booking"></input>
        </form>
        </>
    )
}

export default AddBookingForm;