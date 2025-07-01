const LANGUAGES = { fr: "Français", es: "Español", en: "English" };
let language = "fr";
let currentPage = 0;

let pages = JSON.parse(localStorage.getItem("savedPages")) || [
  {
    title: {
      fr: "Accueil",
      es: "Inicio",
      en: "Home"
    },
    content: [
      {
        type: "text",
        value: {
          fr: "<div class=\"presentation-box\"><h3>💝 Présentation</h3><p><span class=\"program-name\">En Bonne Compagnie</span> est un programme bâti afin de lutter contre la démence chez notre population âgée.</p></div><div class=\"key-points\"><div class=\"key-point\"><h3>🤝 Approche</h3><p>Planifier des visites amicales pour nos ainés vivant avec une démence ou à risque de le développer.</p></div><div class=\"key-point\"><h3>🎯 Objectif</h3><p>En réduisant la solitude, l'objectif serait de ralentir, ou prévenir la progression de ces maladies.</p></div><div class=\"key-point\"><h3>💫 Les Services</h3><p>--Gratuit--<br>Visant les quartiers du Centre et du Centre-Est de Montréal<br>En Français, Anglais ou Espagnol</p></div></div>",
          es: "<div class=\"presentation-box\"><h3>💝 Presentación</h3><p><span class=\"program-name\">En Bonne Compagnie</span> es un programa creado para luchar contra la demencia en nuestra población mayor.</p></div><div class=\"key-points\"><div class=\"key-point\"><h3>🤝 Enfoque</h3><p>Planificar visitas amistosas para nuestros mayores que viven con demencia o que están en riesgo de desarrollarla.</p></div><div class=\"key-point\"><h3>🎯 Objetivo</h3><p>Al reducir la soledad, el objetivo sería frenar o prevenir la progresión de estas enfermedades.</p></div><div class=\"key-point\"><h3>💫 Servicios</h3><p>--Gratuito--<br>Dirigido a los barrios del Centro y Centro-Este de Montreal<br>En francés, inglés o español</p></div></div>",
          en: "<div class=\"presentation-box\"><h3>💝 Presentation</h3><p><span class=\"program-name\">En Bonne Compagnie</span> is a program built to fight against dementia in our elderly population.</p></div><div class=\"key-points\"><div class=\"key-point\"><h3>🤝 Approach</h3><p>Plan friendly visits for our seniors living with dementia or at risk of developing it.</p></div><div class=\"key-point\"><h3>🎯 Objective</h3><p>By reducing loneliness, the goal would be to slow down or prevent the progression of these diseases.</p></div><div class=\"key-point\"><h3>💫 Services</h3><p>--Free--<br>Serving the Central and East-Central districts of Montreal<br>In French, English, or Spanish</p></div></div>"
        }
      },
      {
        type: "text",
        value: {
          fr: "<h2>Contexte scientifique</h2>",
          es: "<h2>Contexto científico</h2>",
          en: "<h2>Scientific Context</h2>"
        }
      },
      {
        type: "text",
        value: {
          fr: "Une étude de la revue Neurology a démontré que la solitude pouvait augmenter significativement le risque de développer une démence sur 10 ans (Salinas et al., 2022), comme illustré par le graphique ci-dessous.",
          es: "Un estudio de la revista Neurology demostró que la soledad puede aumentar significativamente el riesgo de desarrollar demencia en 10 años (Salinas et al., 2022), como se ilustra en el gráfico a continuación.",
          en: "A study in the journal Neurology showed that loneliness could significantly increase the risk of developing dementia over 10 years (Salinas et al., 2022), as illustrated by the graph below."
        }
      },
      {
        type: "textImage",
        value: {
          text: {
            fr: "",
            es: "",
            en: ""
          },
          image: { fr: "assets/figure_1.png", es: "assets/figure_1.png", en: "assets/figure_1.png" }
        }
      },
      {
        type: "text",
        value: {
          fr: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0.",
          es: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0.",
          en: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0."
        }
      },
      {
        type: "text",
        value: {
          fr: "La revue \"The Journals of Gerontology\", dans une étude avec 1905 participants, a démontré que la solitude était un facteur de risque important dans le développement d\'une démence (Sundström et al., 2020). Dans cette étude, 27% des participants ne vivant pas avec un sentiment solitude ont développé une démence lors d\'un suivi. Le pourcentage augmente à 48% lorsque les participants ressentaient souvent un sentiment de solitude.",
          es: "La revista \"The Journals of Gerontology\", en un estudio con 1905 participantes, demostró que la soledad fue un factor de riesgo importante en el desarrollo de demencia (Sundström et al., 2020). En este estudio, el 27% de los participantes que no vivían con sentimiento de soledad desarrollaron demencia durante el seguimiento. El porcentaje aumenta al 48% cuando los participantes sentían a menudo un sentimiento de soledad.", // Placeholder translation
          en: "The journal \"The Journals of Gerontology\", in a study with 1905 participants, showed that loneliness was a significant risk factor in the development of dementia (Sundström et al., 2020). In this study, 27% of participants not living with a feeling of loneliness developed dementia during follow-up. The percentage increases to 48% when participants often felt a feeling of loneliness.", // Placeholder translation
        }
      },
      {
        type: "textImage",
        value: {
          text: {
            fr: "",
            es: "",
            en: ""
          },
          image: { fr: "assets/table_2.png", es: "assets/table_2.png", en: "assets/table_2.png" }
        }
      },
      {
        type: "text",
        value: {
          fr: "Sundström, A., Adolfsson, A. N., Nordin, M., & Adolfsson, R. (2020). Loneliness Increases the Risk of All-Cause Dementia and Alzheimer's Disease. The journals of gerontology. Series B, Psychological sciences and social sciences, 75(5), 919–926. <a href=\"https://doi.org/10.1093/geronb/gbz139\">https://doi.org/10.1093/geronb/gbz139</a>",
          es: "Sundström, A., Adolfsson, A. N., Nordin, M., & Adolfsson, R. (2020). Loneliness Increases the Risk of All-Cause Dementia and Alzheimer's Disease. The journals of gerontology. Series B, Psychological sciences and social sciences, 75(5), 919–926. <a href=\"https://doi.org/10.1093/geronb/gbz139\">https://doi.org/10.1093/geronb/gbz139</a>", // Placeholder translation
          en: "Sundström, A., Adolfsson, A. N., Nordin, M., & Adolfsson, R. (2020). Loneliness Increases the Risk of All-Cause Dementia and Alzheimer's Disease. The journals of gerontology. Series B, Psychological sciences and social sciences, 75(5), 919–926. <a href=\"https://doi.org/10.1093/geronb/gbz139\">https://doi.org/10.1093/geronb/gbz139</a>", // Placeholder translation
        }
      }
    ]
  },
  {
    title: {
      fr: "À Propos",
      es: "Sobre Nosotros",
      en: "About Us"
    },
    content: [
      {
        type: "splitText",
        value: {
          left: {
            fr: "<h2>À Propos de Moi</h2><p>Bonjour!</p><p>Je m'appelle Patrick O'Connor, j'ai 27 ans et je suis un étudiant de l'Université de Montréal poursuivant une maîtrise en sciences du vieillissement.</p><p>J'ai décidé de commencer ce projet après avoir travaillé avec Judy Bedell (<a href=\"https://www.agingisgood.ca/\" target=\"_blank\">agingisgood.ca</a>) auprès de nos aînés vivant avec la démence dans le centre de retraite Riverpath d'Ottawa.</p><p>J'ai appris beaucoup, et je crois qu'avec cette expérience j'ai le potentiel de faire une différence positive. Que ce soit une visite amicale, une marche à l'extérieur, ou partager un café, je crois fortement qu'avoir de la compagnie, pour même un petit moment, peut faire une grande différence.</p><div class='certifications-block'><span class=\"certification-hover\">Formation MoCA (Montreal Cognitive Assessment)<img src=\"assets/moca_certification.png.png\" class=\"hover-image\" alt=\"Certification MoCA\"></span><span class=\"certification-hover\">Curriculum Vitae<img src=\"assets/Français_CV.jpg\" class=\"hover-image\" alt=\"Curriculum Vitae\"></span><span class=\"certification-hover\">Vérifications d'antécédents<img src=\"assets/casier.jpg\" class=\"hover-image\" alt=\"Vérifications d'antécédents\"></span></div>",
            es: "<h2>Sobre Nosotros</h2><p>¡Hola!</p><p>Mi nombre es Patrick O'Connor, tengo 27 años y soy estudiante de la Universidad de Montreal persiguiendo una maestría en ciencias del envejecimiento.</p><p>Decidí comenzar este proyecto después de trabajar con Judy Bedell (<a href=\"https://www.agingisgood.ca/\" target=\"_blank\">agingisgood.ca</a>) con nuestros mayores que viven con demencia en el centro de retiro Riverpath en Ottawa.</p><p>Aprendí mucho, y creo que con esta experiencia tengo el potencial de hacer una diferencia positiva. Ya sea una visita amistosa, una caminata al aire libre, o compartir un café, creo firmemente que tener compañía, aunque sea por un momento, puede hacer una gran diferencia.</p><div class='certifications-block'><span class=\"certification-hover\">Formación MoCA (Montreal Cognitive Assessment)<img src=\"assets/moca_certification.png.png\" class=\"hover-image\" alt=\"Certificación MoCA\"></span><span class=\"certification-hover\">Curriculum Vitae<img src=\"assets/Français_CV.jpg\" class=\"hover-image\" alt=\"Curriculum Vitae\"></span><span class=\"certification-hover\">Antecedentes penales<img src=\"assets/casier.jpg\" class=\"hover-image\" alt=\"Antecedentes penales\"></span></div>",
            en: "<h2>About Me</h2><p>Hello!</p><p>My name is Patrick O'Connor, I am 27 years old and a student at the University of Montreal pursuing a master's in aging sciences.</p><p>I decided to start this project after working with Judy Bedell (<a href=\"https://www.agingisgood.ca/\" target=\"_blank\">agingisgood.ca</a>) with our seniors living with dementia at the Riverpath retirement center in Ottawa.</p><p>I learned a lot, and I believe that with this experience I have the potential to make a positive difference. Whether it's a friendly visit, a walk outside, or sharing a coffee, I strongly believe that having company, even for a short moment, can make a big difference.</p><br><br><div class='certifications-block'><span class=\"certification-hover\">MoCA certification (Montreal Cognitive Assessment)<img src=\"assets/moca_certification.png.png\" class=\"hover-image\" alt=\"MoCA Certification\"></span><span class=\"certification-hover\">Curriculum Vitae<img src=\"assets/Français_CV.jpg\" class=\"hover-image\" alt=\"Curriculum Vitae\"></span><span class=\"certification-hover\">Police Record Check<img src=\"assets/casier.jpg\" class=\"hover-image\" alt=\"Police Record Check\"></span></div>",
          },
          right: {
            fr: "<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"><p>Mon rêve serait de pouvoir apporter un impact réel, pas juste pour nos aînés, mais pour leurs amis et leur famille aussi. Je crois en ce projet, et j'ai bien hâte de voir le changement qu'il peut apporter.</p><p>Vous pouvez m'écrire pour en savoir plus aux: (819)962-4989, patrick.oconnor@umontreal.ca</p>",
            es: "<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"><p>Mi sueño sería poder tener un impacto real, no solo para nuestros mayores, sino también para sus amigos y familiares. Creo en este proyecto, y estoy ansioso por ver el cambio que puede traer.</p><p>Puede escribirme para saber más a: (819)962-4989, patrick.oconnor@umontreal.ca</p>",
            en: "<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"><p>My dream would be to be able to make a real impact, not just for our seniors, but for their friends and families too. I believe in this project, and I am looking forward to seeing the change it can bring.</p><p>You can write to me to learn more at: (819)962-4989, patrick.oconnor@umontreal.ca</p>"
          }
        }
      }
    ]
  },
  {
    title: {
      fr: "Horaire",
      es: "Horario",
      en: "Schedule"
    },
    content: [
      {
        type: "text",
        value: {
          fr: "<h2>Disponibilités</h2><p>Vous pouvez réserver l'heure souhaitée à l'aide du calendrier ci-dessous. Pour toutes questions vous pouvez me rejoindre au (819)962-4989 ou par courriel : patrick.oconnor@umontreal.ca</p>",
          es: "<h2>Disponibilidad</h2><p>Puede reservar la hora deseada a través del calendario a continuación. Para cualquier pregunta, puede comunicarse conmigo al (819)962-4989 o por correo electrónico : patrick.oconnor@umontreal.ca</p>",
          en: "<h2>Availability</h2><p>You can book your desired time using the calendar below. For any questions, you can contact me at (819)962-4989 or by email : patrick.oconnor@umontreal.ca</p>",
        }
      },
      {
        type: "text",
        value: {
          fr: "",
          es: "",
          en: "",
        }
      },
      {
        type: "text",
        value: {
          fr: "",
          es: "",
          en: "",
        }
      },
      {
        type: "text",
        value: {
          fr: "",
          es: "",
          en: "",
        }
      },
      {
        type: "text",
        value: {
          fr: "<iframe src=\"https://calendly.com/fcbarca8-oc/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>",
          es: "<iframe src=\"https://calendly.com/fcbarca8-oc/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>",
          en: "<iframe src=\"https://calendly.com/fcbarca8-oc/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>"
        }
      }
    ]
  }
];

function renderLanguageButtons() {
  const selectElement = document.getElementById("languageSelect");
  selectElement.innerHTML = ''; // Clear existing options
  Object.entries(LANGUAGES).forEach(([code, label]) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = label;
    if (code === language) {
      option.selected = true;
    }
    selectElement.appendChild(option);
  });
  selectElement.onchange = (e) => {
    language = e.target.value;
    render();
  };
}

function renderPageButtons() {
  const container = document.getElementById("pageButtons");
  container.innerHTML = '';
  pages.forEach((page, i) => {
    const btn = document.createElement("button");
    btn.textContent = page.title[language] || "Untitled";
    btn.className = i === currentPage ? "active-page" : "";
    btn.onclick = () => {
      currentPage = i;
      render();
    };
    container.appendChild(btn);
  });
}

function renderContent() {
  const page = pages[currentPage];
  const container = document.getElementById("pageContent");
  container.innerHTML = '';

  page.content.forEach((el, i) => {
    if (el.type === "text") {
      const textElement = document.createElement('div');
      textElement.innerHTML = el.value[language];
      container.appendChild(textElement);
    } else if (el.type === "splitText") {
      const splitDiv = document.createElement("div");
      splitDiv.className = "split";
      const left = document.createElement('div');
      const right = document.createElement('div');
      left.innerHTML = el.value.left[language];
      right.innerHTML = el.value.right[language];
      splitDiv.appendChild(left);
      splitDiv.appendChild(right);
      container.appendChild(splitDiv);
    } else if (el.type === "textImage") {
      const textImageBlock = document.createElement('div');
      const textElement = document.createElement('div');
      textElement.innerHTML = el.value.text[language];

      textImageBlock.appendChild(textElement);

      if (el.value.image[language]) {
        const img = document.createElement("img");
        img.src = el.value.image[language];
        textImageBlock.appendChild(img);
      }
      container.appendChild(textImageBlock);
    }
  });
}

function render() {
  renderLanguageButtons();
  renderPageButtons();
  renderContent();
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  render();

  // Tap-to-reveal for key-points on mobile
  function enableKeyPointTap() {
    if (window.innerWidth > 768) return;
    document.querySelectorAll('.key-point').forEach(function(box) {
      box.onclick = function(e) {
        // Only allow one open at a time
        document.querySelectorAll('.key-point').forEach(function(other) {
          if (other !== box) other.classList.remove('active');
        });
        box.classList.toggle('active');
      };
    });
  }

  // Tap-to-reveal for certification-hover (hover-image) on mobile
  function enableCertificationTap() {
    if (window.innerWidth > 768) return;
    document.querySelectorAll('.certification-hover').forEach(function(el) {
      el.onclick = function(e) {
        e.stopPropagation();
        // Only allow one open at a time
        document.querySelectorAll('.certification-hover').forEach(function(other) {
          if (other !== el) other.classList.remove('active');
        });
        el.classList.toggle('active');
      };
    });
    // Close on outside tap
    document.body.addEventListener('click', function() {
      document.querySelectorAll('.certification-hover').forEach(function(el) {
        el.classList.remove('active');
      });
    });
    // Prevent closing when clicking inside
    document.querySelectorAll('.hover-image').forEach(function(img) {
      img.onclick = function(e) { e.stopPropagation(); };
    });
  }

  // Re-enable tap logic after each render
  function afterRender() {
    enableKeyPointTap();
    enableCertificationTap();
  }

  // Patch renderContent to call afterRender
  const origRenderContent = renderContent;
  renderContent = function() {
    origRenderContent();
    afterRender();
  };

  // Initial enable
  afterRender();

  // Re-enable on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
      enableKeyPointTap();
      enableCertificationTap();
    }
  });
});
