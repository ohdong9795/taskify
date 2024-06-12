import { forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

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
  <div className="flex gap-1 mt-7">
    {colors.map(({ name, code }) => (
      <label key={name} aria-label="color" className="flex flex-col items-center cursor-pointer">
        <input
          ref={ref}
          id="color"
          name="color"
          type="radio"
          value={code}
          checked={field.value === code}
          className="hidden"
          onChange={() => field.onChange(code)}
          // checked={selectedColor === color.code}
          // onChange={handleColorChange}
        />
        <div className={`w-10 h-10 rounded-full `} style={{ backgroundColor: code }} />
      </label>
    ))}
  </div>
));

ColorSelectInput.displayName = 'ColorSelectInput';

export default ColorSelectInput;
