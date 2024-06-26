import { TAG_COLOR, TagType } from '@/constants/tag';
import chroma from 'chroma-js';

interface TagsProps {
  name: TagType;
}

export default function Tags({ name }: TagsProps) {
  try {
    const color = chroma(TAG_COLOR[name]);

    return (
      <span
        className="rounded px-[6px] py-[4px]"
        style={{ color: color.css(), backgroundColor: color.alpha(0.1).css() }}
      >
        {name}
      </span>
    );
  } catch {
    const color = chroma('#5534DA');
    <span className="rounded px-[6px] py-[4px]" style={{ color: color.css(), backgroundColor: color.alpha(0.1).css() }}>
      {name}
    </span>;
  }
}
