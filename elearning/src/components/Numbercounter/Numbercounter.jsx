import React from 'react';
import CountUp from "react-countup";

export const Numbercounter = () => {
  return (
  <div className='bg-secondary text-white py-12'>
    <div className='container grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
                <CountUp
                start={0}
                end={898}
                duration={3}
                enableScrollSpy={true}
                scrollSpyDelay={true}
                />

            </p>
            <p>Expert Tu</p>

        </div>

    </div>

  </div>
  )
}
export default Numbercounter;