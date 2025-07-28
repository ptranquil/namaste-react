const Contact = () => {
    return (
        <div className="m-5">
            <h1 className="font-bold text-3xl">Contact us</h1>
            <div className="m-5">
                <label>Name : </label>
                <input className="p-2 border-2 rounded-2xl border-gray-200" type="text" name="name" placeholder="Enter your name"></input>
            </div>
            <div className="m-5">
                <label>Phone : </label>
                <input className="p-2 border-2 rounded-2xl border-gray-200" type="text" name="phone" placeholder="Enter your phone"></input>
            </div>
            <div className="m-5">
                <input className="bg-green-500 hover:bg-green-600 text-white font-medium px-3 py-1 rounded-lg" type="submit" value="submit"></input>
            </div>
        </div>
    )
}

export default Contact;