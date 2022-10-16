package com.mycompany.aula3;

import java.util.Scanner;

public class Aula3_5 {
    public static void main(String[] args) {
        /* Programa que soma dois números
            1 - Pegar os números do usuários
            2 - Armazenar esses números em uma variável
            3 - Somar esses dois números
            4 - Imprimir a soma dos números
        */
        
        // Parte 1 e 2
        int num1, num2; 
        
        Scanner Entrada = new Scanner(System.in);
        
        System.out.println("Digite o primeiro número: ");
        num1 = Entrada.nextInt();
        
        System.out.println("Digite o segundo número: ");
        num2 = Entrada.nextInt();
        
        // Parte 3
        int sum = num1 + num2;
        
        // Parte 4
        System.out.println("O resultado da soma é: " + sum);
    }
    
}
