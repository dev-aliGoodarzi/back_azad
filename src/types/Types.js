"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
