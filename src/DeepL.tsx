type Props = {
  deeplSent: string;
};

export const DeepL = (props: Props) => {
  const { deeplSent } = props;
  return (
    <>
      <br />
      <p className="text-left animate-tracking-in-expand-fwd text-2xl">Deepl</p>
      <br />
      <textarea
        value={deeplSent}
        className="delay-75 animate-slide-right bg-amber-50 -ml-48 Cambria text-lg text-left flex-grow mx-auto box-border rounded-md w-11/12 pb-2 pt-2 px-4 h-60 border-2"
      ></textarea>
      <br />
    </>
  );
};
