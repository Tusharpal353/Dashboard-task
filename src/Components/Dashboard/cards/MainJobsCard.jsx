import React from 'react'
import Cards from './jobsCard'

const JobsCardGroup = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Cards
              className="bg-[#ffefe7] w-full h-[136px] rounded-lg"
              heading="Available Position"
              number={24}
              description="4 Urgently needed"
              paraColor=""
            />
            <Cards
              className="bg-[#e8f0fb] w-full h-[136px] rounded-lg"
              heading="Jobs Open"
              number={10}
              description="4 active hiring"
              paraColor="text-[#3786F1]"
            />
            <Cards
              className="bg-[#fdebf9] w-full h-[136px] rounded-lg"
              heading="New Employees"
              number={24}
              description="4 Department"
              paraColor="text-[#EE61CF]"
            />
          </div>
  )
}

export default JobsCardGroup