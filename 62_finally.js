// try catch can have another clause finally

const f = () => {

    try {
        let a = 0;
        // console.log(program)
        console.log("Program ran successfully")
        return
    }
    catch (err) {
        console.log("This is an error")
        console.log(p)
    }
    finally {
        console.log("I am a good body")  // finally will always execute
        // finally is used to do the cleanups

        // Close the file
        // Exit the loop
        // Write to the log file
    }

}

f()
console.log("End")