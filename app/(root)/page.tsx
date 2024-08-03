import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import Balance from '@/components/Balance';

const Home = () => {
    const loggedIn = {firstName:'Priyanshu'};
  return (
    <section className='home'>
       <div className="home-content">
        <header className="home-header">
            {/* Welcome, Priyanshu */}
            <HeaderBox
            type="greeting"
            title= "Welcome"
            user={loggedIn?.firstName|| "Guest"}
            others = "Access and manage your account efficiently."
            />

            <Balance
            accounts={[]}
            totalNumberOfBanks = {7}
            totalBalance = {1690.89} 
            />
        </header>
        </div> 
    </section>
  )
}

export default Home