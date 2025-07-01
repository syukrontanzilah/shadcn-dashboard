import { cn } from '@/lib/utils'
import { Angry } from 'lucide-react'
import React from 'react'

const CustomButton = ({
    disabled,
    isRounded
}: {
    disabled?: boolean
    isRounded?: boolean
}) => {
  return (
    // <button 
    // className={`text-sm px-4 py-2 ${disabled? "bg-gray-300" : "bg-blue-500"} ${isRounded && "rounded-full"}`}>
    //   Hello
    // </button>
    <button className={cn("text-sm px-4 py-2 hover:bg-blue-600 text-white flex gap-1 items-center", disabled ? "bg-gray-300 hover:bg-gray-300": "bg-blue-500", isRounded && "rounded-full")}>
              <Angry size={18}/>
        Halluuu
    </button>
  )
}

export default CustomButton
