const LANGUAGES = { fr: "Français", es: "Español", en: "English" };
let language = "fr";
let currentPage = 0;

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

let pages = [
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
          fr: `<div class="accueil-grey-italic">"Un service de visites amicales gratuit au coeur de Montréal."</div>
<div class="accueil-columns">
  <div class="accueil-col approche"><h3>Approche<br><span class='emoji'>🤝</span></h3><p>Planifier des visites amicales pour nos ainés vivant avec une démence ou à risque de le développer.</p></div>
  <div class="accueil-col objectif"><h3>Objectif<br><span class='emoji'>🎯</span></h3><p>En réduisant la solitude, l'objectif serait de ralentir, ou prévenir la progression de ces maladies.</p></div>
  <div class="accueil-col services"><h3>Les Services<br><span class='emoji'>💫</span></h3><p>--Gratuit--<br>Visant les quartiers du Centre et du Centre-Est de Montréal<br>En Français, Anglais ou Espagnol</p></div>
</div>
<div class="disponibilites-block"><h2>Disponibilités</h2><p>Vous pouvez réserver l'heure souhaitée à l'aide du calendrier ci-dessous:</p><iframe src="https://calendly.com/fcbarca8-oc/new-meeting" width="100%" height="600" frameborder="0"></iframe></div>
<div class="contact-block"><h2>Contact</h2><p>Pour toute question, n'hésitez pas à me contacter par courriel à l'adresse <a href='mailto:patrick.oconnor@umontreal.ca'>patrick.oconnor@umontreal.ca</a> ou par message texte au <a href='sms:18199624989'>(819) 962-4989</a>.</p></div>`,
          es: `<div class="accueil-grey-italic">"Un servicio de visitas amistosas gratuito en el corazón de Montreal."</div>
<div class="accueil-columns">
  <div class="accueil-col approche"><h3>Enfoque<br><span class='emoji'>🤝</span></h3><p>Planificar visitas amistosas para nuestros mayores que viven con demencia o que están en riesgo de desarrollarla.</p></div>
  <div class="accueil-col objectif"><h3>Objetivo<br><span class='emoji'>🎯</span></h3><p>Al reducir la soledad, el objetivo sería frenar o prevenir la progresión de estas enfermedades.</p></div>
  <div class="accueil-col services"><h3>Servicios<br><span class='emoji'>💫</span></h3><p>--Gratuito--<br>Dirigido a los barrios del Centro y Centro-Este de Montreal<br>En francés, inglés o español</p></div>
</div>
<div class="disponibilites-block"><h2>Disponibilidad</h2><p>Puede reservar la hora deseada a través del calendario a continuación:</p><iframe src="https://calendly.com/fcbarca8-oc/new-meeting" width="100%" height="600" frameborder="0"></iframe></div>
<div class="contact-block"><h2>Contacto</h2><p>Para cualquier pregunta, no dude en contactarme por correo electrónico a <a href='mailto:patrick.oconnor@umontreal.ca'>patrick.oconnor@umontreal.ca</a> o por mensaje de texto al <a href='sms:18199624989'>(819) 962-4989</a>.</p></div>`,
          en: `<div class="accueil-grey-italic">"A free friendly visiting service in the heart of Montreal."</div>
<div class="accueil-columns">
  <div class="accueil-col approche"><h3>Approach<br><span class='emoji'>🤝</span></h3><p>Plan friendly visits for our seniors living with dementia or at risk of developing it.</p></div>
  <div class="accueil-col objectif"><h3>Objective<br><span class='emoji'>🎯</span></h3><p>By reducing loneliness, the goal would be to slow down or prevent the progression of these diseases.</p></div>
  <div class="accueil-col services"><h3>Services<br><span class='emoji'>💫</span></h3><p>--Free--<br>Serving the Central and East-Central districts of Montreal<br>In French, English, or Spanish</p></div>
</div>
<div class="availability-block"><h2>Availability</h2><p>You can book your desired time using the calendar below:</p><iframe src="https://calendly.com/fcbarca8-oc/new-meeting" width="100%" height="600" frameborder="0"></iframe></div>
<div class="contact-block"><h2>Contact</h2><p>For any questions, feel free to contact me by email at <a href='mailto:patrick.oconnor@umontreal.ca'>patrick.oconnor@umontreal.ca</a> or by text at <a href='sms:18199624989'>(819) 962-4989</a>.</p></div>`
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
            fr: `<h2>À Propos de Moi</h2><p>Bonjour!</p><p>Je m'appelle Patrick O'Connor, j'ai 27 ans et je suis un étudiant de l'Université de Montréal poursuivant une maîtrise en sciences du vieillissement.</p><p>J'ai décidé de commencer ce projet après avoir travaillé avec Judy Bedell (<a href=\"https://www.agingisgood.ca/\" target=\"_blank\">agingisgood.ca</a>) auprès de nos aînés vivant avec la démence dans le centre de retraite Riverpath d'Ottawa.</p><p>J'ai appris beaucoup, et je crois qu'avec cette expérience j'ai le potentiel de faire une différence positive. Que ce soit une visite amicale, une marche à l'extérieur, ou partager un café, je crois fortement qu'avoir de la compagnie, pour même un petit moment, peut faire une grande différence.</p><div class='certifications-block'><span class=\"certification-hover\">Formation MoCA (Montreal Cognitive Assessment)<img src=\"assets/moca_certification.png.png\" class=\"hover-image\" alt=\"Certification MoCA\"></span><span class=\"certification-hover\">Curriculum Vitae<img src=\"assets/Français_CV.jpg\" class=\"hover-image\" alt=\"Curriculum Vitae\"></span><span class=\"certification-hover\">Vérifications d'antécédents<img src=\"assets/casier.jpg\" class=\"hover-image\" alt=\"Vérifications d'antécédents\"></span></div><p>Mon rêve serait de pouvoir apporter un impact réel, pas juste pour nos aînés, mais pour leurs amis et leur famille aussi. Je crois en ce projet, et j'ai bien hâte de voir le changement qu'il peut apporter.</p>`,
            es: `<h2>Sobre Nosotros</h2><p>¡Hola!</p><p>Mi nombre es Patrick O'Connor, tengo 27 años y soy estudiante de la Universidad de Montreal persiguiendo una maestría en ciencias del envejecimiento.</p><p>Decidí comenzar este proyecto después de trabajar con Judy Bedell (<a href=\"https://www.agingisgood.ca/\" target=\"_blank\">agingisgood.ca</a>) con nuestros mayores que viven con demencia en el centro de retiro Riverpath en Ottawa.</p><p>Aprendí mucho, y creo que con esta experiencia tengo el potencial de hacer una diferencia positiva. Ya sea una visita amistosa, una caminata al aire libre, o compartir un café, creo firmemente que tener compañía, aunque sea por un momento, puede hacer una gran diferencia.</p><div class='certifications-block'><span class=\"certification-hover\">Formación MoCA (Montreal Cognitive Assessment)<img src=\"assets/moca_certification.png.png\" class=\"hover-image\" alt=\"Certificación MoCA\"></span><span class=\"certification-hover\">Curriculum Vitae<img src=\"assets/Français_CV.jpg\" class=\"hover-image\" alt=\"Curriculum Vitae\"></span><span class=\"certification-hover\">Antecedentes penales<img src=\"assets/casier.jpg\" class=\"hover-image\" alt=\"Antecedentes penales\"></span></div><p>Mi sueño sería poder tener un impacto real, no solo para nuestros mayores, sino también para sus amigos y familiares. Creo en este proyecto, y estoy ansioso por ver el cambio que puede traer.</p>`,
            en: `<h2>About Me</h2><p>Hello!</p><p>My name is Patrick O'Connor, I am 27 years old and a student at the University of Montreal pursuing a master's in aging sciences.</p><p>I decided to start this project after working with Judy Bedell (<a href=\"https://www.agingisgood.ca/\" target=\"_blank\">agingisgood.ca</a>) with our seniors living with dementia at the Riverpath retirement center in Ottawa.</p><p>I learned a lot, and I believe that with this experience I have the potential to make a positive difference. Whether it's a friendly visit, a walk outside, or sharing a coffee, I strongly believe that having company, even for a short moment, can make a big difference.</p><div class='certifications-block'><span class=\"certification-hover\">MoCA certification (Montreal Cognitive Assessment)<img src=\"assets/moca_certification.png.png\" class=\"hover-image\" alt=\"MoCA Certification\"></span><span class=\"certification-hover\">Curriculum Vitae<img src=\"assets/Français_CV.jpg\" class=\"hover-image\" alt=\"Curriculum Vitae\"></span><span class=\"certification-hover\">Police Record Check<img src=\"assets/casier.jpg\" class=\"hover-image\" alt=\"Police Record Check\"></span></div><p>My dream would be to be able to make a real impact, not just for our seniors, but for their friends and families too. I believe in this project, and I am looking forward to seeing the change it can bring.</p>`
          },
          right: {
            fr: `<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"><p>Vous pouvez m'écrire pour en savoir plus aux: (819)962-4989, patrick.oconnor@umontreal.ca</p>`,
            es: `<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"><p>Puede escribirme para saber más a: (819)962-4989, patrick.oconnor@umontreal.ca</p>`,
            en: `<img src=\"assets/patrick_oconnor.jpg\" alt=\"Patrick O'Connor\"><p>You can write to me to learn more at: (819)962-4989, patrick.oconnor@umontreal.ca</p>`
          }
        }
      }
    ]
  },
  {
    title: {
      fr: "Contexte Scientifique",
      es: "Contexto Científico",
      en: "Scientific Context"
    },
    content: [
      {
        type: "customSciContext",
        value: {
          fr: {
            text: `<em>Une étude de la revue Neurology a démontré que la solitude pouvait <strong>augmenter significativement</strong> le risque de développer une démence sur 10 ans (Salinas et al., 2022), comme illustré par le graphique.</em>`,
            img: "assets/figure_1.png",
            ref: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0."
          },
          es: {
            text: `<em>Un estudio de la revista Neurology demostró que la soledad puede <strong>aumentar significativamente</strong> el riesgo de desarrollar demencia en 10 años (Salinas et al., 2022), como se ilustra en el gráfico.</em>`,
            img: "assets/figure_1.png",
            ref: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0."
          },
          en: {
            text: `<em>A study in the journal Neurology showed that loneliness could <strong>significantly increase</strong> the risk of developing dementia over 10 years (Salinas et al., 2022), as illustrated by the graph.</em>`,
            img: "assets/figure_1.png",
            ref: "Salinas, J., Beiser, A. S., Samra, J. K., O'Donnell, A., DeCarli, C. S., Gonzales, M. M., Aparicio, H. J., & Seshadri, S. (2022). Association of loneliness with 10-year dementia risk and early markers of vulnerability for neurocognitive decline. Neurology, 98(13), e1337–e1348. <a href=\"https://www.neurology.org/doi/10.1212/WNL.0000000000200039\">https://www.neurology.org/doi/10.1212/WNL.0000000000200039</a>. Licensed under CC BY-NC-ND 4.0."
          }
        }
      },
      {
        type: "customSciContext",
        value: {
          fr: {
            text: `<em>La revue \"The Journals of Gerontology\", dans une étude avec 1905 participants, a démontré que la solitude était un facteur de risque important dans le développement d'une démence (Sundström et al., 2020). Dans cette étude, <strong>27%</strong> des participants ne vivant pas avec un sentiment solitude ont développé une démence lors d'un suivi. Le pourcentage augmente à <strong>48%</strong> lorsque les participants ressentaient souvent un sentiment de solitude.</em>`,
            img: "assets/table_2.png",
            ref: "Sundström, A., Adolfsson, A. N., Nordin, M., & Adolfsson, R. (2020). Loneliness Increases the Risk of All-Cause Dementia and Alzheimer's Disease. The journals of gerontology. Series B, Psychological sciences and social sciences, 75(5), 919–926. <a href=\"https://doi.org/10.1093/geronb/gbz139\">https://doi.org/10.1093/geronb/gbz139</a>"
          },
          es: {
            text: `<em>La revista \"The Journals of Gerontology\", en un estudio con 1905 participantes, demostró que la soledad fue un factor de riesgo importante en el desarrollo de demencia (Sundström et al., 2020). En este estudio, <strong>27%</strong> de los participantes que no vivían con sentimiento de soledad desarrollaron demencia durante el seguimiento. El porcentaje aumenta al <strong>48%</strong> cuando los participantes sentían a menudo un sentimiento de soledad.</em>`,
            img: "assets/table_2.png",
            ref: "Sundström, A., Adolfsson, A. N., Nordin, M., & Adolfsson, R. (2020). Loneliness Increases the Risk of All-Cause Dementia and Alzheimer's Disease. The journals of gerontology. Series B, Psychological sciences and social sciences, 75(5), 919–926. <a href=\"https://doi.org/10.1093/geronb/gbz139\">https://doi.org/10.1093/geronb/gbz139</a>"
          },
          en: {
            text: `<em>The journal \"The Journals of Gerontology\", in a study with 1905 participants, showed that loneliness was a significant risk factor in the development of dementia (Sundström et al., 2020). In this study, <strong>27%</strong> of participants not living with a feeling of loneliness developed dementia during follow-up. The percentage increases to <strong>48%</strong> when participants often felt a feeling of loneliness.</em>`,
            img: "assets/table_2.png",
            ref: "Sundström, A., Adolfsson, A. N., Nordin, M., & Adolfsson, R. (2020). Loneliness Increases the Risk of All-Cause Dementia and Alzheimer's Disease. The journals of gerontology. Series B, Psychological sciences and social sciences, 75(5), 919–926. <a href=\"https://doi.org/10.1093/geronb/gbz139\">https://doi.org/10.1093/geronb/gbz139</a>"
          }
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
    } else if (el.type === "customSciContext") {
      const sci = el.value[language];
      const flex = document.createElement('div');
      flex.className = 'sci-context-flex';
      const textBox = document.createElement('div');
      textBox.className = 'sci-context-text';
      textBox.innerHTML = sci.text;
      const imgBox = document.createElement('div');
      imgBox.className = 'sci-context-img';
      const img = document.createElement('img');
      img.src = sci.img;
      img.alt = '';
      imgBox.appendChild(img);
      flex.appendChild(textBox);
      flex.appendChild(imgBox);
      container.appendChild(flex);
      // Reference at the bottom
      const ref = document.createElement('div');
      ref.style.marginTop = '1.5rem';
      ref.style.fontSize = '1rem';
      ref.style.color = '#666';
      ref.innerHTML = sci.ref;
      container.appendChild(ref);
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

  // Tap-to-reveal for key-points on touch devices
  function enableKeyPointTap() {
    if (!isTouchDevice()) return;
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

  // Tap-to-reveal for certification-hover (hover-image) on touch devices
  function enableCertificationTap() {
    if (!isTouchDevice()) return;
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
    if (isTouchDevice()) {
      enableKeyPointTap();
      enableCertificationTap();
    }
  });

  // --- Add touch support for Approche box ---
  function enableApprocheTap() {
    if (!isTouchDevice()) return;
    document.querySelectorAll('.accueil-col.approche').forEach(function(box) {
      box.onclick = function(e) {
        // Only allow one open at a time
        document.querySelectorAll('.accueil-col.approche').forEach(function(other) {
          if (other !== box) other.classList.remove('active');
        });
        box.classList.toggle('active');
      };
    });
  }
  // Update touch support for all three columns
  function enableAccueilColTap() {
    if (!isTouchDevice()) return;
    document.querySelectorAll('.accueil-col').forEach(function(box) {
      box.onclick = function(e) {
        document.querySelectorAll('.accueil-col').forEach(function(other) {
          if (other !== box) other.classList.remove('active');
        });
        box.classList.toggle('active');
      };
    });
  }
  // Patch afterRender to include enableApprocheTap and enableAccueilColTap
  const origAfterRender = afterRender;
  afterRender = function() {
    origAfterRender && origAfterRender();
    enableApprocheTap();
    enableAccueilColTap();
  };
});
