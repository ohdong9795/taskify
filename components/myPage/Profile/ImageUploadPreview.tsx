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

  return (
    <form
      onSubmit={handleClick}
      className="flex flex-col bg-white w-[620px] h-[355px] ml-[20px] mt-[24px] rounded-lg mb-[12px]"
    >
      <div className="ml-[28px] mt-[32px]">
        <h2 className="text-[24px] text-black_333236 font-bold mb-[32px]">프로필</h2>
        <div className="flex">
          <label
            htmlFor="profileImageUpload"
            className="flex items-center justify-center bg-gray_F5F5F5 w-[182px] h-[182px] "
          >
            {preview && <Image src={preview} alt="프로필 이미지가 들어가요" width={160} height={160} />}
            <FaPlus className="w-[20px] h-[20px] text-violet_5534DA" />
            <input id="profileImageUpload" type="file" accept="image/*" onChange={onUploadImage} className="hidden" />
          </label>
          <div className="w-[366px] h-[178px] ml-[16px] pb-[4px]">
            <p className="font-medium text-black_333236 text-[18px] mb-[10px]">이메일</p>
            <Input usage="email" placeholder={Profile.email} disabled style={{ height: '48px' }} />
            <p className="font-medium text-black_333236 text-[18px] mb-[10px] mt-[20px]">닉네임</p>
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
        <button className=" bg-violet_5534DA w-[84px] h-[32px] text-white mr-[28px] mb-[28px] rounded">저장</button>
      </div>
    </form>
  );
}
