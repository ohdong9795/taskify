interface InputProps {
  htmlFor?: string;
  id?: string;
  placeholder?: string;
  title?: string;
}

export default function ModalComponent({ htmlFor, id, placeholder, title }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="title" className="text-lg font-medium text-black_333236 mb-[10px]">
        {title}
      </label>
      <input id="title" placeholder={placeholder} />
    </div>
  );
}
