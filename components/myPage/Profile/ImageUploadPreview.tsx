'use client';

import instance from '@/utils/axiosClient';

import Input from '@/components/auth/Input';

import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { User } from '@/types/user/user';

interface ProfileProps {
  Profile: User;
}

export default function ImageUploadPreview({ Profile }: ProfileProps): JSX.Element {
  const [preview, setPreview] = useState<string>(Profile.profileImageUrl);
  const [nickname, setNickname] = useState<string>(Profile.nickname);

  const onUploadImage = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

    try {
      const response = await instance.post('/users/me/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setPreview(response.data.profileImageUrl);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, []);

  const onNicknameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }, []);

  const handleClick = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (nickname && preview) {
        instance.put('/users/me', {
          nickname,
          profileImageUrl: preview,
        });
      }
    },
    [nickname, preview],
  );

  const formStyle =
    'flex flex-col bg-white p:w-[620px] t:w-[544px] m:w-[284px] t:h-[355px] m:h-[422px] ml-[20px] mt-[24px] rounded-lg mb-[12px] ';
  const labelStyle = 'flex items-center justify-center bg-gray_F5F5F5 t:w-[182px] t:h-[182px] m:w-[100px] m:h-[100px]';
  const buttonStyle =
    'bg-violet_5534DA w-[84px] h-[32px] m:h-[28px] text-white mr-[28px]  m:mr-[20px] mb-[28px] m:mb-[20px] font-medium rounded text-[12px]';

  return (
    <form onSubmit={handleClick} className={formStyle}>
      <div className="t:ml-[28px] t:mt-[32px] m:ml-[20px] m:mt-[28px]">
        <h2 className="text-[24px] text-black_333236 font-bold mb-[32px] m:mb-[24px]">프로필</h2>
        <div className="t:flex">
          <label htmlFor="profileImageUpload" className={labelStyle}>
            {preview && <Image src={preview} alt="프로필 이미지가 들어가요" width={160} height={160} />}
            <FaPlus className="w-[20px] h-[20px] text-violet_5534DA" />
            <input id="profileImageUpload" type="file" accept="image/*" onChange={onUploadImage} className="hidden" />
          </label>
          <div className="p:w-[366px] t:w-[290px] m:w-[244px] h-[178px] t:ml-[16px] m:ml-0 t:mt-0 m:mt-[24px] pb-[4px] m:pb-0">
            <p className="font-medium text-black_333236 t:text-[18px] m:text-[16px] mb-[10px]">이메일</p>
            <Input usage="email" placeholder={Profile.email} disabled style={{ height: '48px' }} />
            <p className="font-medium text-black_333236 t:text-[18px] m:text-[16px] mb-[10px] mt-[20px] m:mt-[16px]">
              닉네임
            </p>
            <Input
              usage="nickName"
              placeholder={Profile.nickname}
              onChange={onNicknameChange}
              style={{ height: '48px' }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end h-screen">
        <button className={buttonStyle}>저장</button>
      </div>
    </form>
  );
}
