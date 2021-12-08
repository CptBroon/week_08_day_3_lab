import BookingListItem from "../components/BookingListItem";

const BookingsList = ( {allBookings, setAllBookings} ) => {

    const generateBookingsList = allBookings.map((booking) =>{
        return <BookingListItem key={`${booking._id}`} booking={booking} setAllBookings={setAllBookings}/>
    });

    return (
    <ul id="bookings-list">
        {generateBookingsList}
    </ul>
    )
}

export default BookingsList