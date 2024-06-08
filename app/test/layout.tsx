import 'modern-normalize/modern-normalize.css';
import '../globals.css';

function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col max-w-[544px] px-[12px]">{children}</div>
    </div>
  );
}

export default TestLayout;
