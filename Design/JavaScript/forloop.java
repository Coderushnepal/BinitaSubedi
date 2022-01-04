import javax.lang.model.util.ElementScanner6;

public class forloop {
  public static void main(String arg[]) {
    for (int i = 1; i <= 101; i++)
      if (i % 3 == 0)

        System.out.println("Fizz");
      else
        System.out.println(i);
  }
}