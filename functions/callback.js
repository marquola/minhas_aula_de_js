function sayMyName (name) {

    console.log (name)
    

}

sayMyName (
    () => {
        console.log ('Estoy em una callbeck')

    }
)