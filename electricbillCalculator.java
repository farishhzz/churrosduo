import java.util.Scanner;
import java.text.DecimalFormat;

public class electricbillCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        DecimalFormat df = new DecimalFormat("0.00");
char again = 'Y';
     do{   System.out.println("Enter electric units: ");
        int units = sc.nextInt();

        double result;

        if (units <= 100) {
            result = units * 1.20;
        } else if (units <= 200) {
            result = (100 * 1.20) + (units - 100) * 2;
        } else {
            result = (100 * 1.20) + (100 * 2) + (units - 200) * 3;
        } 
        System.out.println("Total bill: RM" + df.format(result));
        System.out.println("Calculate again? Y/n");
                again = sc.next().charAt(0);
                continue;
     } while(again == 'Y' || again == 'y');
     System.out.println("Thank you");  
     sc.close();

    }

}
