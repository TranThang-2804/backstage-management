import { genFile } from "./iacGenData";

export const handler = async (request: JSON) => {
  const type = request.type;
  const params = request.params;
  const keyName = request.keyName;
  genFile(type, params, keyName);
};
