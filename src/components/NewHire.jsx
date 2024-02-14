import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewHire() {
    const history = useHistory();

    const [formData, setformData] = useState({
        name: "",
        email: "",
        department: "",
        role: "",
        profilePic: "",
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        history.push('/')
        setformData({
            name: "",
            email: "",
            department: "",
            role: "",
            profilePic: "",
        })
    }

    function handleChange(e) {
        setformData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }
    
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-96 h-80.5 shadow-lg m-8 rounded-lg p-4">
                <h2 className="text-center text-dark font-sans font-medium text-lg mb-1">Add New Hire</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="mb-6">
                        <input 
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-dark  placeholder-green outline-none"
                        type="text" 
                        id='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Employees name..."
                    />
                    </div>
                    <div className="mb-6">
                        <input
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-dark   placeholder-green outline-none" 
                        type="text" 
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Employees email..."
                    />
                    </div>
                    <div className="mb-6">
                        <input
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-dark   placeholder-green outline-none"
                        type="text"
                        id='department'
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Department..."
                        />
                    </div>
                    <div className="mb-6">
                        <input
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-dark   placeholder-green outline-none"
                        type="text"
                        id='role'
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Role..."
                        />
                    </div>
                    <div className="mb-6">
                        <input
                        className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-dark   placeholder-green outline-none"
                        type="text" 
                        id='profilePic'
                        value={formData.profilePic}
                        onChange={handleChange}
                        placeholder="Profile Pic URL..."
                        />
                    </div>
                    <button type='submit' className="mb-6 bg-green text-white px-5 py-2">Add</button>
                </form>
            </div>
        </div>        
    );
}

export default NewHire;