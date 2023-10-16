import "./App.css";
import { Header } from "./components/Header";
import headerImg from "./assets/headerimg.jpg";
// import { IconSection } from "./components/icon/indes";
import { Description } from "./components/DescriptionSection/index";
import dog1Img from "./assets/dog1.jpg";
import dog2Img from "./assets/dog2.jpg";
import dog3Img from "./assets/dog3.jpg";
import footerImg from "./assets/footerImg.jpg";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ContainerIconSection } from "./components/IconSection/styles";
import { IconSection } from "./components/IconSection/indes";
import { DivDesc } from "./components/DescriptionSection/styles";

export function App() {
  return (
    <>
      <div>
        <Header src={headerImg} text="Doguinhos"></Header>
        <main>
          <ContainerIconSection>
            <IconSection
              icon="desktop"
              title="Somente para desktop"
              text="Vamos aprender, como utilizar um framework."
            />
            <IconSection
              icon="stack"
              title="Criado com componentes"
              text="Utilizamos o Styled Components."
            />
            <IconSection
              icon="check"
              title="Facil aproveitamento"
              text="Estamos no caminho."
            />
          </ContainerIconSection>
          <DivDesc>
            <Description
              title="O cachorro"
              text="'E um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano. Teorias postulam que surgiu do lobo cinzento no continente asiático há mais de 100 000 anos. Ao longo dos séculos, através da domesticação, o ser humano realizou uma seleção artificial dos cães por suas aptidões, características físicas ou tipos de comportamento. O resultado foi uma grande diversidade de raças caninas, as quais variam em pelagem e tamanho dentro de suas próprias raças, atualmente classificadas em diferentes grupos ou categorias. "
              img={dog1Img}
            />
            <Description
              title="O olfato"
              text="Pode parecer estranho, mas esta é uma capacidade dos cães! Os narizes dos cachorros possuem células olfativas com características impressionantes: a capacidade de cheirar com suas narinas de forma independente. Assim, os cães podem perceber com mais clareza de onde vêm os cheiros: se do lado esquerdo ou do direito. Funciona, mais ou menos, como nossos ouvidos. Podemos perceber quando um som vem da direita ou da esquerda, correto? O mesmo ocorre com o olfato canino!"
              img={dog2Img}
            />
            <Description
              title="A audicao"
              text="Ao menos no que diz respeito à parte interna, o aparelho auditivo canino é muito parecido com o nosso. Isto é, assim como a gente, os cães também contam com tímpano e um conjunto de ossículos que vibram, enviando sinais ao nervo auditivo.Mas, apesar da semelhança anatômica interna, a audição canina é bem mais aguçada: enquanto nós somos capazes de captar vibrações entre 20 e 20.000 hertz, os cães as captam entre 15 e 40.000 hertz."
              img={dog3Img}
            />
          </DivDesc>

          <Contact src={footerImg} text="Contato" />
        </main>
        <Footer
          text={["About", "Contact", "Terms of Use", "Privacy Policy"]}
          rights="Your website 2020. All Rights Reserved"
          // facebookIcon={facebookIcon}
          // twitterIcon={twitterIson}
          // instagramIcon={instagramIcon}
        />
      </div>
    </>
  );
}
