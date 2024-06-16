'use client';

import instance from '@/utils/axiosClient';

import Image from 'next/image';
import { useCallback, useState } from 'react';

import { FaPlus } from 'react-icons/fa';

interface ModalImageInputProps {
  columnId: number;
  onImageUpload: (url: string) => void;
  imageUrl?: string;
}

export default function ModalImageInput({ columnId, imageUrl, onImageUpload }: ModalImageInputProps) {
  const [preview, setPreview] = useState<File | string | null>(imageUrl ?? null);

  const onUploadImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const file = e.target.files[0];
      const formData = new FormData();

      formData.append('image', file);

      try {
        const response = await instance.post(`/columns/${columnId}/card-image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 201) {
          setPreview(response.data.imageUrl);
          onImageUpload(response.data.imageUrl);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    [columnId, onImageUpload],
  );

  const labelStyle = 'flex items-center justify-center bg-gray_F5F5F5 t:w-[84px] t:h-[84px] w-[58px] h-[58px]';
  return (
    <div className="flex flex-col">
      <label htmlFor="profileImageUpload" className={labelStyle}>
        {typeof preview === 'string' && <Image src={preview} alt="프로필 이미지가 들어가요" width={58} height={58} />}
        <FaPlus className={`w-[20px] h-[20px] text-violet_5534DA ${preview ? 'hidden' : ''}`} />
        <input id="profileImageUpload" type="file" accept="image/*" onChange={onUploadImage} className="hidden" />
      </label>
    </div>
  );
}
