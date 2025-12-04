import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffes = useLoaderData();
    return (
        <div>
            ami home
        </div>
    );
};

export default Home;

git add .

git commit -m "1st setup done"  

git push -u origin main