
import CountUp from 'react-countup'
import IncrementCounter from './IncrementCounter'


const Balance = ({accounts=[],totalNumberOfBanks,totalBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart">
            {/* donut chart here */}
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Total number of Bank Accounts: {totalNumberOfBanks} 
            </h2>
            <div className="flex flex-col flex-center gap-2">
                <p className='total-balance-label'>Current Balance</p>
                <p className="total-balance-amount flex-center gap-2">
                    
                <IncrementCounter amount={totalBalance}/>
                 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Balance