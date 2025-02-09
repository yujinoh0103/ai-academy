interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PhotoPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h4>Photo: {id}</h4>
    </div>
  );
}
