import { ThisQuestions } from "../../Quest";

export default function CheckLevels() {
  const ListQuestSuccess = ThisQuestions.filter(
    (items) => items.open === true
  ).sort((a, b) => b.level - a.level)[0];
  return ListQuestSuccess;
}
