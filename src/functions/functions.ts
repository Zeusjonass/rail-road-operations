export function addIdToJSONArray(data: any) {
  for (let i = 0; i < data.length; i++) {
    data[i]["id"] = data[i]["name"];
  }
}