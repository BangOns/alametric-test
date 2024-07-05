import { UserCandidate } from "../../User";

export default function PostPoint_User(data) {
  const GetIndexUserById = UserCandidate.findIndex(
    (items) => items.code.toLowerCase() === data.id.toLowerCase()
  );
  if (GetIndexUserById !== -1) {
    UserCandidate[GetIndexUserById].points += data.TotalSkor;
    return UserCandidate;
  }
}
