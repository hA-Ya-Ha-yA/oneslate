type Props = {
  gptSent: string;
};

export const GptTrans = (props: Props) => {
  const { gptSent } = props;
  const fixGptSent = gptSent.slice(2);
  return (
    <>
      <br />
      <p className="text-left animate-tracking-in-expand-fwd text-2xl">GPT-3</p>
      <br />
      <textarea
        value={fixGptSent}
        className="animate-slide-right -ml-48 bg-amber-50 Cambria text-lg text-left flex-grow mx-auto box-border rounded-md w-11/12 pb-2 pt-2 px-4 h-60 border-2"
      ></textarea>
      <br />
    </>
  );
};
