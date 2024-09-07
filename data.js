let dados = [
     {
        estado: "Acre",
        sigla: "AC",
        nome: "Baixaria",
        descricao: "Mais do que um prato, a baixaria é uma tradição. O milho verde, moído em pilão de madeira, se transforma em uma pasta cremosa e saborosa, temperada com coentro fresco e outros ingredientes que variam de região para região. É um prato simples, mas carregado de sabor e história.",
        igredientes: ["1/2 pacote de milharina", "Sal a gosto", "300 g de carne moída preparada a gosto", "Tomate picada a gosto", "Ovos fritos", "Cheiro verde picado a gosto"],
        link: "https://en.wikipedia.org/wiki/Baixaria"
    },
    {
        estado: "Alagoas",
        sigla: "AL",
        nome: "Sururu ao coco",
        descricao: "Um caldo reconfortante e nutritivo, o susuru ao coco é uma verdadeira explosão de sabores. O leite de coco contrasta com o sabor intenso do caramujo, enquanto as especiarias e o azeite de dendê adicionam um toque especial.",
        igredientes: ["1 kg de sururu descascado e limpos","1 cebola media ralada","2 dentes de alho amassados","1 pires de coentro picadinho","2 colheres sopa de extrato de tomate","1 tomate sem pele e sem semente picadinho","3 pimentas de cheiro sem semente picadinhas","Azeite de oliva","Suco de 1 limão grande","500 ml de leite de coco","Sal a gosto","Pimenta-do-reino a gosto","Páprica doce a gosto"],
        link: "https://g1.globo.com/al/alagoas/noticia/2020/03/22/aprenda-a-fazer-sururu-ao-leite-de-coco-prato-tipicamente-alagoano.ghtml"
    },
    {
        estado: "Amapá",
        sigla: "AP",
        nome: "Camarão no bafo",
        descricao: "O camarão no bafo preserva todo o sabor natural do crustáceo. Cozido no vapor, ele é acompanhado de pirão de peixe, uma combinação perfeita.",
        igredientes: ["150 g de camarão médio com casca (com ou sem cabeça)","1 colher de sobremesa de margarina","Sal a gosto"],
        link: "https://www.tudogostoso.com.br/receita/164521-camarao-ao-bafo.html"
    },
    {
        estado: "Amazonas",
        sigla: "AM",
        nome: "Tambaqui assado e recheado",
        descricao: "A carne firme e saborosa do tambaqui, um peixe de água doce típico da Amazônia, se destaca quando assada na brasa. Temperado com urucum e outros ingredientes, ele é um dos pratos mais apreciados da região.",
        igredientes: ["1 tambaqui de aproximadamente 3 kg","8 dentes de alho amassado com sal","1 tomate picadinho","1 cebola média picadinha","1 pimentão picadinho","2 xícaras de farofa pronta","salsa desidratada","Azeite para regar"],
        link: "https://pt.wikipedia.org/wiki/Culin%C3%A1ria_do_Amazonas"
    },
    {
        estado: "Bahia",
        sigla: "BA",
        nome: "Acarajé",
        descricao: "O acarajé é um prato típico da Bahia, feito de feijão-fradinho, cebola e sal, frito em azeite de dendê. É uma especialidade gastronômica da culinária africana e afro-brasileira. ",
        igredientes: ["500 g de feijão fradinho cru", "Sal a gosto", "500 ml de óleo", "2 xícaras de chá de vatapá", "500 g de cebola", "150 g de camarão seco"],
        link: "https://pt.wikipedia.org/wiki/Acaraj%C3%A9"
    },
    {
        estado: "Ceará",
        sigla: "CE",
        nome: "Baião de dois",
        descricao: "Um prato completo e saboroso, o baião de dois é uma verdadeira refeição. O arroz cozido junto com o feijão cria uma harmonia única, e o queijo coalho, o charque e os outros ingredientes adicionam textura e sabor.",
        igredientes: ["1/2 kg de feijão verde","linguiça paio","2 tabletes de caldo de carne","1 cebola ralada","1 dente de alho amassado","3 colheres (sopa) de óleo","1/2 colher (sopa) de coentro picado","2 xícaras e 1/2 (chá) de arroz lavado e escorrido","150 g de queijo de coalho cortado em fatias finas"],
        link: "https://pt.wikipedia.org/wiki/Bai%C3%A3o_de_dois"
    },
    {
        estado: "Espírito Santo",
        sigla: "ES",
        nome: "Moqueca",
        descricao: "Um ensopado cremoso e aromático, a moqueca é um dos pratos mais famosos da culinária brasileira. O leite de coco, o azeite de dendê e os diversos temperos criam um caldo saboroso que envolve o peixe ou os frutos do mar.",
        igredientes: ["4 postas de cação ou garoupa (700 gramas)","1 cebola grande cortada em rodelas","1 pimentão verde cortado em rodelas","2 colheres (sopa) de coentro","1 colher (sopa) de azeite de dendê","suco de 1 limão","1 pimentão vermelho cortado em rodelas","2 tomates maduros cortados em rodelas","200 ml de leite de coco","2 tabletes de caldo de camarão"],
        link: "https://pt.wikipedia.org/wiki/Moqueca"
    },
    {
        estado: "Goiás",
        sigla: "GO",
        nome: "Empadão",
        descricao: "O empadão é um prato tradicional que encanta paladares em Portugal e no Brasil. Com sua massa crocante e recheios variados, ele é perfeito para um almoço ou jantar em família, ou até mesmo para um lanche rápido e saboroso.",
        igredientes: ["400 gramas de farinha de trigo","200 gramas de manteiga gelada","1 ovo inteiro e 1 gema de ovo batidos para a massa","sal a gosto","6 colheres de sopa de leite","1 gema de ovo para pincelar a massa","1 quilo de peito de frango cozido e desfiado","1 cebola média picadinha","3 dentes de alho picados e amassados","2 tomates picados e sem pele","1 copo de requeijão","2 colheres de sopa de azeite","Cheiro-verde picado","1 lata de milho verde","1 lata de molho de tomate","1 colher de sopa cheia de farinha de trigo","3 cubos de caldo de galinha","Azeitonas pretas picadas a gosto"],
        link: "https://pt.wikipedia.org/wiki/Empad%C3%A3o"
    },
    {
        estado: "Maranhão",
        sigla: "MA",
        nome: "Bobó de camarão",
        descricao: " Uma iguaria da culinária nordestina, o bobó de camarão é um prato sofisticado e saboroso. O purê de mandioca cremoso se mistura com os camarões, o leite de coco e o azeite de dendê, criando uma experiência gastronômica inesquecível.",
        igredientes: ["1 quilo de camarão médio limpo","Suco de meio limão","1 dente de alho picado","Sal a gosto","3 colheres de sopa de azeite"],
        link: "https://pt.wikipedia.org/wiki/Bob%C3%B3_de_camar%C3%A3o"
    },
    {
        estado: "Mato Grosso",
        sigla: "MT",
        nome: "Galinhada",
        descricao: "A galinhada é um prato tradicional brasileiro, simples e saboroso, que une o melhor do frango com o arroz em uma única panela. É uma refeição completa e reconfortante, perfeita para um almoço em família ou para aqueles dias em que a gente busca um sabor caseiro e acolhedor.",
        igredientes: ["1 frango, cortado em pedaços","Suco de meio limão","1 cebola média ralada","2 colheres (sopa) de extrato de tomate","1 colher (sopa) de salsa picada","2 tabletes de caldo de galinha","2 colheres (sopa) de azeite","2 xícaras (chá) de arroz lavado e escorrido","1 pimentão verde cortado em cubinhos"],
        link: "https://www.estadao.com.br/paladar/receita/galinhada-3/"
    },
    {
        estado: "Mato Grosso do Sul",
        sigla: "MS",
        nome: "Chipa",
        descricao: "A chipa é uma iguaria tradicional da culinária paraguaia, com uma textura única e sabor irresistível. Feita à base de polvilho doce, queijo e outros ingredientes, ela conquistou o paladar de muitos brasileiros e se tornou um lanche popular em diversos estados.",
        igredientes: ["2 ovos","1 pitada de sal","1 colher de sopa bem cheia de margarina","1 pitada de fermento","Cerca de 2 xícaras de chá de polvilho doce"],
        link: "https://pt.wikipedia.org/wiki/Chipa"
    }, 
    {
        estado: "Minas Gerais",
        sigla: "MG",
        nome: "Frango com quiabo",
        descricao: "O frango com quiabo é um prato tradicional da culinária brasileira, especialmente popular nas regiões Sudeste e Centro-Oeste. A combinação do frango suculento com o quiabo macio e saboroso resulta em um prato reconfortante e cheio de sabor.",
        igredientes: ["1 quilo de quiabo","1 xícara de chá de óleo","1 frango cortado em pedaços","5 dentes de alho picados","Sal a gosto","Pimenta-do-reino a gosto","1 colher de sobremesa de colorau","1 colher de sopa de vinagre","2 colheres de sopa de óleo","1 cebola picada","Água suficiente para cobrir","Cheiro-verde a gosto",],
        link: "https://www.tudogostoso.com.br/receita/4947-frango-com-quiabo-mineiro.html"
    },
    {
        estado: "Pará",
        sigla: "PA",
        nome: "Maniçoba",
        descricao: "Um prato tradicional da culinária paraense, a maniçoba é um cozido feito com folhas de mandioca brava, carnes diversas e especiarias. É um prato que exige paciência e cuidado no preparo, mas o resultado é um sabor único e marcante.",
        igredientes: ["1,5 kg de maniva pré-cozida","1 kg de toucinho salgado","1/2 kg de charque","1/2 kg de carne de porco assada de forno","Costelinha de porco defumada","Folhas de louro","1 kg de linguiça calabresa","1/2 kg de paio","1/2 kg de bacon"],
        link: "https://pt.wikipedia.org/wiki/Mani%C3%A7oba"
    },
    {
        estado: "Paraíba",
        sigla: "PB",
        nome: "Carne de sol",
        descricao: " Um ingrediente versátil e saboroso, a carne de sol é utilizada em diversos pratos da culinária nordestina. Seja na forma de carne seca desfiada ou em pedaços maiores, ela adiciona um sabor defumado e intenso a qualquer receita.",
        igredientes: ["500 g de carne de sol (coxão mole)", "Manteiga", "1 cebola média"],
        link: "https://pt.wikipedia.org/wiki/Carne_de_sol#:~:text=A%20carne%20de%20sol%2C%20denominada,%C3%A9%20exposta%20aos%20raios%20solares."
    },
    {
        estado: "Paraná",
        sigla: "PR",
        nome: "Barreado",
        descricao: "Um Sabor Único do Paraná. Uma obra-prima da culinária paranaense, o barreado é muito mais do que um simples prato. É uma tradição, um ritual e um sabor inconfundível que conquista paladares em todo o Brasil.",
        igredientes: ["2 kg de paleta bovina","200 g de bacon em cubos pequenos (cerca de 1 ⅓ xic. (chá))","2 cebolas","6 dentes de alho","1 maço de salsinha","4 folhas de louro","3 colheres (sopa) de semente de cominho","½ xícara (chá) de vinagre de vinho tinto","1 xícara (chá) de água","sal","folhas de salsinha a gosto para servir"],
        link: "https://pt.wikipedia.org/wiki/Barreado"
    },
    {
        estado: "Pernambuco",
        sigla: "PE",
        nome: "Bolo de rolo",
        descricao: "O bolo de rolo é um dos doces mais emblemáticos de Pernambuco e um verdadeiro orgulho da culinária brasileira. Sua origem remonta ao século XIX, quando as primeiras receitas chegaram à região através de imigrantes portugueses.",
        igredientes: ["250 g de açúcar","250 g de manteiga","5 ovos","250 g de farinha de trigo","1 lata de goiabada, derretida em pouco de água","Manteiga para untar","Farinha de trigo e açúcar para polvilhar"],
        link: "https://pt.wikipedia.org/wiki/Bolo_de_rolo"
    },
    {
        estado: "Piauí",
        sigla: "PI",
        nome: "Paçoca de carne de sol",
        descricao: "A paçoca de carne de sol é um dos pratos mais icônicos da culinária piauiense, com uma explosão de sabores que conquista paladares por todo o Brasil. Essa iguaria, rica em tradição e história, é um verdadeiro banquete para os amantes da carne de sol e da culinária nordestina.",
        igredientes: ["250 g de açúcar","250 g de manteiga","5 ovos","250 g de farinha de trigo","1 lata de goiabada, derretida em pouco de água","Manteiga para untar","Farinha de trigo e açúcar para polvilhar"],
        link: "https://www.tudogostoso.com.br/receita/59072-pacoca-de-carne-de-sol.html"
    },
    {
        estado: "Rio de Janeiro",
        sigla: "RJ",
        nome: "Feijoada",
        descricao: "A feijoada é, sem dúvida, um dos pratos mais emblemáticos e populares da culinária brasileira. Com suas raízes na tradição afro-brasileira, ela reúne uma combinação de sabores intensos e marcantes, que fazem dela um banquete para o paladar.",
        igredientes: ["1 kg de feijão preto","250 g de carne seca","250 g de lombo suíno","250 g de costelinha suína defumada ou normal","250 g de calabresa","150 g de bacon","1 pé de porco salgado","1 rabo de porco salgado","100 g de alho","1 cebola normal grande","5 g de louro em pó ou 5 folhas secas","Sal e pimenta a gosto"],
        link: "https://pt.wikipedia.org/wiki/Feijoada"
    },
    {
        estado: "Rio Grande do Norte",
        sigla: "RN",
        nome: "Ginga com tapioca",
        descricao: "Ginga com Tapioca: Um Sabor Autêntico do Rio Grande do Norte. A ginga com tapioca é uma iguaria tradicional do Rio Grande do Norte, especialmente popular nas cidades de Natal e sua região litorânea. Essa combinação única de sabores e texturas conquista tanto os paladares locais quanto os turistas que visitam o estado.",
        igredientes: ["270 g de manjubinha limpa e temperada com sal e pimenta-do-reino moída a gosto","250 g de farinha de mandioca torrada fina","1 xícara (chá) de azeite de dendê","2 xícaras (chá) de óleo","4 colheres (sopa) de goma para tapioca"],
        link: "https://pt.wikipedia.org/wiki/Ginga_com_tapioca#:~:text=A%20ginga%20com%20tapioca%20consiste,possuir%20v%C3%A1rios%20ingredientes%20e%20vers%C3%B5es."
    },
    {
        estado: "Rio GRande do Sul",
        sigla: "RS",
        nome: "churrasco",
        descricao: "O Rio Grande do Sul é conhecido por seu churrasco, assado lentamente em espetos de madeira e temperado com sal grosso. ",
        igredientes: ["Carne a gosto", "Sal grosso"],
        link: "https://pt.wikipedia.org/wiki/Churrasco"
    },
    {
        estado: "Rondônia",
        sigla: "RO",
        nome: "Pirarucu rondon",
        descricao: "O pirarucu, um dos maiores peixes de água doce do mundo, é assado na brasa e temperado com especiarias típicas da região. Sua carne firme e saborosa é um verdadeiro banquete para os paladares mais exigentes.",
        igredientes: ["1 kg de filé de pirarucu","2 limões","2 dentes de alho picados","Sal a gosto","Pimenta-do-reino a gosto","2 tomates picados","1 cebola picada","1 pimentão verde picado","1/2 xícara de cheiro-verde picado","2 colheres de sopa de azeite de oliva","1/2 xícara de leite de coco"],
        link: "https://g1.globo.com/ro/rondonia/noticia/2016/08/pirarucu-rondon-e-reconhecido-como-prato-tipico-de-porto-velho.html"
    },
    {
        estado: "Roraima",
        sigla: "RR",
        nome: "Paçoca de carne com banana",
        descricao: "Uma combinação inusitada e deliciosa, a paçoca de carne com banana é um petisco típico de Roraima. A paçoca, feita com amendoim e carne seca, ganha um toque adocicado com a banana.",
        igredientes: ["01 cebola média em tiras finas","01 tomate cortado em cubinho sem sementes","02 dentes de alhos amassados","Óleo para refogar e fritar a banana","1/2 kg farinha de mandioca (fina)","Cheiro verde a gosto","Pimenta de cheiro ou biquinho a gosto","02 bananas da terra (pacovã)"],
        link: "https://www.folhabv.com.br/colunas/receita-tradicional-de-roraima-pacoca-de-carne-de-sol-com-banana/"
    },
    {
        estado: "Santa Catarina",
        sigla: "SC",
        nome: "Polenta no fio",
        descricao: 'A polenta, um purê de milho, é cortada em finas tiras e servida com um ragu de carne ou um molho de tomate. Essa apresentação em "fio" confere à polenta uma textura mais leve e elegante.',
        igredientes: ["400 gramas de fubá","1 colher sopa de sal","2 colheres de sopa de manteiga","2 litros de água"],
        link: "https://abrasoffa.org.br/culinaria-tipica/polenta-no-fio/"
    },
    {
        estado: "São Paulo",
        sigla: "SP",
        nome: "Virado à paulista",
        descricao: "Um prato completo e reconfortante, o virado à paulista é uma verdadeira refeição. Feito com feijão tropeiro, arroz, couve refogada, linguiça e torresmo, é um clássico da culinária caipira. A combinação de sabores e texturas torna esse prato uma experiência única.",
        igredientes: ["2 e 1/2 xícara (chá) de feijão carioca","200g de bacon picado","3 colheres (sopa) de óleo","2 dentes de alho amassados","1 cebola picada","2 gomos de calabresa fatiada","1 xícara (chá) de farinha de mandioca","Sal e pimenta-do-reino a gosto","Cebolinha para polvilhar"],
        link: "https://pt.wikipedia.org/wiki/Virado"
    },
    {
        estado: "Sergipe",
        sigla: "SE",
        nome: "Carangueijo (Caranguejada)",
        descricao: "O caranguejo é considerado a principal comida típica da culinária sergipana, sendo encontrado em qualquer canto e aparecendo entre as melhores comidas brasileiras.",
        igredientes: ["Caranguejo"],
        link: "https://receitas.globo.com/blog/dicas-e-tecnicas/como-fazer-caranguejo.ghtml"
    },
    {
        estado: "Tocantins",
        sigla: "TO",
        nome: "Chambari",
        descricao: "O chambari é um prato típico do Tocantins, feito com o músculo e osso da perna do boi, cozido por várias horas. É também conhecido como chambaril ou ossobuco.",
        igredientes: ["2 K. da perna da vaca","2 cebolas médias","cheiro verde com fartura","4 dentes de alho socado","300grs de farinha de mandioca","1/2 colher de chá de cominho"],
        link: "https://www.farturabrasil.com.br/tradicoes-regionais/chambari-a-comida-simbolo-do-tocantins/#:~:text=O%20chambari%2C%20ou%20chambaril%2C%20%C3%A9,italiano%20%E2%80%93%20cozido%20por%20v%C3%A1rias%20horas."
    }
];
    