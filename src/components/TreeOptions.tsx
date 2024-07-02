import React from 'react'

const TreeOptions = ({ maxPoints, setMaxPoints, pointsRemaining, label, selectedValue, onChangeSelect, optionValues}: {
  maxPoints: number,
  setMaxPoints: (value: number) => void,
  pointsRemaining: number,
  label: string,
  selectedValue: string,
  onChangeSelect: (value: string) => void,
  optionValues: string[]
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-900 text-white">
      <div>
        <label className="mr-2">Max points:</label>
        <input 
          id="max-points" 
          type="number" 
          className="w-16 p-1 bg-gray-800 border border-gray-600 rounded text-center text-white" 
          value={maxPoints}
          onChange={(e) => setMaxPoints(Number(e.target.value))}
        />
      </div>
        <label className="mr-2">{`Points remaining: ${pointsRemaining}`}</label>
        <div className='flex items-center'>
          <label className="mr-2">{label}:</label>
          <div className="relative">
          <select  
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedValue}
            onChange={(e) => onChangeSelect(e.target.value)}
          >
            {optionValues.map((option, index) => {
              return <option key={index} value={option}>{option}</option>
            })}
          </select>
          </div>
        </div>
    </div>
  )
}

export default TreeOptions
