let set = [];
let generated = false;
let tryAgain = false;

function generate() {

     let setElem = document.getElementById("set");

     if (set.length > 0) {
          set = [];
     }

     while(set.length < 3) {

          let candidate = String.fromCharCode(Math.floor(Math.random() * 25 + 65));

          if(!set.includes(candidate)){
               set.push(candidate);
          }
     }

     setElem.innerHTML = `Your Set: [ ${set[0]}, ${set[1]}, ${set[2]} ]`;
     generated = true;
};

$("document").ready(function() {

     let setElem = document.getElementById("set");
     let resultElem = document.getElementById("result");

     $("form").submit(function(event) {

          let apiUrl = 'https://api.dictionaryapi.dev/api/v1/entries/en/' + $("input").first().val();
     
          if(generated) {

               $.ajax({
     
                    url: apiUrl,
          
                    success: function(data) {
          
                         if(data[0]["word"]) {

                              if(data[0]["word"].includes(set[0].toLowerCase()) && data[0]["word"].includes(set[1].toLowerCase()) && data[0]["word"].includes(set[2].toLowerCase())) {
                                   setElem.innerHTML = "";
                                   resultElem.innerHTML = `Good job! "${$("input").first().val()}" includes ${set[0]}, ${set[1]}, and ${set[2]}!`;
                                   generated = false;
                              }
                              else {
                                   
                                   let missing = [];
                                   let notice = "Sorry! Your word doesn't include ";

                                   if(!data[0]["word"].includes(set[0].toLowerCase())){
                                        missing.push(set[0]);
                                   }
                                   if(!data[0]["word"].includes(set[1].toLowerCase())){
                                        missing.push(set[1]);
                                   }
                                   if(!data[0]["word"].includes(set[2].toLowerCase())){
                                        missing.push(set[2]);
                                   }

                                   for(let x = 0; x < missing.length - 1; x++){
                                        notice += missing[x] + ", ";
                                   }
                                   notice += missing[missing.length - 1] + ". Try again!";

                                   resultElem.innerHTML = notice;
                              }
                         }
                    },
                    error: function (xhr, thrownError) {
          
                         if (xhr.status == 404) {
                              resultElem.innerHTML = `Sorry! I couldn't find your word "${$("input").first().val()}" in my dictionary!`;
                         }
                         else {
                              resultElem.innerHTML = "Sorry, an error occured!";
                         }
                    }
               });
          }
          else {
               resultElem.innerHTML = "Remeber to generate a set!";
          }
          
          event.preventDefault();
     });
});
