export default function TrophyCheck({ rank }) {
  if (rank === 1) {
    return "bg-yellow-300";
  } else if (rank === 2) {
    return "bg-slate-300";
  } else if (rank === 3) {
    return "bg-amber-600";
  } else {
    return;
  }
}
