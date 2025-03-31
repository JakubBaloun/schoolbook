import Icon from "@mdi/react";
import { mdiAccountSchoolOutline, mdiIdentifier } from "@mdi/js";

export default function Student({ student }) {
  return (
    <div className="my-3 border border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:bg-gray-50 transition-all duration-200">
      <div className="py-4 flex flex-col gap-1 pl-4">
        <div className="flex items-center gap-2">
          <Icon path={mdiAccountSchoolOutline} size={1} color="grey" />{" "}
          {student.firstname} {student.surname}
        </div>
        <div className="flex items-center gap-2">
          <Icon path={mdiIdentifier} size={1} color="grey" />{" "}
          {student.nationalId}
        </div>
      </div>
    </div>
  );
}
