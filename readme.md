# Algorithm sorting tester

This program:
- Generates a list of x numbers
- Sorts them using either bubble or insertion sort
- Returns the sorted list alongside the ammount of time taken

### TODO
- Took x amount longer than y if program ran using both sorts
- Run multiple times and take average??
- Auto deploy to docker container
- Branch with web UI as well - react + express

## Testing
Run "npm run test" to run the test suite in main.test.js
![Test results](image.png)

In addition to this to test user input I used the following tests:
    - Input 1:
        - Erroneous - "A"
        ![Results](image-1.png)
        PASS

        - Out of range - "-1"
        ![Results](image-1.png)
        PASS

        - Boundary - "2"
        ![Results](image-2.png)
        PASS
    
    - Input 2:
        - Erroneous - "A"
        ![Results](image-3.png)

        - Valid - "B"
        ![Results](image-4.png)

        - Valid - "I"
        ![Results](image-5.png)

    - Input 3:
        - Erroneous - "A"
        ![Results](image-6.png)
        
        - Valid - "Y"
        ![Results](image-7.png)

        - Valid - "N"
        ![Results](image-8.png)