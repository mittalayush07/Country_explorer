export const Contact = () => {
    const handleFormSubmit = (formData)=>{
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="container contact-wrapper">
                <form action={handleFormSubmit}>
                    <input type="text" required autoComplete="false" placeholder="Enter your name" name="username" />
                    <input type="email" required autoComplete="false" placeholder="Enter your email" name="email" className="form-control" />
                    <textarea className="form-control" rows="10" placeholder="Enter your message" name="message" required autoComplete="false"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}