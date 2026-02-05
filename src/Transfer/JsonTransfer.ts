class JsonTransfer {
  jsonParse(jsonTodosStorage: string) {
    return JSON.parse(jsonTodosStorage);
  }
}

export const jsonTransfer = new JsonTransfer();