type Props = {
  title: string;
  body: string;
};

export default function ProgramsAndServicesItem({ title, body }: Props) {
  return (
    <div className="mt-6 border-b border-b-black/15 pb-4">
      <h4 className="mb-2 font-merriweather text-xl">{title}</h4>
      <p>{body}</p>
    </div>
  );
}
