import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeCard from './CoffeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees,setCoffees]= useState(initialCoffees);
    return (
        <div>
           <div className='gird grid-cols-1 md:grid-cols-2 gap-6'>
            {
                coffees.map(coffee => <CoffeCard 
                    key={coffee._id} 
                    coffees={coffee}
                    setCoffees={setCoffees}
                    coffee={coffee}></CoffeCard>)
            }
           </div>
        </div>
    );
};

export default Home;
