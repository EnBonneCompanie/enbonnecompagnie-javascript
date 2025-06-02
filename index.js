const LANGUAGES = { fr: "Français", es: "Español", en: "English" };
let language = "fr";
let currentPage = 0;

let pages = JSON.parse(localStorage.getItem("savedPages")) || [
  {
    title: {
      fr: "Présentation",
      es: "Presentación",
      en: "Presentation"
    },
    content: [
      {
        type: "text",
        value: {
          fr: "<h2>Présentation</h2>",
          es: "<h2>Presentación</h2>",
          en: "<h2>Presentation</h2>"
        }
      },
      {
        type: "text",
        value: {
          fr: "En bonne compagnie est un programme bâti afin de lutter contre la démence chez notre population âgée. Ce service a pour but d'aider nos aînés vivant avec une démence, ou ceux à risque de le développer en leur offrant de la compagnie/des visites amicales. Plusieurs études démontrent que la solitude accroît l'incidence de démence. En réduisant la solitude, l'objectif serait de ralentir, ou prévenir la progression de ces maladies.",
          es: "En Bonne Compagnie es un programa diseñado para combatir la demencia en nuestra población de edad avanzada. Este servicio tiene como objetivo ayudar a nuestros mayores que viven con demencia, o aquellos en riesgo de desarrollarla, ofreciéndoles compañía/visitas amistosas. Varios estudios demuestran que la soledad aumenta la incidencia de demencia. Al reducir la soledad, el objetivo sería ralentizar o prevenir la progresión de estas enfermedades.",
          en: "En Bonne Compagnie is a program built to combat dementia in our elderly population. This service aims to help our seniors living with dementia, or those at risk of developing it, by offering them companionship/friendly visits. Several studies show that loneliness increases the incidence of dementia. By reducing loneliness, the goal would be to slow down or prevent the progression of these diseases."
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
            fr: "A. Incident dementia, overall",
            es: "A. Demencia incidente, general",
            en: "A. Incident dementia, overall"
          },
          image: { fr: "assets/figure_1.png", es: "assets/figure_1.png", en: "assets/figure_1.png" } // Image data will go here
        }
      },
      {
        type: "text",
        value: {
          fr: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0.",
          es: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0.", // Placeholder translation
          en: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0.", // Placeholder translation
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
        type: "textImage", // Using textImage for the charts and their titles
        value: {
          text: {
            fr: "Sans Sentiment de Solitude | Avec Sentiment de Solitude", // Using a separator for the two chart titles
            es: "Sin Sentimiento de Soledad | Con Sentimiento de Soledad", // Placeholder translation
            en: "Without Feeling of Loneliness | With Feeling of Loneliness", // Placeholder translation
          },
          image: { fr: "assets/table_2.png", es: "assets/table_2.png", en: "assets/table_2.png" }, // Image containing both charts
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
            fr: "<h2>À Propos de Moi</h2><p>Bonjour!</p><p>Je m'appelle Patrick O'Connor, j'ai 27 ans et je suis un étudiant de l'Université de Montréal poursuivant une maîtrise en sciences du vieillissement.</p><p>J'ai décidé de commencer ce projet après avoir travaillé avec Judy Bedell (agingisgood.ca) auprès de nos aînés vivant avec la démence dans le centre de retraite Riverpath d'Ottawa.</p><p>J'ai appris beaucoup, et je crois qu'avec cette expérience j'ai le potentiel de faire une différence positive. Que ce soit une visite amicale, une marche à l'extérieur, ou partager un café, je crois fortement qu'avoir de la compagnie, pour même un petit moment, peut faire une grande différence.</p>",
            es: "<h2>Sobre Nosotros</h2><p>¡Hola!</p><p>Mi nombre es Patrick O'Connor, tengo 27 años y soy estudiante de la Universidad de Montreal persiguiendo una maestría en ciencias del envejecimiento.</p><p>Decidí comenzar este proyecto después de trabajar con Judy Bedell (agingisgood.ca) con nuestros mayores que viven con demencia en el centro de retiro Riverpath en Ottawa.</p><p>Aprendí mucho, y creo que con esta experiencia tengo el potencial de hacer una diferencia positiva. Ya sea una visita amistosa, una caminata al aire libre, o compartir un café, creo firmemente que tener compañía, aunque sea por un momento, puede hacer una gran diferencia.</p>",
            en: "<h2>About Me</h2><p>Hello!</p><p>My name is Patrick O'Connor, I am 27 years old and I am a student at the University of Montreal pursuing a Master's degree in aging sciences.</p><p>I decided to start this project after working with Judy Bedell (agingisgood.ca) with our seniors living with dementia at the Riverpath retirement center in Ottawa.</p><p>I learned a lot, and I believe that with this experience I have the potential to make a positive difference. Whether it's a friendly visit, an outdoor walk, or sharing a coffee, I strongly believe that having company, even for a short time, can make a big difference.</p>"
          },
          right: {
            fr: "<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"> <p>Mon rêve serait de pouvoir apporter un impact réel, pas juste pour nos aînés, mais pour leurs amis et leur familles aussi. Je crois en ce projet, et j'ai bien hâte de voir le changement qu'il peut apporter.</p><p>Vous pouvez m'écrire pour en savoir plus aux: (819)962-4989, patrick.oconnor@umontreal.ca</p>",
            es: "<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"> <p>Mi sueño sería poder tener un impacto real, no solo para nuestros mayores, sino también para sus amigos y familiares. Creo en este proyecto, y estoy ansioso por ver el cambio que puede traer.</p><p>Puede escribirme para saber más a: (819)962-4989, patrick.oconnor@umontreal.ca</p>",
            en: "<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"> <p>My dream would be to be able to make a real impact, not just for our seniors, but for their friends and families too. I believe in this project, and I am looking forward to seeing the change it can bring.</p><p>You can write to me to learn more at: (819)962-4989, patrick.oconnor@umontreal.ca</p>"
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
          fr: "<h2>Disponibilités</h2>",
          es: "<h2>Disponibilidad</h2>",
          en: "<h2>Availability</h2>"
        }
      },
      {
        type: "text",
        value: {
          fr: "<p>Les services sont gratuits et disponibles dans les quartiers du Centre et du Centre-Est de Montréal, avec possibilité d'être étendus à d'autres secteurs selon les besoins.</p>",
          es: "<p>Los servicios son gratuitos y están disponibles en los barrios del Centro y Centro-Este de Montreal, con posibilidad de extenderse a otros sectores según las necesidades.</p>", // Placeholder translation
          en: "<p>Services are free and available in the Central and East-Central districts of Montreal, with the possibility of being extended to other sectors as needed.</p>", // Placeholder translation
        }
      },
      {
        type: "text",
        value: {
          fr: "<p>L'accompagnement est offert en français, en anglais et en espagnol, afin de répondre à la diversité linguistique de la ville de Montréal.</p>",
          es: "<p>El acompañamiento se ofrece en francés, inglés y español, para responder a la diversidad lingüística de la ciudad de Montreal.</p>", // Placeholder translation
          en: "<p>Accompaniment is offered in French, English, and Spanish, in order to meet the linguistic diversity of the city of Montreal.</p>", // Placeholder translation
        }
      },
      {
        type: "text",
        value: {
          fr: "<p>Vous pouvez réserver l'heure souhaitée par téléphone au: (819) 962-4989, ou par courriel: patrick.oconnor@umontreal.ca</p>",
          es: "<p>Puede reservar la hora deseada por teléfono al: (819) 962-4989, o por correo electrónico: patrick.oconnor@umontreal.ca</p>", // Placeholder translation
          en: "<p>You can book your desired time by phone at: (819) 962-4989, or by email: patrick.oconnor@umontreal.ca</p>", // Placeholder translation
        }
      },
      {
        type: "text",
        value: {
          fr: "<iframe src=\"https://calendly.com/kenjiduggan/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>",
          es: "<iframe src=\"https://calendly.com/kenjiduggan/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>", // Using the same embed for all languages for now
          en: "<iframe src=\"https://calendly.com/kenjiduggan/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>"  // Using the same embed for all languages for now
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
document.addEventListener('DOMContentLoaded', render);
