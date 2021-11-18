/**
 * Utils
 */
import delay from "../utils/delay";
import List1 from "./data/list1.json";
import List2 from "./data/list2.json";

const fetcher = async (url: string) => {
  const choice = Math.random() < 0.5;

  await delay(Math.random() * 10000);

  return choice ? List1 : List2;
};

export default fetcher;
