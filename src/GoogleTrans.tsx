type Props = {
  googleSent: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GoogleTrans = (props: Props) => {
  const { googleSent, setLoading } = props;
  setLoading(false);
  return (
    <>
      <p className="text-left animate-tracking-in-expand-fwd text-2xl">
        Google Transrate
      </p>
      <br />
      <textarea
        value={googleSent}
        className="animate-slide-right -ml-48 bg-amber-50 Cambria text-lg text-left flex-grow mx-auto box-border rounded-md w-11/12 pb-2 pt-2 px-4 h-60 border-2"
      ></textarea>
      <br />
    </>
  );
};
