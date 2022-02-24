document.addEventListener("contextmenu",function(noclick){
    noclick.preventDefault();
})

    
        var password;
        var pass = "11011101"
        var userCode;
        userC = "alpha"

        

        
        userCode=prompt('Enter user code:', '')

        if(userCode===userC)
        alert('Code verified')

        else{
            alert('Incorrect User Code')
            window.location="http://127.0.0.1:5500/Personal%20website.html";
        }

       
        
        // password
        password=prompt('Enter the pass code:', '')

        if(password===pass)
        alert('Welcome!')

        else{
            alert('incorrect pass!')
            window.location="http://127.0.0.1:5500/Personal%20website.html";
        }
    