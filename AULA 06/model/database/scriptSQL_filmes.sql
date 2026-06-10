
#Cria o database do projeto de filmes
create database db_filmes_20261_a;

#Ativa o uso do database de filmes
use db_filmes_20261_a;

#Cria a tabela de filme
create table tbl_filme (
	id 				int not null primary key auto_increment,
    nome 			varchar(80) not null, 
    data_lancamento date not null,
    duracao 		time not null,
    sinopse			text not null,
    avaliacao		decimal(3,2) default null,
    valor			decimal(5,2) not null default 0,
    capa			varchar(255)
    
);

show  tables;

#Inserir dados
insert into tbl_filme (
						nome,
                        data_lancamento,
                        duracao,
                        sinopse,
                        avaliacao,
                        valor,
                        capa
                        )
				values ('Super Mario Galaxy: O Filme',
						'2026-04-02',
                        '01:39:00',
                        'Mario, Luigi e aliados embarcam em uma aventura espacial
                        para salvar a Princesa Rosalina e o universo de uma nova 
                        ameaça. A trama foca no combate ao Bowser Jr., que tenta 
                        libertar seu pai (Bowser) após os eventos do primeiro filme,
                        expandindo o universo Nintendo com cenários',
                        '3',
                        '50.70',
                        'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/
                        5bea1aeac3323aeaaf82449a34fafbbf.jpg');
                        
select *from tbl_filme;
select * from tbl_filme order by id desc;

delete from tbl_filme where id > 0;

update tbl_filme set 
                        nome = 'Carros',
                        data_lancamento = '2026-04-29',
                        duracao = '01:00:00',
                        sinopse = 'Teste de filme carros',
                        avaliacao = if('5' = '', null, '5'),
                        valor = '50',
                        capa = 'capajpg'
                    where id = 12;

create table tbl_classificacao (
	id 				int primary key auto_increment,
    sigla			varchar (10) not null,
	descricao 		varchar (50) not null,
	idade_minima 	varchar (50) 
	);
alter table tbl_classificacao
	modify column idade_minima varchar(50);
    
    select * from tbl_classificacao;
    
CREATE TABLE tbl_nacionalidade (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    sigla VARCHAR(5)
);

CREATE TABLE tbl_atividade (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL
);

CREATE TABLE tbl_genero (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL
);

create table tbl_filme_genero (
	id int not null auto_increment primary key,
    id_filme int not null,
    id_genero int not null,
    
    #Relação para o filme
    constraint FK_FILME_FILMEGENERO
    foreign key (id_filme)
    references tbl_filme(id),

    #Relação para o Genero
    constraint FK_GENERO_FILMEGENERO
    foreign key (id_genero)
    references tbl_genero(id)
);

delete from tbl_filme_genero;

select * from tbl_filme_genero;
select * from tbl_genero;
select * from tbl_filme;
show tables;

#Adicionar a coluna FK e Criar a relação com a tabela de classificação
alter table tbl_filme
	add column id_classificacao int not null,
    add constraint FK_CLASSIFICACAO_FILME
		foreign key (id_classificacao)
        references tbl_classificacao(id);
        
select * from tbl_filme;

delete from tbl_filme;

insert into tbl_classificacao (sigla, idade_minima, descricao)
		values ('L', 'Livre', 'Filme de classificação livre.'),
			   ('10', 'Idade miníma 10 anos', 'Conteúdo sensível para menores de 10 anos.');

select  tbl_filme.nome, tbl_filme.sinopse, tbl_filme.data_lancamento, tbl_filme.capa,
		tbl_classificacao.sigla, tbl_classificacao.idade_minima, tbl_classificacao.descricao
from tbl_filme
	inner join tbl_classificacao
		on tbl_classificacao.id = tbl_filme.id_classificacao;
        

insert into tbl_filme (	nome, 
						data_lancamento, 
                        duracao, 
                        sinopse, 
                        avaliacao, 
                        valor, 
                        capa,
                        id_classificacao)
values ('Super Mario Galaxy: O filme', 
		'2026-04-02', 
        '01:39:00', 
        'Uma nova aventura leva Mario a enfrentar um inédito e ameaçador super vilão. Em Super Mario Galaxy: O Filme, 
		 o bigodudo encanador italiano e seus aliados embarcam numa aventura galáctica repleta de ação e momentos 
         emocionantes depois de salvar o Reino dos Cogumelos.', 
         '3',
         '50.70',
         'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/5bea1aeac3323aeaaf82449a34fafbbf.jpg',
         1
		);

CREATE TABLE tbl_ator (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    id_nacionalidade INT,

    FOREIGN KEY (id_nacionalidade) REFERENCES tbl_nacionalidade(id)
);

SELECT * FROM tbl_nacionalidade;

drop table tbl_ator;

CREATE TABLE tbl_ator (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE tbl_ator_nacionalidade (
    id_ator INT NOT NULL,
    id_nacionalidade INT NOT NULL,

    PRIMARY KEY(id_ator, id_nacionalidade),

    FOREIGN KEY(id_ator) REFERENCES tbl_ator(id),
    FOREIGN KEY(id_nacionalidade) REFERENCES tbl_nacionalidade(id)
);

show tables;

CREATE TABLE tbl_ator_atividade (
    id_ator INT NOT NULL,
    id_atividade INT NOT NULL,

    PRIMARY KEY(id_ator, id_atividade),

    FOREIGN KEY(id_ator) REFERENCES tbl_ator(id),
    FOREIGN KEY(id_atividade) REFERENCES tbl_atividade(id)
);

CREATE TABLE tbl_diretor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE tbl_diretor_nacionalidade (
    id_diretor INT NOT NULL,
    id_nacionalidade INT NOT NULL,

    PRIMARY KEY(id_diretor, id_nacionalidade),

    FOREIGN KEY(id_diretor) REFERENCES tbl_diretor(id),
    FOREIGN KEY(id_nacionalidade) REFERENCES tbl_nacionalidade(id)
);

CREATE TABLE tbl_diretor_atividade (
    id_diretor INT NOT NULL,
    id_atividade INT NOT NULL,

    PRIMARY KEY(id_diretor, id_atividade),

    FOREIGN KEY(id_diretor) REFERENCES tbl_diretor(id),
    FOREIGN KEY(id_atividade) REFERENCES tbl_atividade(id)
);

select * from tbl_classificacao;


insert into tbl_filme (
                                nome,
                                data_lancamento,
                                duracao,
                                sinopse,
                                avaliacao,
                                valor,
                                capa,
                                id_classificacao
                                )
                        values ('Jogos Loucos',
                                '2026-04-01',
                                '01:50:00',
                                'Teste de filme de jogos',
                                if('7' = '', null, '7'),
                                '100.50',
                                'capajpg',
                                '1'
                                );
                                
select * from tbl_nacionalidade_ator;

select * from tbl_genero;

insert into tbl_filme_genero (
    id_filme,
    id_genero
) values (
    51,
    1
);
