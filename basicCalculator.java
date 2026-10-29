import java.util.Scanner;
import java.text.DecimalFormat;

public class basicCalculator {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        DecimalFormat df = new DecimalFormat("0.00");
        char again;

        double result = 0;
        do {
            System.out.println("Enter your first number: ");
            double num1 = sc.nextDouble();
            System.out.println("Enter operator (+, -, *, /): ");
            String operator = sc.next();
            System.out.println("Enter your second number: ");
            double num2 = sc.nextDouble();

            if (operator.equals("+")) {
                result = num1 + num2;
            } else if (operator.equals("-")) {
                result = num1 - num2;
            } else if (operator.equals("*")) {
                result = num1 * num2;
            } else if (operator.equals("/")) {
                if (num2 == 0) {
                    System.out.println("Math Error: Cannot divide by 0");
                    System.out.println("Invalid operator!");
                    System.out.println("Calculate again? Y/n");
                    again = sc.next().charAt(0);
                    continue;
                } else {
                    result = num1 / num2;
                }
            } else {
                System.out.println("Invalid operator!");
                System.out.println("Calculate again? Y/n");
                again = sc.next().charAt(0);
                continue;
            }
            System.out.println("The result is: " + df.format(result));
            System.out.println("Calculate again? Y/n");
            again = sc.next().charAt(0);
        } while (again == 'Y' || again == 'y');
        System.out.println("Thank you");

        sc.close();

    }
}
