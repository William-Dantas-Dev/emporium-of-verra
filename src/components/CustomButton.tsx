import { CustomButtonProps } from '@/typesProps';

const CustomButton = ({ title, href } : CustomButtonProps) => {
  return (
    <a
      className={`py-3 px-6
      text-white bg-blue-600 hover:bg-blue-700
        text-sm font-bold rounded-full transition duration-200 whitespace-nowrap`}
      href={href}
    >
      {title}
    </a>
  )
}
export default CustomButton;