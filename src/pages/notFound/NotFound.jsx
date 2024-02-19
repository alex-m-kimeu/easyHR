import { useNavigate } from "react-router-dom";
import error from "../../assets/404.svg"

export const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/employee');
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <img src={error} alt="404" className="w-full max-w-md sm:max-w-md mx-auto mb-4" />
            <button onClick={goBack} className="px-4 py-2 bg-green text-white rounded">Go Back</button>
        </div>
    );
};