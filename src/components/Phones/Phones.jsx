import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import { RotatingLines} from 'react-loader-spinner'
const Phones = () => {
    const [phones,setPhones]=useState([]);
    const [loader,setLoader]=useState(true);
    useEffect(()=>{
        /* const fetchData=async()=>{
            const res=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
            const data=await res.json();
            setPhones(data.data);
        } */
        // fetchData();
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const PhoneData=data.data.data;
            const PhoneWithFakeData=PhoneData.map(phone=>{
                const obj={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1]),
                }
                return obj;
            })
            console.log(PhoneWithFakeData);
            setPhones(PhoneWithFakeData);
            setLoader(false);
        });
    },[]);
    return (
        <div>
            {
                loader && <div> render(<RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />)
                </div>
            }
            <h2 className="text-5xl">Phones : {phones.length}</h2>
              <BarChart width={3000} height={400} data={phones}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'price'}></YAxis>
                <Bar dataKey={'price'} fill="blue"/>
                <Tooltip/>
              </BarChart>
        </div>
    );
};

export default Phones;