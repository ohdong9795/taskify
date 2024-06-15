import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import { createColumn } from '@/services/client/columns';
import { Controller, useForm } from 'react-hook-form';
import { ColumnType } from '@/types/user/column';

interface ColumnAddFormProps {
  dashboardId: number;
  onSuccess: (col: ColumnType) => void;
  handleCloseModal: () => void;
}

interface FormValues {
  title: string;
}

function ColumnAddForm({ dashboardId, onSuccess, handleCloseModal }: ColumnAddFormProps) {
  const { control, handleSubmit } = useForm<FormValues>();

  const submit = async (data: FormValues) => {
    const col = await createColumn({ title: data.title, dashboardId });
    onSuccess(col);
    handleCloseModal();
  };

  return (
    <div className="max-w-[540px]">
      <Title title="새 컬럼 생성" />
      <form onSubmit={handleSubmit(submit)} className="flex flex-col">
        <Controller
          control={control}
          name="title"
          render={({ field }) => <Input text="이름" id="newColumnName" placeholder="새로운 컬럼 이름" {...field} />}
        />
        <div className="mt-7 flex justify-end gap-3">
          <button type="button" onClick={handleCloseModal}>
            취소
          </button>
          <button type="submit">생성</button>
        </div>
      </form>
    </div>
  );
}

export default ColumnAddForm;
