/* eslint-disable no-nested-ternary */
import { TAG_COLOR } from '@/constants/tag';
import chroma from 'chroma-js';
import Select, { ActionMeta, MultiValue, PropsValue, SingleValue, StylesConfig } from 'react-select';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: '백엔드', label: '백엔드', color: TAG_COLOR['백엔드'] },
  { value: '프론트엔드', label: '프론트엔드', color: TAG_COLOR['프론트엔드'] },
  { value: '상', label: '상', color: TAG_COLOR['상'] },
  { value: '중', label: '중', color: TAG_COLOR['중'] },
  { value: '하', label: '하', color: TAG_COLOR['하'] },
  { value: '프로젝트', label: '프로젝트', color: TAG_COLOR['프로젝트'] },
  { value: '일반', label: '일반', color: TAG_COLOR['일반'] },
];

const safeChroma = (color: string) => {
  try {
    return chroma(color);
  } catch {
    return chroma('#ccc');
  }
};

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white', height: '48px' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = safeChroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled ? (isSelected ? data.color : color.alpha(0.3).css()) : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = safeChroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    maxHeight: '100px', // valueContainer의 최대 높이를 설정합니다.
    overflowY: 'auto', // 세로 스크롤을 가능하게 합니다.
  }),
};

interface MultiSelectProps {
  defaultValue?: PropsValue<ColourOption>;
  onChange: (val: SingleValue<ColourOption> | MultiValue<ColourOption>, action: ActionMeta<ColourOption>) => void;
}

export default function MultiSelect({ defaultValue, onChange }: MultiSelectProps) {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      className="w-full"
      closeMenuOnSelect={false}
      isMulti
      options={colourOptions}
      styles={colourStyles}
      isSearchable={false}
    />
  );
}
