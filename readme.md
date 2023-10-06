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
Run "npm run test" to run the test suite in [main.test.js](./tests/main.test.js)  
![Test results](./images/image-9.png)  

In addition to this to test user input I used the following tests:  
- Input 1:  
- Erroneous - "A"  
![Results](./images/image-1.png)  

- Out of range - "-1"  
![Results](./images/image-1.png)  

- Boundary - "2"  
![Results](./images/image-2.png)  

- Input 2:  
- Erroneous - "A"  
![Results](./images/image-3.png)  

- Valid - "B"  
![Results](./images/image-4.png)  

- Valid - "I"  
![Results](./images/image-5.png)  

- Input 3:  
- Erroneous - "A"  
![Results](./images/image-6.png)  

- Valid - "Y"  
![Results](./images/image-7.png)  

- Valid - "N"  
![Results](./images/image-8.png)  