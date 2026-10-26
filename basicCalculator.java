import java.util.Scanner;

public class basicCalculator {
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your first number: ");
        double num1 = sc.nextDouble();
        System.out.println("Enter operator (+, -, *, /): ");
        String operator = sc.next();
        System.out.println("Enter your second number: ");
        double num2 = sc.nextDouble();

        double result = 0;

        if (operator.equals("+")){
            result = num1 + num2;
        } else if (operator.equals("-")){
            result = num1 - num2;
        } else if (operator.equals("*")){
            result = num1 * num2;
        } else if (operator.equals("/")){
            result = num1 / num2;
        } else {
            System.out.println("Invalid operator!");
        }
        System.out.println("The result is: " + result );
        sc.close();

    }
}
