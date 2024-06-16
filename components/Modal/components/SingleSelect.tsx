/* eslint-disable no-nested-ternary */
import chroma from 'chroma-js';
import Select, {
  ActionMeta,
  components,
  MultiValue,
  PropsValue,
  SingleValue,
  SingleValueProps,
  StylesConfig,
} from 'react-select';
import Image from 'next/image';

interface ColourOption {
  readonly value: string | number;
  readonly label: string;
  readonly color?: string;
  readonly image?: string;
}

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white', height: '48px' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color ? chroma(data.color) : chroma('#ccc');
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
        backgroundColor: !isDisabled && data.color ? (isSelected ? data.color : color.alpha(0.3).css()) : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles }), // 기본 색상 지정
  placeholder: (styles) => ({ ...styles }), // 기본 색상 지정
  singleValue: (styles) => ({ ...styles }), // 선택된 값의 색상 사용
};

function MemberValue(props: SingleValueProps<ColourOption>) {
  const { data } = props;

  return (
    <components.SingleValue {...props}>
      <div className="flex items-center gap-2 ">
        {data.image && (
          <div className="relative w-[26px] h-[26px]">
            <Image
              src={data.image}
              alt="프로필 이미지"
              fill
              className="rounded-full border-white border-2 object-cover"
            />
          </div>
        )}
        <span className={`${data.value ? 'text-[#333236]' : 'text-[#9FA6B2]'}`}>{data.label}</span>
      </div>
    </components.SingleValue>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MemberSelect(props: any) {
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        {props?.data.image && (
          <div className="relative w-[26px] h-[26px]">
            <Image
              src={props?.data.image}
              alt="프로필 이미지"
              fill
              className="rounded-full border-white border-2 object-cover"
            />
          </div>
        )}
        <span className="text-[#333236]">{props?.children}</span>
      </div>
    </components.Option>
  );
}

function ColumnValue(props: SingleValueProps<ColourOption>) {
  const { data } = props;

  return (
    <components.SingleValue {...props}>
      <div className="rounded-[11px] bg-violet_F1EFFD text-violet_5534DA px-2 py-1">{`● ${data.label}`}</div>
    </components.SingleValue>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ColumnSelect(props: any) {
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <div className="rounded-[11px] bg-violet_F1EFFD text-violet_5534DA px-2 py-1">{`● ${props?.children}`}</div>
      </div>
    </components.Option>
  );
}

interface SingleSelectProps {
  type: 'member' | 'column';
  defaultValue?: PropsValue<ColourOption>;
  colourOptions: ColourOption[];
  onChange: (val: SingleValue<ColourOption> | MultiValue<ColourOption>, action: ActionMeta<ColourOption>) => void;
}

export default function SingleSelect({ type, defaultValue, colourOptions, onChange }: SingleSelectProps) {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      options={colourOptions}
      styles={colourStyles}
      components={
        type === 'column'
          ? { SingleValue: ColumnValue, Option: ColumnSelect }
          : { SingleValue: MemberValue, Option: MemberSelect }
      }
      isSearchable={false}
    />
  );
}
