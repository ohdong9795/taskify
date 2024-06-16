import Title from '@/components/Modal/components/Title';
import Input from '@/components/Modal/components/Input';
import { deleteColumn, updateColumn } from '@/services/client/columns';
import { Controller, useForm } from 'react-hook-form';

interface ColumnAddFormProps {
  id: number;
  title: string;
  handleCloseModal: () => void;
  onUpdate: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}

interface FormValues {
  title: string;
}

function ColumnEditForm({ id, title, handleCloseModal, onUpdate, onDelete }: ColumnAddFormProps) {
  const { control, handleSubmit } = useForm<FormValues>();

  const handleDelete = async () => {
    await deleteColumn({ columnId: id });
    onDelete(id);
    handleCloseModal();
  };

  const handleUpdate = async (data: FormValues) => {
    await updateColumn({ columnId: id, title: data.title });
    onUpdate(id, data.title);
    handleCloseModal();
  };

  return (
    <div className="max-w-[327px] t:max-w-[540px]">
      <Title title="컬럼 관리" />
      <form className="flex flex-col relative" onSubmit={handleSubmit(handleUpdate)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => <Input text="이름" placeholder={title} {...field} />}
        />
        <div className="mt-7 flex justify-end gap-3">
          <button
            type="submit"
            className="text-center w-[120px] h-[48px] py-2 t:px-7 rounded bg-violet_5534DA hover:bg-violet-500 text-white"
          >
            변경
          </button>
        </div>
        <button
          type="button"
          className="absolute bottom-0 text-gray_9FA6B2 font-normal text-sm underline"
          onClick={handleDelete}
        >
          삭제하기
        </button>
      </form>
    </div>
  );
}

export default ColumnEditForm;
