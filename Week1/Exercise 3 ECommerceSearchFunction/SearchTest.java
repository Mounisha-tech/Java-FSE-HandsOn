public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Product result1 = SearchOperations.linearSearch(products, 103);

        System.out.println("Linear Search Result:");
        if (result1 != null)
            result1.display();
        else
            System.out.println("Product not found.");

        Product result2 = SearchOperations.binarySearch(products, 103);

        System.out.println("\nBinary Search Result:");
        if (result2 != null)
            result2.display();
        else
            System.out.println("Product not found.");
    }
}