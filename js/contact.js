// !(function(){
//     const submissionURL = "https://docs.google.com/forms/d/e/1FAIpQLSca2ap-z5U69WFxUJY1Bt4MRz56WZJbXubZLxLdHaBxT6XwIA/formResponse";
//     const fvv = 1;
//     const pageHistory = 0;
//     const draftResponse = [null, null, null];
//     const fbzx = 6341644599321790403;

//     const onFormSubmit = function(event) {
//         debugger;
//         const formData = new FormData();

//         formData.append("fvv", fvv);
//         formData.append("pageHistory", pageHistory);
//         formData.append("draftResponse", draftResponse);
//         formData.append("fbzx", fbzx);

//         const xhr = new XMLHttpRequest();

//         xhr.addEventListener("readystatechange", function() {
//             if (xhr.readyState !== xhr.DONE) return;
//             console.log("Message Sent Succesfully.");
//         });

//         xhr.open("POST", submissionURL, true);
//         xhr.send(formData);

//         event.preventDefault();
//         event.stopPropagation();
//         return true;
//     };

//     document.querySelector("#contact-form").addEventListener("submit", onFormSubmit);
// })();
