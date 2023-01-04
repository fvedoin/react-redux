import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import { v4 as uuid } from 'uuid';

interface ReservationCardProps {
    name: string;
    index: number;
}

export default function ReservationCard({ name, index }: ReservationCardProps) {
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => {
                dispatch(removeReservation(index))
                dispatch(addCustomer({
                    id: uuid(),
                    name,
                    foods: [],
                }))
            }}
            className="reservation-card-container"
        >
            {name}
        </div>
    );
}