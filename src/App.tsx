import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('');

  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customers.value);
  const dispatch = useDispatch();

  function handleAddReservation() {
    if (!reservationNameInput) {
      return;
    }

    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard
                  name={name}
                  index={index}
                  key={name}
                />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              foods={customer.foods}
              name={customer.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;