import { useMutation } from 'react-query';
import { useState, ChangeEvent, MouseEvent } from 'react';
import useAuthStore from '@/stores/authStore';
import axios, { AxiosError } from 'axios';
import Button from '@/components/common/Button/Button';

export default function PasswordChangeForm() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState<string | null>(null);
    const setModal = useAuthStore((state) => state.setModal);
  
    const handleBlur = () => {
      if (newPassword !== confirmNewPassword) {
        setShowError('비밀번호가 일치하지 않습니다.');
      } else {
        setShowError(null);
      }
    };
  
    const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNewPassword(event.target.value);
    };
  
    const handleConfirmNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
      setConfirmNewPassword(event.target.value);
    };
  
    const handleCurrentPassword = (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const putPassword = async (passwordData: { password: string; newPassword: string }) => {
      const response = await axios.put('/api/password', passwordData);
      return response.data;
    };
  
    const { mutate } = useMutation(putPassword, {
      onSuccess: () => {
        setModal({ status: true, name: 'successPassword' });
      },
      onError: (error: AxiosError) => {
        if (error.response?.status === 400) {
          setShowError('잘못된 요청입니다.');
        } else if (error.response?.status === 401) {
          setShowError('인증에 실패했습니다.');
        } else {
          setShowError('알 수 없는 오류가 발생했습니다.');
        }
        setModal({ status: true, name: 'alertPassword' });
      },
    });
  
    const handlePostPassword = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
  
      if (newPassword !== confirmNewPassword) {
        return;
      }
      mutate({ password, newPassword });
    };
  
    return (
      <form className="mobile:w-[28.4] tablet:w-[54.4] flex flex-col ml-[1.7] w-[62] h-[45] bg-white rounded-lg justify-center align-center px-[2.8] justify-around">
        <div className="text-zinc-800 text-[2.4] font-bold font-['Pretendard']">
          비밀번호 변경
        </div>
        <div className="flex flex-col">
          <label
            className="text-zinc-800 text-[1.8] font-medium font-['Pretendard']"
            htmlFor="CurrentPassword"
          >
            현재 비밀번호
          </label>
          <input
            id="CurrentPassword"
            className="basicinput mb-[2]"
            type="password"
            placeholder="현재 비밀번호 입력"
            onChange={handleCurrentPassword}
          />
          <label
            className="text-zinc-800 text-[1.8] font-medium font-['Pretendard']"
            htmlFor="NewPassword"
          >
            새 비밀번호
          </label>
          <input
            id="NewPassword"
            className="basicinput placeholder-gray-400 mb-[2]"
            type="password"
            placeholder="새 비밀번호 입력"
            onChange={handleNewPasswordChange}
          />
          <label
            className="text-zinc-800 text-[1.8] font-medium font-['Pretendard']"
            htmlFor="NewPasswordConfirm"
          >
            새 비밀번호 확인
          </label>
          <input
            id="NewPasswordConfirm"
            className="basicinput text-gray-400 font-['Pretendard'] mb-[2]"
            type="password"
            placeholder="새 비밀번호 입력"
            onChange={handleConfirmNewPasswordChange}
            onBlur={handleBlur}
          />
          {showError && <p className="text-red-500 text-[1.2]">{showError}</p>}
          <Button
            variant="primary"
            customStyles="w-[8.4] h-[3.2] text-[1.4] rounded-[0.4] ml-auto mb-[2]"
            type="button"
            onClick={handlePostPassword}
            disabled={!password || !newPassword || !confirmNewPassword}
          >
            변경
          </Button>
        </div>
      </form>
    );
  }