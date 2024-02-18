import error from "../../assets/404.svg"

export const NotFound = () => {
    return (
        <div className="min-h-screen flex items-start justify-center sm:mt-20 mt-10">
            <img src={error} alt="404" className="w-full max-w-md sm:max-w-md mx-auto" />
        </div>
    );
};