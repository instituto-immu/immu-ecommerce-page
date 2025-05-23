interface IHeadlineBunnerProps {
    contentText: string;
    textColor: string;
    textColorSec: string;
}

export default function Headline ({ contentText, textColor, textColorSec }:IHeadlineBunnerProps) {
    return(
        <div className='text-right'>
            <p className={`${textColorSec} text-2xl md:text-5xl`}>{contentText}</p>
            <h1 className={`text-[${textColor}] text-4xl md:text-7xl font-medium`}>Aromas da Ester</h1>
        </div>
    )
}