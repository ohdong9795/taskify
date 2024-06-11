'use client';

import postCreateDashboard from '@/services/dashboardApi/client';
import { Controller, useForm } from 'react-hook-form';
import Title from './Title';
import Input from './Input';

const COLOR_OPTIONS = [{ green: '#7ac555' }, { purple: '#760DDE' }];

function DashboardAddForm() {
  const { handleSubmit, control } = useForm();

  const handlePost = (data) => {
    console.log(data);
    // postCreateDashboard({title});
  };

  return (
    <div className="max-w-[540px]">
      <Title title="새로운 대시보드" />
      <form className="flex flex-col" onSubmit={handleSubmit(handlePost)}>
        <Controller
          control={control}
          name="newDashboardName"
          render={({ field }) => (
            <Input
              type="text"
              text="대시보드 이름"
              id="newDashboardName"
              placeholder="새로운 대시보드 이름"
              {...field}
            />
          )}
        />
        <select className="flex gap-1 mt-7">
          {/* 대시보드 색상 선택하는 라디오 인풋도 필요할 것 같습니다 */}
          <option className="w-8 h-8 rounded-full cursor-pointer bg-green_7AC555">
            <input type="text" id="color" name="dashboardColor" value="color" />
          </option>
        </select>
        {/* 버튼 완료되면 추후 수정 */}
        <div className="mt-7">
          <button type="submit">생성</button>
        </div>
      </form>
    </div>
  );
}

export default DashboardAddForm;
