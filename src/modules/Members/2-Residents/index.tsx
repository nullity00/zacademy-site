import { alumni_residents } from "../Data/alumni-residents";
import { residents } from "../Data/residents";
import { Template } from "../1-Core";

export function Resident() {
  return (
    <>
      <Template title={"Resident"} members={residents} />
    </>
  );
}

export function ResidentAlumni() {
  return (
    <>
      <Template title={"Alumni Resident"} members={alumni_residents} />
    </>
  );
}
