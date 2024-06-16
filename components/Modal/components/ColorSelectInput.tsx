'use client';

import { forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa6';
import COLOR_OPTION from '@/constants/colorOption';

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
  <div className="flex gap-[10px] my-7">
    {COLOR_OPTION.map(({ name, code }) => (
      <label key={name} aria-label={name} className="relative flex flex-col items-center cursor-pointer">
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
