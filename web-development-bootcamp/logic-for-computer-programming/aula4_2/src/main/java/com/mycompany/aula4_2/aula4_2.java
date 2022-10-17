package com.mycompany.aula4_2;

/*
    1 - Criar variáveis
    2 - Avaliar critérios
    3 - Imprirmir respostas
*/

public class aula4_2 {
    public static void main(String[] args) {
        boolean renda = true;
        boolean adimplencia = false;
        boolean privilege = true;
        boolean restricao = true;
        
        boolean resultado = renda && adimplencia || privilege;
        
        System.out.println("Empréstimo deve ser concecido " + resultado);
    }
}
