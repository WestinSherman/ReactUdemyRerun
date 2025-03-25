function handleFormSubmits(evt) {
    evt.preventDefault();
    console.log("SUBMITTED THE FORM!");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmits}>
            <button>Submit</button>
        </form>
    )
}