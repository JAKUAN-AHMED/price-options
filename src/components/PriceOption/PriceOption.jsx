import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>   
            <h4 className="text-3xl text-center my-8">{name}</h4> 
            <div className='pl-6'>
                {
                    features.map((feature,idx)=><Feature key={idx} feature=  {feature}></Feature>)
                }
            </div>
            <button className='btn btn-secondary mt-12 hover:bg-yellow-300'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes={
    option:PropTypes.object.isRequired,
}
export default PriceOption;