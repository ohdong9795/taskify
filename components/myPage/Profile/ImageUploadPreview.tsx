'use client';

import instance from '@/utils/axiosClient';

import Button from '@/components/common/Button/Button';
import Input from '@/components/auth/Input';

import Image from 'next/image';
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
    <form onSubmit={handleClick}>
      <h2>프로필</h2>
      <div className="flex">
        <div className="bg-slate-700 w-40 h-40">
          {preview && <Image src={preview} alt="프로필 이미지가 들어가요" width={160} height={160} />}
          <input type="file" accept="image/*" onChange={onUploadImage} />
        </div>
        <div>
          <p>이메일</p>
          <Input usage="email" placeholder={Profile.email} disabled />
          <p>닉네임</p>
          <Input usage="nickName" placeholder={Profile.nickname} onChange={onNicknameChange} />
        </div>
      </div>
      <Button className="mt-10" variant="primary" isActive>
        버튼입니다.
      </Button>
    </form>
  );
}