<style>
.faq-container {
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
line-height: 1.6;
color: #24292e;
}
.faq-section h3 {
border-bottom: 2px solid #e1e4e8;
padding-bottom: 0.3em;
margin-top: 24px;
margin-bottom: 16px;
font-weight: 600;
}
details {
background-color: #f6f8fa;
border: 1px solid #d1d5da;
border-radius: 6px;
margin-bottom: 16px;
transition: box-shadow 0.2s ease-in-out;
}
details:hover {
box-shadow: 0 3px 6px rgba(149, 157, 165, 0.15);
}
details[open] {
background-color: #ffffff;
}
summary {
font-weight: 600;
padding: 16px;
cursor: pointer;
list-style: none;
display: flex;
justify-content: space-between;
align-items: center;
outline: none;
}
summary::-webkit-details-marker {
display: none;
}
summary:after {
content: '+';
font-size: 1.8em;
line-height: 0;
color: #0366d6;
font-weight: 400;
transition: transform 0.2s ease-in-out;
}
details[open] summary:after {
content: '–';
transform: rotate(180deg);
}
.faq-content {
padding: 0 16px 16px 16px;
border-top: 1px solid #d1d5da;
color: #333;
}
.faq-content p, .faq-content ul, .faq-content ol {
margin-top: 0;
margin-bottom: 16px;
}
.faq-content code {
background-color: rgba(27,31,35,0.05);
padding: .2em .4em;
margin: 0;
font-size: 85%;
border-radius: 3px;
font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}
.faq-content pre {
background-color: #24292e;
color: #f6f8fa;
padding: 16px;
border-radius: 6px;
overflow-x: auto;
}
.faq-content pre code {
background-color: transparent;
padding: 0;
margin: 0;
font-size: 100%;
border-radius: 0;
}
</style>

<div class="faq-container">

FAQ SonarQube e SonarCloud: Guia de Configuração e Boas Práticas
<div class="faq-section">
<h3>Seção 1: Configuração Essencial do Projeto</h3>
<details>
<summary>O que é o arquivo sonar-project.properties e por que ele é indispensável?</summary>
<div class="faq-content">
<p>É o arquivo de configuração que instrui o SonarScanner sobre como analisar seu projeto. Sua existência é obrigatória, pois nossos workflows de CI/CD possuem uma condição que só executa a análise do Sonar se este arquivo for encontrado no repositório.</p>
</div>
</details>
<details>
<summary>Como garantir que o nome do projeto no repositório é o mesmo da sonar.projectKey?</summary>
<div class="faq-content">
<p>A <code>sonar.projectKey</code> é o identificador único do projeto no SonarCloud. Para garantir a correspondência, siga o guia "Adicionando SonarCloud em novo projeto": após criar o projeto na interface do SonarCloud, navegue até a seção "Information" e copie o valor exato da "Project Key" para a propriedade <code>sonar.projectKey</code> no seu arquivo <code>sonar-project.properties</code>.</p>
</div>
</details>
<details>
<summary>O que as propriedades sonar.sources e sonar.tests definem?</summary>
<div class="faq-content">
<p><code>sonar.sources</code> aponta para os diretórios do código-fonte que serão analisados. <code>sonar.tests</code> indica onde estão os arquivos de teste, permitindo que o Sonar os diferencie do código de produção.</p>
</div>
</details>
<details>
<summary>Por que preciso desabilitar a "Análise Automática" no SonarCloud?</summary>
<div class="faq-content">
<p>A análise automática, se ativa, entra em conflito com a análise iniciada pelo nosso pipeline de CI/CD. É crucial desabilitá-la, conforme o guia de configuração, para garantir que a análise executada pelo workflow (que inclui os relatórios de cobertura) seja a única a ser considerada.</p>
</div>
</details>
<details>
<summary>Onde encontro a sonar.projectKey de um projeto que já está no SonarCloud?</summary>
<div class="faq-content">
<p>Acesse o projeto na interface do SonarCloud, vá em "Administration" > "Update Key". O valor da "Project Key" estará visível nesse local.</p>
</div>
</details>
<details>
<summary>É possível rodar a análise do Sonar usando variáveis de ambiente ao invés do arquivo sonar-project.properties?</summary>
<div class="faq-content">
<p>Sim, o SonarScanner aceita configuração via argumentos de linha de comando. Contudo, a utilização do arquivo <code>sonar-project.properties</code> é a prática recomendada, pois facilita o versionamento e mantém a configuração explícita junto ao código.</p>
</div>
</details>
</div>

<div class="faq-section">
<h3>Seção 2: Garantindo a Cobertura de Testes (Coverage)</h3>
<details>
<summary>Meu coverage aparece zerado no SonarCloud, mas localmente tenho um relatório com 79%. O que fazer?</summary>
<div class="faq-content">
<p>Este é um problema comum cuja causa geralmente está na geração ou localização do relatório de cobertura no ambiente de CI/CD. A causa mais provável é que o relatório <code>lcov.info</code> não está sendo encontrado ou lido corretamente pelo SonarScanner durante a execução do pipeline.</p>
</div>
</details>
<details>
<summary>Qual é o passo mais crítico para que a cobertura apareça no SonarCloud?</summary>
<div class="faq-content">
<p>A correta configuração da propriedade <code>sonar.javascript.lcov.reportPaths</code> no arquivo <code>sonar-project.properties</code>. Ela deve apontar para o local exato onde o workflow de CI gera o relatório de cobertura, que por padrão é <code>coverage/lcov.info</code>.</p>
</div>
</details>
<details>
<summary>Como os workflows geram o relatório de cobertura para projetos com Jest?</summary>
<div class="faq-content">
<p>Os workflows executam o comando de teste com flags específicas como <code>--coverage</code>, <code>--coverageReporters=lcov</code> e <code>--reporters=@casualbot/jest-sonar-reporter</code>. A presença do reporter <code>@casualbot/jest-sonar-reporter</code> e do formato <code>lcov</code> é fundamental.</p>
</div>
</details>
<details>
<summary>E para projetos que utilizam Vitest?</summary>
<div class="faq-content">
<p>De forma similar ao Jest, os workflows utilizam flags como <code>--coverage</code>, <code>--coverage.reporter=lcov</code> e <code>--reporter=vitest-sonar-reporter</code>. É obrigatório o uso do <code>vitest-sonar-reporter</code> para garantir a compatibilidade.</p>
</div>
</details>
<details>
<summary>As dependências como vitest-sonar-reporter ou @casualbot/jest-sonar-reporter são instaladas automaticamente?</summary>
<div class="faq-content">
<p>Sim, os workflows identificam o framework de teste (<code>vitest</code> ou <code>jest</code>) e o gerenciador de pacotes (<code>yarn</code> ou <code>npm</code>) e instalam a dependência correta automaticamente.</p>
</div>
</details>
<details>
<summary>Como o workflow lida com a cobertura em um projeto monorepo (Lerna)?</summary>
<div class="faq-content">
<p>O workflow detecta que é um projeto Lerna, executa os testes para cada pacote (gerando múltiplos relatórios <code>lcov.info</code>) e, em seguida, unifica todos eles em um único arquivo <code>coverage/lcov.info</code> na raiz do projeto. É este arquivo unificado que o SonarScanner utiliza.</p>
</div>
</details>
<details>
<summary>Como posso depurar um problema de cobertura zerada no pipeline?</summary>
<div class="faq-content">
<p>Adicione um passo de debug temporário no seu workflow, logo após a geração de cobertura e antes do "SonarCloud Scan", para listar os arquivos e verificar o conteúdo do relatório:</p>
<pre><code>- name: Debug Coverage Report
run: |
ls -la coverage/
cat coverage/lcov.info</code></pre>
<p>Isso confirmará se o arquivo foi criado no local correto e se os caminhos dos arquivos de código-fonte dentro dele (linhas que começam com <code>SF:</code>) estão corretos em relação à raiz do projeto.</p>
</div>
</details>
<details>
<summary>A ordem dos passos no workflow importa para a cobertura?</summary>
<div class="faq-content">
<p>Sim. É fundamental que o passo <code>SonarCloud Scan</code> seja executado sempre <strong>depois</strong> do passo <code>Generate coverage report</code>. O scanner precisa que o relatório já exista para poder processá-lo e enviá-lo ao SonarCloud.</p>
</div>
</details>
<details>
<summary>O que fazer se o arquivo lcov.info for gerado, mas estiver vazio?</summary>
<div class="faq-content">
<p>Isso indica que a execução dos testes falhou ou não coletou nenhuma informação de cobertura. Verifique os logs do passo de geração de cobertura para identificar possíveis erros na execução dos testes.</p>
</div>
</details>
</div>

<!-- Repita a estrutura <div class="faq-section"> para as seções restantes -->

</div>