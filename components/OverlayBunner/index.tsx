interface IOverlayBunnerProps {
    bg: string
}

export default function OverlayBunner ({ bg }:IOverlayBunnerProps) {
    return(
        <div className={`w-80 md:w-[728px] h-20 md:h-[123px] ${bg} flex justify-center items-center text-end px-8 md:px-16 font-semibold text-sm md:text-2xl rounded-sm`}>
            <p>Produtos desenvolvidos pelas mulheres do IMMU com intuito de transformar vidas</p>
        </div>  
    )
}