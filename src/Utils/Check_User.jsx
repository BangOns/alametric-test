import { UserCandidate } from "../../User";

export default async function Check_User({ name, code }) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const checkUser = UserCandidate.find(
        (items) =>
          items.code.toUpperCase() === code.toUpperCase() &&
          items.name.toLowerCase() === name.toLowerCase()
      );

      if (checkUser) {
        resolve({ success: true, data: checkUser });
      } else {
        reject({ success: false });
      }
    }, [1000]);
  });
}
