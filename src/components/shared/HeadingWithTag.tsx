type Props = {
  heading: string;
  tag: string;
};

export default function HeadingWithTag({ heading, tag }: Props) {
  return (
    <>
      <span className="text-base font-bold">{tag}</span>
      <h2 className="mb-4 mt-2 font-merriweather text-4xl">{heading}</h2>
    </>
  );
}
