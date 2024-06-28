import { SkillBoxData } from '@/types'
import React from 'react'

interface SkillTreeItemProps {
  
}

const SkillTreeItem = ({ item, isItemSelected, isUnSelectedItem} : {
  item: SkillBoxData,
  isItemSelected: boolean,
  isUnSelectedItem: boolean,
}) => {  
  return (
    <>
      <img
        src={item.imageUrl}
        alt={`Item${item.id}`}
        className={`w-full h-full object-cover
          ${isItemSelected && 'border-2 border-yellow-500'}
          ${item && (isUnSelectedItem ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')}
        `}
      />
      <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-80 text-white p-2 rounded z-20 w-48">
        <div className="flex items-center mb-2">
          <img src={item.imageUrl} alt={`Item${item.id}`} className="w-8 h-8 mr-2 rounded" />
          <strong>{item.name}</strong>
        </div>
        <div className="text-xs">
          <div><strong>Level:</strong> {item.level}</div>
          <div><strong>Mana:</strong> {item.mana}</div>
          <div><strong>Range:</strong> {item.range}</div>
          <div><strong>Cooldown:</strong> {item.cooldown} sec</div>
          <div><strong>Effect:</strong> {item.effect}</div>
          <div><strong>Description:</strong> {item.description}</div>
        </div>
      </div>
    </>
  )
}

export default SkillTreeItem
