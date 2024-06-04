export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col max-w-[544px] px-[12px]">{children}</div>
    </div>
  );
}
