interface ITimeLineSection {
    year: string;
    paragraphs: string[];
}

export function TimelineSection({ year, paragraphs }: ITimeLineSection) {
    return (
        <div className="bg-gradient-to-r from-[#f4e9f5] to-white px-10 w-full sm:w-1/2 flex flex-col justify-center gap-4 sm:gap-[5%]">
            <h1 className="text-[#cba0d1] text-3xl font-bold text-center sm:text-left">{year}</h1>
            {paragraphs.map((text, idx) => (
                <p key={idx} className="text-center sm:text-left">{text}</p>
            ))}
        </div>
    );
}
