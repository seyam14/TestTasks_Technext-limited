const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <div>
            <img className="h-30 w-80" src="https://i.ibb.co/6HdstPk/Error-Animation.gif" />
        </div>
        <div className="m-6 ">
            <p className="text-4xl "> Loading Error ........  </p>
            <a href="/"><button className="btn btn-neutral"> Go Back Home</button></a>
            
        </div>
    </div>
);
};

export default ErrorPage;