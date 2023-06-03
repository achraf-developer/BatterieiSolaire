var form = document.getElementsByTagName("form")

form.addEventListener("submit",function(){
    var currentDateTime = new Date();

    // Format the date and time as a string
    var formattedDateTime = currentDateTime.toLocaleString();
    
    // Set the value of the hidden field
    document.getElementById("submissiondate").value = formattedDateTime;
    console.log(document.getElementById("submissiondate"))
})

// Get the current date and time
