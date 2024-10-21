export type T_FormType = {
  formId: string;
  name: string;
  lastName: string;
  fatherName: string;
  nationalCode: string;
  currLocationData: {
    ip: string;
  };
};

fetch(`https://backend-azadtask.a-goodarzi.ir/postFormData`, {
  method: "POST",
  body: new URLSearchParams({
    name: "test",
    lastName: "test2",
    fatherName: "test3",
    nationalCode: "test4",
  }),
})
  .then((d) => d.json())
  .then((d) => {
    console.log(d);
  });
