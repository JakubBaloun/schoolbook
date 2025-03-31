export default function ClassroomInfo({ classroom }) {
  return (
    <h1 className="text-4xl font-bold my-4">
      Classroom{" "}
      <span className="bg-rose-400 rounded-lg px-3 py-1">{classroom.name}</span>
    </h1>
  );
}
