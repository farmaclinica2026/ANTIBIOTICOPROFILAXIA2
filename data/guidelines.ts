
export interface Procedure {
    [key: string]: string | string[] | undefined;
}

export interface Specialty {
    category: string;
    headers: string[];
    procedures: Procedure[];
    notes?: string[];
}

export const guidelinesData: Specialty[] = [
    {
        category: "Cirurgias de Cabeça e Pescoço / Muco-Maxilo",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Amigdalectomia, Adenoidectomia, Tireoidectomia, Pólipos, cistos de laringe, Excisão de linfonodos", antibiotic: "Sem indicação" },
            { surgery: "Timpanoplastia; Rinosseptoplastia", antibiotic: "Cefazolina", inductionDose: "2 g", intraoperative: "1 g 4/4 h", duration: "Intra-operatório" },
            { surgery: "Reconstruções Complexas (com uso de enxertos ósseos ou materiais aloplásticos)", antibiotic: "Cefazolina + Metronidazol", inductionDose: "2g + 500mg", intraoperative: "X", duration: "24-48h", postoperative: "1g 12/12h + 500mg 12/12h" },
            { surgery: "Mastoidectomia", antibiotic: "Clindamicina", inductionDose: "600 mg", duration: "Intra-operatório" },
            { surgery: "Estética facial, Cirurgias Ortognáticas", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Cirurgia endoscópica (sinusite crônica, tumores, polipose nasal)", antibiotic: "Clindamicina", inductionDose: "600 mg", duration: "Intra-operatório" },
            { surgery: "Extrações de terceiros molares impactados e Implantes dentários múltiplos", antibiotic: "Amoxicilina", inductionDose: "2g via oral", duration: "1h antes da cirurgia" },
            { surgery: "Fraturas Maxilofaciais Abertas (com comunicação com cavidade oral ou seios paranasais)", antibiotic: "Cefazolina + Metronidazol", inductionDose: "2g + 500mg", intraoperative: "X", duration: "24-72h (dependendo da extensão da contaminação, tipo de fratura e da estabilidade cirúrgica)", postoperative: "1g 12/12h + 500mg 12/12h" }
        ]
    },
    {
        category: "Cirurgias Cardíacas",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Prótese valvar", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "24-48h", postoperative: "1g 8/8h" },
            { surgery: "Revascularização miocárdio", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Implante marca passo / Implante de dispositivos de assistência ventricular", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Transplante cardíaco", antibiotic: "Cefuroxima", inductionDose: "1,5g", intraoperative: "750mg 4/4h", duration: "24h", postoperative: "1,5g 12/12h" }
        ],
        notes: ["Obs.: Se paciente internado há mais de 5 dias realizar como antibiótico profilático: Teicoplanina 6mg/Kg/dia."]
    },
    {
        category: "Cirurgia Torácica",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração"],
        procedures: [
            { surgery: "Toracotomia, Pneumectomia, Cirurgia do mediastino, Correção de hérnia/eventração diafragmática, Correção de pectus, Decorticação pulmonar, Pericardiectomia, Ressecção de estenose de traquéia, Ressecção de tumor pleural, Ressecção pulmonar (Nodulectomia; Segmentectomia; Lobectomia), Toracectomia (tumor de parede), Traqueostomia aberta, Videotoracoscopia cirúrgica", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4H", duration: "Intraoperatório" },
            { surgery: "Biópsia: transtorácica, gânglio, pleura, pulmão a céu aberto ou tumores de parede, Costectomia segmentar, Drenagem pleural (não empiema), Laringoscopia de suspensão, Mediastinoscopia / Mediastinotomia, Pleuroscopia, Toracocentese", antibiotic: "Não indicado" }
        ]
    },
    {
        category: "Cirurgia Gastrointestinal",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Herniorrafia baixo risco", antibiotic: "Não indicado" },
            { surgery: "Herniorrafia alto risco", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Esôfago: Incisão na mucosa", antibiotic: "Cefoxitina", inductionDose: "2g", intraoperative: "1g 2/2h", duration: "Intra-operatório" },
            { surgery: "Gastrostomia", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Gastrectomia ou hérnia de hiato", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Apendicectomia não perfurada / Intestino delgado", antibiotic: "Cefoxitina", inductionDose: "2g", intraoperative: "1g 2/2h", duration: "Intra-operatório" },
            { surgery: "Apendicectomia perfurada / abcesso", antibiotic: "Ceftriaxona + Metronidazol", duration: "5 dias" },
            { surgery: "Cólon (ressecção intestinal, colectomia, reconstrução de trânsito, ressecção retal)", antibiotic: "Cefoxitina + (opcional: preparo mecânico e químico)", inductionDose: "2g", intraoperative: "1g 2/2h", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Peritonectomia", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Colecistectomia laparoscópica eletiva de baixo risco", antibiotic: "Não indicado" },
            { surgery: "Colecistectomia aberta ou ***alto risco", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Pâncreas", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "CPRE sem sinais de infecção (Colangiopancreatografia retrógrada endoscópica)", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Hepatectomia", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Esplenectomia", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Bariátrica sem manipulação de alças intestinais", antibiotic: "Cefazolina", inductionDose: "3g", intraoperative: "1g 4/4h", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Bariátrica com manipulação de alças intestinais", antibiotic: "Cefoxitina", inductionDose: "3g", intraoperative: "1g 4/4h", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Gastroduodenopancreatectomia Sem procedimentos invasivos pré operatório", antibiotic: "Cefoxitina", inductionDose: "2g", duration: "24h", postoperative: "1g 6/6h" },
            { surgery: "Gastroduodenopancreatectomia com infecção ou procedimentos invasivos pré operatório", antibiotic: "Metronidazol + Ceftriaxona", inductionDose: "500mg + 1g", duration: "7 dias", postoperative: "500mg 8/8hs + 1g 12/12h" },
            { surgery: "Abscesso perirretal ou perianal", antibiotic: "Amoxicilina + Clavulonato", inductionDose: "875/125mg", duration: "5 dias", postoperative: "875/125mg 12/12h" },
            { surgery: "Fístula anorretal, hemorroidectomia, prolapso retal", antibiotic: "Cefoxitina + (opcional: preparo mecânico e químico)", inductionDose: "2g", intraoperative: "1g 2/2h", duration: "Intra-operatório" },
            { surgery: "Cisto pilonidal, plicoma", antibiotic: "Não indicado" }
        ],
        notes: [
            "*Preparo intestinal mecânico: Neomicina 1g + Metronidazol 1g via oral as 13,14 e 23h do dia anterior",
            "***Alto risco: colangiografia intra-operatória, vazamento bile, colecistite aguda, icterícia, gravidez, conversão para cirurgia aberta"
        ]
    },
    {
        category: "Cirurgia Neurológica",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Craniotomia sem implantação de corpo estranho, Cirurgia com acesso transesfenoidal, Laminectomia ou outras cirurgias de coluna sem implantes", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Laminectomia ou outras cirurgias de coluna com implantes ou se cirurgia longa / vários níveis", antibiotic: "Cefuroxima", inductionDose: "1,5g", intraoperative: "750mg 4/4h", duration: "24h", postoperative: "1.5g 12/12h" },
            { surgery: "Microcirurgia de SNC com implante", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Implantação de DVE, DVP, DLE", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "24h", postoperative: "1.5g 12/12h" },
            { surgery: "Infiltração coluna, Radiculotomia, Microneurólise, Rizotomia percutânea", antibiotic: "Não indicado" },
            { surgery: "Fístula liquórica** e pneumoencéfalo Pós-trauma: Obs.: eficácia não Estabelecida", antibiotic: "Cefuroxima", inductionDose: "1,5g", intraoperative: "750mg 4/4h", duration: "5 dias", postoperative: "1.5g 8/8h" }
        ],
        notes: ["Obs: Se paciente internado há mais de 5 dias realizar como antibiótico profilático Teicoplanina 6mg/Kg/dia."]
    },
     {
        category: "Cirurgia Obstétrica/Ginecológica",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração"],
        procedures: [
            { surgery: "Parto Vaginal", antibiotic: "SEM INDICAÇÃO" },
            { surgery: "Parto vaginal com dequitação manual de placenta e/ou manipulação intra-uterina", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Parto fórcipe", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Parto cesárea", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Histerectomia", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Retocele, cistocele", antibiotic: "Cefazolina + Metronidazol", inductionDose: "2g + 500mg", intraoperative: "1g 4/4h + 500mg 6/6h", duration: "Intra-operatório" },
            { surgery: "Mastectomia", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" }
        ]
    },
    {
        category: "Cirurgias Ortopédicas",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Cirurgias limpas envolvendo tecido avascular, infiltrações articulares", antibiotic: "Não indicado" },
            { surgery: "Infiltração coluna, Radiculotomia, Microneurólise", antibiotic: "Não indicado" },
            { surgery: "Cirurgias limpas envolvendo mão, joelho ou pé sem implante, sem inserção de próteses, pinos ou parafusos", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4", duration: "Intra-operatório" },
            { surgery: "Fixação de fraturas fechadas, fratura de quadril com pinos", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4", duration: "Intra-operatório" },
            { surgery: "Cirurgia eletiva com implante ou manipulação óssea", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "Intra-operatório" },
            { surgery: "Artroplastias - cirurgias com próteses, artroscopia c/ síntese.", antibiotic: "Cefuroxima", inductionDose: "1.5g", intraoperative: "750 mg 6/6 hs", duration: "24-48h", postoperative: "1.5g 12/12h" },
            { surgery: "Artroscopia s/ síntese", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "X", duration: "Intra-operatório", postoperative: "X" },
            { surgery: "Revisão de artroplastia", antibiotic: "Teicoplanina", inductionDose: "6mg/kg", intraoperative: "X", duration: "Máximo 5 dias ou até resultado de culturas, se negativo suspender.", postoperative: "10mg/kg 24/24h" }
        ],
        notes: ["Obs.: Se paciente internado há mais de 5 dias realizar como antibiótico profilático Teicoplanina 6mg/kg/dia."]
    },
    {
        category: "Traumas",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Abd. penetrante", antibiotic: "Cefoxitina", inductionDose: "2g", duration: "24h (pós cirurgia)", postoperative: "1g 6/6h" },
            { surgery: "Abd. fechado com indicação cirúrgica", antibiotic: "Cefoxitina", inductionDose: "2g", duration: "24h", postoperative: "1g 6/6h" },
            { surgery: "Toraco abd. Penetrante", antibiotic: "Cefoxitina", inductionDose: "2g", duration: "24h", postoperative: "1g 6/6h" },
            { surgery: "Torácico penetrante", antibiotic: "Cefazolina", inductionDose: "2g", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Torácico fechado que necessita de drenagem", antibiotic: "Cefazolina", inductionDose: "2g", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Trauma torácico penetrante com lesão de esôfago", antibiotic: "Clindamicina + Gentamicina", inductionDose: "600mg + 240mg", duration: "7 dias", postoperative: "600mg 8/8h + 240mg 1x dia" },
            { surgery: "Fratura exposta 1 e 2", antibiotic: "Cefazolina", inductionDose: "2g", duration: "24 a 72h", postoperative: "1g 8/8h" },
            { surgery: "Fratura exposta 3", antibiotic: "Clindamicina + Gentamicina", inductionDose: "600mg + 240mg", duration: "7 dias", postoperative: "600mg 8/8h + 240mg 1x dia" },
            { surgery: "Cabeça e pescoço", antibiotic: "Cefazolina", inductionDose: "2g", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Crânio penetrante", antibiotic: "Cefazolina", inductionDose: "2g", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Crânio com fístula", antibiotic: "Cefuroxima", inductionDose: "2g", duration: "5 dias", postoperative: "1g 8/8" }
        ]
    },
    {
        category: "Cirurgias Plásticas",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Duração"],
        procedures: [
            { surgery: "Cirurgias plásticas com colocação de próteses ou com grande ressecção de pele e subcutâneo", antibiotic: "Cefazolina", inductionDose: "2g", duration: "intra-operatório" }
        ],
        notes: ["Obs.: * trauma abdominal com contaminação de cavidade com fezes, lavagem cavidade mais eficaz que manutenção de antibioticoterapia."]
    },
    {
        category: "Cirurgias Oftalmológicas",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Duração"],
        procedures: [
            { surgery: "Cirurgia lacrimal e pálpebras", antibiotic: "Cefazolina", inductionDose: "2g", duration: "intra-operatório" },
            { surgery: "Facectomia, facomulsificação, vitrectomia, introflexção escleral, trabeculotomia, implante de tubo, correção de estrabismo, sutura de perfurantes, evisceração, enucleação, dacriocistoriostomia, glaucoma", antibiotic: "Não está indicado antibioticoterapia endovenosa. *pode utilizar moxifloxacino colírio 1 hora antes do início do procedimento" }
        ]
    },
    {
        category: "Cirurgias Vasculares",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Varizes - Baixo risco (ligaduras de perfurantes e colaterais), Fístulas arteriovenosa", antibiotic: "Sem Indicação" },
            { surgery: "Varizes, Safenectomias, Tromboflebite, Úlceras de estase, Dermatofitose", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Embolectomia baixo risco", antibiotic: "Sem indicação" },
            { surgery: "Embolectomia alto risco", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Fístula arteriovenosa com próteses", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Enxerto com prótese vascular / Aneurisma / Endarterectomia", antibiotic: "Cefazolina", inductionDose: "2g", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Implante de shunt temporário ou implante de cateter de longa permanência", antibiotic: "----" },
            { surgery: "Amputação por gangrena seca", antibiotic: "Cefoxitina", inductionDose: "2g", intraoperative: "1g 6/6h", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Amputações por gangrena úmida", antibiotic: "Clindamicina + Ciprofloxacino", inductionDose: "900mg + 400mg IV", intraoperative: "600mg 6/6h + 400mg 12/12h", duration: "Ajustar conforme resultado de culturas" }
        ],
        notes: ["Obs.: Se paciente internado há mais de 5 dias realizar como antibiótico profilático Teicoplanina 6mg/Kg/dia."]
    },
     {
        category: "Cirurgias Urológicas",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Prótese peniana", antibiotic: "Cefazolina", inductionDose: "2g", duration: "24 horas", postoperative: "1g 8/8h" },
            { surgery: "Ureteroscopia, Ureterorrenoscopia", antibiotic: "Ceftriaxona", inductionDose: "1g", duration: "Intra-operatório" },
            { surgery: "Biópsia prostática", antibiotic: "Ciprofloxacino", inductionDose: "500mg via oral", duration: "Intra-operatório" },
            { surgery: "Biópsia prostática transperineal", antibiotic: "----" },
            { surgery: "Nefrolitotomia percutânea", antibiotic: "Ceftriaxona", inductionDose: "1g", duration: "Intra-operatório" },
            { surgery: "Nefrolitotripsia percutânea (coraliforme)", antibiotic: "Ceftriaxona", inductionDose: "1g", duration: "24h", postoperative: "1g 12/12h" },
            { surgery: "Ureterolitotripsia", antibiotic: "Ceftriaxona", inductionDose: "1g", duration: "Intra-operatório" },
            { surgery: "Estudos urodinâmicos, cistoscopia e pielografia retrógada simples", antibiotic: "Baixo risco: não necessita. Alto risco: Ciprofloxacino", inductionDose: "500mg VO", duration: "Intra-operatório" },
            { surgery: "Cirurgias limpas (orquiectomia, postectomia, vasectomia, varicocelectomia)", antibiotic: "Sem indicação" },
            { surgery: "Prostatectomia aberta, Ressecção transuretral de próstata/bexiga", antibiotic: "Cefuroxima", inductionDose: "1,5g", duration: "24h", postoperative: "1,5g 12/12h" },
            { surgery: "Uretrotomia interna", antibiotic: "Ceftriaxona", inductionDose: "1g", duration: "24h", postoperative: "1g 12/12h" },
            { surgery: "Uretrotomia aberta", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Nefrectomia limpa", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Transplante de rim", antibiotic: "Cefazolina", inductionDose: "2g", duration: "Intra-operatório" },
            { surgery: "Inserção de duplo J", antibiotic: "Ceftriaxona", inductionDose: "1g", duration: "Intra-operatório" },
            { surgery: "Esfincter artificial", antibiotic: "Ceftriaxona", inductionDose: "1g", duration: "Intra-operatório" }
        ]
    },
    {
        category: "Transplantes de Órgãos",
        headers: ["Cirurgia", "Antibiótico", "Dose Indução", "Intra-operatório", "Duração", "Dose pós-operatório"],
        procedures: [
            { surgery: "Transplante renal", antibiotic: "Cefazolina", inductionDose: "2g", intraoperative: "1g 4/4h", duration: "24h", postoperative: "1g 8/8h" },
            { surgery: "Transplante de coração adulto", antibiotic: "Cefuroxima", inductionDose: "1,5g", intraoperative: "750mg 4/4h", duration: "24h", postoperative: "1,5g 12/12h" }
        ]
    },
    {
        category: "Cirurgia Pediátrica - Torácica",
        headers: ["Cirurgia", "Antibiótico 1ª Escolha", "Regime Alternativo"],
        procedures: [
            { firstChoice: "Marcapasso permanente", antibiotic: "Cefazolina - dose única", alternative: "Vancomicina" },
            { firstChoice: "Cardíaca com esternotomia", antibiotic: "Cefazolina – 24 horas", alternative: "Vancomicina (ou oxacilina) + gentamicina" },
            { firstChoice: "Cardíaca mantendo tórax aberto", antibiotic: "Cefazolina - até fechar esterno", alternative: "Clindamicina (ou oxacilina) + gentamicina" },
            { firstChoice: "Drenagem por trauma", antibiotic: "Cefazolina - dose única", alternative: "Clindamicina (ou oxacilina) + gentamicina" },
            { firstChoice: "Drenagem sem trauma", antibiotic: "Não indicada", alternative: "Não indicada" },
            { firstChoice: "Pneumectomia ou lobectomia", antibiotic: "Cefazolina - dose única", alternative: "Clindamicina" },
            { firstChoice: "Mama", antibiotic: "Cefazolina - dose única", alternative: "Clindamicina" }
        ]
    },
    {
        category: "Cirurgia Pediátrica - Outras",
        headers: ["Especialidade", "Cirurgia", "Antibiótico 1ª Escolha", "Regime Alternativo"],
        procedures: [
            { specialty: "Ortopédica", surgery: "Limpa", antibiotic: "Não indicada", alternative: "Não indicada" },
            { specialty: "Ortopédica", surgery: "Cirurgia de quadril, prótese ou fixação interna*", antibiotic: "Cefazolina – 24 horas", alternative: "Clindamicina ou Vancomicina" },
            { specialty: "Vascular", surgery: "Reconstrução de aorta abdominal, procedimentos na perna com incisão na virilha, amputação de extremidade inferior, implante de prótese ou corpo estranho", antibiotic: "Cefazolina – 24 horas", alternative: "Vancomicina" },
            { specialty: "Neurocirurgia", surgery: "Craniotomia", antibiotic: "Cefazolina - dose única", alternative: "Vancomicina" },
            { specialty: "Neurocirurgia", surgery: "Limpa, contaminada (através dos seios, ou naso/orofaringe)", antibiotic: "Cefazolina – dose única", alternative: "Cefuroxima + metronidazol" },
            { specialty: "Neurocirurgia", surgery: "Derivação ventriculoperitoneal", antibiotic: "Cefazolina – até fechar esterno", alternative: "Cefazolina + Vancomicina" },
            { specialty: "Cabeça e Pescoço", surgery: "Limpa (parotidectomia, tireoidectomia, excisão glândula submandibular)", antibiotic: "Não indicada", alternative: "Não indicada" },
            { specialty: "Cabeça e Pescoço", surgery: "Limpa - contaminada (tonsilectomia, adenoidectomia, rinoplastia, tumor faríngeo/laríngeo)", antibiotic: "Cefazolina - dose única", alternative: "Clindamicina + gentamicina" }
        ]
    }
];
