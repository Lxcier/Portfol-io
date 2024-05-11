$(document).ready(function () {
    // Seletores de elementos
    const tabButtons = $('[data-tab-button]');
    const skillButtons = $('[data-skill-button]');
    const hardSkillContainer = $('.text_container-hard');
    const softSkillContainer = $('.text_container-soft');
    const logoImage = $('#logo-image');
    const logoDiv = $('#logo');
    const itensHabilidade = $('.item-habilidade');
  
    // Array de projetos
    var projetos = [
      {
          nome: "Food - Landing Page",
          imagem: "/images/projetos/food-landingpage.gif",
          descricao: "Landing page para um restaurante ficticio - by Larissa Kich",
          github: "https://github.com/Lxcier/food-landingPage",
          vercel: "https://food-landing-page-flame.vercel.app/",
          tecnologias: ["html", "css"] 
      },
      {
        nome: "Disney+ (Clone)",
        imagem: "/images/projetos/disney+.gif",
        descricao: "Página clone do Disney+ / versão antiga by Gian Souza",
        github: "https://github.com/Lxcier/disneyplus_clone",
        vercel: "https://disneyplus-clone-opal.vercel.app/",
        tecnologias: ["html", "javascript"] 
    },
    {
      nome: "The Chosen - Project",
      imagem: "/images/projetos/thechosen.gif",
      descricao: "Landing page sobre a série The Chosen.",
      github: "https://github.com/Lxcier/TheChosen",
      vercel: "https://the-chosen-one.vercel.app/",
      tecnologias: ["html", "css"] 
    },
    {
      nome: "FindJobs",
      imagem: "/images/projetos/findjobs.gif",
      descricao: "Site que simula uma plataforma para encontrar vagas de emprego. Similiar ao InfoJobs",
      github: "https://github.com/Lxcier/FindJobs",
      vercel: "https://find-jobs-sepia.vercel.app/index.html",
      tecnologias: ["html", "css"] 
  },
  
      // ... adicione mais projetos aqui
    ];
  
    // Funções para controlar a visibilidade das abas
    function ocultarTodasAbas() {
      $('.tab').removeClass('tab--is-active');
    }
  
    function exibirAba(botaoAba) {
      const idAbaAlvo = botaoAba.data('tabButton');
      const abaAlvo = $(`[data-tab-id=${idAbaAlvo}]`);
      ocultarTodasAbas();
      abaAlvo.addClass('tab--is-active');
      setTimeout(() => {
        abaAlvo.addClass('animate__bounceIn');
      }, 200);
    }
  
    // Funções para controlar a visibilidade das informações de habilidades
    function ocultarTodasInfos() {
      $('.info').removeClass('info--is-active');
    }
  
    function exibirInfo(botaoHabilidade) {
      const idInfoAlvo = botaoHabilidade.data('skill-button');
      const infoAlvo = $(`[data-skill-id=${idInfoAlvo}]`);
      ocultarTodasInfos();
      infoAlvo.addClass('info--is-active');
      setTimeout(() => {
        infoAlvo.addClass('animate__fadeIn');
      }, 200);
    }
  
    // Funções para controlar a visibilidade dos containers de texto de habilidades
    function exibirContainerHardSkill() {
      hardSkillContainer.removeClass('animate__zoomOut');
      hardSkillContainer.addClass('text_container--is-active');
      hardSkillContainer.addClass('animate__zoomIn');
    }
  
    function ocultarContainerHardSkill() {
      hardSkillContainer.removeClass('animate__zoomIn');
      hardSkillContainer.addClass('animate__zoomOut');
    }
  
    function exibirContainerSoftSkill() {
      softSkillContainer.removeClass('animate__zoomOut');
      softSkillContainer.addClass('text_container--is-active');
      softSkillContainer.addClass('animate__zoomIn');
    }
  
    function ocultarContainerSoftSkill() {
      softSkillContainer.removeClass('animate__zoomIn');
      softSkillContainer.addClass('animate__zoomOut');
    }
  
    // Funções para controlar a animação do logo
    function animarLogo() {
      const srcInicial = logoImage.attr('src');
      if (srcInicial === 'images/gifs/logo_end.png') {
        logoImage.attr('src', 'images/gifs/logo_entering.gif');
        setTimeout(() => {
          logoImage.attr('src', 'images/gifs/logo_start.png');
        }, 1260);
      } else {
        logoImage.attr('src', 'images/gifs/logo_return.gif');
        setTimeout(() => {
          logoImage.attr('src', 'images/gifs/logo_end.png');
        }, 1260);
      }
    }
  
    // Eventos de clique nos botões de abas
    tabButtons.on('click', function () {
      tabButtons.removeClass('item_link--is-active');
      $(this).addClass('item_link--is-active');
      $(this).addClass('animate__flip');
      exibirAba($(this));
    });
  
    // Eventos de clique nos botões de habilidades
    skillButtons.on('click', function () {
      skillButtons.removeClass('skills_btn--is-active');
      $(this).addClass('skills_btn--is-active');
      exibirInfo($(this));
    });
  
    // Eventos de mouse para exibir/ocultar containers de texto de habilidades
    $('#hard_btn').hover(exibirContainerHardSkill, function () {
      ocultarContainerHardSkill();
      setTimeout(() => {
        hardSkillContainer.removeClass('text_container--is-active');
      }, 100);
    });
  
    $('#soft_btn').hover(exibirContainerSoftSkill, function () {
      ocultarContainerSoftSkill();
      setTimeout(() => {
        softSkillContainer.removeClass('text_container--is-active');
      }, 100);
    });
  
      // Evento de mudança no select
    $("#tech-select").on("change", function() {
      var tecnologiaSelecionada = $(this).val();
      filtrarProjetos(tecnologiaSelecionada);
    });
  
    // Exibir todos os projetos ao carregar a página
    filtrarProjetos("");
  
    // Evento de mouse para animar o logo 
    logoDiv.on('mouseenter', animarLogo);
  
    // Função para exibir a descrição da habilidade
    function exibirDescricao(item) {
      const descricao = item.find('.descricao-habilidade');
      descricao.removeClass('hidden');
      descricao.addClass('animate__fadeIn');
    }
  
    // Função para ocultar a descrição da habilidade
    function ocultarDescricao(item) {
      const descricao = item.find('.descricao-habilidade');
      descricao.removeClass('animate__fadeIn');
      descricao.addClass('hidden');
    }
  
    // Adiciona eventos de mouseenter e mouseleave a cada item de habilidade
    itensHabilidade.each(function() {
      const item = $(this);
      const descricao = item.find('.descricao-habilidade');
  
      // Exibe a descrição ao passar o mouse sobre o item ou a descrição
      item.on('mouseenter', function() {
        exibirDescricao(item);
      });
      descricao.on('mouseenter', function() {
        exibirDescricao(item);
      });
  
      // Oculta a descrição ao sair do item ou da descrição
      item.on('mouseleave', function() {
        ocultarDescricao(item);
      });
      descricao.on('mouseleave', function() {
        ocultarDescricao(item);
      });
    });
  
  // Função para criar um elemento de projeto
  function criarElementoProjeto(projeto) {
      var elemento = $('<div class="projeto relative bg-gray-900 rounded-lg shadow-md hover:shadow-lg transform transition-shadow duration-300"></div>');
  
    // Adicionar HTML do projeto
    elemento.append(
    `
    <img src="${projeto.imagem}" alt=${projeto.nome} class="project-gif rounded-t-lg w-full">
    <div class="p-4 relative">
      <h3 class="text-xl text-white font-semibold mb-2">${projeto.nome}</h3>
      <p class="description text-gray-400 text-sm mb-4 h-16 overflow-y-scroll scroll-smooth">${projeto.descricao}</p>
      <div class="flex gap-4">
        <a href="${projeto.github}" target="_blank" class="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded inline-flex items-center">
          <i class="bi bi-github mr-2"></i>
          GitHub 
        </a>
        <a href="${projeto.vercel} target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded inline-flex items-center">
          <i class="bi bi-box-arrow-up-right mr-2"></i>
          Vercel
        </a>
      </div>
    </div>
    `
    );
      return elemento;
  }
  
  // Função para exibir projetos com base na tecnologia selecionada
  function filtrarProjetos(tecnologia) {
      $("#projetos-grid").empty(); // Limpa o grid
      projetos.forEach(function(projeto) {
          if (tecnologia === "" || projeto.tecnologias.includes(tecnologia)) {
              var elementoProjeto = criarElementoProjeto(projeto);
              $("#projetos-grid").append(elementoProjeto);
          }
      });
  }
  
  $(document).ready(function() {
    var isDragging = false;
    var startX;
    var scrollLeft;
  
    $('.slider').on('mousedown', function(e) {
      isDragging = true;
      startX = e.pageX - $(this).offset().left;
      scrollLeft = $(this).scrollLeft();
    });
  
    $(window).on('mousemove', function(e) {
      if (!isDragging) return;
      var x = e.pageX - $('.slider').offset().left;
      var walk = (x - startX);
      $('.slider').scrollLeft(scrollLeft - walk);
    });
  
    $(window).on('mouseup', function(e) {
      isDragging = false;
    });
  });
});
  