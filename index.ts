export interface Hello {
  name: string;
}

export const name = function (params: Hello) {
  console.log(params.name);
};
