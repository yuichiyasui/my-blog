export const Card = () => {
  return (
    <div className="p-[20px] bg-white rounded-md shadow-md">
      <div className="aspect-[40/21] mb-[15px] text-white bg-slate-400">
        画像
      </div>
      <time dateTime="2022-03-01" className="block mb-[5px] text-[14px]">
        2022-03-01
      </time>
      <p className="mb-[10px] font-bold">記事のタイトル</p>
      <p className="table py-[4px] px-[8px] text-[12px] bg-stone-300">
        カテゴリー名
      </p>
    </div>
  );
};
