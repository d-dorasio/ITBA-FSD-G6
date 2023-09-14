import React from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Box } from "@mui/material";


function HomeBanking() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} />
        <div className="main-container">
          <main>
            <section>
              <img src="" alt="Baner Ilustrativo" width="100%" />
              <h1>
                <strong>Bienvenido a ITBANK</strong>
              </h1>
              <p>
                {" "}
                Somos una institución financiera comprometida con la excelencia
                en servicios bancarios y la satisfacción del cliente. A través
                de décadas de experiencia, hemos construido una reputación
                sólida como un socio confiable para todas tus necesidades
                financieras.
              </p>
              <h2>Nuestra Misión:</h2>
              <p>
                En ITBANK, nuestra misión es brindar soluciones financieras
                innovadoras y accesibles que enriquezcan la vida de nuestros
                clientes y contribuyan al desarrollo de nuestras comunidades.
              </p>
              <h2>Nuestros valores:</h2>
              <ul>
                <li>
                  Integridad: Actuamos con honestidad y transparencia en todo lo
                  que hacemos.
                </li>
                <li>
                  Excelencia: Buscamos la mejora continua y la calidad en cada
                  aspecto de nuestros servicios.
                </li>
                <li>
                  Empatía: Escuchamos y comprendemos las necesidades de nuestros
                  clientes para brindar soluciones personalizadas.
                </li>
                <li>
                  Innovación: Adoptamos la tecnología y las nuevas ideas para
                  ofrecer experiencias bancarias modernas y convenientes.
                </li>
              </ul>
              <h2>Nuestros servicios:</h2>
              <ul>
                <li>Cuentas Bancarias</li>
                <li>Préstamos Personales y Hipotecarios</li>
                <li>Tarjetas de Crédito y Débito</li>
                <li>Banca en Línea y Móvil</li>
                <li>Inversiones y Planificación Financiera</li>
              </ul>
              <h2>Compromiso social:</h2>
              <p>
                Creemos en hacer una diferencia en nuestras comunidades.
                Participamos en proyectos de responsabilidad social que abordan
                desafíos locales y fomentan el bienestar.
              </p>
              <h2>Innovación Tecnológica:</h2>
              <p>
                Nos esforzamos por estar a la vanguardia de la tecnología
                financiera, brindando a nuestros clientes experiencias bancarias
                seguras y sin complicaciones a través de nuestras plataformas en
                línea y móviles.
              </p>
              <p>
                En ITBANK, tu éxito financiero es nuestro objetivo. Nos
                enorgullece ser tu socio confiable en cada paso del camino.
                Gracias por considerarnos como tu banco de elección.
              </p>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomeBanking;
