// Callback Hell

function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: " + src);
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading script with SRC: " + src);
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);
}

/*

function goodmorning(error, src){
    if(error){
        console.log(error);
        sendEmergencyMessageToCeo();
        return
    }
    alert("Good Morning " + src); 
}

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", goodmorning);  // resolved
// loadScript("https://ccdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", goodmorning); // error

loadScript("https://e;hj4gjxe", goodmorning); // inversion of control  -> loadscript has full access of control of goodmorning function
// point is that without even knowing how to handle goodmorning function loadScript has its full access
*/
// callback hell/ pyramid of doom
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src){
    if(error){
        console.log(error);
        sendEmergencyMessageToCeo();
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src){
        if(error){
            console.log(error);
            sendEmergencyMessageToCeo();
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src){
            if(error){
                console.log(error);
                sendEmergencyMessageToCeo();
                return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src){            
                if(error){
                    console.log(error);
                    sendEmergencyMessageToCeo();
                    return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src){})
            })
        })
    })
})

// promsie are used to resolve this issue