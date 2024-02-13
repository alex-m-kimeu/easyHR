function NewHire() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-96 h-80.5 shadow-lg m-8 rounded-lg p-4">
                <h2 className="text-center text-dark font-sans font-medium text-lg mb-1">Add New Hire</h2>
                <form className="flex flex-col justify-evenly">
                    <div className="mb-6">
                        <input 
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm  placeholder-green outline-none"
                        type="text" 
                        placeholder="Employees name..."
                    />
                    </div>
                    <div className="mb-6">
                        <input
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm  placeholder-green outline-none" 
                        type="text" 
                        placeholder="Employees email..."
                    />
                    </div>
                    <div className="mb-6">
                        <input
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm  placeholder-green outline-none"
                        type="text"
                        placeholder="Department..."
                        />
                    </div>
                    <div className="mb-6">
                        <input
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm  placeholder-green outline-none"
                        type="text"
                        placeholder="Role..."
                        />
                    </div>
                    <div className="mb-6">
                        <input
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm  placeholder-green outline-none"
                        type="text" 
                        placeholder="Profile Pic URL..."
                        />
                    </div>
                    <button className="mb-6 bg-green text-white px-5 py-2">Add</button>
                </form>
            </div>
        </div>        
    );
}

export default NewHire;