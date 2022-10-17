package com.mycompany.aula4_4;

import java.util.Scanner;

/*
    1 - Receber o dia do usuário: int dia e buffer
    2 - Gerar dia correspondente
*/

public class Aula4_4 {
    public static void main(String[] args) {
        int dia;
        
        Scanner Entrada = new Scanner(System.in);
        
        System.out.println("Qual o número do dia (1-7):");
        
        dia = Entrada.nextInt();
        
        switch (dia) {
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda");
                break;
            case 3:
                System.out.println("Terça");
                break;
            case 4:
                System.out.println("Quarta");
                break;
            case 5:
                System.out.println("Quinta");
                break;
            case 6:
                System.out.println("Sexta");
                break;
            case 7:
                System.out.println("Sábado");
                break;
            default:
                System.out.println("Número inválido");
        }
    }
    
}
