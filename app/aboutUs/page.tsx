import Image from "next/image";

import { photo2021, photo2022, photo2023, photo2024 } from "@immu/assets";
import { TimelineSection } from "@immu/components/TimelineSection";

export default function AboutUs() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl font-bold my-10 text-center">Quem Somos Nós</h1>
      <div className="flex flex-col border-l-4 border-l-[#DB8CE8] mb-20">
        
        {/* 2021 */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-[10%] mb-10">
          <TimelineSection
            year="2021"
            paragraphs={[
              "Os atendimentos ofertados no Instituto Manancial Mãos Unidas (IMMU) para as Assistidas quando iniciamos eram terapêuticos, arteterapia, artesanato, jurídico, nutricional, social, psicossocial e em grupos de rodas de conversas.",
              "Dentre nossos valores estão a Ética, Justiça, Honestidade, Sororidade, Solidariedade, Responsabilidade Social e Comprometimento com a transformação da realidade das pessoas que acolhemos.",
              "Tudo isso para contribuir para a mudança de vida pessoal, social e financeira das mulheres que atendemos em situação de vulnerabilidade e risco social.",
              "Salientamos que além do acolhimento, é possível encontrar no IMMU uma rede de apoio que auxilia na capacitação para gerar renda e trazer independência em todas as áreas de sua vida, além de contribuir para a auto estima delas.",
            ]}
          />
          <div className="w-full sm:w-1/2">
            <Image
              src={photo2021}
              width={700}
              height={700}
              alt="Ester (fundadora do IMMU)."
              className="w-full rounded-lg"
            />
            <p className="my-5 text-center">
              <strong>Foto 1:</strong> {"Ester (fundadora do IMMU)."}
            </p>
          </div>
        </div>

        {/* 2022 */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-[10%] mb-10">
          <TimelineSection 
            year="2022" 
            paragraphs={[
              "Em Dois Mil e Vinte Dois demos continuidade nas atividades com as Assistidas, potencializando a rede de apoio e os projetos em execução ofertados.",
              "Nesse mesmo ano também alcançamos outra conquista. Tivemos oportunidade de receber um prêmio de 15 mil reais de um concurso da \"Cuida de quem cuida\", do Espírito Santo, cujo o objetivo era a capacitação de mulheres empreendedoras. Quem patrocinou essa aceleração foi a Nívea e ajudou na administração do prêmio, com isso foi possível contribuir com obras para a reforma do IMMU.",
              "Além disso a Nívea também deu brindes para o piquenique de final de ano para as mulheres do Instituto."
            ]}              
          />
          <div className="w-full sm:w-1/2">
            <Image
              src={photo2022}
              width={700}
              height={700}
              alt="Foto 1 (direita para esquerda): Brindes do piquenique de final de ano, patrocinado pela Nívea. Foto 2: Projeto de Inglês para crianças e adolescentes. Foto 3: Atendimento  em grupo com nutricionista, Projeto Vida. Foto 4: Atendimento com a psicologa no IMMU."
              className="w-full rounded-lg"
            />
            <p className="my-5 text-center">
              <strong>Foto 1, direita para esquerda:</strong> Brindes do
              piquenique de final de ano, patrocinado pela Nívea.
              <strong>Foto 2:</strong> Projeto de Inglês para crianças e
              adolescentes. <strong>Foto 3:</strong> Atendimento em grupo com
              nutricionista, Projeto Vida. <strong>Foto 4:</strong> Atendimento
              com a psicologa no IMMU.
            </p>
          </div>
        </div>

        {/* 2023 */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-[10%] my-10">
          <TimelineSection 
            year="2023" 
            paragraphs={[
              "Percebendo a necessidade de ampliação dos projetos para contribuir com a independência das Assistidas e capacitação das mesmas, ampliamos mais um pouco, e iniciamos os cursos profissionalizantes na área de gastronomia, beleza e artesanato.",
              "Foram criadas várias oficinas de artesanatos que contribuíram e potencializaram a renda de muitas mulheres. Sendo uma das fontes de renda do IMMU, através da confecção de produtos expostos nas feiras, além do brechó solidário.",
              "Além disso fomos convidados para de falar sobre a importância do empreendedorismo para mulheres no programa Estúdio 360, da TV Capixaba."
            ]}                       
          />
          <div className="w-full sm:w-1/2">
            <Image
              src={photo2023}
              width={700}
              height={700}
              alt="Foto 1 (direita para esquerda): Tratamento de pele feito no IMMU. Foto 2:  Primeira aparição na TV, onde foi levado os produtos confeccionados nas oficinas. Foto 3: Realização do curso de gastronomia."
              className="w-full rounded-lg"
            />
            <p className="my-5 text-center">
              <strong>Foto 1, direita para esquerda:</strong> Tratamento de pele
              feito no IMMU. <strong>Foto 2:</strong> Primeira aparição na TV,
              onde foi levado os produtos confeccionados nas oficinas.{" "}
              <strong>Foto 3:</strong> Realização do curso de gastronomia.
            </p>
          </div>
        </div>

        {/* 2024 */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-[10%]">
          <TimelineSection 
            year="2024" 
            paragraphs={[
              "Mais uma vez tivemos a oportunidade de mostrar o trabalho realizado pelo instituto aparecendo novamente no programa Estúdio 360, dessa vez para falar sobre mulheres em situação de vulnerabilidade e risco social. A ideia foi evidenciar a importância de instituições e programas que acolhem essas mulheres através do empreendedorismo.",
              "Nosso objetivo é proporcionar um espaço que ofereça oportunidades para transformar a vida de mulheres e suas famílias através de programas, projetos e serviços, Contribuindo tanto para a transformação delas, de forma interna e pessoal, quanto como resultado externo que engloba a sociedade, governo e família no âmbito geral."
            ]}                                 
          />
          <div className="w-full sm:w-1/2">
            <Image
              src={photo2024}
              width={700}
              height={700}
              alt="Fotos de mulheres assistidas pelo IMMU que participam do projeto social "
              className="w-full rounded-lg"
            />
            <p className="my-5 text-center">
              <strong>Foto 1:</strong> {"(direita para esquerda): Fotos de mulheres assistidas pelo IMMU que participam do projeto social Ler e Escrever. "}
              <strong>Foto 2:</strong> {"Segundo convite da TV Capixaba para falar de mulheres no empreendedorismo."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
