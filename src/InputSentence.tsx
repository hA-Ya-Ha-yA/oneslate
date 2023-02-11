import { memo } from "react";

type Props = {
  japSent: string;
  onClickTransrate: any;
  onClickFetchData: any;
};

export const InputSentence = memo((props: Props) => {
  const { japSent, onClickTransrate, onClickFetchData } = props;
  return (
    <>
      <div>
        <textarea
          value={japSent}
          className="text-xl content-center px-2 py-2 w-11/12 h-60 placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-base"
          placeholder="日本語を入力してくださいーーーボタンを押すと翻訳結果が表示されます"
          onChange={onClickTransrate}
        />
        <br />
        <button
          className="bg-sky-400 text-white font-bold py-2 px-4 rounded drop-shadow-lg hover:-translate-y-1 duration-500"
          onClick={onClickFetchData}
        >
          Translate
        </button>
      </div>
    </>
  );
});
