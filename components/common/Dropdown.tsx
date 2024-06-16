'use client';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

interface DropdownProps {
  children: React.ReactNode;
  position?: string;
}

export interface DropdownHandle {
  toggle: () => void;
}

const Dropdown = forwardRef<DropdownHandle, DropdownProps>(({ children, position }, ref) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const boxRef = useRef(null);

  useImperativeHandle(ref, () => ({
    toggle: () => {
      setDropdownVisible(!isDropdownVisible);
    },
  }));

  return (
    isDropdownVisible && (
      <div
        ref={boxRef}
        className={`absolute ${position ?? 'top-[50px] right-2'} bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50`}
      >
        {children}
      </div>
    )
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;
