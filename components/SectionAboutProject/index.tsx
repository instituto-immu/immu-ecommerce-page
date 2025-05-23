import { Button } from "@immu/@/components/ui/button";
import { mosaico } from "@immu/assets";
import Image from "next/image";


export function AbountProject () {
    return(
        <>
         <div className="w-full flex items-center justify-center"> 
          <section className="w-full h-[467px] flex items-center justify-center gap-[112px]">
              <div className="flex flex-col justify-center w-[460px] gap-[40px] h-full">
                <h1 className="text-3xl font-bold">Conheça mais sobre o projeto</h1>
                <div className="flex flex-col gap-[56px]">
                  <div className="flex flex-col gap-8" >
                    <p>
                      O Instituto Manancial Mãos Unidas foi fundado por Ester e Lídia, mãe
                      e filha, que tem como objetivo transformar a sociedade em um lugar
                      melhor através da oportunidade.
                    </p>
                    <p>
                      Iniciaram o trabalho com vinte mulheres com arte terapia,artesanato
                      e atendimento em grupo.
                    </p>
                  </div>
                  <Button size="lg" className="font-bold text-lg bg-[#3D3D37] w-full">
                    Quero doar
                  </Button>
                </div>
              </div>

              <div className="w-[577px] h-full flex items-center justify-center">
                <Image src={mosaico}  style={{ width: "100%", height: "auto" }} priority alt="fotos das pessoas da instituição em seu dia-a-dia" className="" />
              </div>
            </section>
        </div>
        </>
    )
}