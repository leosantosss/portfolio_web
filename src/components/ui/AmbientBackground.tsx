export const AmbientBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[8%] left-[15%] w-[500px] h-[500px] bg-accent/25 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute top-[28%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent/20 rounded-full blur-[150px] mix-blend-screen" />
            <div className="absolute top-[85%] right-[20%] w-[450px] h-[450px] bg-accent/15 rounded-full blur-[130px] mix-blend-screen" />
        </div>
    );
};
