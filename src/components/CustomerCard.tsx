import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardProps {
    id: string;
    name: string;
    foods: string[];
}

export default function CustomerCard({ id, name, foods }: CustomerCardProps) {
    const [customerFoodInput, setCustomerFoodInput] = useState('');
    const dispatch = useDispatch();

    function handleAddFoodToCustomer() {
        if (!customerFoodInput) {
            return
        }
        dispatch(addFoodToCustomer({
            id,
            food: customerFoodInput
        }));
        setCustomerFoodInput('');
    }

    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {foods.map(food => (
                        <p>{food}</p>
                    ))}
                </div>
                <div className="customer-food-input-container">
                    <input value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)} />
                    <button
                        onClick={handleAddFoodToCustomer}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}