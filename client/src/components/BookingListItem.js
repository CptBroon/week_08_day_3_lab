import { deleteBooking, putBooking, getBookings } from "../services/BookingService"

const BookingListItem = ({booking, setAllBookings}) => {

    const handleDeleteClick = () => {
        deleteBooking(booking._id)
        .then((res) => res.json())
        .then((doc) => setAllBookings(doc))
    }

    const handleCheckInClick = () => {
        const updatedBooking = booking;
        updatedBooking.checked_in = true;
        putBooking(updatedBooking)
        .then(getBookings)
        .then((res) => setAllBookings(res))
    }

    return (
        <li className="booking-list-item">
            <table>
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{booking.name}</td>
                    </tr>
                    <tr>
                        <td>Email address: </td>
                        <td>{booking.email}</td>
                    </tr>
                    <tr>
                        <td>Checked in? </td>
                        <td>{booking.checked_in ? "Yes" : "Not Yet"}</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex-row item-buttons">
                <button className="check-in-button" onClick={handleCheckInClick}>Check In</button>
                <button className="delete-booking-button" onClick={handleDeleteClick}>Delete</button>
            </div>
        </li>
    )
}

export default BookingListItem