'use client';

import { forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa6';

const colors = [
  { name: 'green-500', code: '#22c55e' },
  { name: 'purple-600', code: '#9333ea' },
  { name: 'orange-500', code: '#f97316' },
  { name: 'sky-300', code: '#7dd3fc' },
  { name: 'pink-500', code: '#ec4899' },
  // 추가 색상을 여기에 더할 수 있습니다
];

interface ColorSelectInputProps {
  field: ControllerRenderProps<
    {
      newDashboardName: string;
      color: string;
    },
    'color'
  >;
}

const ColorSelectInput = forwardRef<HTMLInputElement, ColorSelectInputProps>(({ field }, ref) => (
  <div className="flex gap-[10px] mt-7">
    {colors.map(({ name, code }) => (
      <label key={name} aria-label={name} className="flex flex-col items-center cursor-pointer relative">
        <input
          ref={ref}
          id={name}
          name="color"
          type="radio"
          value={code}
          checked={field.value === code}
          className="hidden"
          onChange={() => field.onChange(code)}
        />
        <div className="w-[30px] h-[30px] rounded-full" style={{ backgroundColor: code }} />
        {field.value === code && <FaCheck className="absolute text-white top-2 left-1.1" />}
      </label>
    ))}
  </div>
));

ColorSelectInput.displayName = 'ColorSelectInput';

export default ColorSelectInput;
