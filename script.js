let jsonData = [];

async function fetchData() {
  try {
    const response = await fetch('data.json');
    jsonData = await response.json();
    jsonData = jsonDataRaw.map(d => {
      d.foto = `https://estaticos.tvn.cl/skins/constituyentev2/renombradas/${d.slug}_big.jpg`;
      return d

  })
    updateCard();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

  
  let currentIndex = 0;
  
  const cardName = document.querySelector('.card-name');
  const cardImg = document.querySelector('.card-img');
  const cardRegion = document.querySelector('.card-region');
  const cardLista = document.querySelector('.card-lista');
  const cardPartido = document.querySelector('.card-partido');
  const perfilDescription = document.querySelector('.perfil-description');
  const votantesDescription = document.querySelector('.votantes-description');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  function updateCard() {
    const candidate = jsonData[currentIndex];
    cardName.textContent = candidate.nombre;
    cardImg.src = candidate.foto;
    cardImg.alt = `Foto de ${candidate.nombre}`;
    cardRegion.textContent = `Región: ${candidate.region}`;
    cardLista.textContent = `Lista: ${candidate.lista}`;
    cardPartido.textContent = `Partido: ${candidate.partido}`;
    perfilDescription.textContent = candidate.perfil;
    votantesDescription.textContent = candidate.orientacion_politica_de_votantes;
  }
  
  function prevCandidate() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCard();
    }
  }
  
  function nextCandidate() {
    if (currentIndex < jsonData.length - 1) {
      currentIndex++;
      updateCard();
    }
  }
  
  prevButton.addEventListener('click', prevCandidate);
  nextButton.addEventListener('click', nextCandidate);
  
  fetchData();
  
