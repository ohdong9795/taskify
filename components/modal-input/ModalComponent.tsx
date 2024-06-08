const layout = 'rounded-lg border border-solid px-[16px] py-[15px] focus:outline-1 focus:outline';
const normal = 'border-gray_D9 focus:outline-violet_5534DA';
const error = 'border-red_D6173A focus:outline-red_D6173A';

const inputClassName = (hasError: boolean) => `${layout} ${hasError ? error : normal}`;
const modalClassName = (hasError: boolean) =>
  `${inputClassName(hasError)} w-[484px] h-[48px] max-md:w-[287px] max-md:h-[42px]`;

interface InputProps {
  htmlFor?: string;
  hasError?: boolean;
  id?: string;
  placeholder?: string;
  title?: string;
}

export default function ModalComponent({ title, htmlFor, id, hasError = false, placeholder }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="text-lg font-medium text-black_333236 mb-[10px]">
        {title}
      </label>
      <input id={id} className={modalClassName(hasError)} placeholder={placeholder} />
    </div>
  );
}
