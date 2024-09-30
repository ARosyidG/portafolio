export default function Test({ params }: { params: { content: string } }) {
  return <div>{params.content}</div>;
}
