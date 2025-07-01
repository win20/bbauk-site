type Props = {
  heading: string;
  tag: string;
};

export default function HeadingWithTag({ heading, tag }: Props) {
  return (
    <>
      <span className="mb-4 text-base font-bold">{tag}</span>
      <h2 className="mb-4 font-merriweather text-4xl">{heading}</h2>
    </>
  );
}
