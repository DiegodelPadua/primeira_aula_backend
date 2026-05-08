
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
	descricao 		varchar (50) not null,
	idade_minima 	int
	);

