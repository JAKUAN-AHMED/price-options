import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
    const PriceOptions=[
        {
        "id": 1,
        "name": "Basic Membership",
        "price": "$29.99",
        "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access",
            "Free Wi-Fi",
            "Discounts on gym merchandise"
        ]
        },
        {
        "id": 2,
        "name": "Standard Membership",
        "price": "$49.99",
        "features": [
            "Access to all basic membership features",
            "Group fitness classes included",
            "Personal trainer consultation",
            "Access to swimming pool",
            "Sauna access"
        ]
        },
        {
        "id": 3,
        "name": "Premium Membership",
        "price": "$79.99",
        "features": [
            "Access to all standard membership features",
            "Unlimited tanning sessions",
            "Access to sauna and steam room",
            "Discounts on supplements and merchandise",
            "Complimentary towel service",
            "Priority booking for fitness classes"
        ]
        }
  ];



    return (
        <div className="m-12">
            <h2 className="text-4xl bg-yellow-200 text-center mb-4 font-bold font-serif">Best Prices in the Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                PriceOptions.map(option=><PriceOption key={option.id}       option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;