import { CustomButtonProps } from '@/typesProps';

const CustomButton = ({ title, onClick } : CustomButtonProps) => {
  return (
    <button className={`py-3 px-6
    text-white bg-blue-600 hover:bg-blue-700
    text-sm font-bold rounded-full transition duration-200 whitespace-nowrap`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
export default CustomButton;