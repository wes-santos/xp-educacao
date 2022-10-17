package com.mycompany.aula4_3;

import java.util.Scanner;

/*
    Objetivo do programa: cálculo de IMC
    
    Passos:
       1 - Criar variáveis: peso, altura, imc
       2 - Coletar informações do usuário (buffer)
       3 - Calcular IMC (peso / (altura * altura)
       4 - Classificar
*/

public class Aula4_3 {
    public static void main(String[] args) {
        double altura, peso, imc;
        
        Scanner Entrada = new Scanner(System.in);
        
        System.out.println("Digite seu peso");
        peso = Entrada.nextDouble();
        
        System.out.println("Digite sua altura");
        altura = Entrada.nextDouble();
        
        imc = peso / (altura * altura);
        
        System.out.println("Seu IMC é: " + imc);
        System.out.println("Sua classificação do IMC é:");
        
        if (imc < 18.5) {
            System.out.println("Abaixo do peso");
        } else if (imc > 18.5 && imc <= 24.9) {
            System.out.println("Peso normal");
        } else if (imc > 24.9 && imc <= 29.9) {
            System.out.println("Sobrepeso");
        } else {
            System.out.println("Obesidade");
        }
    }
}
