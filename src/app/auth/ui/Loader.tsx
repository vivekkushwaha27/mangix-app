export default function Loader() {
    const letters = [
        { char: "M", color: "text-red-500" },
        { char: "A", color: "text-orange-500" },
        { char: "N", color: "text-yellow-500" },
        { char: "A", color: "text-green-500" },
        { char: "G", color: "text-cyan-500" },
        { char: "I", color: "text-blue-500" },
        { char: "X", color: "text-purple-500" },
    ];

    return (
        <div
            className="
                fixed
                inset-0
                z-[9999]

                flex
                items-center
                justify-center

                bg-black/20
                backdrop-blur-sm
            "
        >
            <div className="flex text-5xl font-extrabold tracking-wider">
                {letters.map((letter, index) => (
                    <span
                        key={index}
                        className={`
                            ${letter.color}
                            animate-typing-glow
                        `}
                        style={{
                            animationDelay: `${index * 0.2}s`,
                        }}
                    >
                        {letter.char}
                    </span>
                ))}
            </div>
        </div>
    );
}