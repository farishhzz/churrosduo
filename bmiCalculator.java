import java.util.Scanner;
import java.text.DecimalFormat;

public class bmiCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        DecimalFormat df = new DecimalFormat("0.00");
        char again = 'Y';
        do {
            System.out.println("Enter height: ");
            double height = sc.nextDouble();
            if (height <= 0) {
                System.out.println("Invalid height!");
                System.out.println("Calculate again? Y/n");
                again = sc.next().charAt(0);
                continue;
            }
            System.out.println("Unit (m/cm)");
            String unitHeight = sc.next();
            if (unitHeight.equalsIgnoreCase("cm")) {
                height = height / 100;

            }
            System.out.println("Enter weight : ");
            double weight = sc.nextDouble();
            if (height <= 0 || weight <= 0) {
                System.out.println("Invalid weight");
                System.out.println("Calculate again? Y/n");
                again = sc.next().charAt(0);
                continue;
            }
            System.out.println("Unit (kg/lbs) ");
            String unitWeight = sc.next();

            if (unitWeight.equalsIgnoreCase("lbs")) {
                weight = weight / 2.20462;
            }

            double BMI = weight / Math.pow(height, 2);
            String result = "";

            if (height <= 0 || weight <= 0) {
                System.out.println("Invalid input");
                return;
            }

            if (BMI <= 18.5) {
                result = "Underweight";
            } else if (BMI <= 24.9) {
                result = "Normal";
            } else if (BMI <= 29.9) {
                result = "Overweight";
            } else {
                result = "Obese";
            }
            System.out.println("Height: " + df.format(height) + "m");
            System.out.println("Weight: " + df.format(weight) + "kg");
            System.out.println("BMI: " + df.format(BMI));
            System.out.println("Result: " + result);

            System.out.println("Calculate again? Y/n");
            again = sc.next().charAt(0);
            continue;
        } while (again == 'Y' || again == 'y');

        sc.close();

    }
}
