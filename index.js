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
          image: { fr: "", es: "", en: "" } // Image data will go here
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
    content: []
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
          fr: "<iframe src=\"https://calendly.com/kenjiduggan/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>",
          es: "<iframe src=\"https://calendly.com/kenjiduggan/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>",
          en: "<iframe src=\"https://calendly.com/kenjiduggan/new-meeting\" width=\"100%\" height=\"600\" frameborder=\"0\"></iframe>"
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
